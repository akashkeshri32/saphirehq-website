import { sql } from "drizzle-orm";
import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["pending", "enrolled"]);
export const roleEnum = pgEnum("role", ["admin", "instructor", "student"]);

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name"),
  email: text("email").unique(),
  imageUrl: text("image_url"),
  role: roleEnum().notNull().default("student"),
  status: statusEnum().notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type User = typeof users.$inferSelect;
export type CreateUser = typeof users.$inferInsert;
