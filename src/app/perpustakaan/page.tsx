"use client";

import { useMemo, useState } from "react";
import { books } from "@/data/books";
import { Container, PageHero, Badge, EmptyState } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

const kategoriList = ["Semua", "Teknologi", "Teknik", "Sains", "Literasi", "Kewirausahaan"] as const;
const filterKetersediaan = ["Semua", "Tersedia"] as const;

export default function PerpustakaanPage() {
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState<string>("Semua");
  const [ketersediaan, setKetersediaan] = useState<string>("Semua");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return books.filter((b) => {
      const cocokCari =
        q === "" ||
        b.judul.toLowerCase().includes(q) ||
        b.penulis.toLowerCase().includes(q);
      const cocokKategori = kategori === "Semua" || b.kategori === kategori;
      const cocokSedia = ketersediaan === "Semua" || b.tersedia > 0;
      return cocokCari && cocokKategori && cocokSedia;
    });
  }, [search, kategori, ketersediaan]);

  const isFiltered = search.trim() !== "" || kategori !== "Semua" || ketersediaan !== "Semua";

  function onReset() {
    setSearch("");
    setKategori("Semua");
    setKetersediaan("Semua");
  }

  return (
    <>
      <PageHero
        eyebrow="E-Library"
        title="Perpustakaan Digital"
        description="Jelajahi koleksi buku perpustakaan SMK Harapan Pangauban. Cari berdasarkan judul atau penulis, saring per kategori, dan cek ketersediaan stok."
      />
      <Container className="py-10 sm:py-14">
        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
          <label htmlFor="cari-buku" className="mb-1 block text-sm font-semibold text-ink">
            Cari Buku
          </label>
          <input
            id="cari-buku"
            type="search"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            placeholder="Cari judul atau penulis, cth. PLC, kewirausahaan..."
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <div className="mt-4 flex flex-wrap gap-2" aria-label="Filter kategori">
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
          <div className="mt-3 flex flex-wrap items-center gap-2" aria-label="Filter ketersediaan">
            {filterKetersediaan.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setKetersediaan(f)}
                aria-pressed={ketersediaan === f}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  ketersediaan === f
                    ? "bg-accent text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                )}
              >
                {f}
              </button>
            ))}
            {isFiltered && (
              <button
                type="button"
                onClick={onReset}
                className="ml-auto rounded-full border-2 border-primary px-4 py-1.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
              >
                Atur Ulang
              </button>
            )}
          </div>
        </div>

        <p role="status" className="mt-4 text-sm text-muted">
          Menampilkan {filtered.length} dari {books.length} koleksi buku
        </p>

        {filtered.length === 0 ? (
          <div className="mt-6">
            <EmptyState message="Buku tidak ditemukan. Coba kata kunci atau filter lain." />
          </div>
        ) : (
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b) => (
              <li key={b.id} className="flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent">{b.kategori}</Badge>
                  <span className="text-xs text-muted">Terbit {b.tahun}</span>
                </div>
                <h2 className="mt-2 font-bold text-ink">{b.judul}</h2>
                <p className="mt-1 text-sm text-muted">oleh {b.penulis}</p>
                <div className="mt-3">
                  {b.tersedia > 0 ? (
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Tersedia {b.tersedia}
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                      Dipinjam
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
