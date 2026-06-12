"use client";
import { useId, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type FieldName =
  | "firstName"
  | "lastName"
  | "email"
  | "schoolName"
  | "schoolType"
  | "gradeLevels"
  | "state";

type FieldErrors = Partial<Record<FieldName, string>>;

const SCHOOL_TYPE_OPTIONS = [
  { value: "public", label: "Public school" },
  { value: "private", label: "Private school" },
  { value: "homeschool", label: "Homeschool" },
  { value: "other", label: "Other" },
] as const;

const GRADE_LEVEL_OPTIONS = ["Pre-K", "K-2", "3-5", "6-8", "9-12"] as const;

const HOW_HEARD_OPTIONS = [
  "A colleague or friend",
  "Search engine",
  "Social media",
  "A conference or workshop",
  "Other",
] as const;

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261] disabled:opacity-60";
const labelBase = "block text-sm font-bold text-[#1B4332] mb-1.5";

function errorClass(hasError: boolean): string {
  return hasError ? `${inputBase} border-[#E76F51]` : `${inputBase} border-gray-200`;
}

export default function SchoolsRegistrationForm() {
  const ids = {
    firstName: useId(),
    lastName: useId(),
    email: useId(),
    schoolName: useId(),
    schoolType: useId(),
    gradeLevels: useId(),
    state: useId(),
    country: useId(),
    howHeard: useId(),
  };

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [gradeLevels, setGradeLevels] = useState<string[]>([]);
  const [state, setState] = useState("");
  const [country, setCountry] = useState("United States");
  const [howHeard, setHowHeard] = useState("");

  function toggleGrade(level: string) {
    setGradeLevels((current) =>
      current.includes(level)
        ? current.filter((value) => value !== level)
        : [...current, level],
    );
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!firstName.trim()) next.firstName = "Please enter your first name.";
    if (!lastName.trim()) next.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!schoolName.trim()) next.schoolName = "Please enter your school name.";
    if (!schoolType) next.schoolType = "Please choose your school type.";
    if (gradeLevels.length === 0) {
      next.gradeLevels = "Please select at least one grade level.";
    }
    if (!state.trim()) next.state = "Please enter your state or region.";
    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setErrors({});
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/schools/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          schoolName,
          schoolType,
          gradeLevels,
          state,
          country,
          howHeard: howHeard || undefined,
        }),
      });
      const data = (await response.json()) as { ok: boolean; message: string };

      if (response.ok && data.ok) {
        setStatus("success");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white border-2 border-[#52B788] rounded-3xl shadow-lg p-8 sm:p-10 text-center"
      >
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#52B788]/15 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-[#1B4332]" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-[#1B4332] mb-3">You&apos;re registered!</h3>
        <p className="text-gray-600 leading-relaxed mb-6 max-w-md mx-auto">
          Check your email — we&apos;ve sent your teacher resource guide with instant access to every
          classroom printable pack.
        </p>
        <ul className="text-left max-w-sm mx-auto space-y-3 text-sm text-gray-700">
          <li className="flex gap-3">
            <span className="text-[#52B788] font-bold">1.</span>
            Open the welcome email and bookmark your resource guide.
          </li>
          <li className="flex gap-3">
            <span className="text-[#52B788] font-bold">2.</span>
            Browse 120+ animal packs and download any PDF instantly.
          </li>
          <li className="flex gap-3">
            <span className="text-[#52B788] font-bold">3.</span>
            Print, copy, and share freely with your students.
          </li>
        </ul>
        <a
          href="/animals"
          className="inline-block mt-8 bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold px-7 py-3 rounded-full transition-colors shadow-md"
        >
          Browse the Animal Archive
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={ids.firstName} className={labelBase}>
            First name
          </label>
          <input
            id={ids.firstName}
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            disabled={status === "loading"}
            aria-required="true"
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? `${ids.firstName}-error` : undefined}
            className={errorClass(Boolean(errors.firstName))}
          />
          {errors.firstName && (
            <p id={`${ids.firstName}-error`} className="mt-1.5 text-xs font-semibold text-[#E76F51]">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={ids.lastName} className={labelBase}>
            Last name
          </label>
          <input
            id={ids.lastName}
            type="text"
            autoComplete="family-name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            disabled={status === "loading"}
            aria-required="true"
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? `${ids.lastName}-error` : undefined}
            className={errorClass(Boolean(errors.lastName))}
          />
          {errors.lastName && (
            <p id={`${ids.lastName}-error`} className="mt-1.5 text-xs font-semibold text-[#E76F51]">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={ids.email} className={labelBase}>
          School email address
        </label>
        <input
          id={ids.email}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === "loading"}
          placeholder="you@yourschool.edu"
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${ids.email}-error` : undefined}
          className={errorClass(Boolean(errors.email))}
        />
        {errors.email && (
          <p id={`${ids.email}-error`} className="mt-1.5 text-xs font-semibold text-[#E76F51]">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor={ids.schoolName} className={labelBase}>
          School name
        </label>
        <input
          id={ids.schoolName}
          type="text"
          autoComplete="organization"
          value={schoolName}
          onChange={(event) => setSchoolName(event.target.value)}
          disabled={status === "loading"}
          aria-required="true"
          aria-invalid={Boolean(errors.schoolName)}
          aria-describedby={errors.schoolName ? `${ids.schoolName}-error` : undefined}
          className={errorClass(Boolean(errors.schoolName))}
        />
        {errors.schoolName && (
          <p id={`${ids.schoolName}-error`} className="mt-1.5 text-xs font-semibold text-[#E76F51]">
            {errors.schoolName}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor={ids.schoolType} className={labelBase}>
          School type
        </label>
        <select
          id={ids.schoolType}
          value={schoolType}
          onChange={(event) => setSchoolType(event.target.value)}
          disabled={status === "loading"}
          aria-required="true"
          aria-invalid={Boolean(errors.schoolType)}
          aria-describedby={errors.schoolType ? `${ids.schoolType}-error` : undefined}
          className={errorClass(Boolean(errors.schoolType))}
        >
          <option value="">Select one…</option>
          {SCHOOL_TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.schoolType && (
          <p id={`${ids.schoolType}-error`} className="mt-1.5 text-xs font-semibold text-[#E76F51]">
            {errors.schoolType}
          </p>
        )}
      </div>

      <fieldset
        className="mt-5"
        aria-required="true"
        aria-invalid={Boolean(errors.gradeLevels)}
        aria-describedby={errors.gradeLevels ? `${ids.gradeLevels}-error` : undefined}
      >
        <legend className={labelBase}>Grade levels you teach</legend>
        <div className="flex flex-wrap gap-2">
          {GRADE_LEVEL_OPTIONS.map((level) => {
            const checked = gradeLevels.includes(level);
            return (
              <label
                key={level}
                className={`cursor-pointer select-none rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  checked
                    ? "bg-[#1B4332] border-[#1B4332] text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:border-[#2D6A4F]"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggleGrade(level)}
                  disabled={status === "loading"}
                />
                {level}
              </label>
            );
          })}
        </div>
        {errors.gradeLevels && (
          <p id={`${ids.gradeLevels}-error`} className="mt-1.5 text-xs font-semibold text-[#E76F51]">
            {errors.gradeLevels}
          </p>
        )}
      </fieldset>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={ids.state} className={labelBase}>
            State / region
          </label>
          <input
            id={ids.state}
            type="text"
            autoComplete="address-level1"
            value={state}
            onChange={(event) => setState(event.target.value)}
            disabled={status === "loading"}
            aria-required="true"
            aria-invalid={Boolean(errors.state)}
            aria-describedby={errors.state ? `${ids.state}-error` : undefined}
            className={errorClass(Boolean(errors.state))}
          />
          {errors.state && (
            <p id={`${ids.state}-error`} className="mt-1.5 text-xs font-semibold text-[#E76F51]">
              {errors.state}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={ids.country} className={labelBase}>
            Country
          </label>
          <input
            id={ids.country}
            type="text"
            autoComplete="country-name"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            disabled={status === "loading"}
            className={errorClass(false)}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={ids.howHeard} className={labelBase}>
          How did you hear about us? <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <select
          id={ids.howHeard}
          value={howHeard}
          onChange={(event) => setHowHeard(event.target.value)}
          disabled={status === "loading"}
          className={errorClass(false)}
        >
          <option value="">Prefer not to say</option>
          {HOW_HEARD_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 w-full bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold text-base px-6 py-3.5 rounded-full transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Registering…" : "Register for Free Classroom Access"}
      </button>

      <p aria-live="polite" className="min-h-[1.25rem] mt-3 text-center text-sm">
        {status === "error" && <span className="font-semibold text-[#E76F51]">{message}</span>}
      </p>

      <p className="mt-2 text-center text-xs text-gray-400 leading-relaxed">
        We use your details only to send classroom resources. No student data is ever collected.
      </p>
    </form>
  );
}
