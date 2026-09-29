import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionTitle, PageHero, Button } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Profil Sekolah | SMK Harapan Pangauban",
  description: "Profil SMK Harapan Pangauban: identitas, sejarah, visi misi, dan keunggulan sekolah vokasi.",
};

const cards = [
  { t: "Sejarah", d: "Perjalanan sejak 1985 menjadi SMK unggul.", h: "/profil/sejarah" },
  { t: "Visi & Misi", d: "Arah dan komitmen pendidikan vokasi.", h: "/profil/visi-misi" },
  { t: "Sambutan Kepala Sekolah", d: "Pesan dan visi kepemimpinan sekolah.", h: "/profil/sambutan" },
  { t: "Struktur Organisasi", d: "Tata kelola dan manajemen sekolah.", h: "/profil/struktur-organisasi" },
  { t: "Pengembangan Sekolah", d: "Roadmap dan rencana strategis.", h: "/profil/pengembangan" },
];

export default function ProfilPage() {
  return (
    <>
      <PageHero eyebrow="Profil" title="Profil Sekolah" description="Mengenal identitas, sejarah, dan keunggulan SMK Harapan Pangauban sebagai sekolah vokasi berbasis teknologi dan industri." />
      <Container className="py-14">
        <SectionTitle align="left" title="Identitas Sekolah" description="SMK Harapan Pangauban berdiri sejak 1985, terakreditasi A (Unggul), dengan 1.250 siswa, 120 guru dan tenaga kependidikan, 8 program keahlian, dan 80+ mitra industri." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { k: "NPSN", v: "20123456" },
            { k: "Akreditasi", v: "A (Unggul)" },
            { k: "Tahun Berdiri", v: "1985" },
            { k: "Siswa", v: "1.250+" },
            { k: "Guru & GTK", v: "120+" },
            { k: "Mitra Industri", v: "80+" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">{s.k}</p>
              <p className="mt-1 text-xl font-extrabold text-primary">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link key={c.h} href={c.h} className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-bold text-ink">{c.t}</h3>
              <p className="mt-1 text-sm text-muted">{c.d}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">Pelajari →</span>
            </Link>
          ))}
        </div>
        <div className="mt-10"><Button href="/ppdb">Lihat Informasi PPDB</Button></div>
      </Container>
    </>
  );
}
