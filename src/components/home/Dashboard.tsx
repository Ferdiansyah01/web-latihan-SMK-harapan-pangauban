"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Camera,
  Globe,
  Tags,
  Megaphone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { news } from "@/data/news";

/* 9 foto latar lokal, berganti tiap 2 detik */
const SLIDES = [
  { src: IMG.kampus, alt: "Gedung kampus SMK Harapan Pangauban" },
  { src: IMG.kelas, alt: "Suasana belajar di kelas" },
  { src: IMG.labKomputer, alt: "Praktik di laboratorium komputer" },
  { src: IMG.wisuda, alt: "Wisuda dan kelulusan siswa" },
  { src: IMG.industri, alt: "Praktik berstandar industri" },
  { src: IMG.robot, alt: "Ekstrakurikuler robotik dan mekatronika" },
  { src: IMG.mesinMobil, alt: "Praktik otomotif di bengkel sekolah" },
  { src: IMG.perpusRak, alt: "Koleksi perpustakaan sekolah" },
  { src: IMG.siswaLaptop, alt: "Siswa belajar kelompok dengan laptop" },
];

function formatTanggalJam(d: Date) {
  const tanggal = d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const jam = d
    .toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    .replace(/:/g, ".");
  return { tanggal, jam };
}

function useNow() {
  // Render langsung tanggal server agar tidak pernah stuck "Memuat…",
  // lalu berdetak tiap detik setelah hidrasi.
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return formatTanggalJam(now);
}

export function DashboardHero() {
  const { tanggal, jam } = useNow();
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length),
    []
  );

  // Slide latar berputar tiap 2 detik. Rantai setTimeout yang dijadwalkan
  // ulang setiap index berubah — lebih tahan dibanding setInterval bila
  // tab sempat di-throttle browser, dan timer ikut me-reset saat
  // pengguna navigasi manual.
  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), 2000);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <section aria-label="Dashboard sekolah">
      {/* Bar info: tanggal & jam live + media sosial */}
      <div className="bg-primary text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6 sm:text-sm lg:px-8">
          <p className="flex items-center gap-2" aria-live="off">
            <span className="font-medium capitalize" suppressHydrationWarning>{tanggal}</span>
            <span className="rounded-md bg-white px-2 py-0.5 font-bold tabular-nums text-primary" aria-label={`Pukul ${jam}`} suppressHydrationWarning>
              {jam}
            </span>
          </p>
          <div className="flex items-center gap-1.5">
            <a href="#" aria-label="Instagram sekolah" className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-accent">
              <Camera size={15} aria-hidden />
            </a>
            <a href="#" aria-label="YouTube sekolah" className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-accent">
              <Play size={15} aria-hidden />
            </a>
            <a href="#" aria-label="Facebook sekolah" className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-accent">
              <Globe size={15} aria-hidden />
            </a>
          </div>
        </div>
      </div>

      {/* Header slideshow */}
      <div className="relative overflow-hidden bg-[#0B2B2C] text-white">
        {SLIDES.map((s, i) => (
          <div
            key={s.src + i}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={s.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-[#0F3D3E]/55 to-[#0F172A]/80" aria-hidden />

        <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[500px] sm:px-6 lg:px-8">
          <Image
            src="/images/logo-sekolah.png"
            alt="Logo SMK Harapan Pangauban"
            width={96}
            height={96}
            className="h-20 w-20 rounded-full bg-white object-contain shadow-xl ring-2 ring-white/50 sm:h-24 sm:w-24"
            priority
          />
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight drop-shadow-lg sm:text-6xl">
            SMK Harapan Pangauban
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-medium text-white/90 sm:text-lg">
            SMK Unggulan yang Menghasilkan SDM Bermutu dan Berdaya Saing Tinggi
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ppdb"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Informasi PPDB
            </Link>
            <Link
              href="/profil"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-white/50 px-8 py-3.5 text-sm font-bold backdrop-blur transition-all hover:bg-white hover:text-primary"
            >
              Profil Sekolah
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Foto sebelumnya"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors hover:bg-white/30"
            >
              <ChevronLeft size={18} aria-hidden />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Navigasi foto latar">
              {SLIDES.map((s, i) => (
                <button
                  key={s.src + i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Tampilkan foto ${i + 1}: ${s.alt}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    i === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Foto berikutnya"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors hover:bg-white/30"
            >
              <ChevronRight size={18} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const TOP_TAGS = [
  { label: "LKS", href: "/kesiswaan/prestasi" },
  { label: "PPDB", href: "/ppdb" },
  { label: "PKL", href: "/hubungan-industri/pkl" },
  { label: "Robotik", href: "/kesiswaan/ekstrakurikuler" },
  { label: "Teaching Factory", href: "/hubungan-industri/teaching-factory" },
  { label: "Prestasi", href: "/kesiswaan/prestasi" },
];

export function NewsTicker() {
  const items = news.slice(0, 6);
  const loop = [...items, ...items];
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <p className="flex flex-wrap items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1.5 font-bold text-ink">
            <Tags size={15} className="text-accent" aria-hidden /> Top Tags
          </span>
          {TOP_TAGS.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              {t.label}
            </Link>
          ))}
        </p>
      </div>
      <div className="border-t bg-background">
        <div className="mx-auto flex max-w-7xl items-stretch gap-0 px-4 sm:px-6 lg:px-8">
          <p className="flex shrink-0 items-center gap-1.5 bg-accent px-4 py-2.5 text-sm font-bold text-white">
            <Megaphone size={16} aria-hidden /> Berita Terbaru
          </p>
          <div className="relative flex-1 overflow-hidden" aria-label="Berita terbaru berjalan">
            <div className="animate-marquee flex w-max items-center gap-10 py-2.5 pl-6 hover:[animation-play-state:paused]">
              {loop.map((n, i) => (
                <Link
                  key={n.slug + i}
                  href={`/berita/${n.slug}`}
                  aria-hidden={i >= items.length}
                  tabIndex={i >= items.length ? -1 : undefined}
                  className="whitespace-nowrap text-sm font-medium text-ink hover:text-accent"
                >
                  <span className="mr-2 text-accent">➤</span>
                  {n.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
