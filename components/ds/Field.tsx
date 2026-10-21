"use client";

import { useId, type ChangeEventHandler } from "react";

export function Field({
  label,
  type = "text",
  name,
  value,
  placeholder,
  hint,
  error,
  onChange,
}: {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  hint?: string;
  error?: string | null;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const id = useId();
  const note = error || hint;
  return (
    <div className={"oe-field" + (error ? " oe-field--error" : "")}>
      {label ? (
        <label className="oe-field__label" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="oe-field__control"
        aria-invalid={error ? true : undefined}
        aria-describedby={note ? id + "h" : undefined}
      />
      {note ? (
        <span className="oe-field__hint" id={id + "h"}>
          {note}
        </span>
      ) : null}
    </div>
  );
}
