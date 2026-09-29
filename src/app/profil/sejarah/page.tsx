import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageHero, SectionTitle, Badge } from "@/components/ui/primitives";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sejarah Sekolah | SMK Harapan Pangauban",
  description:
    "Perjalanan SMK Harapan Pangauban sejak 1985: dari STM dengan 3 jurusan hingga menjadi SMK unggulan dengan 8 program keahlian dan Teaching Factory.",
};

const timeline = [
  {
    tahun: "1985",
    judul: "Pendirian STM Negeri",
    deskripsi:
      "Didirikan sebagai STM Negeri dengan 3 jurusan — Mesin, Listrik, dan Bangunan — serta 120 siswa angkatan pertama dan 18 guru. Pembelajaran berfokus pada keterampilan dasar industri.",
  },
  {
    tahun: "1995",
    judul: "Perluasan Program & Gedung Baru",
    deskripsi:
      "Jumlah siswa menembus 800 orang. Dibangun bengkel otomotif dan laboratorium elektronika. Dibuka jurusan Teknik Komputer sebagai cikal bakal program TI.",
  },
  {
    tahun: "2005",
    judul: "Transformasi Menjadi SMK Modern",
    deskripsi:
      "Berganti nama menjadi SMK Harapan Pangauban. Kurikulum Berbasis Kompetensi diterapkan, dibuka program Rekayasa Perangkat Lunak dan Akuntansi. Meraih akreditasi A pertama kali.",
  },
  {
    tahun: "2015",
    judul: "SMK Rujukan & Bursa Kerja",
    deskripsi:
      "Ditetapkan sebagai SMK Rujukan nasional. Bursa Kerja Khusus (BKK) didirikan, kemitraan industri menembus 40 perusahaan, dan program Praktik Kerja Lapangan diperkuat.",
  },
  {
    tahun: "2020",
    judul: "Digitalisasi & Teaching Factory",
    deskripsi:
      "Pembelajaran daring penuh selama pandemi, perpustakaan digital diluncurkan. Gedung Teaching Factory 3 lantai diresmikan sebagai pusat produksi dan layanan jasa siswa.",
  },
  {
    tahun: "2026",
    judul: "Unggul, Berdaya Saing Global",
    deskripsi:
      "Kini melayani 1.250+ siswa di 8 program keahlian dengan 80+ mitra industri, juara LKS Nasional Web Technologies, dan roadmap menuju SMK bertaraf internasional.",
  },
];

export default function SejarahPage() {
  return (
    <>
      <PageHero
        eyebrow="Profil"
        title="Sejarah Sekolah"
        description="Empat dekade perjalanan SMK Harapan Pangauban: tumbuh bersama industri, teknologi, dan generasi vokasi Indonesia."
      />
      <Container className="py-14">
        <SectionTitle
          align="left"
          eyebrow="Sejak 1985"
          title="Linimasa Perjalanan Kami"
          description="Setiap dekade membawa tonggak penting — dari bengkel sederhana hingga gedung Teaching Factory modern."
        />
        <ol className="relative mt-10 space-y-8 border-l-2 border-primary/20 pl-6 sm:pl-8">
          {timeline.map((item) => (
            <li key={item.tahun} className="relative">
              <span
                aria-hidden
                className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-accent/20 sm:-left-[41px]"
              />
              <article className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <Badge variant="dark">{item.tahun}</Badge>
                <h3 className="mt-3 text-lg font-bold text-ink">{item.judul}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.deskripsi}</p>
              </article>
            </li>
          ))}
        </ol>
        <section aria-label="Warisan sekolah" className="relative mt-12 overflow-hidden rounded-2xl p-8 text-white sm:p-10">
          <Image src={IMG.wisudaTopi} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/92 via-[#0F3D3E]/80 to-[#0F3D3E]/50" aria-hidden />
          <div className="relative">
          <h2 className="text-2xl font-bold">Dari 120 Siswa Menjadi 1.250+ Lulusan Siap Kerja</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-white/85">
            Selama 40 tahun, lebih dari 18.000 alumni telah lulus dan bekerja di perusahaan nasional maupun
            multinasional, berwirausaha, serta melanjutkan ke perguruan tinggi. Semangat pendiri — “Keterampilan
            untuk Kemandirian” — tetap menjadi kompas kami hingga hari ini.
          </p>
          </div>
        </section>
      </Container>
    </>
  );
}
