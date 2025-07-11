'use server';

import { db } from '@/db';
import { sources } from '@/db/schema';
import { ilike, or, sql } from 'drizzle-orm';

export async function getSources(query: string | string[] | undefined) {
  switch (typeof query) {
    case 'undefined':
      return await db.query.sources.findMany();
    case 'string':
      return await db
        .select()
        .from(sources)
        .where(
          or(
            query ? ilike(sources.name, `%${query}%`) : undefined,
            query ? ilike(sources.abbreviatedName, `%${query}%`) : undefined,
            query ? ilike(sources.author, `%${query}%`) : undefined
          )
        );
  }
}
