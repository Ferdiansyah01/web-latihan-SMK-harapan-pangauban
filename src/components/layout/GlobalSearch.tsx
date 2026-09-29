"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { globalSearch } from "@/lib/search";
import { formatTanggal } from "@/lib/utils";
import { Badge } from "@/components/ui/primitives";

function formatResultDate(kategori: string, tanggal?: string): string | null {
  if (!tanggal) return null;
  if (kategori === "Prestasi" || kategori === "Inovasi") return tanggal;
  if (/^\d{4}-\d{2}-\d{2}$/.test(tanggal)) return formatTanggal(tanggal);
  return tanggal;
}

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => globalSearch(query), [query]);

  // Fokus otomatis + kunci scroll + tutup via Escape saat modal terbuka
  useEffect(() => {
    if (!open) return;
    setQuery("");
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Cari informasi sekolah"
        title="Cari informasi sekolah"
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border text-ink transition-colors hover:bg-slate-100"
      >
        <Search size={20} aria-hidden />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 p-4 pt-[10vh]"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Pencarian global"
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b p-4">
              <Search size={20} className="shrink-0 text-muted" aria-hidden />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari informasi sekolah..."
                aria-label="Cari informasi sekolah"
                className="min-h-[44px] w-full bg-transparent text-base outline-none placeholder:text-muted"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup pencarian"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl hover:bg-slate-100"
              >
                <X size={20} aria-hidden />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-4">
              {query.trim().length < 2 ? (
                <div className="py-6 text-center">
                  <p className="text-sm font-semibold text-ink">Cari Berita, Pengumuman, Program, GTK, Prestasi, Lowongan…</p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {["PPDB", "RPL", "PKL", "Beasiswa", "Robotik", "Lowongan"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setQuery(s)}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <p role="status" className="py-8 text-center text-sm text-muted">
                  Tidak ditemukan hasil untuk “{query.trim()}”. Coba kata kunci lain.
                </p>
              ) : (
                <>
                  <p role="status" className="px-1 pb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                    {results.length} hasil ditemukan
                  </p>
                  <ul className="space-y-2">
                    {results.map((r, idx) => {
                      const date = formatResultDate(r.kategori, r.tanggal);
                      return (
                        <li key={`${r.href}-${r.judul}-${idx}`}>
                          <Link
                            href={r.href}
                            onClick={() => setOpen(false)}
                            className="group flex items-start justify-between gap-3 rounded-xl border p-3 transition-all hover:border-primary hover:shadow-md"
                          >
                            <span className="min-w-0">
                              <Badge variant="outline">{r.kategori}</Badge>
                              <span className="mt-1 block truncate font-bold text-ink group-hover:text-primary">
                                {r.judul}
                              </span>
                              {date && <span className="block text-xs text-muted">{date}</span>}
                              <span className="mt-0.5 block truncate text-xs text-muted">{r.excerpt}</span>
                            </span>
                            <ArrowRight size={16} className="mt-1 shrink-0 text-muted group-hover:text-primary" aria-hidden />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
