import type { Metadata } from "next";
import { Container, PageHero, Badge } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "OSIS | Kesiswaan SMK Harapan Pangauban",
  description:
    "Profil OSIS SMK Harapan Pangauban: visi-misi, struktur pengurus, dan program kerja tahunan — wadah kepemimpinan siswa.",
};

const pengurus = [
  { jabatan: "Ketua OSIS", nama: "Rangga Saputra (XI RPL 1)", tugas: "Koordinator umum organisasi & perwakilan siswa." },
  { jabatan: "Wakil Ketua OSIS", nama: "Nadia Putri (XI DKV 2)", tugas: "Pendamping ketua dan koordinator seksi bidang." },
  { jabatan: "Sekretaris", nama: "Bagas Firmansyah (X SIJA 1)", tugas: "Administrasi, surat-menyurat, dan dokumentasi." },
  { jabatan: "Bendahara", nama: "Kirana Dewi (XI AKL 1)", tugas: "Pengelolaan kas dan laporan keuangan kegiatan." },
];

const seksi = [
  "Seksi Keimanan & Ketakwaan",
  "Seksi Kedisiplinan & Keamanan",
  "Seksi Olahraga & Kesehatan",
  "Seksi Seni & Kreativitas",
  "Seksi Humas & Media",
  "Seksi Lingkungan Hidup",
];

const proker = [
  { nama: "Masa Pengenalan Lingkungan Sekolah (MPLS)", waktu: "Juli", desc: "Penyambutan siswa baru yang edukatif dan tanpa perpeloncoan." },
  { nama: "Class Meeting & Porseni", waktu: "Desember", desc: "Kompetisi antar kelas: futsal, e-sport, vocal group, dan cerdas cermat." },
  { nama: "Peringatan Hari Besar Nasional", waktu: "Sepanjang tahun", desc: "Upacara dan lomba Sumpah Pemuda, Kemerdekaan, Kartini, dan lainnya." },
  { nama: "Bakti Sosial & Sekolah Adiwiyata", waktu: "Februari & Juni", desc: "Donor darah, penghijauan, dan bank sampah sekolah." },
  { nama: "Latihan Dasar Kepemimpinan (LDK)", waktu: "September", desc: "Kaderisasi calon pengurus OSIS dan ekstrakurikuler." },
  { nama: "Festival Vokasi & Expo Ekskul", waktu: "Oktober", desc: "Pameran karya dan perekrutan anggota baru ekstrakurikuler." },
];

export default function OsisPage() {
  return (
    <>
      <PageHero
        eyebrow="Kesiswaan — OSIS"
        title="OSIS SMK Harapan Pangauban"
        description="Organisasi Siswa Intra Sekolah: wadah demokrasi, kepemimpinan, dan pengembangan diri seluruh siswa."
      />
      <Container className="py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <section aria-label="Profil OSIS" className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
            <Badge variant="accent">Profil</Badge>
            <h2 className="mt-3 text-xl font-bold text-ink">Visi & Misi</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <strong className="text-ink">Visi:</strong> menjadikan OSIS sebagai motor penggerak siswa yang
              beriman, disiplin, kreatif, dan berjiwa kepemimpinan Pancasila.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Menumbuhkan keimanan dan akhlak mulia melalui kegiatan keagamaan.</li>
              <li>Mengembangkan kepemimpinan lewat organisasi dan kepanitiaan nyata.</li>
              <li>Menyalurkan aspirasi siswa melalui forum musyawarah berkala.</li>
              <li>Mendukung prestasi akademik dan non-akademik seluruh siswa.</li>
            </ul>
          </section>
          <section aria-label="Struktur pengurus" className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
            <Badge variant="accent">Struktur Inti 2025/2026</Badge>
            <h2 className="mt-3 text-xl font-bold text-ink">Pengurus Inti</h2>
            <ul className="mt-4 space-y-3">
              {pengurus.map((p) => (
                <li key={p.jabatan} className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.jabatan}</p>
                  <p className="mt-1 text-sm font-bold text-ink">{p.nama}</p>
                  <p className="text-sm text-muted">{p.tugas}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-label="Seksi bidang" className="mt-8 rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-ink">Seksi Bidang</h2>
          <p className="mt-1 text-sm text-muted">Enam seksi bidang yang menjalankan program sesuai minatnya.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {seksi.map((s) => (
              <span key={s} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section aria-label="Program kerja" className="mt-8">
          <h2 className="text-xl font-bold text-ink">Program Kerja Tahunan</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {proker.map((p) => (
              <article key={p.nama} className="rounded-2xl border bg-white p-6 shadow-sm">
                <Badge variant="outline">{p.waktu}</Badge>
                <h3 className="mt-3 font-bold text-ink">{p.nama}</h3>
                <p className="mt-1 text-sm text-muted">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
