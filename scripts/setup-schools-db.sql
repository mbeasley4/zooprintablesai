-- Teacher registration table for the Schools program.
--
-- Run against your Neon / Vercel Postgres database:
--
--   psql "$DATABASE_URL" -f scripts/setup-schools-db.sql
--
-- The DATABASE_URL connection string is auto-injected on Vercel once you add a
-- Postgres store (Vercel dashboard -> Storage -> Create -> Postgres). Locally,
-- copy it from that same Storage page into .env.local. To run it through the
-- Vercel CLI without a local psql client:
--
--   vercel env pull .env.local            # grab DATABASE_URL locally
--   psql "$DATABASE_URL" -f scripts/setup-schools-db.sql

CREATE TYPE school_type AS ENUM ('public', 'private', 'homeschool', 'other');

CREATE TABLE IF NOT EXISTS teacher_registrations (
  id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name   TEXT        NOT NULL,
  last_name    TEXT        NOT NULL,
  email        TEXT        NOT NULL,
  school_name  TEXT        NOT NULL,
  school_type  school_type NOT NULL,
  grade_levels TEXT        NOT NULL,
  state        TEXT        NOT NULL,
  country      TEXT        NOT NULL DEFAULT 'United States',
  how_heard    TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Emails are stored lowercased by the API; enforce one registration per teacher.
CREATE UNIQUE INDEX IF NOT EXISTS teacher_registrations_email_key
  ON teacher_registrations (email);
