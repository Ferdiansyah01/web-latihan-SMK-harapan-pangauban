import type { NewsItem, Announcement } from "@/types";
import { IMG } from "@/lib/images";

export const news: NewsItem[] = [
  {
    slug: "smk-negeri-raih-juara-lks-nasional-2026",
    title: "Siswa RPL Raih Juara 1 LKS Nasional Bidang Web Technologies 2026",
    excerpt:
      "Tim RPL berhasil menyabet medali emas LKS Nasional setelah bersaing dengan 34 provinsi di bidang Web Technologies.",
    category: "Prestasi",
    tanggal: "2026-09-10",
    penulis: "Humas SMK Harapan Pangauban",
    imageGradient: "from-[#0F3D3E] to-[#16A34A]",
    image: IMG.kode,
    featured: true,
    content: [
      "Prestasi membanggakan kembali ditorehkan siswa SMK Harapan Pangauban. Tim Rekayasa Perangkat Lunak berhasil meraih Juara 1 Lomba Kompetensi Siswa (LKS) Nasional 2026 bidang Web Technologies.",
      "Kompetisi yang diikuti 34 provinsi ini menuntut peserta membangun aplikasi web full-stack dalam waktu terbatas dengan standar keamanan dan performa industri.",
      "Pembimbing menyampaikan bahwa kemenangan ini merupakan hasil pembinaan intensif selama 6 bulan melalui Teaching Factory dan kerja sama industri.",
    ],
  },
  {
    slug: "teaching-factory-luncurkan-produk-iot",
    title: "Teaching Factory Luncurkan Produk IoT Monitoring Energi untuk Industri",
    excerpt:
      "Unit Teaching Factory meluncurkan produk monitoring konsumsi energi berbasis IoT yang telah dipesan dua perusahaan mitra.",
    category: "Industri",
    tanggal: "2026-09-05",
    penulis: "Tim TeFa",
    imageGradient: "from-[#155E63] to-[#0F172A]",
    image: IMG.sirkuit,
    featured: true,
    content: [
      "Teaching Factory SMK Harapan Pangauban resmi meluncurkan produk Smart Energy Monitor berbasis IoT.",
      "Produk ini dikembangkan bersama siswa Teknik Elektronika Industri dan Rekayasa Perangkat Lunak dengan pendampingan industri.",
      "Dua perusahaan mitra telah melakukan pemesanan awal untuk implementasi di lini produksi mereka.",
    ],
  },
  {
    slug: "ppdb-2026-dibuka-kuota-450",
    title: "PPDB 2026/2027 Dibuka: Kuota 450 Siswa untuk 8 Program Keahlian",
    excerpt:
      "Pendaftaran Peserta Didik Baru tahun ajaran 2026/2027 resmi dibuka dengan empat jalur seleksi.",
    category: "Sekolah",
    tanggal: "2026-08-28",
    penulis: "Panitia PPDB",
    imageGradient: "from-[#16A34A] to-[#155E63]",
    image: IMG.wisudaGedung,
    featured: true,
    content: [
      "PPDB SMK Harapan Pangauban tahun ajaran 2026/2027 resmi dibuka dengan kuota 450 siswa baru.",
      "Terdapat empat jalur pendaftaran: Prestasi, Afirmasi, Perpindahan Tugas Orang Tua, dan Reguler.",
      "Calon siswa dapat mendaftar secara daring dan memantau hasil seleksi melalui laman PPDB.",
    ],
  },
  {
    slug: "workshop-kurikulum-bersama-industri",
    title: "Sinkronisasi Kurikulum Bersama 20 Industri Pasangan",
    excerpt: "Sekolah menggelar workshop sinkronisasi kurikulum bersama 20 mitra industri untuk tahun ajaran baru.",
    category: "Pendidikan",
    tanggal: "2026-08-20",
    penulis: "Waka Kurikulum",
    imageGradient: "from-[#0F172A] to-[#155E63]",
    image: IMG.rapat,
    content: [
      "Sebanyak 20 perwakilan industri hadir dalam workshop sinkronisasi kurikulum SMK Harapan Pangauban.",
      "Agenda membahas pemutakhiran materi pembelajaran berbasis kebutuhan dunia kerja, termasuk AI, IoT, dan green manufacturing.",
    ],
  },
  {
    slug: "tim-robotik-lolos-kontes-nasional",
    title: "Tim Robotik Mekatronika Lolos Final Kontes Robot Nasional",
    excerpt: "Robot line follower karya siswa Mekatronika melaju ke babak final setelah unggul di seleksi regional.",
    category: "Teknologi",
    tanggal: "2026-08-15",
    penulis: "Ekstrakurikuler Robotik",
    imageGradient: "from-[#0F3D3E] to-[#155E63]",
    image: IMG.robot,
    content: [
      "Tim robotik lolos ke final Kontes Robot Nasional kategori line follower analog.",
      "Robot dikembangkan dengan algoritma PID dan desain PCB mandiri di laboratorium Mekatronika.",
    ],
  },
  {
    slug: "kunjungan-industri-jepang",
    title: "Kunjungan Industri: Studi Banding ke Pabrik Otomotif",
    excerpt: "120 siswa kelas XI mengikuti kunjungan industri ke pabrik otomotif untuk melihat lini produksi modern.",
    category: "Kegiatan",
    tanggal: "2026-08-08",
    penulis: "Hubin",
    imageGradient: "from-[#155E63] to-[#16A34A]",
    image: IMG.insinyur,
    content: [
      "Program kunjungan industri diikuti 120 siswa kelas XI dari tiga program keahlian teknik.",
      "Siswa mempelajari sistem produksi lean manufacturing dan standar keselamatan kerja industri otomotif.",
    ],
  },
];

export const announcements: Announcement[] = [
  {
    id: "ppdb-2026",
    title: "Penerimaan Peserta Didik Baru (PPDB) 2026/2027 Resmi Dibuka",
    tanggal: "2026-09-01",
    penting: true,
    excerpt: "Pendaftaran dibuka 1 September – 30 Juni 2026 melalui jalur Prestasi, Afirmasi, dan Reguler.",
    content: "Pendaftaran PPDB dilakukan secara daring. Calon peserta menyiapkan NISN, rapor, KK, dan akta kelahiran.",
  },
  {
    id: "ujian-pts",
    title: "Jadwal Penilaian Tengah Semester Ganjil 2026/2027",
    tanggal: "2026-09-12",
    penting: true,
    excerpt: "PTS dilaksanakan 6–11 Oktober 2026. Kartu ujian dapat diambil di wali kelas mulai 29 September.",
    content: "Seluruh siswa wajib mengikuti PTS sesuai jadwal. Ketidakhadiran harus disertai surat keterangan resmi.",
  },
  {
    id: "pkl-2026",
    title: "Pembekalan PKL Kelas XI Gelombang 2",
    tanggal: "2026-09-08",
    penting: false,
    excerpt: "Pembekalan PKL gelombang 2 dilaksanakan 22 September di aula sekolah pukul 08.00 WIB.",
    content: "Peserta membawa dokumen PKL dan berpakaian praktik lengkap.",
  },
  {
    id: "jobfair",
    title: "Job Fair & Campus Hiring Bersama 15 Perusahaan",
    tanggal: "2026-09-03",
    penting: false,
    excerpt: "BKK menggelar job fair 25 September 2026 terbuka untuk alumni dan kelas XII.",
    content: "Siapkan CV, portofolio, dan berkas lamaran. Pendaftaran melalui Career Center.",
  },
];
