"use client";

import { useMemo, useState } from "react";
import { Container, PageHero, Badge, EmptyState } from "@/components/ui/primitives";
import { innovations } from "@/data/school";

const daftarKategori = ["Semua", "Teknologi", "Digital", "Pendidikan", "Lingkungan", "Industri", "Produk"] as const;

export default function InovasiPage() {
  const [cari, setCari] = useState("");
  const [kategori, setKategori] = useState<(typeof daftarKategori)[number]>("Semua");
  const [tahun, setTahun] = useState<string>("Semua");
  const [terbuka, setTerbuka] = useState<number | null>(null);

  const daftarTahun = useMemo(() => {
    const unik = [...new Set(innovations.map((i) => i.tahun))].sort((a, b) => b - a);
    return ["Semua", ...unik.map(String)];
  }, []);

  const hasil = useMemo(() => {
    const q = cari.trim().toLowerCase();
    return innovations.filter((i) => {
      if (kategori !== "Semua" && i.kategori !== kategori) return false;
      if (tahun !== "Semua" && i.tahun !== Number(tahun)) return false;
      if (q && !`${i.nama} ${i.pembuat} ${i.deskripsi} ${i.penghargaan}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [cari, kategori, tahun]);

  return (
    <>
      <PageHero
        eyebrow="Kesiswaan — Inovasi"
        title="Inovasi & Karya"
        description="Produk inovasi siswa dan guru hasil Teaching Factory — dari IoT, digital, hingga urban farming."
      />
      <Container className="py-14">
        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
          <label htmlFor="cari-inovasi" className="text-sm font-semibold text-ink">
            Cari inovasi
          </label>
          <input
            id="cari-inovasi"
            type="search"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="Contoh: IoT, absensi, kompos…"
            className="mt-2 min-h-[44px] w-full rounded-xl border px-4 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <fieldset>
              <legend className="text-sm font-semibold text-ink">Kategori</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {daftarKategori.map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setKategori(k)}
                    aria-pressed={kategori === k}
                    className={`min-h-[36px] rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                      kategori === k ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold text-ink">Tahun</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {daftarTahun.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTahun(t)}
                    aria-pressed={tahun === t}
                    className={`min-h-[36px] rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                      tahun === t ? "bg-accent text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <p className="mt-4 text-sm text-muted" role="status">
            Menampilkan {hasil.length} dari {innovations.length} inovasi
          </p>
        </div>

        {hasil.length === 0 ? (
          <div className="mt-6">
            <EmptyState message="Tidak ada inovasi yang cocok dengan filter. Coba ubah kata kunci atau filter." />
          </div>
        ) : (
          <ul className="mt-6 space-y-4">
            {hasil.map((i) => {
              const open = terbuka === i.id;
              return (
                <li key={i.id} className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="accent">{i.kategori}</Badge>
                        <Badge variant="outline">{i.tahun}</Badge>
                      </div>
                      <h2 className="mt-2 text-lg font-bold text-ink">{i.nama}</h2>
                      <p className="text-sm text-muted">oleh {i.pembuat}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setTerbuka(open ? null : i.id)}
                      aria-expanded={open}
                      className="min-h-[40px] rounded-xl border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      {open ? "Tutup Detail" : "Lihat Detail"}
                    </button>
                  </div>
                  <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <dt className="font-semibold text-ink">Deskripsi</dt>
                      <dd className="mt-1 text-muted clamp-3">{i.deskripsi}</dd>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3">
                      <dt className="font-semibold text-ink">Penghargaan</dt>
                      <dd className="mt-1 text-muted">{i.penghargaan}</dd>
                    </div>
                  </dl>
                  {open && (
                    <div className="mt-3 rounded-xl border bg-white p-4 text-sm leading-relaxed text-muted">
                      <p><strong className="text-ink">Detail karya:</strong> {i.deskripsi}</p>
                      <p className="mt-2"><strong className="text-ink">Tim pembuat:</strong> {i.pembuat}</p>
                      <p className="mt-2"><strong className="text-ink">Penghargaan:</strong> {i.penghargaan} ({i.tahun})</p>
                      <p className="mt-2"><strong className="text-ink">Kategori:</strong> {i.kategori}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </>
  );
}
