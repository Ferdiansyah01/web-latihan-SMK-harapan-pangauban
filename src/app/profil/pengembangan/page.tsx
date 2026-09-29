import type { Metadata } from "next";
import { Container, PageHero, SectionTitle, Badge } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Pengembangan Sekolah | SMK Harapan Pangauban",
  description:
    "Roadmap 2024–2029 dan 4 pilar pengembangan SMK Harapan Pangauban menuju SMK bertaraf internasional.",
};

const roadmap = [
  { tahun: "2024", fokus: "Fondasi Mutu", detail: "Audit mutu ISO 9001:2015, pemutakhiran 8 kurikulum konsentrasi, dan peremajaan 6 laboratorium." },
  { tahun: "2025", fokus: "Teaching Factory", detail: "Gedung TeFa beroperasi penuh, 12 produk jasa diluncurkan, Adiwiyata Provinsi diraih." },
  { tahun: "2026", fokus: "Prestasi & Sertifikasi", detail: "Juara LKS Nasional, 100% lulusan tersertifikasi LSP-P1, 20 kelas industri aktif." },
  { tahun: "2027", fokus: "Digitalisasi Penuh", detail: "E-rapor terintegrasi industri, LMS sekolah, dan perpustakaan digital 20.000 koleksi." },
  { tahun: "2028", fokus: "Internasionalisasi", detail: "Kelas bahasa Jepang/Jerman, pertukaran pelajar ASEAN, dan sertifikasi bertaraf internasional." },
  { tahun: "2029", fokus: "SMK Unggulan Global", detail: "Akreditasi internasional program TI dan otomotif, 90%+ serapan lulusan." },
];

const pilar = [
  { judul: "1. Mutu Pembelajaran", deskripsi: "Kurikulum sinkron industri, guru magang industri tiap 3 tahun, dan pembelajaran berbasis proyek riil.", contoh: "Sinkronisasi bersama 20 industri, guru tersertifikasi BNSP." },
  { judul: "2. Kemitraan Industri", deskripsi: "PKL terpadu, kelas industri, Teaching Factory, dan rekrutmen langsung melalui BKK.", contoh: "80+ mitra, 15 perusahaan rekrutmen campus hiring." },
  { judul: "3. Karakter & Kewirausahaan", deskripsi: "Projek Penguatan Profil Pelajar Pancasila, inkubator bisnis siswa, dan bank mini sekolah.", contoh: "20 UMKM binaan DKV, expo kewirausahaan tahunan." },
  { judul: "4. Sarana & Lingkungan", deskripsi: "Bengkel berstandar industri, kampus hijau, dan digitalisasi layanan administrasi.", contoh: "Sport center, studio DKV, NOC mini, urban farming." },
];

export default function PengembanganPage() {
  return (
    <>
      <PageHero
        eyebrow="Profil"
        title="Pengembangan Sekolah"
        description="Rencana strategis SMK Harapan Pangauban 2024–2029: dari fondasi mutu menuju pengakuan global."
      />
      <Container className="py-14">
        <SectionTitle
          align="left"
          eyebrow="Roadmap"
          title="Roadmap 2024–2029"
          description="Enam tahap terukur dengan indikator capaian yang dievaluasi setiap akhir tahun ajaran."
        />
        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((r) => (
            <li key={r.tahun} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Badge variant="dark">{r.tahun}</Badge>
                <Badge variant="accent">{r.fokus}</Badge>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{r.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <SectionTitle
            align="left"
            eyebrow="Strategi"
            title="4 Pilar Pengembangan"
            description="Fondasi yang menopang seluruh program kerja tahunan sekolah."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {pilar.map((p) => (
              <article key={p.judul} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary">{p.judul}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.deskripsi}</p>
                <p className="mt-3 rounded-xl bg-slate-50 p-3 text-xs font-medium text-ink">{p.contoh}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
