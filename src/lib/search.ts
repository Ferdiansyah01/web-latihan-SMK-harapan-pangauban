import { news, announcements } from "@/data/news";
import { programs } from "@/data/programs";
import { books } from "@/data/books";
import {
  teachers,
  achievements,
  jobs,
  facilities,
  innovations,
  events,
} from "@/data/school";

export interface SearchResult {
  kategori: string;
  judul: string;
  tanggal?: string;
  excerpt: string;
  href: string;
}

function match(haystack: string, query: string): boolean {
  return haystack.toLowerCase().includes(query);
}

/**
 * Pencarian global lintas: Berita, Pengumuman, Program Keahlian,
 * GTK, Prestasi, Lowongan (BKK), Fasilitas, Inovasi, dan Agenda.
 * Pure function agar mudah diuji dan dipakai ulang.
 */
export function globalSearch(rawQuery: string, limit = 24): SearchResult[] {
  const q = rawQuery.trim().toLowerCase();
  if (q.length < 2) return [];

  const out: SearchResult[] = [];

  for (const n of news) {
    if (match(`${n.title} ${n.excerpt} ${n.category} ${n.penulis}`, q)) {
      out.push({
        kategori: "Berita",
        judul: n.title,
        tanggal: n.tanggal,
        excerpt: n.excerpt,
        href: `/berita/${n.slug}`,
      });
    }
  }

  for (const a of announcements) {
    if (match(`${a.title} ${a.excerpt}`, q)) {
      out.push({
        kategori: "Pengumuman",
        judul: a.title,
        tanggal: a.tanggal,
        excerpt: a.excerpt,
        href: "/pengumuman",
      });
    }
  }

  for (const p of programs) {
    if (match(`${p.nama} ${p.singkatan} ${p.deskripsi} ${p.kompetensi.join(" ")}`, q)) {
      out.push({
        kategori: "Program Keahlian",
        judul: `${p.nama} (${p.singkatan})`,
        excerpt: p.deskripsi,
        href: `/program-keahlian/${p.slug}`,
      });
    }
  }

  for (const t of teachers) {
    if (match(`${t.nama} ${t.jabatan} ${t.mapel} ${t.nip} ${t.kategori}`, q)) {
      out.push({
        kategori: "GTK",
        judul: t.nama,
        excerpt: `${t.jabatan} • ${t.mapel}`,
        href: "/gtk",
      });
    }
  }

  for (const a of achievements) {
    if (match(`${a.kompetisi} ${a.siswa} ${a.peringkat} ${a.tingkat} ${a.kategori}`, q)) {
      out.push({
        kategori: "Prestasi",
        judul: a.kompetisi,
        tanggal: String(a.tahun),
        excerpt: `${a.siswa} • ${a.peringkat} tingkat ${a.tingkat}`,
        href: "/kesiswaan/prestasi",
      });
    }
  }

  for (const j of jobs) {
    if (match(`${j.posisi} ${j.perusahaan} ${j.lokasi} ${j.jenis}`, q)) {
      out.push({
        kategori: "Lowongan",
        judul: `${j.posisi} — ${j.perusahaan}`,
        tanggal: j.deadline,
        excerpt: `${j.lokasi} • ${j.jenis} • Deadline ${j.deadline}`,
        href: "/hubungan-industri/bkk",
      });
    }
  }

  for (const f of facilities) {
    if (match(`${f.nama} ${f.kategori} ${f.deskripsi}`, q)) {
      out.push({
        kategori: "Fasilitas",
        judul: f.nama,
        excerpt: f.deskripsi,
        href: "/sarana-prasarana",
      });
    }
  }

  for (const i of innovations) {
    if (match(`${i.nama} ${i.pembuat} ${i.deskripsi} ${i.kategori}`, q)) {
      out.push({
        kategori: "Inovasi",
        judul: i.nama,
        tanggal: String(i.tahun),
        excerpt: `${i.pembuat} • ${i.penghargaan}`,
        href: "/kesiswaan/inovasi",
      });
    }
  }

  for (const b of books) {
    if (match(`${b.judul} ${b.penulis} ${b.kategori}`, q)) {
      out.push({
        kategori: "E-Library",
        judul: b.judul,
        tanggal: String(b.tahun),
        excerpt: `${b.penulis} • ${b.kategori} • ${b.tersedia > 0 ? `Tersedia ${b.tersedia}` : "Dipinjam"}`,
        href: "/perpustakaan",
      });
    }
  }

  for (const e of events) {    if (match(`${e.judul} ${e.kategori} ${e.lokasi} ${e.deskripsi}`, q)) {
      out.push({
        kategori: "Agenda",
        judul: e.judul,
        tanggal: e.tanggal,
        excerpt: `${e.lokasi} • ${e.kategori}`,
        href: "/agenda",
      });
    }
  }

  return out.slice(0, limit);
}
