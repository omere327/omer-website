import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  href,
  disabled,
  onClick,
  type = "button",
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "inverse" | "brand";
  size?: "md" | "sm";
  icon?: IconName;
  href?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit";
  className?: string;
}) {
  const cls =
    "oe-btn" +
    (variant === "inverse" ? " oe-btn--inverse" : variant === "brand" ? " oe-btn--brand" : "") +
    (size === "sm" ? " oe-btn--sm" : "") +
    (className ? " " + className : "");
  const inner = (
    <>
      {children}
      {icon ? <Icon name={icon} size={18} /> : null}
    </>
  );
  if (href && !disabled) {
    return (
      <Link className={cls} href={href} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled} onClick={onClick}>
      {inner}
    </button>
  );
}
