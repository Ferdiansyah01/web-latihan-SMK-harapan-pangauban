import type { Metadata } from "next";
import { gallery, partners } from "@/data/school";
import { Container, PageHero, SectionTitle, Badge } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "PKL / Magang | SMK Harapan Pangauban",
  description: "Informasi Praktik Kerja Lapangan: mekanisme, jadwal, mitra, dan FAQ.",
};

const TAHAP = [
  { nama: "Sosialisasi & Pemetaan", deskripsi: "Penjelasan program dan pemetaan minat serta kompetensi siswa." },
  { nama: "Pembekalan", deskripsi: "Etika kerja, K3, dan penguatan soft skill sebelum berangkat." },
  { nama: "Penempatan", deskripsi: "Distribusi ke perusahaan mitra sesuai program keahlian." },
  { nama: "Pelaksanaan & Monitoring", deskripsi: "6 bulan praktik dengan kunjungan monitoring guru pembimbing." },
  { nama: "Penilaian Industri", deskripsi: "Evaluasi oleh pembimbing industri dan sekolah." },
  { nama: "Laporan & Sidang", deskripsi: "Penyusunan laporan dan presentasi hasil PKL." },
];

const JADWAL = [
  { kegiatan: "Sosialisasi orang tua", waktu: "Januari" },
  { kegiatan: "Pembekalan gelombang 1", waktu: "Juni" },
  { kegiatan: "Pemberangkatan gelombang 1", waktu: "Juli – Desember" },
  { kegiatan: "Pembekalan gelombang 2", waktu: "September" },
  { kegiatan: "Pemberangkatan gelombang 2", waktu: "Oktober – Maret" },
  { kegiatan: "Sidang laporan PKL", waktu: "April" },
];

const FAQ = [
  { q: "Berapa lama durasi PKL?", a: "PKL dilaksanakan selama 6 bulan sesuai kurikulum merdeka SMK." },
  { q: "Apakah PKL berbayar?", a: "Penempatan PKL tidak dipungut biaya. Uang saku bergantung pada kebijakan perusahaan mitra." },
  { q: "Bolehkah memilih tempat PKL sendiri?", a: "Boleh mengajukan, selama perusahaan memenuhi kriteria dan disetujui pembimbing." },
  { q: "Bagaimana penilaian PKL?", a: "Nilai gabungan dari pembimbing industri (praktik) dan guru (laporan serta sidang)." },
  { q: "Apakah PKL memengaruhi kelulusan?", a: "Ya, PKL adalah mata pelajaran wajib dan syarat kelulusan." },
];

export default function PklPage() {
  return (
    <>
      <PageHero
        eyebrow="PKL"
        title="Praktik Kerja Lapangan"
        description="Pengalaman kerja nyata 6 bulan di perusahaan mitra sebagai bekal karier."
      />
      <Container className="py-10 sm:py-14">
        <div className="rounded-2xl border bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-ink">Tentang PKL</h2>
          <p className="mt-3 leading-relaxed text-muted">
            PKL wajib diikuti siswa kelas XI selama 6 bulan. Siswa ditempatkan di perusahaan mitra yang
            relevan dengan program keahliannya, dibimbing guru dan mentor industri, lalu dinilai berdasarkan
            kinerja praktik dan laporan akhir.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="accent">Wajib Kelas XI</Badge>
            <Badge variant="outline">Durasi 6 Bulan</Badge>
            <Badge variant="outline">350+ Peserta/Tahun</Badge>
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle title="Mekanisme 6 Tahap" description="Alur PKL dari sosialisasi hingga sidang laporan." />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TAHAP.map((t, i) => (
              <li key={t.nama} className="rounded-2xl border bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-ink">{t.nama}</h3>
                <p className="mt-1 text-sm text-muted">{t.deskripsi}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold text-ink">Jadwal PKL</h2>
            <table className="mt-4 w-full text-sm">
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
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold text-ink">Mitra Penempatan</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {partners.map((p) => (
                <li key={p.nama} className="rounded-lg bg-slate-50 px-3 py-2">
                  <span className="font-semibold text-ink">{p.nama}</span> — {p.bidang}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle title="Pertanyaan Umum (FAQ)" description="Hal yang sering ditanyakan tentang PKL." />
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-xl border bg-white px-5 py-4 shadow-sm">
                <summary className="cursor-pointer font-semibold text-ink">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle title="Dokumentasi" description="Kegiatan PKL dan kunjungan industri siswa." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.slice(0, 4).map((g) => (
              <div key={g.id} className={`flex min-h-36 flex-col justify-end rounded-2xl bg-gradient-to-br p-4 ${g.gradient}`}>
                <p className="font-bold text-white">{g.judul}</p>
                <p className="text-xs text-white/80">{g.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
