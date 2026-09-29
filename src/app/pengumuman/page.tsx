"use client";

import { useMemo, useState } from "react";
import { announcements } from "@/data/news";
import { Container, PageHero, Badge, EmptyState } from "@/components/ui/primitives";
import { formatTanggal } from "@/lib/utils";

export default function PengumumanPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    const sorted = [...announcements].sort((a, b) => b.tanggal.localeCompare(a.tanggal));
    if (!query) return sorted;
    return sorted.filter(
      (a) => a.title.toLowerCase().includes(query) || a.excerpt.toLowerCase().includes(query)
    );
  }, [q]);

  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title="Pengumuman"
        description="Pengumuman resmi sekolah untuk siswa, orang tua, dan masyarakat."
      />
      <Container className="py-10 sm:py-14">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari pengumuman..."
          aria-label="Cari pengumuman"
          className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:max-w-md"
        />
        <p role="status" className="mt-3 text-sm text-muted">
          Menampilkan {filtered.length} dari {announcements.length} pengumuman
        </p>

        {filtered.length === 0 ? (
          <div className="mt-6">
            <EmptyState message="Pengumuman tidak ditemukan." />
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {filtered.map((a) => (
              <article key={a.id} className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <time className="text-xs font-medium text-muted">{formatTanggal(a.tanggal)}</time>
                  {a.penting && <Badge variant="important">PENTING</Badge>}
                </div>
                <h2 className="mt-2 text-lg font-bold text-ink">{a.title}</h2>
                <p className="mt-1 text-sm text-muted">{a.excerpt}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{a.content}</p>
              </article>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
