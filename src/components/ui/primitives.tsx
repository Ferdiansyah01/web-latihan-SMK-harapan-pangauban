import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal>
      <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            light ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
        {description && (
          <p className={cn("mt-3 text-base leading-relaxed", light ? "text-white/80" : "text-muted")}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-accent text-white hover:bg-[#15803D] shadow-sm hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-primary text-white hover:bg-secondary shadow-sm hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-primary hover:bg-slate-100 shadow-sm",
  }[variant];
  const cls = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
    styles,
    className
  );
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls}>{children}</button>;
}

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "dark" | "outline" | "important";
  className?: string;
}) {
  const map = {
    default: "bg-slate-100 text-slate-700",
    accent: "bg-accent/10 text-accent",
    dark: "bg-primary text-white",
    outline: "border border-slate-200 text-muted bg-white",
    important: "bg-red-600 text-white",
  }[variant];
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", map, className)}>
      {children}
    </span>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted">
      <Link href="/" className="hover:text-primary">Beranda</Link>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          <span aria-hidden>/</span>
          {it.href ? (
            <Link href={it.href} className="hover:text-primary">{it.label}</Link>
          ) : (
            <span className="font-medium text-ink">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function EmptyState({ message = "Belum ada informasi yang tersedia. Silakan kembali lagi nanti." }: { message?: string }) {
  return (
    <div className="rounded-2xl border bg-white p-10 text-center text-muted">
      <p>{message}</p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/foto-kampus.jpg",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-primary text-white">
      {image && (
        <>
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F3D3E]/75 to-[#0F3D3E]/40" aria-hidden />
        </>
      )}
      <Container className="relative py-12 sm:py-16">
        <Breadcrumb items={[{ label: title }]} />
        <div className="mt-4 max-w-3xl">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">{eyebrow}</p>}
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          {description && <p className="mt-4 text-white/80 leading-relaxed">{description}</p>}
        </div>
      </Container>
    </div>
  );
}
