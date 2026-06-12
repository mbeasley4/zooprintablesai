import type { NextRequest } from "next/server";

export const runtime = "nodejs";

type SubscribeRequestBody = {
  email?: unknown;
};

type SubscribeResult = {
  ok: boolean;
  message: string;
};

// RFC 5322-lite: good enough to reject obvious garbage without rejecting valid addresses.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;

// Minimal in-memory rate limit. Resets on cold start; for a free-printables
// newsletter this is enough friction to blunt scripted abuse without a datastore.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
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

function json(body: SubscribeResult, status: number): Response {
  return Response.json(body, { status });
}

export async function POST(request: NextRequest): Promise<Response> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    console.error("Newsletter signup is misconfigured: missing BREVO env vars.");
    return json({ ok: false, message: "Newsletter signup is unavailable right now." }, 503);
  }

  if (isRateLimited(getClientIp(request))) {
    return json({ ok: false, message: "Too many attempts. Please try again in a minute." }, 429);
  }

  let body: SubscribeRequestBody;
  try {
    body = (await request.json()) as SubscribeRequestBody;
  } catch {
    return json({ ok: false, message: "Invalid request." }, 400);
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) {
    return json({ ok: false, message: "Please enter a valid email address." }, 400);
  }

  const numericListId = Number.parseInt(listId, 10);
  if (Number.isNaN(numericListId)) {
    console.error("BREVO_LIST_ID is not a valid number.");
    return json({ ok: false, message: "Newsletter signup is unavailable right now." }, 503);
  }

  try {
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [numericListId],
        updateEnabled: true,
      }),
    });

    if (brevoResponse.ok) {
      return json({ ok: true, message: "subscribed" }, 200);
    }

    // Brevo returns 400 with code "duplicate_parameter" when the contact already
    // exists. With updateEnabled this is rare, but treat it as success either way.
    const errorBody = (await brevoResponse.json().catch(() => null)) as { code?: string } | null;
    if (brevoResponse.status === 400 && errorBody?.code === "duplicate_parameter") {
      return json({ ok: true, message: "subscribed" }, 200);
    }

    console.error("Brevo contact creation failed:", brevoResponse.status, errorBody?.code);
    return json({ ok: false, message: "Something went wrong. Please try again." }, 502);
  } catch (error) {
    console.error("Brevo request threw:", error);
    return json({ ok: false, message: "Something went wrong. Please try again." }, 502);
  }
}
