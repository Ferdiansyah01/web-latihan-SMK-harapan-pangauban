import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container, Badge, Breadcrumb, Button, SectionTitle } from "@/components/ui/primitives";
import { programs } from "@/data/programs";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return { title: "Program Tidak Ditemukan | SMK Harapan Pangauban" };
  return {
    title: `${program.nama} (${program.singkatan}) | SMK Harapan Pangauban`,
    description: program.deskripsi,
  };
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section aria-label={title} className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-muted">
            <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
            {it}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();
  if (!program) return null;

  return (
    <>
      <div className={`relative overflow-hidden bg-gradient-to-br ${program.bannerGradient} text-white`}>
        {program.image && (
          <>
            <Image src={program.image} alt="" fill sizes="100vw" className="object-cover" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F3D3E]/70 to-[#0F3D3E]/30" aria-hidden />
          </>
        )}
        <Container className="relative py-12 sm:py-16">
          <Breadcrumb
            items={[
              { label: "Program Keahlian", href: "/program-keahlian" },
              { label: program.nama },
            ]}
          />
          <div className="mt-4 max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white text-primary">{program.singkatan}</Badge>
              <Badge variant="accent" className="bg-white/15 text-white">
                Akreditasi {program.akreditasi}
              </Badge>
              <Badge variant="accent" className="bg-white/15 text-white">
                {program.jumlahLab} Laboratorium
              </Badge>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
              {program.nama}
            </h1>
            <p className="mt-4 leading-relaxed text-white/85">{program.deskripsi}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/ppdb" variant="white">Daftar Program Ini</Button>
              <Button href="/program-keahlian" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Semua Program
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-14">
        <SectionTitle
          align="left"
          eyebrow="Gambaran Umum"
          title="Tentang Program"
          description="Kompetensi inti yang dikuasai lulusan program ini."
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {program.kompetensi.map((k) => (
            <div key={k} className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-ink">{k}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ListSection title="Mata Pelajaran Produktif" items={program.mataPelajaran} />
          <ListSection title="Laboratorium" items={program.laboratorium} />
          <ListSection title="Fasilitas Pendukung" items={program.fasilitas} />
          <section aria-label="Mitra industri" className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">Mitra Industri</h2>
            <ul className="mt-4 space-y-2">
              {program.mitra.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-muted">
                  <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {m}
                </li>
              ))}
            </ul>
            <Link href="/hubungan-industri/mitra" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
              Lihat semua mitra →
            </Link>
          </section>
        </div>

        <section aria-label="Proyek siswa" className="mt-12">
          <h2 className="text-xl font-bold text-ink">Proyek Siswa</h2>
          <p className="mt-1 text-sm text-muted">Karya nyata yang dihasilkan siswa program ini.</p>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {program.proyekSiswa.map((pr) => (
              <article key={pr.nama} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="font-bold text-ink">{pr.nama}</h3>
                <p className="mt-1 text-sm text-muted">{pr.deskripsi}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Prospek karier" className="mt-12">
          <h2 className="text-xl font-bold text-ink">Prospek Karier</h2>
          <p className="mt-1 text-sm text-muted">Peluang kerja lulusan sesuai bidang keahlian.</p>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {program.prospekKarier.map((k) => (
              <article key={k.posisi} className="rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary p-6 text-white shadow-sm">
                <h3 className="font-bold">{k.posisi}</h3>
                <p className="mt-1 text-sm text-white/80">{k.deskripsi}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Program lain" className="mt-12">
          <h2 className="text-xl font-bold text-ink">Jelajahi Program Lain</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {programs
              .filter((p) => p.slug !== program.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/program-keahlian/${p.slug}`}
                  className="rounded-full border bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-primary hover:text-white"
                >
                  {p.singkatan} — {p.nama}
                </Link>
              ))}
          </div>
        </section>
      </Container>
    </>
  );
}
