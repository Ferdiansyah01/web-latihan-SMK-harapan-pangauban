import type { Metadata } from "next";
import { gallery, partners } from "@/data/school";
import { Container, PageHero, SectionTitle, Badge, Button } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Teaching Factory | SMK Harapan Pangauban",
  description: "Pembelajaran berbasis produksi Teaching Factory: program, produk, layanan, dan dokumentasi.",
};

const PROGRAMS = [
  { nama: "TeFa Software & IoT", deskripsi: "Pengembangan aplikasi, dashboard IoT, dan Smart Energy Monitor.", output: "Aplikasi + perangkat IoT" },
  { nama: "TeFa Otomotif", deskripsi: "Jasa servis ringan, tune-up, dan perawatan kendaraan mitra.", output: "Jasa bengkel" },
  { nama: "TeFa Mekatronika & Otomasi", deskripsi: "Perakitan trainer PLC, mesin pengemas UMKM, dan maintenance.", output: "Produk manufaktur" },
  { nama: "TeFa Kreatif & Akuntansi", deskripsi: "Branding UMKM, produksi konten, dan pembukuan digital.", output: "Jasa kreatif & keuangan" },
];

const PRODUK = [
  { nama: "Smart Energy Monitor", kategori: "IoT", deskripsi: "Pemantau konsumsi listrik real-time dengan dashboard web." },
  { nama: "Absensi Wajah Sekolah", kategori: "Software", deskripsi: "Sistem absensi pengenalan wajah terintegrasi database." },
  { nama: "Mesin Pengemas UMKM", kategori: "Manufaktur", deskripsi: "Mesin semi-otomatis untuk pengemasan produk UMKM binaan." },
  { nama: "Paket Branding UMKM", kategori: "Desain", deskripsi: "Identitas visual untuk 20 UMKM binaan per tahun." },
  { nama: "Servis & Tune-Up", kategori: "Otomotif", deskripsi: "Layanan bengkel dengan standar ATPM oleh siswa TKR." },
  { nama: "Pembukuan Digital", kategori: "Keuangan", deskripsi: "Pendampingan akuntansi digital untuk UMKM." },
];

export default function TeachingFactoryPage() {
  const dokumentasi = gallery.slice(0, 4);
  return (
    <>
      <PageHero
        eyebrow="Teaching Factory"
        title="Belajar Lewat Produksi Nyata"
        description="Teaching Factory menghadirkan suasana pabrik dan studio profesional di dalam sekolah."
      />
      <Container className="py-10 sm:py-14">
        <div className="grid gap-6 rounded-2xl border bg-white p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">Apa itu Teaching Factory?</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Teaching Factory (TeFa) adalah model pembelajaran berbasis produk dan jasa. Siswa mengerjakan
              pesanan nyata dari industri dan masyarakat dengan standar mutu, tenggat, dan QC profesional,
              didampingi guru serta pembimbing industri.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="accent">Pesanan Nyata</Badge>
              <Badge variant="outline">QC Industri</Badge>
              <Badge variant="outline">Bagi Hasil Siswa</Badge>
            </div>
          </div>
          <ul className="space-y-3">
            {["Standar mutu dan SOP industri", "Pembimbing guru + praktisi", "Penilaian berbasis produk", "Pendapatan untuk pengembangan siswa"].map((t) => (
              <li key={t} className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-ink">
                ✓ {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <SectionTitle title="4 Program TeFa" description="Unit produksi sesuai konsentrasi keahlian." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((p, i) => (
              <div key={p.nama} className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">TeFa 0{i + 1}</p>
                <h3 className="mt-1 font-bold text-ink">{p.nama}</h3>
                <p className="mt-2 text-sm text-muted">{p.deskripsi}</p>
                <p className="mt-3 text-xs font-semibold text-primary">Output: {p.output}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle title="Produk & Layanan" description="Hasil karya siswa yang dipesan mitra dan masyarakat." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUK.map((p) => (
              <div key={p.nama} className="rounded-2xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <Badge variant="accent">{p.kategori}</Badge>
                <h3 className="mt-2 font-bold text-ink">{p.nama}</h3>
                <p className="mt-1 text-sm text-muted">{p.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle title="Dokumentasi" description="Suasana produksi dan karya Teaching Factory." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dokumentasi.map((g) => (
              <div key={g.id} className={`flex min-h-40 flex-col justify-end rounded-2xl bg-gradient-to-br p-4 ${g.gradient}`}>
                <p className="font-bold text-white">{g.judul}</p>
                <p className="text-xs text-white/80">{g.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-primary p-6 text-white sm:p-8">
          <h2 className="text-xl font-bold">Mitra TeFa</h2>
          <ul className="mt-3 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
            {partners.slice(0, 6).map((p) => (
              <li key={p.nama}>• {p.nama} — {p.bidang}</li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href="/hubungan-industri/mitra" variant="white">Lihat Semua Mitra</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
