"use client";

import { useMemo, useState } from "react";
import { Container, PageHero, EmptyState } from "@/components/ui/primitives";
import { AchievementCard } from "@/components/cards";
import { achievements } from "@/data/school";

const daftarTingkat = ["Semua", "Internasional", "Nasional", "Provinsi", "Kota/Kabupaten"] as const;
const daftarKategori = ["Semua", "Akademik", "Non-Akademik"] as const;

export default function PrestasiPage() {
  const [tingkat, setTingkat] = useState<(typeof daftarTingkat)[number]>("Semua");
  const [kategori, setKategori] = useState<(typeof daftarKategori)[number]>("Semua");
  const [cari, setCari] = useState("");

  const hasil = useMemo(() => {
    const q = cari.trim().toLowerCase();
    return achievements.filter((a) => {
      if (tingkat !== "Semua" && a.tingkat !== tingkat) return false;
      if (kategori !== "Semua" && a.kategori !== kategori) return false;
      if (q && !`${a.kompetisi} ${a.siswa} ${a.peringkat}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [tingkat, kategori, cari]);

  return (
    <>
      <PageHero
        eyebrow="Kesiswaan — Prestasi"
        title="Prestasi Siswa"
        description="Capaian siswa tingkat kota/kabupaten hingga internasional di bidang akademik dan non-akademik."
      />
      <Container className="py-14">
        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
          <label htmlFor="cari-prestasi" className="text-sm font-semibold text-ink">
            Cari prestasi
          </label>
          <input
            id="cari-prestasi"
            type="search"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="Contoh: robot, film, silat…"
            className="mt-2 min-h-[44px] w-full rounded-xl border px-4 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <fieldset>
              <legend className="text-sm font-semibold text-ink">Tingkat</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {daftarTingkat.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTingkat(t)}
                    aria-pressed={tingkat === t}
                    className={`min-h-[36px] rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                      tingkat === t ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {t === "Kota/Kabupaten" ? "Kota-Kabupaten" : t}
                  </button>
                ))}
              </div>
            </fieldset>
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
                      kategori === k ? "bg-accent text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <p className="mt-4 text-sm text-muted" role="status">
            Menampilkan {hasil.length} dari {achievements.length} prestasi
          </p>
        </div>

        {hasil.length === 0 ? (
          <div className="mt-6">
            <EmptyState message="Tidak ada prestasi yang cocok dengan filter. Coba ubah kata kunci atau filter." />
          </div>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hasil.map((a) => (
              <AchievementCard key={a.id} item={a} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
