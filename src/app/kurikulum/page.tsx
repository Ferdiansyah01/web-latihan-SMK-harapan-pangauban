import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, SectionTitle, Badge, Button } from "@/components/ui/primitives";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Kurikulum | SMK Harapan Pangauban",
  description:
    "Kurikulum Merdeka vokasi SMK Harapan Pangauban: struktur pembelajaran, project-based learning, sertifikasi kompetensi, dan integrasi Teaching Factory.",
};

const struktur = [
  { kelompok: "A. Mata Pelajaran Umum", contoh: "Pendidikan Agama, PPKn, Bahasa Indonesia, Matematika, Sejarah", jp: "12–14 JP/minggu" },
  { kelompok: "B. Kejuruan Dasar (Fase F, Kelas X)", contoh: "Proses Bisnis, K3LH, Budaya Kerja Industri, Gambar Teknik", jp: "10–12 JP/minggu" },
  { kelompok: "C. Konsentrasi Keahlian (Kelas XI–XII)", contoh: "Mata pelajaran produktif + Projek Kreatif & Kewirausahaan", jp: "20–24 JP/minggu" },
  { kelompok: "D. Praktik Kerja Lapangan", contoh: "PKL 6 bulan di industri pasangan kelas XI–XII", jp: "1 semester penuh" },
];

const pbl = [
  { tahap: "1. Brief Industri", detail: "Siswa menerima brief nyata dari mitra — mis. aplikasi absensi, branding UMKM." },
  { tahap: "2. Perencanaan", detail: "Menyusun proposal, timeline, dan pembagian peran layaknya tim profesional." },
  { tahap: "3. Produksi di TeFa", detail: "Pengerjaan di lab/bengkel Teaching Factory dengan pendampingan guru + mentor industri." },
  { tahap: "4. Uji & Sertifikasi", detail: "Quality control, presentasi ke industri, dan asesmen kompetensi." },
];

const sertifikasi = [
  "LSP-P1 SMK Harapan Pangauban (semua program keahlian)",
  "Mikrotik Certified Network Associate (SIJA)",
  "Sertifikasi TOEIC / English for Workplace (semua siswa kelas XII)",
  "Sertifikasi Teknisi Otomotif + EV Basic (TKR)",
  "Sertifikasi Desain Grafis & Videografi BNSP (DKV)",
  "Sertifikasi Accurate Accounting (AKL)",
];

const dokumen = [
  { nama: "Kalender Akademik 2026/2027 (PDF)", href: "/dokumen/kalender-akademik-2026.pdf" },
  { nama: "Struktur Kurikulum Merdeka SMK (PDF)", href: "/dokumen/struktur-kurikulum.pdf" },
  { nama: "Panduan PKL & Jurnal Praktik (PDF)", href: "/dokumen/panduan-pkl.pdf" },
  { nama: "Panduan Teaching Factory (PDF)", href: "/dokumen/panduan-tefa.pdf" },
];

export default function KurikulumPage() {
  return (
    <>
      <PageHero
        eyebrow="Akademik"
        title="Kurikulum"
        description="Kurikulum Merdeka vokasi yang disinkronkan dengan 20+ industri: 70% praktik, project-based learning, dan sertifikasi kompetensi."
      />
      <Container className="py-14">
        <SectionTitle
          align="left"
          eyebrow="Pendekatan"
          title="Kurikulum Merdeka untuk Vokasi"
          description="Pembelajaran dirancang bersama dunia usaha dan dunia industri (DUDI) agar lulusan BMW — Bekerja, Melanjutkan, Wirausaha."
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { t: "70% Praktik Produktif", d: "Mayoritas jam belajar di lab, bengkel, studio, dan Teaching Factory." },
            { t: "Sinkronisasi Industri", d: "Workshop kurikulum tahunan bersama 20 perusahaan pasangan." },
            { t: "Projek Nyata (PBL)", d: "Setiap semester menghasilkan produk/jasa yang dinilai industri." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-ink">{c.t}</h3>
              <p className="mt-1 text-sm text-muted">{c.d}</p>
            </div>
          ))}
        </div>

        <section aria-label="Struktur pembelajaran" className="mt-12">
          <h2 className="text-xl font-bold text-ink">Struktur Pembelajaran</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3">Kelompok</th>
                  <th scope="col" className="px-5 py-3">Contoh Mata Pelajaran</th>
                  <th scope="col" className="px-5 py-3">Beban</th>
                </tr>
              </thead>
              <tbody>
                {struktur.map((s) => (
                  <tr key={s.kelompok} className="border-t">
                    <td className="px-5 py-3 font-semibold text-ink">{s.kelompok}</td>
                    <td className="px-5 py-3 text-muted">{s.contoh}</td>
                    <td className="px-5 py-3 text-muted">{s.jp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-label="Program keahlian" className="mt-12">
          <h2 className="text-xl font-bold text-ink">Konsentrasi Keahlian & Muatan Produktif</h2>
          <p className="mt-1 text-sm text-muted">Delapan program keahlian dengan laboratorium dan akreditasi masing-masing.</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3">Program Keahlian</th>
                  <th scope="col" className="px-5 py-3">Singkatan</th>
                  <th scope="col" className="px-5 py-3">Lab</th>
                  <th scope="col" className="px-5 py-3">Akreditasi</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.slug} className="border-t">
                    <td className="px-5 py-3">
                      <Link href={`/program-keahlian/${p.slug}`} className="font-semibold text-primary hover:underline">
                        {p.nama}
                      </Link>
                    </td>
                    <td className="px-5 py-3 text-muted">{p.singkatan}</td>
                    <td className="px-5 py-3 text-muted">{p.jumlahLab}</td>
                    <td className="px-5 py-3"><Badge variant="accent">{p.akreditasi}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section aria-label="Project based learning" className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">Project-Based Learning (PBL)</h2>
            <ol className="mt-4 space-y-3">
              {pbl.map((s) => (
                <li key={s.tahap} className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-bold text-primary">{s.tahap}</p>
                  <p className="mt-1 text-sm text-muted">{s.detail}</p>
                </li>
              ))}
            </ol>
          </section>
          <section aria-label="Sertifikasi" className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">Sertifikasi Kompetensi</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {sertifikasi.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-bold text-ink">Integrasi Teaching Factory</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Nilai produktif diambil dari order nyata Teaching Factory: jasa software RPL, instalasi jaringan
              SIJA, produksi mekatronika, servis bengkel TKR, hingga branding UMKM oleh DKV. Setiap produk
              melewati quality control dan dinilai bersama mentor industri.
            </p>
          </section>
        </div>

        <section aria-label="Dokumen kurikulum" className="mt-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary p-8 text-white sm:p-10">
          <h2 className="text-xl font-bold">Dokumen Kurikulum</h2>
          <p className="mt-1 text-sm text-white/80">Unduh panduan resmi untuk siswa, orang tua, dan mitra industri.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {dokumen.map((d) => (
              <Button key={d.nama} href={d.href} variant="white">{d.nama}</Button>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
