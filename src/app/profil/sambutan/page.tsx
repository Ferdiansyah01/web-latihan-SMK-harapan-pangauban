import type { Metadata } from "next";
import { Container, PageHero, Badge } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Sambutan Kepala Sekolah | SMK Harapan Pangauban",
  description:
    "Sambutan Dr. H. Ahmad Suryana, M.Pd., Kepala SMK Harapan Pangauban tentang pendidikan vokasi, kemitraan industri, dan karakter lulusan.",
};

export default function SambutanPage() {
  return (
    <>
      <PageHero
        eyebrow="Profil"
        title="Sambutan Kepala Sekolah"
        description="Pesan dan visi kepemimpinan SMK Harapan Pangauban dari Kepala Sekolah."
      />
      <Container className="py-14">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="h-fit rounded-2xl border bg-white p-6 text-center shadow-sm">
            <div
              aria-hidden
              className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent text-4xl font-extrabold text-white"
            >
              AS
            </div>
            <h2 className="mt-4 text-lg font-bold text-ink">Dr. H. Ahmad Suryana, M.Pd.</h2>
            <p className="text-sm text-muted">Kepala SMK Harapan Pangauban</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <Badge variant="dark">NIP 19680101 199402 1 001</Badge>
              <Badge variant="accent">Manajemen Pendidikan</Badge>
            </div>
          </aside>
          <article className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Assalamu’alaikum Warahmatullahi Wabarakatuh
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-ink">
              Selamat Datang di SMK Harapan Pangauban
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Puji syukur kita panjatkan ke hadirat Allah SWT. Website resmi ini kami hadirkan sebagai jendela
                informasi dan layanan bagi siswa, orang tua, alumni, industri, dan masyarakat.
              </p>
              <p>
                Sebagai sekolah vokasi, kami percaya bahwa keterampilan harus berjalan seiring dengan karakter.
                Karena itu seluruh pembelajaran kami rancang bersama dunia industri — melalui sinkronisasi
                kurikulum, Praktik Kerja Lapangan, kelas industri, sertifikasi kompetensi, dan Teaching Factory
                yang menjadi kebanggaan kami.
              </p>
              <p>
                Tahun ini kami melayani lebih dari 1.250 siswa pada 8 program keahlian, dari Rekayasa Perangkat
                Lunak hingga Teknik Kendaraan Ringan. Prestasi Juara 1 LKS Nasional Web Technologies 2026 dan
                produk IoT Teaching Factory yang telah dipesan industri menjadi bukti bahwa anak SMK bisa
                berkarya nyata.
              </p>
              <p>
                Kami mengundang Bapak/Ibu dan seluruh calon siswa untuk mengenal lebih dekat sekolah kami —
                datang ke expo, bertemu guru produktif kami, dan melihat langsung bengkel serta laboratorium.
                Bersama, kita siapkan lulusan yang terampil, mandiri, dan berakhlak.
              </p>
              <p className="font-semibold text-ink">Wassalamu’alaikum Warahmatullahi Wabarakatuh.</p>
            </div>
            <footer className="mt-6 border-t pt-4">
              <p className="font-bold text-ink">Dr. H. Ahmad Suryana, M.Pd.</p>
              <p className="text-sm text-muted">Kepala Sekolah — Bandung, September 2026</p>
            </footer>
          </article>
        </div>
      </Container>
    </>
  );
}
