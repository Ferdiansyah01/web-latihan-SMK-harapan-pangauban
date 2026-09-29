export interface ProgramKeahlian {
  slug: string;
  nama: string;
  singkatan: string;
  deskripsi: string;
  icon: string;
  jumlahLab: number;
  akreditasi: string;
  kompetensi: string[];
  mataPelajaran: string[];
  laboratorium: string[];
  fasilitas: string[];
  proyekSiswa: { nama: string; deskripsi: string }[];
  prospekKarier: { posisi: string; deskripsi: string }[];
  mitra: string[];
  bannerGradient: string;
  image?: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  category: "Sekolah" | "Prestasi" | "Pendidikan" | "Industri" | "Teknologi" | "Kegiatan";
  tanggal: string;
  penulis: string;
  imageGradient: string;
  image?: string;
  content: string[];
  featured?: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  tanggal: string;
  penting: boolean;
  excerpt: string;
  content: string;
}

export interface Achievement {
  id: string;
  kompetisi: string;
  siswa: string;
  tingkat: "Internasional" | "Nasional" | "Provinsi" | "Kota/Kabupaten";
  kategori: "Akademik" | "Non-Akademik";
  tahun: number;
  peringkat: string;
  gradient: string;
  image?: string;
}

export interface Innovation {
  id: number;
  nama: string;
  pembuat: string;
  deskripsi: string;
  penghargaan: string;
  tahun: number;
  kategori: "Teknologi" | "Pendidikan" | "Produk" | "Digital" | "Lingkungan" | "Industri";
}

export interface Teacher {
  id: number;
  nama: string;
  nip: string;
  jabatan: string;
  mapel: string;
  kategori: "Guru" | "Tenaga Kependidikan";
}

export interface Facility {
  id: number;
  nama: string;
  kategori: string;
  deskripsi: string;
  daftar: string[];
  gradient: string;
  image?: string;
}

export interface Partner {
  nama: string;
  bidang: string;
  jenisKerjaSama: string[];
  inisial: string;
}

export interface Job {
  id: number;
  perusahaan: string;
  posisi: string;
  lokasi: string;
  jenis: string;
  kualifikasi: string[];
  deadline: string;
}

export interface SchoolEvent {
  id: number;
  tanggal: string;
  judul: string;
  kategori: "Akademik" | "Kesiswaan" | "Ujian" | "Libur" | "Event" | "Industri";
  lokasi: string;
  deskripsi: string;
}

export interface GalleryItem {
  id: number;
  judul: string;
  kategori: "Kegiatan" | "Prestasi" | "Praktik" | "Fasilitas" | "Industri" | "Event";
  gradient: string;
  image?: string;
  deskripsi: string;
}

export interface Book {
  id: number;
  judul: string;
  penulis: string;
  kategori: "Teknologi" | "Teknik" | "Sains" | "Literasi" | "Kewirausahaan";
  tahun: number;
  tersedia: number;
}
