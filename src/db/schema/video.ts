import { serial, pgTable, varchar, timestamp, text, integer } from "drizzle-orm/pg-core";
import user from "./user";

export const video = pgTable('video', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    description: text('description'),
    url: varchar('url', { length: 255 }).notNull(),
    thumbnail: varchar('thumbnail', { length: 255 }),
    userId: integer('user_id').references(() => user.id).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});


export default video;