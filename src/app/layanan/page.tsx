import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, SectionTitle } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Layanan Digital | SMK Harapan Pangauban",
  description:
    "Pusat layanan digital SMK Harapan Pangauban: PPDB online, e-library, career center, e-counseling, kalender akademik, dan pengaduan.",
};

const services = [
  { nama: "PPDB Online", deskripsi: "Pendaftaran peserta didik baru 2026/2027 dengan empat jalur seleksi.", href: "/ppdb" },
  { nama: "E-Library", deskripsi: "Katalog dan ketersediaan koleksi perpustakaan sekolah.", href: "/perpustakaan" },
  { nama: "Career Center", deskripsi: "Info lowongan, job fair, dan layanan BKK untuk alumni.", href: "/hubungan-industri/bkk" },
  { nama: "E-Counseling", deskripsi: "Jadwalkan sesi konseling bersama guru BK secara aman.", href: "/konseling" },
  { nama: "Kalender Akademik", deskripsi: "Jadwal kegiatan akademik, ujian, dan event sekolah.", href: "/agenda" },
  { nama: "Pengaduan & Kontak", deskripsi: "Sampaikan aspirasi, pengaduan, dan pertanyaan resmi.", href: "/kontak" },
];

const faq = [
  { q: "Bagaimana cara mendaftar PPDB online?", a: "Buka halaman PPDB Online, pilih jalur pendaftaran, lengkapi berkas NISN, rapor, KK, dan akta kelahiran, lalu pantau hasil seleksi di laman yang sama." },
  { q: "Apakah layanan konseling berbayar dan rahasia?", a: "Gratis untuk seluruh siswa dan bersifat rahasia. Isi sesi hanya dibuka atas persetujuan siswa kecuali menyangkut keselamatan." },
  { q: "Bagaimana meminjam buku perpustakaan?", a: "Cek ketersediaan di E-Library, catat judul buku, lalu kunjungi perpustakaan dengan kartu pelajar untuk proses peminjaman." },
  { q: "Ke mana menyampaikan pengaduan?", a: "Gunakan halaman Pengaduan & Kontak. Sertakan identitas, kronologi, dan bukti pendukung agar tindak lanjut lebih cepat." },
];

export default function LayananPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Layanan Digital"
        description="Satu pintu untuk seluruh layanan digital sekolah — dari pendaftaran hingga karier alumni."
      />
      <Container className="py-14">
        <SectionTitle
          eyebrow="Akses Cepat"
          title="Pilih Layanan"
          description="Seluruh layanan terhubung ke halaman resmi sekolah yang sudah aktif."
        />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.nama} className="flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <h2 className="font-bold text-ink">{s.nama}</h2>
              <p className="mt-1 flex-1 text-sm text-muted">{s.deskripsi}</p>
              <Link href={s.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Buka Layanan →
              </Link>
            </li>
          ))}
        </ul>
        <section aria-label="Pertanyaan umum" className="mt-14">
          <SectionTitle eyebrow="Bantuan" title="Pertanyaan Umum" />
          <div className="mx-auto mt-6 max-w-3xl space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="rounded-2xl border bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-ink">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
