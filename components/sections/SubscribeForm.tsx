"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ds/Button";

// Front-end only: validates the address and shows a thank-you. Wire it to a mailing-list provider before launch.
// The column's heading labels the field (labelledBy), so the field itself carries no visible label.
export function SubscribeForm({ labelledBy }: { labelledBy: string }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const hintId = useId();

  if (subscribed) {
    return (
      <p role="status" className="oe-label m-0 text-on-dark">
        Thanks. You’ll get the first note when it’s published.
      </p>
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const v = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      setError(v ? "That address looks incomplete." : "Add an email address.");
      return;
    }
    setSubscribed(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div className={"oe-field" + (error ? " oe-field--error" : "")}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null);
          }}
          aria-labelledby={labelledBy}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? hintId : undefined}
          className="oe-field__control"
        />
        {error ? (
          <span id={hintId} className="oe-field__hint">
            {error}
          </span>
        ) : null}
      </div>
      <div className="flex justify-end">
        <Button variant="brand" size="sm" type="submit">
          Subscribe
        </Button>
      </div>
    </form>
  );
}
