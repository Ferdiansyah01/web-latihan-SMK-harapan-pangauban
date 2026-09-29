"use client";

import { useMemo, useState } from "react";
import { events } from "@/data/school";
import { Container, PageHero, Badge, EmptyState } from "@/components/ui/primitives";
import { formatTanggal } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function AgendaPage() {
  const kategoriList = useMemo(() => ["Semua", ...Array.from(new Set(events.map((e) => e.kategori)))], []);
  const [kategori, setKategori] = useState("Semua");

  const filtered = useMemo(() => {
    const sorted = [...events].sort((a, b) => a.tanggal.localeCompare(b.tanggal));
    if (kategori === "Semua") return sorted;
    return sorted.filter((e) => e.kategori === kategori);
  }, [kategori]);

  return (
    <>
      <PageHero
        eyebrow="Kalender"
        title="Agenda Sekolah"
        description="Jadwal kegiatan akademik, kesiswaan, industri, dan hari libur."
      />
      <Container className="py-10 sm:py-14">
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
        <p role="status" className="mt-4 text-sm text-muted">
          Menampilkan {filtered.length} dari {events.length} agenda
        </p>

        {filtered.length === 0 ? (
          <div className="mt-6">
            <EmptyState message="Agenda tidak ditemukan." />
          </div>
        ) : (
          <ol className="relative mt-8 space-y-5 border-l-2 border-primary/20 pl-6">
            {filtered.map((e) => (
              <li key={e.id} className="relative">
                <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-white" />
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <time className="text-sm font-bold text-primary">{formatTanggal(e.tanggal)}</time>
                    <Badge variant="accent">{e.kategori}</Badge>
                  </div>
                  <h2 className="mt-2 font-bold text-ink">{e.judul}</h2>
                  <p className="mt-1 text-sm text-muted">
                    📍 {e.lokasi} — {e.deskripsi}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </>
  );
}
