import { sql } from "drizzle-orm";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const domains = pgTable("domains", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").unique().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type Domain = typeof domains.$inferSelect;
export type CreateDomain = typeof domains.$inferInsert;
