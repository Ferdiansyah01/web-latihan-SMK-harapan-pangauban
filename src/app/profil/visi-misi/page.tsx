import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageHero, SectionTitle, Badge } from "@/components/ui/primitives";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Visi & Misi | SMK Harapan Pangauban",
  description:
    "Visi, 6 misi, tujuan, dan motto SMK Harapan Pangauban: mewujudkan lulusan vokasi yang kompeten, berkarakter, dan berdaya saing global.",
};

const misi = [
  "Menyelenggarakan pembelajaran vokasi berbasis Kurikulum Merdeka dan kebutuhan dunia kerja.",
  "Mengembangkan Teaching Factory dan kemitraan industri sebagai pusat pembelajaran produktif.",
  "Membentuk karakter disiplin, jujur, dan tanggung jawab melalui pembinaan kesiswaan yang berkelanjutan.",
  "Meningkatkan kompetensi guru dan tenaga kependidikan melalui sertifikasi dan magang industri.",
  "Mendorong inovasi, kewirausahaan, dan literasi digital seluruh warga sekolah.",
  "Mewujudkan lingkungan sekolah yang aman, inklusif, hijau, dan berwawasan global.",
];

const tujuan = [
  "Tingkat serapan lulusan di dunia kerja, wirausaha, dan perguruan tinggi mencapai minimal 90%.",
  "Seluruh lulusan memiliki minimal satu sertifikat kompetensi dari LSP atau mitra industri.",
  "Setiap program keahlian memiliki kelas industri atau Teaching Factory yang aktif berproduksi.",
  "Prestasi akademik dan non-akademik tingkat provinsi hingga internasional setiap tahun.",
  "Sekolah Adiwiyata Mandiri dan budaya mutu ISO 9001:2015 yang konsisten.",
];

export default function VisiMisiPage() {
  return (
    <>
      <PageHero
        eyebrow="Profil"
        title="Visi & Misi"
        description="Arah dan komitmen SMK Harapan Pangauban dalam mencetak lulusan vokasi yang unggul dan berdaya saing."
      />
      <Container className="py-14">
        <section aria-label="Visi sekolah" className="relative overflow-hidden rounded-2xl p-8 text-center text-white sm:p-12">
          <Image src={IMG.kelas} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/92 via-[#0F3D3E]/85 to-[#0F3D3E]/65" aria-hidden />
          <div className="relative">
          <Badge className="bg-white text-primary">Visi Sekolah</Badge>
          <blockquote className="mx-auto mt-4 max-w-3xl text-2xl font-extrabold leading-snug sm:text-3xl">
            “Terwujudnya SMK Unggul, Berkarakter, dan Berdaya Saing Global Berbasis Teknologi dan Industri.”
          </blockquote>
          </div>
        </section>

        <div className="mt-12">
          <SectionTitle
            align="left"
            eyebrow="Misi"
            title="6 Misi Sekolah"
            description="Langkah nyata yang dijalankan seluruh warga sekolah untuk mewujudkan visi."
          />
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {misi.map((m, i) => (
              <li key={m} className="rounded-2xl border bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-extrabold text-white">
                  {i + 1}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-ink">{m}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section aria-label="Tujuan sekolah" className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">Tujuan Sekolah</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {tujuan.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
          <section aria-label="Motto sekolah" className="flex flex-col justify-center rounded-2xl border bg-white p-6 text-center shadow-sm sm:p-8">
            <Badge variant="accent" className="mx-auto">Motto</Badge>
            <p className="mt-4 text-3xl font-extrabold tracking-tight text-primary">“Terampil • Mandiri • Berakhlak”</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Terampil dalam kompetensi, mandiri dalam berkarya dan berwirausaha, serta berakhlak dalam setiap
              tindakan — menjadi pegangan siswa, guru, dan alumni.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
