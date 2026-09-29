export interface NavChild {
  label: string;
  href: string;
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const mainNavigation: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/profil",
    children: [
      { label: "Sejarah", href: "/profil/sejarah" },
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      { label: "Sambutan Kepala Sekolah", href: "/profil/sambutan" },
      { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
      { label: "Pengembangan Sekolah", href: "/profil/pengembangan" },
    ],
  },
  { label: "Kurikulum & Keahlian", href: "/program-keahlian" },
  {
    label: "Kesiswaan",
    href: "/kesiswaan",
    children: [
      { label: "OSIS", href: "/kesiswaan/osis" },
      { label: "Ekstrakurikuler", href: "/kesiswaan/ekstrakurikuler" },
      { label: "Prestasi", href: "/kesiswaan/prestasi" },
      { label: "Inovasi", href: "/kesiswaan/inovasi" },
    ],
  },
  { label: "GTK", href: "/gtk" },
  { label: "Sarana Prasarana", href: "/sarana-prasarana" },
  {
    label: "Hubungan Industri",
    href: "/hubungan-industri",
    children: [
      { label: "Mitra", href: "/hubungan-industri/mitra" },
      { label: "Teaching Factory", href: "/hubungan-industri/teaching-factory" },
      { label: "PKL", href: "/hubungan-industri/pkl" },
      { label: "BKK", href: "/hubungan-industri/bkk" },
    ],
  },
];

export const secondaryNavigation: NavItem[] = [
  { label: "Berita", href: "/berita" },
  { label: "Pengumuman", href: "/pengumuman" },
  { label: "Agenda", href: "/agenda" },
  { label: "Galeri", href: "/galeri" },
  { label: "Perpustakaan", href: "/perpustakaan" },
  { label: "Konseling", href: "/konseling" },
  { label: "Layanan", href: "/layanan" },
  { label: "PPDB", href: "/ppdb" },
  { label: "Kontak", href: "/kontak" },
];

export const schoolProfile = {
  nama: "SMK Harapan Pangauban",
  short: "SMK Harapan Pangauban",
  tagline: "Sekolah Vokasi Unggul dan Berdaya Saing",
  telepon: "(022) 123-4567",
  email: "smk_harapan_pangauban@harapan.sch.id",
  alamat: "Jl. Pangauban, Batujajar No.99, Kec. Batujajar, Kabupaten Bandung Barat, Jawa Barat 40561",
  tahunBerdiri: 1985,
  akreditasi: "A (Unggul)",
  npsn: "20123456",
};
