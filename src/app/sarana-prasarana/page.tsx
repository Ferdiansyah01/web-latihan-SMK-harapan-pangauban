"use client";

import { useMemo, useState } from "react";
import { facilities } from "@/data/school";
import { Container, PageHero, Badge, EmptyState } from "@/components/ui/primitives";
import { FacilityCard } from "@/components/cards";
import { cn } from "@/lib/utils";

export default function SaranaPrasaranaPage() {
  const kategoriList = useMemo(() => ["Semua", ...Array.from(new Set(facilities.map((f) => f.kategori)))], []);
  const [kategori, setKategori] = useState("Semua");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return facilities.filter((f) => {
      const cocokKategori = kategori === "Semua" || f.kategori === kategori;
      const cocokQuery =
        !query || f.nama.toLowerCase().includes(query) || f.deskripsi.toLowerCase().includes(query);
      return cocokKategori && cocokQuery;
    });
  }, [kategori, q]);

  return (
    <>
      <PageHero
        eyebrow="Fasilitas"
        title="Sarana & Prasarana"
        description="Fasilitas pembelajaran modern berstandar industri untuk mendukung praktik dan Teaching Factory."
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
            placeholder="Cari fasilitas..."
            aria-label="Cari sarana dan prasarana"
            className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:max-w-xs"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p role="status" className="text-sm text-muted">
            Menampilkan {filtered.length} dari {facilities.length} fasilitas
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
            <EmptyState message="Fasilitas tidak ditemukan." />
          </div>
        ) : (
          <>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((f) => (
                <FacilityCard key={f.id} item={f} />
              ))}
            </div>

            <div className="mt-12 rounded-2xl border bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-ink">Detail Daftar Fasilitas</h2>
              <p className="mt-1 text-sm text-muted">Rincian isi setiap sarana beserta kategorinya.</p>
              <div className="mt-6 space-y-4">
                {filtered.map((f) => (
                  <div key={f.id} className="rounded-xl bg-slate-50 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-bold text-ink">{f.nama}</h3>
                      <Badge variant="outline">{f.kategori}</Badge>
                    </div>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {f.daftar.map((d) => (
                        <li key={d} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
}
