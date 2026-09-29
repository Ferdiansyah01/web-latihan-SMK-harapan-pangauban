import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, SectionTitle } from "@/components/ui/primitives";
import { partners, jobs } from "@/data/school";

export const metadata: Metadata = {
  title: "Hubungan Industri | SMK Harapan Pangauban",
  description: "Mitra industri, Teaching Factory, PKL, BKK, dan layanan karier SMK Harapan Pangauban.",
};

const SUBSECTIONS = [
  {
    href: "/hubungan-industri/mitra",
    title: "Mitra Industri",
    deskripsi: "Jaringan 8+ perusahaan mitra untuk kurikulum, sertifikasi, dan rekrutmen.",
    ikon: "🤝",
  },
  {
    href: "/hubungan-industri/teaching-factory",
    title: "Teaching Factory (TeFa)",
    deskripsi: "Pembelajaran berbasis produksi dengan pesanan nyata dari industri.",
    ikon: "🏭",
  },
  {
    href: "/hubungan-industri/pkl",
    title: "PKL / Magang",
    deskripsi: "Praktik Kerja Lapangan 6 bulan di perusahaan mitra terkurasi.",
    ikon: "🧰",
  },
  {
    href: "/hubungan-industri/bkk",
    title: "BKK & Karier",
    deskripsi: "Bursa Kerja Khusus: penyaluran kerja, job fair, dan lowongan.",
    ikon: "💼",
  },
  {
    href: "/hubungan-industri/bkk",
    title: "Career Center",
    deskripsi: "Konseling karier, persiapan CV, wawancara, dan tracer study alumni.",
    ikon: "🎓",
  },
];

const STATS = [
  { nilai: "8+", label: "Perusahaan Mitra" },
  { nilai: "95%", label: "Lulusan Terserap Kerja" },
  { nilai: "350+", label: "Siswa PKL per Tahun" },
  { nilai: `${jobs.length}+`, label: "Lowongan Aktif via BKK" },
];

export default function HubunganIndustriPage() {
  return (
    <>
      <PageHero
        eyebrow="Hubungan Industri"
        title="Sinergi Sekolah & Dunia Kerja"
        description="Link and match dengan industri melalui kemitraan, Teaching Factory, PKL, dan BKK."
      />
      <Container className="py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-primary">{s.nilai}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <SectionTitle
            title="Lima Layanan Hubungan Industri"
            description="Jelajahi setiap unit layanan kerja sama industri sekolah."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SUBSECTIONS.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-3xl">{s.ikon}</span>
                <h3 className="mt-3 text-lg font-bold text-ink group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.deskripsi}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Kunjungi <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
            <div className="rounded-2xl bg-primary p-6 text-white">
              <h3 className="text-lg font-bold">Mitra Unggulan</h3>
              <ul className="mt-3 space-y-1 text-sm text-white/85">
                {partners.slice(0, 5).map((p) => (
                  <li key={p.nama}>• {p.nama}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
