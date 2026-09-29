import type { Metadata } from "next";
import { Container, PageHero, SectionTitle } from "@/components/ui/primitives";
import { ContactForm } from "./form";

export const metadata: Metadata = {
  title: "Kontak | SMK Harapan Pangauban",
  description:
    "Hubungi SMK Harapan Pangauban: alamat, telepon, email, jam layanan, peta lokasi, dan formulir pesan.",
};

const kontak = [
  { label: "Alamat", value: "Jl. Pangauban, Batujajar No.99, Kec. Batujajar, Kab. Bandung Barat 40561" },
  { label: "Telepon", value: "(022) 123-4567" },
  { label: "Email", value: "smk_harapan_pangauban@harapan.sch.id" },
  { label: "WhatsApp PPDB", value: "0812-3456-7890 (Senin–Jumat, jam layanan)" },
];

const jam = [
  { hari: "Senin – Kamis", jam: "07.00 – 15.30 WIB" },
  { hari: "Jumat", jam: "07.00 – 11.30 WIB" },
  { hari: "Sabtu", jam: "08.00 – 12.00 WIB (Piket)" },
  { hari: "Minggu / Libur Nasional", jam: "Tutup" },
];

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Hubungi Kami"
        title="Kontak"
        description="Ada pertanyaan seputar PPDB, program keahlian, atau kerja sama industri? Kami siap membantu."
      />
      <Container className="py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <section aria-label="Informasi kontak" className="space-y-6">
            <SectionTitle
              align="left"
              eyebrow="Informasi"
              title="Alamat & Kontak Resmi"
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {kontak.map((k) => (
                <li key={k.label} className="rounded-2xl border bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">{k.label}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{k.value}</p>
                </li>
              ))}
            </ul>
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <h3 className="px-5 pt-5 font-bold text-ink">Jam Layanan</h3>
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
            </div>
            <div aria-label="Peta lokasi sekolah" className="overflow-hidden rounded-2xl border shadow-sm">
              <div className="flex h-56 flex-col items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent p-6 text-center text-white">
                <p className="text-lg font-extrabold">Peta Lokasi Sekolah</p>
                <p className="mt-1 max-w-sm text-sm text-white/85">
                  Jl. Pangauban, Batujajar No.99, Kec. Batujajar, Kabupaten Bandung Barat — tersedia area parkir bus.
                </p>
                <p className="mt-3 rounded-full bg-white px-4 py-1 text-xs font-semibold text-primary">
                  Placeholder peta — sambungkan Google Maps embed di sini
                </p>
              </div>
            </div>
          </section>
          <section aria-label="Formulir pesan" className="h-fit rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-ink">Kirim Pesan</h2>
            <p className="mt-1 text-sm text-muted">Balasan maksimal 2 hari kerja melalui email.</p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
