"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { IMG } from "@/lib/images";

const slides = [
  {
    eyebrow: "Profil Sekolah",
    title: "SMK Unggulan yang Menghasilkan SDM Bermutu dan Berdaya Saing Tinggi",
    desc: "Membentuk lulusan yang kompeten, berkarakter, adaptif terhadap teknologi, dan siap menghadapi dunia kerja.",
    gradient: "from-[#0F3D3E] via-[#155E63] to-[#0F172A]",
    image: IMG.kampus,
    alt: "Gedung kampus SMK Harapan Pangauban",
  },
  {
    eyebrow: "8 Program Keahlian",
    title: "Dari Software hingga Otomasi Industri",
    desc: "Pilih konsentrasi keahlian favoritmu: RPL, SIJA, Elektronika, Mekatronika, Otomasi, DKV, Otomotif, dan Akuntansi.",
    gradient: "from-[#155E63] via-[#0F3D3E] to-[#16A34A]",
    image: IMG.labKomputer,
    alt: "Siswa praktik di laboratorium komputer",
  },
  {
    eyebrow: "Prestasi",
    title: "Juara LKS Nasional & Finalis Robotik",
    desc: "Siswa kami berprestasi di tingkat kota, provinsi, nasional, hingga internasional setiap tahunnya.",
    gradient: "from-[#0F172A] via-[#0F3D3E] to-[#155E63]",
    image: IMG.wisuda,
    alt: "Perayaan kelulusan siswa berprestasi",
  },
  {
    eyebrow: "Teaching Factory",
    title: "Belajar Langsung dari Proyek Industri Nyata",
    desc: "Produksi IoT, jasa software, dan manufaktur dikerjakan siswa bersama guru dan mitra industri.",
    gradient: "from-[#16A34A] via-[#155E63] to-[#0F3D3E]",
    image: IMG.industri,
    alt: "Suasana lini produksi industri mitra",
  },
  {
    eyebrow: "PPDB 2026/2027",
    title: "Kuota 450 Siswa Baru Telah Dibuka",
    desc: "Daftar sekarang melalui jalur Prestasi, Afirmasi, dan Reguler. Wujudkan masa depan vokasimu.",
    gradient: "from-[#0F3D3E] via-[#16A34A] to-[#155E63]",
    image: IMG.siswaLaptop,
    alt: "Siswa baru belajar menggunakan laptop",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  // Preload foto hero berikutnya agar transisi slide tidak berkedip
  useEffect(() => {
    slides.forEach((s) => {
      const img = new window.Image();
      img.src = s.image;
    });
  }, []);

  const slide = slides[index];

  return (
    <section
      aria-label="Hero"
      className={cn("relative overflow-hidden bg-gradient-to-br text-white transition-all duration-500", slide.gradient)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div key={s.image} aria-hidden={i !== index} className={cn("absolute inset-0 transition-opacity duration-700", i === index ? "opacity-100" : "opacity-0")}>
          <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F3D3E]/75 to-[#0F3D3E]/40" aria-hidden />
      <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:min-h-[560px] lg:px-8">
        <div key={index} className="animate-hero max-w-3xl">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">{slide.eyebrow}</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{slide.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{slide.desc}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/ppdb" className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">Informasi PPDB</Link>
            <Link href="/profil" className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-white/40 px-8 py-3.5 text-sm font-bold backdrop-blur transition-all hover:bg-white hover:text-primary">Profil Sekolah</Link>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Slide sebelumnya" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur hover:bg-white/30"><ChevronLeft size={20} /></button>
            <button onClick={next} aria-label="Slide berikutnya" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur hover:bg-white/30"><ChevronRight size={20} /></button>
          </div>
          <div className="flex gap-2" role="tablist" aria-label="Navigasi slide">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Ke slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn("h-2.5 rounded-full transition-all", i === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
