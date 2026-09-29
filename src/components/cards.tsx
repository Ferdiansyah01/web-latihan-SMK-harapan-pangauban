import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { NewsItem, ProgramKeahlian, Achievement, Facility, Partner, Job } from "@/types";
import { Badge } from "./ui/primitives";
import { SchoolImage } from "./ui/SchoolImage";
import { formatTanggal } from "@/lib/utils";
import { Code2, Network, Cpu, Bot, Factory, Palette, Car, Calculator } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2, Network, Cpu, Bot, Factory, Palette, Car, Calculator,
};

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <SchoolImage
        src={item.image}
        alt={item.title}
        gradient={item.imageGradient}
        className="h-48"
        imgClassName="transition-transform duration-300 group-hover:scale-105"
      >
        <span className="absolute left-4 top-4 z-10"><Badge className="bg-white text-primary">{item.category}</Badge></span>
      </SchoolImage>
      <div className="flex flex-1 flex-col p-5">
        <time className="text-xs font-medium text-muted">{formatTanggal(item.tanggal)} • {item.penulis}</time>
        <h3 className="mt-2 font-bold leading-snug text-ink group-hover:text-primary clamp-2">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted clamp-3">{item.excerpt}</p>
        <Link href={`/berita/${item.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all">
          Baca Selengkapnya <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export function ProgramCard({ program }: { program: ProgramKeahlian }) {
  const Icon = iconMap[program.icon] ?? Code2;
  return (
    <article className="group flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={24} />
      </span>
      <h3 className="mt-4 text-lg font-bold text-ink">{program.nama}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted">{program.singkatan} • {program.jumlahLab} Lab • Akreditasi {program.akreditasi}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted clamp-3">{program.deskripsi}</p>
      <Link href={`/program-keahlian/${program.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        Detail Program <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}

export function AchievementCard({ item }: { item: Achievement }) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <SchoolImage
        src={item.image}
        alt={item.tingkat + " " + item.kompetisi}
        gradient={item.gradient}
        className="h-28"
      >
        <span className="absolute left-4 top-4 z-10"><Badge className="bg-white text-primary">{item.tingkat}</Badge></span>
      </SchoolImage>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{item.peringkat} • {item.tahun}</p>
        <h3 className="mt-1 font-bold text-ink clamp-2">{item.kompetisi}</h3>
        <p className="mt-1 text-sm text-muted">{item.siswa}</p>
      </div>
    </article>
  );
}

export function FacilityCard({ item }: { item: Facility }) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <SchoolImage
        src={item.image}
        alt={item.nama}
        gradient={item.gradient}
        className="h-40"
        imgClassName="transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-5">
        <Badge variant="outline">{item.kategori}</Badge>
        <h3 className="mt-2 font-bold text-ink">{item.nama}</h3>
        <p className="mt-1 text-sm text-muted clamp-3">{item.deskripsi}</p>
      </div>
    </article>
  );
}

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-extrabold text-white">{partner.inisial}</span>
      <h3 className="mt-3 text-sm font-bold text-ink">{partner.nama}</h3>
      <p className="text-xs text-muted">{partner.bidang}</p>
      <div className="mt-2 flex flex-wrap justify-center gap-1">
        {partner.jenisKerjaSama.map((j) => (
          <span key={j} className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">{j}</span>
        ))}
      </div>
    </div>
  );
}

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-ink">{job.posisi}</h3>
          <p className="text-sm text-muted">{job.perusahaan} • {job.lokasi}</p>
        </div>
        <Badge variant="accent">{job.jenis}</Badge>
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
        {job.kualifikasi.map((q) => <li key={q}>{q}</li>)}
      </ul>
      <p className="mt-3 text-xs font-medium text-red-600">Deadline: {formatTanggal(job.deadline)}</p>
    </article>
  );
}
