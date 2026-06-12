"use client";
import { useId, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { ok: boolean; message: string };

      if (response.ok && data.ok) {
        setStatus("success");
        setMessage("You're on the list! Get ready for fun printables in your inbox.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Oops! Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Oops! Something went wrong. Please try again.");
    }
  }

  return (
    <div>
      <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
        Get Fun Printables
      </h4>
      <p className="text-white/70 text-sm leading-relaxed mb-4">
        Join our newsletter for new animal packs, classroom ideas, and free printables — straight to
        your inbox.
      </p>

      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="bg-[#52B788]/20 text-[#B7E4C7] text-sm font-semibold rounded-xl px-5 py-4 leading-relaxed"
        >
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2 w-full">
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <input
            id={inputId}
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            disabled={status === "loading"}
            aria-invalid={status === "error"}
            className="w-full rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4A261] disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[#F4A261] hover:bg-[#e8915a] text-[#1B4332] font-bold text-sm px-5 py-2.5 rounded-full transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Signing up..." : "Sign Me Up"}
          </button>
          <p aria-live="polite" className="min-h-[1.25rem] text-sm">
            {status === "error" && <span className="text-[#F4A261]">{message}</span>}
          </p>
        </form>
      )}
    </div>
  );
}
