import type { NextRequest } from "next/server";
import { neon } from "@neondatabase/serverless";

export const runtime = "nodejs";

type RegisterRequestBody = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  schoolName?: unknown;
  schoolType?: unknown;
  gradeLevels?: unknown;
  state?: unknown;
  country?: unknown;
  howHeard?: unknown;
};

type RegisterResult = {
  ok: boolean;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;
const MAX_NAME_LENGTH = 100;
const MAX_SCHOOL_LENGTH = 200;
const MAX_STATE_LENGTH = 100;
const MAX_HOW_HEARD_LENGTH = 100;

const SCHOOL_TYPES = ["public", "private", "homeschool", "other"] as const;
const GRADE_LEVELS = ["Pre-K", "K-2", "3-5", "6-8", "9-12"] as const;

// Minimal in-memory rate limit, matching the newsletter route. Resets on cold
// start; enough friction to blunt scripted abuse without an extra datastore.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function json(body: RegisterResult, status: number): Response {
  return Response.json(body, { status });
}

function trimmedString(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength) return null;
  return trimmed;
}

export async function POST(request: NextRequest): Promise<Response> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("Schools registration is misconfigured: missing DATABASE_URL.");
    return json({ ok: false, message: "Registration is unavailable right now." }, 503);
  }
  const sql = neon(databaseUrl);

  if (isRateLimited(getClientIp(request))) {
    return json({ ok: false, message: "Too many attempts. Please try again in a minute." }, 429);
  }

  let body: RegisterRequestBody;
  try {
    body = (await request.json()) as RegisterRequestBody;
  } catch {
    return json({ ok: false, message: "Invalid request." }, 400);
  }

  const firstName = trimmedString(body.firstName, MAX_NAME_LENGTH);
  const lastName = trimmedString(body.lastName, MAX_NAME_LENGTH);
  const schoolName = trimmedString(body.schoolName, MAX_SCHOOL_LENGTH);
  const state = trimmedString(body.state, MAX_STATE_LENGTH);

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  const country = trimmedString(body.country, MAX_STATE_LENGTH) ?? "United States";

  const schoolType =
    typeof body.schoolType === "string" &&
    (SCHOOL_TYPES as readonly string[]).includes(body.schoolType)
      ? body.schoolType
      : null;

  const gradeLevels = Array.isArray(body.gradeLevels)
    ? body.gradeLevels.filter(
        (level): level is string =>
          typeof level === "string" &&
          (GRADE_LEVELS as readonly string[]).includes(level),
      )
    : [];

  const howHeard = trimmedString(body.howHeard, MAX_HOW_HEARD_LENGTH);

  if (!firstName) {
    return json({ ok: false, message: "Please enter your first name." }, 400);
  }
  if (!lastName) {
    return json({ ok: false, message: "Please enter your last name." }, 400);
  }
  if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) {
    return json({ ok: false, message: "Please enter a valid email address." }, 400);
  }
  if (!schoolName) {
    return json({ ok: false, message: "Please enter your school name." }, 400);
  }
  if (!schoolType) {
    return json({ ok: false, message: "Please choose your school type." }, 400);
  }
  if (gradeLevels.length === 0) {
    return json({ ok: false, message: "Please select at least one grade level." }, 400);
  }
  if (!state) {
    return json({ ok: false, message: "Please enter your state or region." }, 400);
  }

  const gradeLevelsValue = gradeLevels.join(", ");

  try {
    const rows = await sql`
      INSERT INTO teacher_registrations
        (first_name, last_name, email, school_name, school_type, grade_levels, state, country, how_heard)
      VALUES
        (${firstName}, ${lastName}, ${email}, ${schoolName}, ${schoolType}, ${gradeLevelsValue}, ${state}, ${country}, ${howHeard})
      ON CONFLICT (email) DO NOTHING
      RETURNING id
    `;

    if (rows.length === 0) {
      return json(
        {
          ok: true,
          message: "You're already registered. Check your inbox for your teacher resource guide.",
        },
        200,
      );
    }

    return json({ ok: true, message: "registered" }, 201);
  } catch (error) {
    console.error("Teacher registration insert failed:", error);
    return json({ ok: false, message: "Something went wrong. Please try again." }, 502);
  }
}
