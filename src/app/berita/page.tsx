"use client";

import { useMemo, useState } from "react";
import { news } from "@/data/news";
import { Container, PageHero, EmptyState } from "@/components/ui/primitives";
import { NewsCard } from "@/components/cards";
import { cn } from "@/lib/utils";

export default function BeritaPage() {
  const kategoriList = useMemo(() => ["Semua", ...Array.from(new Set(news.map((n) => n.category)))], []);
  const [kategori, setKategori] = useState("Semua");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return news.filter((n) => {
      const cocokKategori = kategori === "Semua" || n.category === kategori;
      const cocokQuery =
        !query || n.title.toLowerCase().includes(query) || n.excerpt.toLowerCase().includes(query);
      return cocokKategori && cocokQuery;
    });
  }, [kategori, q]);

  return (
    <>
      <PageHero
        eyebrow="Publikasi"
        title="Berita Sekolah"
        description="Kabar terbaru prestasi, kegiatan, dan kerja sama industri."
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
            placeholder="Cari berita..."
            aria-label="Cari berita sekolah"
            className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:max-w-xs"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p role="status" className="text-sm text-muted">
            Menampilkan {filtered.length} dari {news.length} berita
          </p>
          {(q.trim() !== "" || kategori !== "Semua") && (
            <button
              type="button"
              onClick={() => {
                setQ("");
                setKategori("Semua");
              }}
              className="rounded-full border px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary hover:text-primary"
            >
              Reset filter
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-6">
            <EmptyState message="Berita tidak ditemukan." />
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
