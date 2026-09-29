import type { Metadata } from "next";
import { jobs, partners } from "@/data/school";
import { Container, PageHero, SectionTitle, Button } from "@/components/ui/primitives";
import { JobCard } from "@/components/cards";
import { formatTanggal } from "@/lib/utils";

export const metadata: Metadata = {
  title: "BKK & Karier | SMK Harapan Pangauban",
  description: "Bursa Kerja Khusus: profil, statistik penyerapan lulusan, lowongan kerja, mitra, dan info alumni.",
};

const PENYERAPAN = [
  { label: "Bekerja", persen: 72, warna: "bg-accent" },
  { label: "Wirausaha", persen: 13, warna: "bg-primary" },
  { label: "Kuliah", persen: 10, warna: "bg-secondary" },
  { label: "Mencari Kerja", persen: 5, warna: "bg-slate-300" },
];

export default function BkkPage() {
  return (
    <>
      <PageHero
        eyebrow="BKK"
        title="Bursa Kerja Khusus"
        description="Unit penyaluran kerja, job fair, dan pendampingan karier lulusan."
      />
      <Container className="py-10 sm:py-14">
        <div className="grid gap-6 rounded-2xl border bg-white p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">Profil BKK</h2>
            <p className="mt-3 leading-relaxed text-muted">
              BKK SMK Harapan Pangauban menjembatani lulusan dengan dunia kerja melalui pemetaan kompetensi,
              campus hiring, job fair tahunan bersama 15 perusahaan, pelatihan wawancara, dan kerja sama
              rekrutmen langsung dengan mitra.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>✓ Career Center & konseling karier</li>
              <li>✓ Job fair dan campus hiring rutin</li>
              <li>✓ Tracer study dan pendampingan alumni 2 tahun</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="font-bold text-ink">Statistik Penyerapan Lulusan</h3>
            <p className="text-sm text-muted">Total terserap (kerja + wirausaha + kuliah): 95%</p>
            <div className="mt-4 space-y-3">
              {PENYERAPAN.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">{s.label}</span>
                    <span className="font-bold text-ink">{s.persen}%</span>
                  </div>
                  <div className="mt-1 h-3 overflow-hidden rounded-full bg-slate-200">
                    <div className={`h-full rounded-full ${s.warna}`} style={{ width: `${s.persen}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <SectionTitle title="Lowongan Aktif" description="Informasi rekrutmen dari perusahaan mitra via BKK." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {jobs.map((j) => (
              <JobCard key={j.id} job={j} />
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            Contoh deadline terdekat: {formatTanggal(jobs[0].deadline)}. Lamar via Career Center sekolah.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold text-ink">Mitra Perekrut</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {partners.slice(0, 6).map((p) => (
                <li key={p.nama} className="rounded-lg bg-slate-50 px-3 py-2">
                  <span className="font-semibold text-ink">{p.nama}</span> — {p.bidang}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-primary p-6 text-white">
            <h2 className="text-xl font-bold">Info Alumni</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Alumni terdata dalam tracer study tahunan. 95% lulusan terserap kerja, wirausaha, atau kuliah
              dalam 6 bulan pertama. Bergabung dengan forum alumni untuk info lowongan, mentoring, dan
              pengembangan usaha.
            </p>
            <div className="mt-6">
              <Button href="/kontak" variant="white">Hubungi BKK</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
