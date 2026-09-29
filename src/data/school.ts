import type { Achievement, Innovation, Teacher, Facility, Partner, Job, SchoolEvent, GalleryItem } from "@/types";
import { IMG } from "@/lib/images";

export const achievements: Achievement[] = [
  { id: "1", kompetisi: "LKS Nasional Web Technologies", siswa: "Tim RPL — Andika Pratama", tingkat: "Nasional", kategori: "Akademik", tahun: 2026, peringkat: "Juara 1", gradient: "from-[#0F3D3E] to-[#16A34A]", image: IMG.kodeLaptop },
  { id: "2", kompetisi: "Kontes Robot Indonesia Regional", siswa: "Tim Mekatronika — RoboTech", tingkat: "Nasional", kategori: "Akademik", tahun: 2026, peringkat: "Finalis", gradient: "from-[#155E63] to-[#0F172A]", image: IMG.robot },
  { id: "3", kompetisi: "ASEAN Skills Competition – IoT", siswa: "Dinda Lestari (TEI)", tingkat: "Internasional", kategori: "Akademik", tahun: 2025, peringkat: "Medali Perak", gradient: "from-[#0F172A] to-[#155E63]", image: IMG.sirkuit },
  { id: "4", kompetisi: "Olimpiade Sains Terapan Provinsi", siswa: "Rizky Ramadhan (TOI)", tingkat: "Provinsi", kategori: "Akademik", tahun: 2025, peringkat: "Juara 2", gradient: "from-[#16A34A] to-[#155E63]", image: IMG.labSains },
  { id: "5", kompetisi: "Festival Film Pelajar", siswa: "Tim DKV — Lensa Muda", tingkat: "Nasional", kategori: "Non-Akademik", tahun: 2025, peringkat: "Film Terbaik", gradient: "from-[#0F3D3E] to-[#155E63]", image: IMG.produksiFilm },
  { id: "6", kompetisi: "Kejuaraan Pencak Silat Pelajar Kota", siswa: "Sinta Maharani (AKL)", tingkat: "Kota/Kabupaten", kategori: "Non-Akademik", tahun: 2026, peringkat: "Juara 1", gradient: "from-[#155E63] to-[#16A34A]", image: IMG.olahraga },
  { id: "7", kompetisi: "Hackathon Pelajar Jawa Barat", siswa: "Tim SIJA — NetSecure", tingkat: "Provinsi", kategori: "Akademik", tahun: 2026, peringkat: "Juara 3", gradient: "from-[#0F172A] to-[#16A34A]", image: IMG.kerjaTim },
  { id: "8", kompetisi: "Lomba Desain Poster Digital", siswa: "Fajar Nugroho (DKV)", tingkat: "Nasional", kategori: "Non-Akademik", tahun: 2024, peringkat: "Juara Harapan 1", gradient: "from-[#0F3D3E] to-[#0F172A]", image: IMG.desain },
];

export const innovations: Innovation[] = [
  { id: 1, nama: "Smart Energy Monitor", pembuat: "TeFa x TEI & RPL", deskripsi: "Perangkat IoT pemantau konsumsi listrik real-time dengan dashboard web dan notifikasi anomali.", penghargaan: "Juara Inovasi Vokasi 2025", tahun: 2025, kategori: "Teknologi" },
  { id: 2, nama: "Absensi Wajah Sekolah", pembuat: "Kelas XII RPL", deskripsi: "Sistem absensi berbasis pengenalan wajah yang terintegrasi dengan database kesiswaan.", penghargaan: "Produk Unggulan TeFa", tahun: 2026, kategori: "Digital" },
  { id: 3, nama: "Starter Kit PLC Trainer", pembuat: "Guru TOI", deskripsi: "Modul trainer PLC low-cost untuk pembelajaran otomasi di sekolah mitra.", penghargaan: "Hibah Inovasi Pembelajaran", tahun: 2024, kategori: "Pendidikan" },
  { id: 4, nama: "Kompos Otomatis Urban Farm", pembuat: "OSIS & TOI", deskripsi: "Reaktor kompos otomatis dengan kontrol suhu untuk urban farming sekolah.", penghargaan: "Adiwiyata 2025", tahun: 2025, kategori: "Lingkungan" },
  { id: 5, nama: "Packaging UMKM Otomatis", pembuat: "TeFa Mekatronika", deskripsi: "Mesin semi-otomatis untuk pengemasan produk UMKM binaan Teaching Factory.", penghargaan: "Kerja sama Industri 2026", tahun: 2026, kategori: "Industri" },
  { id: 6, nama: "Bank Mini Sekolah", pembuat: "AKL", deskripsi: "Layanan bank mini edukatif untuk literasi keuangan siswa dan warga sekolah.", penghargaan: "Program Literasi Terbaik", tahun: 2024, kategori: "Produk" },
];

export const teachers: Teacher[] = [
  { id: 1, nama: "Dr. H. Ahmad Suryana, M.Pd.", nip: "19680101 199402 1 001", jabatan: "Kepala Sekolah", mapel: "Manajemen Pendidikan", kategori: "Guru" },
  { id: 2, nama: "Drs. Bambang Setiawan, M.T.", nip: "19700512 199803 1 002", jabatan: "Waka Kurikulum", mapel: "Teknik Otomasi", kategori: "Guru" },
  { id: 3, nama: "Siti Nurhaliza, S.Kom., M.Kom.", nip: "19820315 200801 2 003", jabatan: "Kaprodi RPL", mapel: "Pemrograman Web", kategori: "Guru" },
  { id: 4, nama: "Rudi Hartono, S.T.", nip: "19791120 200604 1 004", jabatan: "Kaprodi SIJA", mapel: "Jaringan Komputer", kategori: "Guru" },
  { id: 5, nama: "Dewi Anggraini, S.Pd., M.Pd.", nip: "19850708 200902 2 005", jabatan: "Waka Kesiswaan", mapel: "B. Indonesia", kategori: "Guru" },
  { id: 6, nama: "Agus Wijaya, S.T., M.T.", nip: "19760322 200501 1 006", jabatan: "Kaprodi Mekatronika", mapel: "Robotik", kategori: "Guru" },
  { id: 7, nama: "Lina Marlina, S.E.", nip: "19810130 200701 2 007", jabatan: "Kaprodi AKL", mapel: "Akuntansi", kategori: "Guru" },
  { id: 8, nama: "Hendra Gunawan, S.Pd.", nip: "19881212 201101 1 008", jabatan: "Guru Produktif", mapel: "DKV", kategori: "Guru" },
  { id: 9, nama: "Yusuf Maulana, A.Md.", nip: "19890505 201201 1 009", jabatan: "Teknisi Lab", mapel: "-", kategori: "Tenaga Kependidikan" },
  { id: 10, nama: "Ratna Sari, S.IP.", nip: "19900214 201402 2 010", jabatan: "Pustakawan", mapel: "-", kategori: "Tenaga Kependidikan" },
  { id: 11, nama: "Dedi Kurniawan, S.Kom.", nip: "19910518 201503 1 011", jabatan: "Operator Dapodik", mapel: "-", kategori: "Tenaga Kependidikan" },
  { id: 12, nama: "Maya Putri, S.Psi.", nip: "19920808 201604 2 012", jabatan: "Guru BK", mapel: "Bimbingan Konseling", kategori: "Guru" },
];

export const facilities: Facility[] = [
  { id: 1, nama: "Lab Pemrograman & Startup Corner", kategori: "Laboratorium", deskripsi: "Ruang pengembangan software dengan 40 workstation dan area kolaborasi startup siswa.", daftar: ["40 PC developer", "Smart TV", "Whiteboard kolaborasi"], gradient: "from-[#0F3D3E] to-[#155E63]", image: IMG.labKomputer },
  { id: 2, nama: "Bengkel Otomotif & EV Corner", kategori: "Bengkel", deskripsi: "Bengkel praktik kendaraan ringan dengan 3 unit mobil, lift, dan trainer EV.", daftar: ["Lift 2-post", "Engine stand", "Scanner OBD"], gradient: "from-[#0F172A] to-[#155E63]", image: IMG.mesinMobil },
  { id: 3, nama: "Lab Jaringan & NOC Mini", kategori: "Laboratorium", deskripsi: "Laboratorium jaringan dengan rack server dan simulasi Network Operation Center.", daftar: ["Rack server", "Router lab", "Fiber trainer"], gradient: "from-[#155E63] to-[#16A34A]", image: IMG.server },
  { id: 4, nama: "Perpustakaan Digital", kategori: "Perpustakaan", deskripsi: "Perpustakaan 2 lantai dengan 15.000 koleksi dan akses e-library.", daftar: ["15.000 buku", "E-library", "Ruang baca"], gradient: "from-[#16A34A] to-[#155E63]", image: IMG.perpusRak },
  { id: 5, nama: "Studio DKV & Green Screen", kategori: "Studio", deskripsi: "Studio foto, video, dan desain dengan peralatan standar industri kreatif.", daftar: ["Kamera mirrorless", "Lighting set", "iMac desain"], gradient: "from-[#0F3D3E] to-[#16A34A]", image: IMG.kameraFilm },
  { id: 6, nama: "Gedung Teaching Factory", kategori: "Teaching Factory", deskripsi: "Gedung produksi 3 lantai untuk layanan jasa, manufaktur, dan penjualan produk siswa.", daftar: ["Workshop produksi", "Showroom", "Ruang QC"], gradient: "from-[#155E63] to-[#0F172A]", image: IMG.insinyurLapangan },
  { id: 7, nama: "Aula Serbaguna 500 Kursi", kategori: "Aula", deskripsi: "Aula utama untuk wisuda, seminar industri, dan event besar sekolah.", daftar: ["Kapasitas 500", "Sound system", "LED videotron"], gradient: "from-[#0F172A] to-[#0F3D3E]", image: IMG.aula },
  { id: 8, nama: "Lapangan & Sport Center", kategori: "Lapangan", deskripsi: "Lapangan futsal, basket, dan voli dengan tribun penonton.", daftar: ["Lapangan futsal", "Basket outdoor", "Tribun"], gradient: "from-[#155E63] to-[#0F3D3E]", image: IMG.stadion },
];

export const partners: Partner[] = [
  { nama: "PT Solusi Digital Nusantara", bidang: "Software", jenisKerjaSama: ["PKL", "Kurikulum", "Rekrutmen"], inisial: "SD" },
  { nama: "PT Nusa Network", bidang: "Telekomunikasi", jenisKerjaSama: ["PKL", "Sertifikasi"], inisial: "NN" },
  { nama: "PT Otomotif Presisi", bidang: "Otomotif", jenisKerjaSama: ["Teaching Factory", "PKL"], inisial: "OP" },
  { nama: "PT Energi Otomasi", bidang: "Manufaktur", jenisKerjaSama: ["Kurikulum", "Workshop"], inisial: "EO" },
  { nama: "PT Karya Otomasi", bidang: "Elektronika", jenisKerjaSama: ["PKL", "Teaching Factory"], inisial: "KO" },
  { nama: "Studio Kreatif Bandung", bidang: "Kreatif", jenisKerjaSama: ["PKL", "Workshop"], inisial: "SK" },
  { nama: "PT Auto Maju Motors", bidang: "Otomotif", jenisKerjaSama: ["PKL", "Rekrutmen", "Sertifikasi"], inisial: "AM" },
  { nama: "Bank Mitra Daerah", bidang: "Keuangan", jenisKerjaSama: ["Kurikulum", "PKL"], inisial: "BM" },
];

export const jobs: Job[] = [
  { id: 1, perusahaan: "PT Solusi Digital Nusantara", posisi: "Junior Web Developer", lokasi: "Bandung", jenis: "Full-time", kualifikasi: ["Lulusan RPL/SIJA", "Menguasai React & Laravel", "Portofolio GitHub"], deadline: "2026-10-15" },
  { id: 2, perusahaan: "PT Auto Maju Motors", posisi: "Teknisi Bengkel", lokasi: "Bandung", jenis: "Full-time", kualifikasi: ["Lulusan TKR", "Memahami OBD & tune-up"], deadline: "2026-10-10" },
  { id: 3, perusahaan: "PT Energi Otomasi", posisi: "Asisten Automation", lokasi: "Bekasi", jenis: "Kontrak", kualifikasi: ["Lulusan TOI/Mekatronika", "Dasar PLC"], deadline: "2026-10-20" },
  { id: 4, perusahaan: "Studio Kreatif Bandung", posisi: "Graphic Designer", lokasi: "Remote/Hybrid", jenis: "Freelance", kualifikasi: ["Lulusan DKV", "Portofolio Behance"], deadline: "2026-09-30" },
];

export const events: SchoolEvent[] = [
  { id: 1, tanggal: "2026-09-22", judul: "Pembekalan PKL Gelombang 2", kategori: "Akademik", lokasi: "Aula", deskripsi: "Pembekalan peserta PKL kelas XI." },
  { id: 2, tanggal: "2026-09-25", judul: "Job Fair & Campus Hiring", kategori: "Industri", lokasi: "Gedung TeFa", deskripsi: "Bursa kerja bersama 15 perusahaan." },
  { id: 3, tanggal: "2026-10-06", judul: "Penilaian Tengah Semester", kategori: "Ujian", lokasi: "Ruang Kelas", deskripsi: "PTS semester ganjil." },
  { id: 4, tanggal: "2026-10-17", judul: "Expo Teaching Factory", kategori: "Event", lokasi: "Lapangan Utama", deskripsi: "Pameran produk TeFa dan karya siswa." },
  { id: 5, tanggal: "2026-10-28", judul: "Upacara Hari Sumpah Pemuda", kategori: "Kesiswaan", lokasi: "Lapangan", deskripsi: "Upacara peringatan nasional." },
  { id: 6, tanggal: "2026-12-24", judul: "Libur Semester Ganjil", kategori: "Libur", lokasi: "-", deskripsi: "Libur akhir semester." },
];

export const gallery: GalleryItem[] = [
  { id: 1, judul: "Praktik Jaringan di Lab NOC", kategori: "Praktik", gradient: "from-[#0F3D3E] to-[#155E63]", image: IMG.server, deskripsi: "Siswa SIJA konfigurasi router." },
  { id: 2, judul: "Lomba LKS Nasional 2026", kategori: "Prestasi", gradient: "from-[#155E63] to-[#16A34A]", image: IMG.kodeLaptop, deskripsi: "Momen kemenangan tim RPL." },
  { id: 3, judul: "Perakitan Robot Line Follower", kategori: "Praktik", gradient: "from-[#0F172A] to-[#155E63]", image: IMG.robot, deskripsi: "Ekstrakurikuler robotik." },
  { id: 4, judul: "Gedung Teaching Factory", kategori: "Fasilitas", gradient: "from-[#16A34A] to-[#155E63]", image: IMG.industri, deskripsi: "Fasad gedung produksi." },
  { id: 5, judul: "Kunjungan Industri Otomotif", kategori: "Industri", gradient: "from-[#0F3D3E] to-[#16A34A]", image: IMG.insinyur, deskripsi: "Studi lapangan kelas XI." },
  { id: 6, judul: "Expo Kewirausahaan Siswa", kategori: "Event", gradient: "from-[#155E63] to-[#0F172A]", image: IMG.timLaptop, deskripsi: "Bazar produk siswa." },
  { id: 7, judul: "Upacara Bendera Senin", kategori: "Kegiatan", gradient: "from-[#0F172A] to-[#0F3D3E]", image: IMG.kelas, deskripsi: "Kegiatan rutin kesiswaan." },
  { id: 8, judul: "Studio DKV & Produksi Film", kategori: "Fasilitas", gradient: "from-[#0F3D3E] to-[#0F172A]", image: IMG.produksiFilm, deskripsi: "Produksi film pelajar." },
];
