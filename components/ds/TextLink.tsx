import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export function TextLink({
  children,
  href,
  icon,
  onDark,
  className = "",
}: {
  children: ReactNode;
  href: string;
  icon?: IconName;
  onDark?: boolean;
  className?: string;
}) {
  const cls = "oe-link" + (onDark ? " oe-link--on-dark" : "") + (className ? " " + className : "");
  return (
    <Link className={cls} href={href}>
      {children}
      {icon ? <Icon name={icon} size={16} /> : null}
    </Link>
  );
}
