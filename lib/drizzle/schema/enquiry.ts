import { sql } from "drizzle-orm";
import { index, pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { statusEnum } from "./user";

export const applicantType = pgEnum("applicantType", ["Student", "Switching Careers", "Working Professional"]);

export const enquiry = pgTable(
  "enquiries",
  {
    id: text("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    name: text("name").notNull(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    domainOfInterest: varchar("domainOfInterest").notNull(),
    phone: varchar("phone").notNull(),
    duration: varchar("duration"),
    status: statusEnum().notNull().default("pending"),
    applicantType : applicantType().notNull().default("Student")
  },
  (t) => [
    index("enquiries_status_idx").on(t.status),
    index("enquiries_applicant_type").on(t.applicantType),
    index("enquiries_created_at_idx").on(t.createdAt),
    index("enquiries_domain_idx").on(t.domainOfInterest),
    index("enquiries_status_created_at_idx").on(t.status, t.createdAt),
  ],
);

export type CreateEnquiry = typeof enquiry.$inferInsert;
