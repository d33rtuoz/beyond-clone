import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified')
    .$defaultFn(() => false)
    .notNull(),
  image: text('image'),
  createdAt: timestamp('created_at')
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp('updated_at')
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
});

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
  updatedAt: timestamp('updated_at').$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
});

export const usersRelations = relations(user, ({ many }) => ({
  characters: many(characters),
}));

export const characters = pgTable('characters', {
  autorId: text('autor_id').notNull(),
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name'),
  class: text('class'),
  level: integer('level'),
  species: text('species'),
});

export const charactersRelations = relations(characters, ({ one }) => ({
  autor: one(user, {
    fields: [characters.autorId],
    references: [user.id],
  }),
}));

// export const dices = ["d2", "d4", "d8", "d10", "d12", "d20"] as const;

export const abilities = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma',
] as const;

export const sources = pgTable('sources', {
  id: serial('id').primaryKey(),
  author: text('author').notNull(),
  name: text('name').notNull(),
  abbreviatedName: text('abbreviated_name').notNull(),
  // TODO: Display them in the list, tab with sources
});

export const sourcesRelations = relations(sources, ({ one, many }) => ({
  classes: many(classes),
}));

export const classes = pgTable('classes', {
  id: serial('id').primaryKey(),
  nameEn: text('name_en').notNull(),
  nameRu: text('name_ru').notNull(),
  sourceId: integer('source_id'),
  // primaryAbility example: [["str" && "dex"] || ["str" && "wis"]]
  // primaryAbility: text("primary_ability", { enum: abilities }).array().array(),
  // hitPointDice:  text("hit_point_die", { enum: dices }).notNull(),
  // savingThrowProficiencies: pg
  //   .text("saving_throw_proficiencies", { enum: abilities })
  //   .array()
  //   .notNull(),
  // skillProficiencies:  text("skill_proficiencies", {}).notNull(),
  // weaponProficiencies:  text("weapon_proficiencies").notNull(),
  // armorTraining:  text("armor_training").notNull(),
  // startingEquipment:  text("starting_equipment").notNull(),
});

export const classesRelations = relations(classes, ({ one, many }) => ({
  source: one(sources, {
    fields: [classes.sourceId],
    references: [sources.id],
  }),
}));
