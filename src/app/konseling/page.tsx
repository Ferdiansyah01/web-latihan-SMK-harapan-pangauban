import type { Metadata } from "next";
import { Container, PageHero, SectionTitle } from "@/components/ui/primitives";
import { BookingForm } from "./form";

export const metadata: Metadata = {
  title: "E-Counseling | SMK Harapan Pangauban",
  description:
    "Layanan konseling siswa SMK Harapan Pangauban: akademik, karier, pribadi/sosial, dan bullying. Jadwalkan sesi bersama guru BK.",
};

const layanan = [
  { nama: "Akademik", deskripsi: "Kesulitan belajar, manajemen waktu, persiapan ujian, dan pemilihan program." },
  { nama: "Karier", deskripsi: "Minat bakat, pilihan PKL, magang, studi lanjut, dan kesiapan kerja." },
  { nama: "Pribadi/Sosial", deskripsi: "Motivasi, kepercayaan diri, pertemanan, dan adaptasi lingkungan sekolah." },
  { nama: "Bullying", deskripsi: "Laporan perundungan dengan penanganan cepat, aman, dan berpihak pada korban." },
];

const jam = [
  { hari: "Senin – Kamis", jam: "08.00 – 15.00 WIB" },
  { hari: "Jumat", jam: "08.00 – 11.00 WIB" },
  { hari: "Sabtu – Minggu", jam: "Tutup (darurat via wali kelas)" },
];

const alur = [
  { langkah: "1. Isi formulir", deskripsi: "Lengkapi nama, kelas, jenis layanan, dan tanggal yang diinginkan." },
  { langkah: "2. Konfirmasi BK", deskripsi: "Guru BK menghubungi maksimal 1 hari kerja untuk konfirmasi jadwal." },
  { langkah: "3. Sesi konseling", deskripsi: "Bertemu tatap muka di ruang BK atau daring sesuai kesepakatan." },
  { langkah: "4. Tindak lanjut", deskripsi: "Rencana aksi dan pemantauan perkembangan setelah sesi." },
];

export default function KonselingPage() {
  return (
    <>
      <PageHero
        eyebrow="E-Counseling"
        title="Layanan Konseling Siswa"
        description="Ruang aman untuk bercerita dan bertumbuh. Jadwalkan sesi bersama guru BK — gratis dan rahasia."
      />
      <Container className="py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <section aria-label="Jenis layanan">
              <SectionTitle align="left" eyebrow="Layanan" title="Jenis Layanan" />
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {layanan.map((l) => (
                  <li key={l.nama} className="rounded-2xl border bg-white p-5 shadow-sm">
                    <p className="font-bold text-ink">{l.nama}</p>
                    <p className="mt-1 text-sm text-muted">{l.deskripsi}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-label="Jam layanan" className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <h2 className="px-5 pt-5 font-bold text-ink">Jam Layanan BK</h2>
              <table className="mt-3 w-full text-left text-sm">
                <tbody>
                  {jam.map((j) => (
                    <tr key={j.hari} className="border-t">
                      <td className="px-5 py-3 font-medium text-ink">{j.hari}</td>
                      <td className="px-5 py-3 text-muted">{j.jam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <section aria-label="Alur layanan">
              <h2 className="text-xl font-bold text-ink">Alur Pengajuan</h2>
              <ol className="mt-4 space-y-3">
                {alur.map((a) => (
                  <li key={a.langkah} className="rounded-2xl border bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-primary">{a.langkah}</p>
                    <p className="mt-1 text-sm text-muted">{a.deskripsi}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section aria-label="Kerahasiaan" className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-6 text-white">
              <h2 className="font-bold">Jaminan Kerahasiaan</h2>
              <p className="mt-1 text-sm text-white/85">
                Seluruh isi sesi konseling bersifat rahasia dan hanya dibuka atas persetujuan siswa, kecuali
                menyangkut keselamatan diri atau orang lain sesuai kode etik BK.
              </p>
            </section>
          </div>
          <section aria-label="Formulir penjadwalan" className="h-fit rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">Buat Jadwal Konseling</h2>
            <p className="mt-1 text-sm text-muted">Isi formulir berikut, guru BK akan mengonfirmasi jadwal Anda.</p>
            <div className="mt-5">
              <BookingForm />
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
