import { sql } from "drizzle-orm";
import { index, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { statusEnum } from "./user";

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
    duration: varchar("duration").notNull(),
    status: statusEnum().notNull().default("pending"),
  },
  (t) => [
    index("enquiries_status_idx").on(t.status),
    index("enquiries_created_at_idx").on(t.createdAt),
    index("enquiries_domain_idx").on(t.domainOfInterest),
    index("enquiries_status_created_at_idx").on(t.status, t.createdAt),
  ],
);

export type CreateEnquiry = typeof enquiry.$inferInsert;
