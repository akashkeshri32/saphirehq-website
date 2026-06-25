import { and, asc, count, desc, eq, gte, ilike, lte, SQL } from "drizzle-orm";

import { createClient } from "../supabase/server";
import { type CreateEnquiry, enquiry } from "../drizzle/schema";
import db from "../drizzle";

export const createEnquiry = async (data: CreateEnquiry) => {
  const client = await createClient();
  return await client.from("enquiries").insert({ ...data });
};

export type EnquiryStatus = "pending" | "enrolled";
export type EnquirySortBy = "date_desc" | "date_asc" | "name_asc" | "name_desc";

export type GetEnquiriesParams = {
  status?: EnquiryStatus;
  domain?: string;
  sortBy?: EnquirySortBy;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  pageSize?: number;
};

export async function getEnquiries({
  status,
  domain,
  sortBy = "date_desc",
  dateFrom,
  dateTo,
  page = 1,
  pageSize = 10,
}: GetEnquiriesParams = {}) {
  const conditions: SQL[] = [];
  if (status) conditions.push(eq(enquiry.status, status));
  if (domain?.trim())
    conditions.push(ilike(enquiry.domainOfInterest, `%${domain.trim()}%`));
  if (dateFrom) conditions.push(gte(enquiry.createdAt, new Date(dateFrom)));
  if (dateTo) {
    const end = new Date(dateTo);
    end.setHours(23, 59, 59, 999);
    conditions.push(lte(enquiry.createdAt, end));
  }

  const where = conditions.length ? and(...conditions) : undefined;

  const orderCol =
    sortBy === "date_asc"
      ? asc(enquiry.createdAt)
      : sortBy === "name_asc"
        ? asc(enquiry.name)
        : sortBy === "name_desc"
          ? desc(enquiry.name)
          : desc(enquiry.createdAt);

  const offset = (page - 1) * pageSize;

  const [rows, [{ total }]] = await Promise.all([
    db
      .select()
      .from(enquiry)
      .where(where)
      .orderBy(orderCol)
      .limit(pageSize)
      .offset(offset),
    db.select({ total: count() }).from(enquiry).where(where),
  ]);

  return { rows, total, totalPages: Math.ceil(total / pageSize) };
}
