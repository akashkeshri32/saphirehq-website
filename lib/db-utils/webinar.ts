import { and, eq } from "drizzle-orm";

import { createClient } from "../supabase/server";
import { type CreateWebinarEnquiry, webinarEnquiry, webinarSessions } from "../drizzle/schema";
import db from "../drizzle";

export const getWebinarSessionByShortCode = async (shortCode: string) => {
  const [session] = await db
    .select()
    .from(webinarSessions)
    .where(eq(webinarSessions.shortCode, shortCode))
    .limit(1);

  return session ?? null;
};


export const checkIfEnquiryAlreadyExists = async (email: string, webinarDate: string, webinarSessionId: string, domainOfInterest : string) => {
  const enquiry = await db
    .selectDistinct()
    .from(webinarEnquiry)
    .where(and(
      eq(webinarEnquiry.email, email),
      eq(webinarEnquiry.webinarDate, webinarDate),
      eq(webinarEnquiry.webinarSessionId, webinarSessionId),
      eq(webinarEnquiry.domainOfInterest, domainOfInterest)
    ),
  )

  return Boolean(enquiry.length)
}


export const getWebinarSessionById = async (id: string) => {
  const [session] = await db
    .select()
    .from(webinarSessions)
    .where(eq(webinarSessions.id, id))
    .limit(1);

  return session ?? null;
}

export const createWebinarEnquiry = async (data: CreateWebinarEnquiry) => {
  const client = await createClient();

  // Inserting via the Supabase/PostgREST client (matching createEnquiry's
  // pattern) means we must use the real DB column names, not drizzle's
  // camelCase JS-side aliases — webinar_date / webinar_session_id are
  // snake_case in the actual "webinar_enquiries" table.
  return await client.from("webinar_enquiries").insert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    domainOfInterest: data.domainOfInterest,
    // applicantType: data.applicantType,
    duration: data.duration,
    webinar_date: data.webinarDate,
    webinar_session_id: data.webinarSessionId,
  });
};
