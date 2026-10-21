"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Lockup } from "./Lockup";

export type NavLink = { id: string; label: string; href: string };

export function NavBar({
  links,
  current,
  cta,
  onDark,
  className = "",
}: {
  links: NavLink[];
  current?: string;
  cta?: { label: string; href: string };
  onDark?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // While the menu is open the page behind it stays still, and Escape closes it.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav
      className={
        "oe-nav" + (open ? " oe-nav--open" : "") + (onDark ? " oe-nav--on-dark" : "") + (className ? " " + className : "")
      }
      aria-label="Main"
    >
      <Link className="oe-nav__brand" href="/" onClick={close}>
        <Lockup size={44} wordmarkSize={17} tone={onDark ? "dark" : "light"} cutColor={onDark ? undefined : "var(--oe-paper)"} />
      </Link>
      <button
        className="oe-nav__toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Icon name={open ? "x" : "menu"} />
      </button>
      <div className="oe-nav__links">
        {links.map((l) => (
          <Link
            key={l.id}
            className="oe-nav__link"
            href={l.href}
            aria-current={current === l.id ? "page" : undefined}
            onClick={close}
          >
            {l.label}
          </Link>
        ))}
        {cta ? (
          <Button size="sm" variant="brand" className="oe-nav__cta" href={cta.href} onClick={close}>
            {cta.label}
          </Button>
        ) : null}
      </div>
    </nav>
  );
}
