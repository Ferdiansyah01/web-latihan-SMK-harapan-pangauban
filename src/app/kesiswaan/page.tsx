import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, SectionTitle } from "@/components/ui/primitives";
import { achievements, innovations } from "@/data/school";

export const metadata: Metadata = {
  title: "Kesiswaan | SMK Harapan Pangauban",
  description:
    "Kesiswaan SMK Harapan Pangauban: OSIS, 10 ekstrakurikuler, prestasi akademik & non-akademik, serta inovasi siswa Teaching Factory.",
};

const pilar = [
  {
    title: "OSIS",
    desc: "Organisasi siswa intra sekolah sebagai wadah kepemimpinan, demokrasi sekolah, dan penggerak kegiatan kesiswaan.",
    href: "/kesiswaan/osis",
    cta: "Profil OSIS",
  },
  {
    title: "Ekstrakurikuler",
    desc: "10 pilihan ekstrakurikuler — dari Robotik, Paskibra, hingga English Club — dengan jadwal latihan rutin tiap pekan.",
    href: "/kesiswaan/ekstrakurikuler",
    cta: "Lihat Ekskul",
  },
  {
    title: "Prestasi",
    desc: `${achievements.length}+ capaian tingkat kota hingga internasional di bidang akademik dan non-akademik.`,
    href: "/kesiswaan/prestasi",
    cta: "Galeri Prestasi",
  },
  {
    title: "Inovasi",
    desc: `${innovations.length} produk inovasi unggulan hasil kolaborasi siswa, guru, dan Teaching Factory.`,
    href: "/kesiswaan/inovasi",
    cta: "Galeri Inovasi",
  },
];

export default function KesiswaanPage() {
  return (
    <>
      <PageHero
        eyebrow="Kesiswaan"
        title="Kesiswaan"
        description="Membina karakter, kepemimpinan, dan prestasi — dari OSIS, ekstrakurikuler, kompetisi, hingga inovasi produk Teaching Factory."
      />
      <Container className="py-14">
        <SectionTitle
          align="left"
          eyebrow="Empat Pilar"
          title="Ekosistem Kesiswaan"
          description="Setiap siswa didorong aktif berorganisasi, berkompetisi, dan berinovasi di luar jam pelajaran."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {pilar.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <h2 className="text-xl font-bold text-ink">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
              <Link href={p.href} className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline">
                {p.cta} →
              </Link>
            </article>
          ))}
        </div>

        <section aria-label="Tata tertib" className="mt-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary p-8 text-white sm:p-10">
          <h2 className="text-xl font-bold">Pembinaan Karakter</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/85">
            Kesiswaan menerapkan pembinaan berjenjang: pembiasaan 5S (Senyum, Salam, Sapa, Sopan, Santun),
            pendampingan wali kelas dan guru BK, poin kedisiplinan yang transparan, serta penghargaan
            siswa berprestasi dan paling disiplin setiap semester.
          </p>
        </section>
      </Container>
    </>
  );
}
