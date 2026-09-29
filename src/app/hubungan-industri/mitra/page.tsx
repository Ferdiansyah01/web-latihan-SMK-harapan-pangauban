import type { Metadata } from "next";
import { partners } from "@/data/school";
import { Container, PageHero, SectionTitle } from "@/components/ui/primitives";
import { PartnerCard } from "@/components/cards";

export const metadata: Metadata = {
  title: "Mitra Industri | SMK Harapan Pangauban",
  description: "Daftar mitra industri dan bentuk kerja sama: PKL, kurikulum, Teaching Factory, sertifikasi, dan rekrutmen.",
};

const JENIS = [
  { nama: "PKL / Magang", deskripsi: "Penempatan siswa kelas XI selama 6 bulan dengan pembimbing industri." },
  { nama: "Sinkronisasi Kurikulum", deskripsi: "Penyelarasan materi ajar dengan kebutuhan dan standar perusahaan." },
  { nama: "Teaching Factory", deskripsi: "Pesanan produk dan jasa nyata dikerjakan siswa dengan pendampingan guru dan industri." },
  { nama: "Sertifikasi", deskripsi: "Uji kompetensi bersama LSP dan perusahaan untuk lisensi kerja." },
  { nama: "Rekrutmen", deskripsi: "Campus hiring dan penyaluran lulusan melalui BKK." },
  { nama: "Workshop & Guru Tamu", deskripsi: "Pelatihan rutin oleh praktisi industri di kelas dan laboratorium." },
];

export default function MitraPage() {
  return (
    <>
      <PageHero
        eyebrow="Mitra"
        title="Mitra Industri"
        description="Jaringan kerja sama sekolah dengan dunia usaha dan dunia industri."
      />
      <Container className="py-10 sm:py-14">
        <SectionTitle
          title="Jenis Kerja Sama"
          description="Enam bentuk kemitraan yang dijalankan bersama perusahaan."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {JENIS.map((j, i) => (
            <div key={j.nama} className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">0{i + 1}</p>
              <h3 className="mt-1 font-bold text-ink">{j.nama}</h3>
              <p className="mt-2 text-sm text-muted">{j.deskripsi}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <SectionTitle title="Daftar Mitra" description={`${partners.length} perusahaan dan studio mitra aktif.`} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <PartnerCard key={p.nama} partner={p} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
