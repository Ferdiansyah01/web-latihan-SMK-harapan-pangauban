"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Gambar dengan latar gradien + fallback aman:
 * jika foto remote gagal dimuat (mis. offline), gradien tetap tampil
 * sehingga layout tidak pernah rusak.
 */
export function SchoolImage({
  src,
  alt,
  className,
  imgClassName,
  gradient = "from-[#0F3D3E] to-[#155E63]",
  eager = false,
  children,
}: {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  gradient?: string;
  eager?: boolean;
  children?: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  const showImg = src && !failed;

  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br", gradient, className)}>
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {showImg && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn("object-cover", imgClassName)}
          priority={eager}
          onError={() => setFailed(true)}
        />
      )}
      {children}
    </div>
  );
}
