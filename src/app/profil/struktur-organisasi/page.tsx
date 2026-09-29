import type { Metadata } from "next";
import { Container, PageHero, SectionTitle, Badge } from "@/components/ui/primitives";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Struktur Organisasi | SMK Harapan Pangauban",
  description:
    "Struktur organisasi SMK Harapan Pangauban: kepala sekolah, wakil kepala, 8 kaprodi, TU, BK, dan OSIS.",
};

const waka = [
  { jabatan: "Waka Kurikulum", nama: "Drs. Bambang Setiawan, M.T.", tugas: "Kurikulum, penilaian, dan kalender akademik." },
  { jabatan: "Waka Kesiswaan", nama: "Dewi Anggraini, S.Pd., M.Pd.", tugas: "Pembinaan OSIS, ekstrakurikuler, dan disiplin." },
  { jabatan: "Waka Hubin", nama: "Ir. Fajar Ramadhan, S.T.", tugas: "PKL, Teaching Factory, BKK, dan kemitraan industri." },
  { jabatan: "Waka Sarpras", nama: "Hj. Ratih Purbasari, S.T.", tugas: "Gedung, bengkel, lab, dan inventaris sekolah." },
];

const pendukung = [
  { unit: "Tata Usaha (TU)", nama: "Dedi Kurniawan, S.Kom. & Tim", tugas: "Administrasi, Dapodik, surat-menyurat, dan layanan orang tua." },
  { unit: "Bimbingan Konseling (BK)", nama: "Maya Putri, S.Psi.", tugas: "Konseling karier, peminatan, dan pendampingan siswa." },
  { unit: "OSIS", nama: "Ketua: Andika Pratama (XII RPL)", tugas: "Koordinasi 18 ekstrakurikuler dan kegiatan kesiswaan." },
];

export default function StrukturOrganisasiPage() {
  return (
    <>
      <PageHero
        eyebrow="Profil"
        title="Struktur Organisasi"
        description="Tata kelola SMK Harapan Pangauban yang memastikan layanan pendidikan berjalan profesional dan akuntabel."
      />
      <Container className="py-14">
        <SectionTitle
          align="left"
          eyebrow="Pimpinan"
          title="Kepala Sekolah"
          description="Penanggung jawab utama mutu pendidikan dan kerja sama dengan pemerintah serta industri."
        />
        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm sm:flex sm:items-center sm:gap-6">
          <div aria-hidden className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl font-extrabold text-white">
            AS
          </div>
          <div>
            <h3 className="text-lg font-bold text-ink">Dr. H. Ahmad Suryana, M.Pd.</h3>
            <p className="text-sm text-muted">Kepala Sekolah • NIP 19680101 199402 1 001</p>
            <div className="mt-2"><Badge variant="dark">Pimpinan Satuan Pendidikan</Badge></div>
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle align="left" eyebrow="Manajemen" title="Wakil Kepala Sekolah" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {waka.map((w) => (
              <article key={w.jabatan} className="rounded-2xl border bg-white p-5 shadow-sm">
                <Badge variant="accent">{w.jabatan}</Badge>
                <h3 className="mt-3 font-bold text-ink">{w.nama}</h3>
                <p className="mt-1 text-sm text-muted">{w.tugas}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle
            align="left"
            eyebrow="Program Keahlian"
            title="8 Ketua Program Keahlian"
            description="Setiap kaprodi memimpin sinkronisasi kurikulum, Teaching Factory, dan pembinaan guru produktif."
          />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <article key={p.slug} className="rounded-2xl border bg-white p-5 shadow-sm">
                <Badge variant="outline">{p.singkatan}</Badge>
                <h3 className="mt-3 text-sm font-bold leading-snug text-ink">Kaprodi {p.nama}</h3>
                <p className="mt-1 text-xs text-muted">{p.jumlahLab} Lab • Akreditasi {p.akreditasi}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle align="left" eyebrow="Pendukung" title="TU, BK & OSIS" />
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {pendukung.map((s) => (
              <article key={s.unit} className="rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-bold text-primary">{s.unit}</h3>
                <p className="mt-1 text-sm font-semibold text-ink">{s.nama}</p>
                <p className="mt-1 text-sm text-muted">{s.tugas}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
