import { sql } from "drizzle-orm";
import { date, index, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { applicantType } from "./enquiry";
import { webinarSessions } from "./webinar-session";

export const webinarEnquiry = pgTable("webinar_enquiries", {
  id : text('id').primaryKey().default(sql`gen_random_uuid()`),
  name : text("name").notNull(),
  email : text("email").notNull(),
  createdAt : timestamp('created_at').notNull().defaultNow(),
  domainOfInterest : varchar("domainOfInterest").notNull(),
  phone : varchar("phone").notNull(),
  duration : varchar("duration"),
  // applicantType : applicantType().notNull().default("Student"),
  webinarDate : date("webinar_date").notNull(),
  webinarSessionId : text("webinar_session_id").notNull().references(() => webinarSessions.id),

}, (t) => [
  // index("webinar_enquiries_applicant_type_idx").on(t.applicantType),
  index('webinar_enquiries_created_at_idx').on(t.createdAt),
  index('webinar_enquiries_domain_idx').on(t.domainOfInterest),
  index('webinar_enquiries_webinar_date_idx').on(t.webinarDate),
  index('webinar_enquiries_webinar_session_idx').on(t.webinarSessionId),
  index('webinar_enquiries_webinar_date_session_idx').on(t.webinarDate, t.webinarSessionId),
])

export type WebinarEnquiry = typeof webinarEnquiry.$inferSelect;
export type CreateWebinarEnquiry = typeof webinarEnquiry.$inferInsert;
