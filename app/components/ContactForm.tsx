"use client";

import { Button, Text } from "@/components/ui";
import { useRef, useState, type FormEvent } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

type SubmitState = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues) {
  const errors: FieldErrors = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 80) {
    errors.name = "Name must be 80 characters or less.";
  }

  if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 2000) {
    errors.message = "Message must be 2000 characters or less.";
  }

  return errors;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setState("error");
      setFeedback("Please fix the highlighted fields.");
      const firstInvalid = Object.keys(nextErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setState("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
        }
        setState("error");
        setFeedback(data.error ?? "Unable to send message right now.");
        return;
      }

      setState("success");
      setFeedback(data.message ?? "Message sent successfully.");
      setErrors({});
      setValues({ name: "", email: "", message: "", company: "" });
    } catch {
      setState("error");
      setFeedback("Network error. Please try again.");
    }
  };

  const statusClass =
    state === "success"
      ? "text-emerald-400"
      : state === "error"
        ? "text-accent-text"
        : "text-text-secondary";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="border-border-soft bg-background/70 min-w-0 rounded-2xl border p-4 sm:p-6"
      noValidate
    >
      <h3 className="text-text-primary text-lg font-semibold">Send a Message</h3>
      <Text className="mt-2">
        Share an idea, a challenge, or where a technical perspective could help.
      </Text>

      <input
        type="text"
        name="company"
        value={values.company}
        onChange={(event) => setValues((prev) => ({ ...prev, company: event.target.value }))}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="text-text-secondary grid min-w-0 gap-2 text-sm">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            className="border-border-strong bg-surface text-text-primary focus:border-accent-text h-11 w-full min-w-0 rounded-xl border px-3 text-base transition outline-none"
            placeholder="Your name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name ? (
            <span id="contact-name-error" className="text-accent-text text-sm">
              {errors.name}
            </span>
          ) : null}
        </div>

        <div className="text-text-secondary grid min-w-0 gap-2 text-sm">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            className="border-border-strong bg-surface text-text-primary focus:border-accent-text h-11 w-full min-w-0 rounded-xl border px-3 text-base transition outline-none"
            placeholder="you@example.com"
            autoComplete="email"
            required
            maxLength={120}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email ? (
            <span id="contact-email-error" className="text-accent-text text-sm">
              {errors.email}
            </span>
          ) : null}
        </div>

        <div className="text-text-secondary grid min-w-0 gap-2 text-sm sm:col-span-2">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
            className="border-border-strong bg-surface text-text-primary focus:border-accent-text w-full min-w-0 rounded-xl border px-3 py-2 text-base transition outline-none"
            placeholder="Describe the need, who it affects, and what a useful outcome would look like."
            required
            minLength={10}
            maxLength={2000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          {errors.message ? (
            <span id="contact-message-error" className="text-accent-text text-sm">
              {errors.message}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex flex-col items-stretch gap-4 sm:items-start">
        <Button
          type="submit"
          className="shrink-0 whitespace-nowrap sm:min-w-40"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "Sending..." : "Send Message"}
        </Button>
        <p
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={`text-sm leading-6 ${statusClass}`}
        >
          {feedback}
        </p>
      </div>
    </form>
  );
}
