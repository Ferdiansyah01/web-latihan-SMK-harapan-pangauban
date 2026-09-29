import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionTitle, Button, Breadcrumb } from "@/components/ui/primitives";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "PPDB 2026/2027 | SMK Harapan Pangauban",
  description: "Penerimaan Peserta Didik Baru: syarat, jalur, jadwal, alur pendaftaran, dokumen, dan FAQ.",
};

const SYARAT = [
  "Lulusan SMP/MTs sederajat tahun berjalan atau maksimal 2 tahun sebelumnya",
  "Memiliki NISN yang valid",
  "Berusia maksimal 21 tahun pada 1 Juli 2026",
  "Sehat jasmani dan rohani",
  "Tidak buta warna untuk program teknik (dibuktikan surat keterangan)",
];

const JALUR = [
  { nama: "Jalur Prestasi", kuota: "30%", deskripsi: "Nilai rapor, juara lomba akademik/non-akademik tingkat kota ke atas." },
  { nama: "Jalur Afirmasi", kuota: "20%", deskripsi: "Keluarga kurang mampu dengan KIP/PKH/SKTM dan penyandang disabilitas." },
  { nama: "Perpindahan Tugas Orang Tua", kuota: "5%", deskripsi: "Anak TNI/Polri/ASN yang pindah tugas dibuktikan surat dinas." },
  { nama: "Jalur Reguler", kuota: "45%", deskripsi: "Seleksi nilai rapor dan tes bakat minat sesuai program keahlian." },
];

const JADWAL = [
  { kegiatan: "Pendaftaran daring", waktu: "1 September – 30 Juni 2026" },
  { kegiatan: "Verifikasi berkas", waktu: "1 – 3 Juli 2026" },
  { kegiatan: "Tes bakat minat", waktu: "5 Juli 2026" },
  { kegiatan: "Pengumuman hasil", waktu: "8 Juli 2026" },
  { kegiatan: "Daftar ulang", waktu: "9 – 12 Juli 2026" },
  { kegiatan: "MPLS", waktu: "14 – 16 Juli 2026" },
];

const ALUR = [
  { nama: "Buat Akun", deskripsi: "Daftar dengan NISN dan email aktif di portal PPDB." },
  { nama: "Isi Formulir", deskripsi: "Lengkapi biodata dan pilih maksimal 2 program keahlian." },
  { nama: "Unggah Dokumen", deskripsi: "Rapor, KK, akta, dan sertifikat pendukung." },
  { nama: "Verifikasi", deskripsi: "Panitia memeriksa kelengkapan berkas daring." },
  { nama: "Tes & Seleksi", deskripsi: "Ikuti tes bakat minat sesuai jadwal jalur." },
  { nama: "Daftar Ulang", deskripsi: "Lakukan daftar ulang jika dinyatakan lolos seleksi." },
];

const DOKUMEN = ["Fotokopi rapor semester 1–5", "Fotokopi KK & akta kelahiran", "Pas foto 3x4 (4 lembar)", "Sertifikat prestasi (jika ada)", "KIP/PKH/SKTM (jalur afirmasi)"];

const FAQ = [
  { q: "Berapa kuota PPDB 2026/2027?", a: "Kuota 450 siswa baru untuk 8 program keahlian." },
  { q: "Apakah ada biaya pendaftaran?", a: "Pendaftaran PPDB gratis, tidak dipungut biaya apa pun." },
  { q: "Bisakah lintas jalur?", a: "Calon siswa hanya boleh memilih satu jalur pendaftaran." },
  { q: "Bagaimana jika NISN tidak valid?", a: "Hubungi operator sekolah asal atau panitia PPDB untuk verifikasi manual." },
];

export default function PpdbPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-primary text-white">
        <Image src={IMG.siswaLaptop} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F3D3E]/75 to-[#0F3D3E]/40" aria-hidden />
        <Container className="relative py-14 sm:py-20">
          <Breadcrumb items={[{ label: "PPDB" }]} />
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-emerald-300">
            Penerimaan Peserta Didik Baru 2026/2027
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            Bergabunglah dengan SMK Harapan Pangauban
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Kuota 450 siswa untuk 8 program keahlian. Pendaftaran daring 1 September – 30 Juni 2026.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#alur" variant="white">DAFTAR SEKARANG</Button>
            <Button href="#jadwal" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Lihat Jadwal
            </Button>
          </div>
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { nilai: "450", label: "Kuota Siswa Baru" },
            { nilai: "8", label: "Program Keahlian" },
            { nilai: "4", label: "Jalur Pendaftaran" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-primary">{s.nilai}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">Persyaratan Umum</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {SYARAT.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">Dokumen Wajib</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {DOKUMEN.map((d) => (
                <li key={d} className="rounded-lg bg-slate-50 px-3 py-2">✓ {d}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle title="4 Jalur Pendaftaran" description="Pilih jalur sesuai kondisi dan prestasi Anda." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {JALUR.map((j) => (
              <div key={j.nama} className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">Kuota {j.kuota}</p>
                <h3 className="mt-1 font-bold text-ink">{j.nama}</h3>
                <p className="mt-2 text-sm text-muted">{j.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="jadwal" className="mt-12 rounded-2xl border bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-ink">Jadwal PPDB</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="text-left text-muted">
                  <th className="pb-2 font-semibold">Kegiatan</th>
                  <th className="pb-2 font-semibold">Waktu</th>
                </tr>
              </thead>
              <tbody>
                {JADWAL.map((j) => (
                  <tr key={j.kegiatan} className="border-t">
                    <td className="py-2.5 pr-4 font-medium text-ink">{j.kegiatan}</td>
                    <td className="py-2.5 text-muted">{j.waktu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="alur" className="mt-12">
          <SectionTitle title="Alur 6 Langkah" description="Pendaftaran daring yang mudah dan transparan." />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ALUR.map((a, i) => (
              <li key={a.nama} className="rounded-2xl border bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-ink">{a.nama}</h3>
                <p className="mt-1 text-sm text-muted">{a.deskripsi}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12">
          <SectionTitle title="Pertanyaan Umum (FAQ)" />
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-xl border bg-white px-5 py-4 shadow-sm">
                <summary className="cursor-pointer font-semibold text-ink">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-primary p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Siap Menjadi Siswa SMK Harapan Pangauban?</h2>
          <p className="mx-auto mt-2 max-w-xl text-white/80">Kuota terbatas 450 kursi. Amankan kursi Anda sekarang juga.</p>
          <div className="mt-6">
            <Button href="/kontak" variant="white">DAFTAR SEKARANG</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
