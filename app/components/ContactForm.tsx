"use client";

import { Button, Text } from "@/components/ui";
import { useState, type FormEvent } from "react";

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
        ? "text-accent"
        : "text-text-secondary";

  return (
    <form
      onSubmit={handleSubmit}
      className="transform-gpu rounded-2xl border border-border-soft bg-background/70 p-6 transition-transform duration-300 hover:-translate-y-0.5"
      noValidate
    >
      <h3 className="text-lg font-semibold text-text-primary">Send a Message</h3>
      <Text className="mt-2">Share your project idea, role details, or collaboration scope.</Text>

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
        <label className="grid gap-2 text-sm text-text-secondary">
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            className="h-11 rounded-xl border border-border-strong bg-surface px-3 text-sm text-text-primary outline-none transition focus:border-accent"
            placeholder="Your name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <span className="text-xs text-accent">{errors.name}</span> : null}
        </label>

        <label className="grid gap-2 text-sm text-text-secondary">
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            className="h-11 rounded-xl border border-border-strong bg-surface px-3 text-sm text-text-primary outline-none transition focus:border-accent"
            placeholder="you@example.com"
            autoComplete="email"
            required
            maxLength={120}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <span className="text-xs text-accent">{errors.email}</span> : null}
        </label>

        <label className="grid gap-2 text-sm text-text-secondary sm:col-span-2">
          Message
          <textarea
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
            className="rounded-xl border border-border-strong bg-surface px-3 py-2 text-sm text-text-primary outline-none transition focus:border-accent"
            placeholder="Tell me about your project or opportunity."
            required
            minLength={10}
            maxLength={2000}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <span className="text-xs text-accent">{errors.message}</span> : null}
        </label>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <Button
          type="submit"
          className="transform-gpu hover:-translate-y-0.5"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "Sending..." : "Send Message"}
        </Button>
        {feedback ? <p className={`text-sm ${statusClass}`}>{feedback}</p> : null}
      </div>
    </form>
  );
}
