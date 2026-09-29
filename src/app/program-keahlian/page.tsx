import type { Metadata } from "next";
import { Container, PageHero, SectionTitle, Button } from "@/components/ui/primitives";
import { ProgramCard } from "@/components/cards";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Program Keahlian | SMK Harapan Pangauban",
  description:
    "Delapan konsentrasi keahlian SMK Harapan Pangauban: RPL, SIJA, TEI, Mekatronika, TOI, DKV, TKR, dan AKL — semua terakreditasi A dengan laboratorium Teaching Factory.",
};

export default function ProgramKeahlianPage() {
  return (
    <>
      <PageHero
        eyebrow="Akademik"
        title="Program Keahlian"
        description="Delapan konsentrasi keahlian terakreditasi A, dirancang bersama industri dengan 70% pembelajaran praktik di laboratorium dan Teaching Factory."
      />
      <Container className="py-14">
        <SectionTitle
          align="left"
          eyebrow="Konsentrasi Keahlian"
          title="Pilih Jalur Vokasimu"
          description="Setiap program dilengkapi laboratorium modern, sertifikasi kompetensi, dan jalur PKL ke perusahaan mitra."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>

        <section aria-label="Keunggulan program" className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { t: "Terakreditasi A", d: "Seluruh delapan program keahlian menyandang akreditasi A dari BAN-PDM." },
            { t: "Sertifikasi Industri", d: "Lulusan dibekali sertifikasi LSP-P1 plus sertifikasi vendor sesuai bidangnya." },
            { t: "Jaminan PKL", d: "Penempatan Praktik Kerja Lapangan di 20+ perusahaan mitra setiap tahun." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-ink">{c.t}</h3>
              <p className="mt-1 text-sm text-muted">{c.d}</p>
            </div>
          ))}
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/ppdb">Daftar PPDB 2026</Button>
          <Button href="/kurikulum" variant="outline">Lihat Kurikulum</Button>
        </div>
      </Container>
    </>
  );
}
