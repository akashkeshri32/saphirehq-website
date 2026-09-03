import { generateShortCode } from '@/lib/utils/generate-short-code'
import { sql } from 'drizzle-orm'
import { boolean, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const webinarSessions = pgTable('webinar_sessions', {
  id:        text('id').primaryKey().default(sql`gen_random_uuid()`),
  shortCode: text('short_code').unique().notNull().$defaultFn(() => generateShortCode()),
  time:      text('time').unique().notNull(),
  active:    boolean('active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export type WebinarSession       = typeof webinarSessions.$inferSelect
export type CreateWebinarSession = typeof webinarSessions.$inferInsert
