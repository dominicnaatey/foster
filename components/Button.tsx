import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "black" | "light";
  className?: string;
};

export default function Button({ children, href, variant = "primary", className }: Props) {
  const base = "inline-flex items-center justify-center rounded-full h-12 px-6 font-regular transition-colors";
  const styles =
    variant === "outline"
      ? "border border-gray-300 text-gray-800 hover:bg-gray-100"
      : variant === "black"
      ? "bg-black text-white hover:opacity-90"
      : variant === "light"
      ? "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
      : "bg-primary text-white hover:opacity-90";
  const cls = `${base} ${styles} ${className ?? ""}`.trim();
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}
