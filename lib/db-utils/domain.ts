import { asc } from "drizzle-orm";
import db from "../drizzle";
import { domains } from "../drizzle/schema";

export async function getAllDomains() {
  return db.select().from(domains).orderBy(asc(domains.name));
}
