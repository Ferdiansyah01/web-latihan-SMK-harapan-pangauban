"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/data/school";
import type { GalleryItem } from "@/types";
import { Container, PageHero, EmptyState } from "@/components/ui/primitives";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { cn } from "@/lib/utils";

export default function GaleriPage() {
  const kategoriList = useMemo(() => ["Semua", ...Array.from(new Set(gallery.map((g) => g.kategori)))], []);
  const [kategori, setKategori] = useState("Semua");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  // Tutup lightbox via tombol Escape
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return gallery.filter((g) => {
      if (kategori !== "Semua" && g.kategori !== kategori) return false;
      if (query && !`${g.judul} ${g.deskripsi}`.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [kategori, q]);

  return (
    <>
      <PageHero
        eyebrow="Dokumentasi"
        title="Galeri Sekolah"
        description="Momen kegiatan, praktik, prestasi, dan fasilitas dalam bingkai visual."
      />
      <Container className="py-10 sm:py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {kategoriList.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKategori(k)}
                aria-pressed={kategori === k}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  kategori === k ? "bg-primary text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                {k}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari galeri..."
            aria-label="Cari galeri"
            className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:max-w-xs"
          />
        </div>
        <p role="status" className="mt-4 text-sm text-muted">
          Menampilkan {filtered.length} dari {gallery.length} foto
        </p>

        {filtered.length === 0 ? (
          <div className="mt-6">
            <EmptyState message="Galeri tidak ditemukan." />
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {filtered.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelected(g)}
                aria-label={`Lihat ${g.judul}`}
                className="group block overflow-hidden rounded-2xl text-left transition-transform hover:-translate-y-1"
              >
                <SchoolImage
                  src={g.image}
                  alt={g.judul}
                  gradient={g.gradient}
                  className="flex min-h-44 flex-col justify-end"
                  imgClassName="transition-transform duration-300 group-hover:scale-105"
                >
                  <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="block text-[11px] font-semibold uppercase tracking-widest text-white/70">{g.kategori}</span>
                    <span className="mt-1 block font-bold leading-snug text-white">{g.judul}</span>
                  </span>
                </SchoolImage>
              </button>
            ))}
          </div>
        )}
      </Container>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.judul}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <SchoolImage
              src={selected.image}
              alt={selected.judul}
              gradient={selected.gradient}
              className="p-8"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Tutup pratinjau"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50"
              >
                <X size={20} aria-hidden />
              </button>
              <span className="relative z-10 block text-xs font-semibold uppercase tracking-widest text-white/70">{selected.kategori}</span>
              <h2 className="relative z-10 mt-1 text-2xl font-extrabold text-white">{selected.judul}</h2>
            </SchoolImage>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-muted">{selected.deskripsi}</p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mt-5 min-h-[44px] w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
