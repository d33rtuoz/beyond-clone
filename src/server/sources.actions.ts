'use server';

import { db } from '@/db';

export async function getSources() {
  return await db.query.sources.findMany();
}
