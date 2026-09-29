"use client";

import { useMemo, useState } from "react";
import { teachers } from "@/data/school";
import { Container, PageHero, Badge, EmptyState } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

const KATEGORI = ["Semua", "Guru", "Tenaga Kependidikan"] as const;
const PER_PAGE = 9;

function inisial(nama: string): string {
  const bersih = nama.replace(/^(Dr\.|Drs\.|H\.)\s*/i, "").split(/[\s,.]+/).filter(Boolean);
  return ((bersih[0]?.[0] ?? "") + (bersih[1]?.[0] ?? "")).toUpperCase() || "GT";
}

export default function GtkPage() {
  const [q, setQ] = useState("");
  const [kategori, setKategori] = useState<(typeof KATEGORI)[number]>("Semua");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return teachers.filter((t) => {
      const cocokKategori = kategori === "Semua" || t.kategori === kategori;
      const cocokQuery =
        !query ||
        t.nama.toLowerCase().includes(query) ||
        t.mapel.toLowerCase().includes(query) ||
        t.jabatan.toLowerCase().includes(query) ||
        t.nip.includes(query);
      return cocokKategori && cocokQuery;
    });
  }, [q, kategori]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const items = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const gantiKategori = (k: (typeof KATEGORI)[number]) => {
    setKategori(k);
    setPage(1);
  };

  const gantiQuery = (v: string) => {
    setQ(v);
    setPage(1);
  };

  return (
    <>
      <PageHero
        eyebrow="GTK"
        title="Guru & Tenaga Kependidikan"
        description="Kenali para pendidik dan tenaga kependidikan profesional SMK Harapan Pangauban."
      />
      <Container className="py-10 sm:py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {KATEGORI.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => gantiKategori(k)}
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
            onChange={(e) => gantiQuery(e.target.value)}
            placeholder="Cari nama, mapel, jabatan, NIP..."
            aria-label="Cari guru dan tenaga kependidikan"
            className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:max-w-xs"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p role="status" className="text-sm text-muted">
            Menampilkan {items.length} dari {filtered.length} GTK
          </p>
          {(q.trim() !== "" || kategori !== "Semua") && (
            <button
              type="button"
              onClick={() => {
                setQ("");
                setKategori("Semua");
                setPage(1);
              }}
              className="rounded-full border px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary hover:text-primary"
            >
              Reset filter
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="mt-6">
            <EmptyState message="GTK tidak ditemukan. Coba kata kunci atau kategori lain." />
          </div>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t) => (
              <article
                key={t.id}
                className="rounded-2xl border bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white">
                  {inisial(t.nama)}
                </span>
                <h3 className="mt-4 font-bold text-ink">{t.nama}</h3>
                <p className="mt-1 text-xs text-muted">NIP. {t.nip}</p>
                <div className="mt-3 flex justify-center">
                  <Badge variant="accent">{t.kategori}</Badge>
                </div>
                <p className="mt-2 text-sm font-semibold text-primary">{t.jabatan}</p>
                <p className="text-sm text-muted">Mapel: {t.mapel}</p>
              </article>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              disabled={current === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-lg border px-4 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Sebelumnya
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={cn(
                  "h-9 w-9 rounded-lg text-sm font-semibold",
                  n === current ? "bg-primary text-white" : "border hover:bg-slate-50"
                )}
              >
                {n}
              </button>
            ))}
            <button
              disabled={current === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded-lg border px-4 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Berikutnya
            </button>
          </div>
        )}
      </Container>
    </>
  );
}
