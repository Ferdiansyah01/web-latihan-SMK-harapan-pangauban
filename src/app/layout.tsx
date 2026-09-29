import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout/chrome";

const poppins = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMK Harapan Pangauban — Sekolah Vokasi Unggul dan Berdaya Saing",
  description:
    "Website resmi SMK Harapan Pangauban yang menyediakan informasi profil sekolah, program keahlian, kesiswaan, prestasi, PPDB, dan hubungan industri.",
  keywords: ["SMK", "SMK Harapan Pangauban", "sekolah vokasi", "PPDB", "program keahlian", "Teaching Factory"],
  openGraph: {
    title: "SMK Harapan Pangauban — Sekolah Vokasi Unggul dan Berdaya Saing",
    description: "Profil sekolah, program keahlian, prestasi, PPDB, dan hubungan industri.",
    type: "website",
    locale: "id_ID",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "SMK Harapan Pangauban",
    address: "Jl. Pangauban, Batujajar No.99, Kec. Batujajar, Kabupaten Bandung Barat, Jawa Barat 40561",
    telephone: "(022) 123-4567",
    email: "smk_harapan_pangauban@harapan.sch.id",
  };
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:p-2">Lewati ke konten</a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
