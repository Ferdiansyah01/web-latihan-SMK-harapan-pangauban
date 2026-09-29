import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/lib/images";
import {
  Library,
  Briefcase,
  MessagesSquare,
  ClipboardList,
  CalendarDays,
  Image as ImageIcon,
  Factory,
  MonitorSmartphone,
  ArrowRight,
  Megaphone,
  Award,
  Lightbulb,
  Building2,
  Users,
} from "lucide-react";
import { Container, SectionTitle, Button, Badge } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { NewsCard, ProgramCard, AchievementCard, PartnerCard } from "@/components/cards";
import { news, announcements } from "@/data/news";
import { programs } from "@/data/programs";
import { achievements, innovations, partners, events, gallery } from "@/data/school";
import { formatTanggal } from "@/lib/utils";

export function QuickAccess() {
  const items = [
    { icon: Library, label: "E-Library", href: "/perpustakaan" },
    { icon: Briefcase, label: "Career Center", href: "/hubungan-industri/bkk" },
    { icon: MessagesSquare, label: "E-Counseling", href: "/konseling" },
    { icon: ClipboardList, label: "PPDB", href: "/ppdb" },
    { icon: CalendarDays, label: "Kalender Akademik", href: "/agenda" },
    { icon: ImageIcon, label: "Galeri", href: "/galeri" },
    { icon: Factory, label: "Teaching Factory", href: "/hubungan-industri/teaching-factory" },
    { icon: MonitorSmartphone, label: "Layanan Digital", href: "/layanan" },
  ];
  return (
    <section aria-label="Akses cepat" className="bg-background">
      <Container className="py-12">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {items.map((it) => (
            <Link key={it.label} href={it.href} className="group flex flex-col items-center rounded-2xl border bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <it.icon size={20} aria-hidden />
              </span>
              <span className="mt-2 text-xs font-semibold text-ink">{it.label}</span>
            </Link>
          ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section aria-label="Tentang sekolah" className="bg-white">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-2">
        <Reveal variant="left">
          <div className="relative overflow-hidden rounded-2xl shadow-sm">
          <Image
            src={IMG.kampusLama}
            alt="Gedung SMK Harapan Pangauban"
            width={800}
            height={600}
            className="h-auto w-full"
            priority={false}
          />
          <div className="absolute bottom-4 left-4 right-4 flex gap-6 rounded-xl bg-primary/90 p-4 text-white backdrop-blur">
            <div><p className="text-xl font-extrabold">A</p><p className="text-xs text-white/70">Akreditasi Unggul</p></div>
            <div><p className="text-xl font-extrabold">1985</p><p className="text-xs text-white/70">Tahun Berdiri</p></div>
            <div><p className="text-xl font-extrabold">Bandung</p><p className="text-xs text-white/70">Lokasi Strategis</p></div>
          </div>
        </div>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <div>
            <SectionTitle align="left" eyebrow="Tentang Sekolah" title="Pendidikan Vokasi Berbasis Teknologi & Industri" description="SMK Harapan Pangauban memadukan pembelajaran teori, praktik laboratorium, Teaching Factory, dan magang industri. Lulusan kami terserap kerja, melanjutkan kuliah, dan berwirausaha." />
            <div className="mt-6"><Button href="/profil">Selengkapnya</Button></div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function NewsAnnouncement() {
  return (
    <section aria-label="Berita dan pengumuman" className="bg-background">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between">
              <SectionTitle align="left" eyebrow="Publikasi" title="Berita & Informasi" />
              <Link href="/berita" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-accent">Semua Berita <ArrowRight size={16} /></Link>
            </div>
            <Reveal delay={100}>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {news.slice(0, 4).map((n) => <NewsCard key={n.slug} item={n} />)}
              </div>
            </Reveal>
          </div>
          <Reveal variant="right" delay={150}>
            <aside aria-label="Pengumuman" className="rounded-2xl border bg-white p-6 shadow-sm h-fit">
            <h3 className="flex items-center gap-2 text-lg font-bold text-ink"><Megaphone size={20} className="text-accent" /> Pengumuman</h3>
            <div className="mt-4 space-y-4">
              {announcements.slice(0, 4).map((a) => (
                <Link key={a.id} href="/pengumuman" className="block rounded-xl border p-4 transition-all hover:shadow-md">
                  {a.penting && <Badge variant="important" className="mb-2">PENTING</Badge>}
                  <p className="text-sm font-bold text-ink">{a.title}</p>
                  <p className="mt-1 text-xs text-muted">{formatTanggal(a.tanggal)}</p>
                  <p className="mt-1 text-xs text-muted clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
            <Link href="/pengumuman" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Semua Pengumuman <ArrowRight size={16} /></Link>
          </aside>
        </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function ProgramsPreview() {
  return (
    <section aria-label="Program keahlian" className="bg-white">
      <Container className="py-16">
        <SectionTitle eyebrow="Konsentrasi Keahlian" title="8 Program Keahlian Unggulan" description="Kurikulum sinkron industri, laboratorium modern, dan sertifikasi kompetensi." />
        <Reveal delay={100}>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.slice(0, 4).map((p) => <ProgramCard key={p.slug} program={p} />)}
          </div>
        </Reveal>
        <div className="mt-8 text-center"><Button href="/program-keahlian" variant="outline">Lihat Semua Program</Button></div>
      </Container>
    </section>
  );
}

export function AchievementPreview() {
  return (
    <section aria-label="Prestasi" className="bg-background">
      <Container className="py-16">
        <SectionTitle eyebrow="Prestasi" title="Membanggakan di Berbagai Level" description="Medali LKS Nasional, finalis robotik, hingga kompetisi internasional." />
        <Reveal delay={100}>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.slice(0, 4).map((a) => <AchievementCard key={a.id} item={a} />)}
          </div>
        </Reveal>
        <div className="mt-8 text-center"><Button href="/kesiswaan/prestasi" variant="outline">Semua Prestasi</Button></div>
      </Container>
    </section>
  );
}

export function InnovationTefa() {
  return (
    <section aria-label="Inovasi dan Teaching Factory" className="bg-white">
      <Container className="grid gap-6 py-16 lg:grid-cols-2">
        <Reveal variant="left">
          <div className="relative h-full overflow-hidden rounded-2xl text-white">
          <Image src={IMG.siber} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/92 via-[#0F3D3E]/85 to-[#0F3D3E]/60" aria-hidden />
          <div className="relative p-8">
          <h3 className="flex items-center gap-2 text-xl font-bold"><Lightbulb size={22} /> Inovasi Sekolah</h3>
          <ul className="mt-4 space-y-3">
            {innovations.slice(0, 3).map((i) => (
              <li key={i.id} className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <p className="font-bold">{i.nama}</p>
                <p className="mt-1 text-sm text-white/75 clamp-2">{i.deskripsi}</p>
                <p className="mt-1 text-xs text-emerald-300">{i.penghargaan} • {i.tahun}</p>
              </li>
            ))}
          </ul>
          <Link href="/kesiswaan/inovasi" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-300">Lihat Inovasi <ArrowRight size={16} /></Link>
          </div>
        </div>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <div className="relative h-full overflow-hidden rounded-2xl">
          <Image src={IMG.insinyurLapangan} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/75" aria-hidden />
          <div className="relative p-8">
          <h3 className="flex items-center gap-2 text-xl font-bold text-ink"><Factory size={22} className="text-accent" /> Teaching Factory</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">Unit produksi sekolah yang melayani pesanan industri: Smart Energy Monitor, jasa software, packaging UMKM, dan layanan kreatif.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {["Produk IoT", "Jasa Software", "Manufaktur", "Layanan Kreatif"].map((s) => (
              <div key={s} className="rounded-xl border bg-white p-4 text-sm font-semibold text-ink">{s}</div>
            ))}
          </div>
          <div className="mt-4"><Button href="/hubungan-industri/teaching-factory" variant="secondary">Profil Teaching Factory</Button></div>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function FacilitiesPartners() {
  return (
    <section aria-label="Mitra industri" className="bg-background">
      <Container className="py-16">
        <SectionTitle eyebrow="Kolaborasi" title="Mitra Industri" description="80+ perusahaan pendamping kurikulum, PKL, dan rekrutmen." />
        <Reveal delay={100}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {partners.map((p) => <PartnerCard key={p.nama} partner={p} />)}
          </div>
        </Reveal>
        <div className="mt-8 text-center">
          <Button href="/hubungan-industri/mitra" variant="outline">Semua Mitra Industri</Button>
        </div>
      </Container>
    </section>
  );
}

export function CalendarSocial() {
  return (
    <section aria-label="Agenda dan media sosial" className="bg-white">
      <Container className="grid gap-6 py-16 lg:grid-cols-2">
        <Reveal variant="left">
          <div className="rounded-2xl border bg-white p-6">
          <h3 className="flex items-center gap-2 text-lg font-bold"><CalendarDays size={20} className="text-accent" /> Kalender Akademik</h3>
          <ul className="mt-4 space-y-3">
            {events.slice(0, 4).map((e) => (
              <li key={e.id} className="flex gap-4 rounded-xl bg-background p-3">
                <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-white">
                  <span className="text-sm font-extrabold">{e.tanggal.slice(8, 10)}</span>
                  <span className="text-[10px]">{e.tanggal.slice(5, 7)}/26</span>
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">{e.judul}</span>
                  <span className="block text-xs text-muted">{e.lokasi} • {e.kategori}</span>
                </span>
              </li>
            ))}
          </ul>
          <Link href="/agenda" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Lihat Agenda <ArrowRight size={16} /></Link>
        </div>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <div className="relative h-full overflow-hidden rounded-2xl text-white">
          <Image src={IMG.kelas} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/92 via-[#0F3D3E]/88 to-[#0F3D3E]/70" aria-hidden />
          <div className="relative p-6">
          <h3 className="text-lg font-bold">Ikuti Media Sosial Kami</h3>
          <p className="mt-1 text-sm text-white/75">Update kegiatan, prestasi, dan PPDB di Instagram, YouTube, dan Facebook.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[{ n: "Instagram", h: "@smk_harapan_pangauban" }, { n: "YouTube", h: "SMK Harapan Pangauban TV" }, { n: "Facebook", h: "SMK Harapan Pangauban" }].map((s) => (
              <a key={s.n} href="#" className="rounded-xl bg-white/10 p-4 text-center backdrop-blur hover:bg-white/20">
                <span className="block text-sm font-bold">{s.n}</span>
                <span className="block text-xs text-white/70">{s.h}</span>
              </a>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {gallery.slice(0, 3).map((g) => (
              <span key={g.id} className="relative block h-20 overflow-hidden rounded-xl">
                {g.image ? (
                  <Image src={g.image} alt={g.judul} fill sizes="20vw" className="object-cover" />
                ) : (
                  <span className={`absolute inset-0 bg-gradient-to-br ${g.gradient}`} aria-hidden />
                )}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-[11px] font-semibold text-white">{g.judul.slice(0, 22)}</span>
              </span>
            ))}
          </div>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function PpdbCta() {
  return (
    <section aria-label="PPDB" className="bg-background">
      <Container className="pb-16">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-3xl px-8 py-12 text-center text-white sm:px-16">
          <Image src={IMG.lulusan} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/92 via-[#0F3D3E]/85 to-[#16A34A]/70" aria-hidden />
          <h2 className="relative text-2xl font-extrabold sm:text-4xl">PPDB 2026/2027 Telah Dibuka!</h2>
          <p className="relative mx-auto mt-3 max-w-2xl text-white/85">Kuota 450 siswa • 8 program keahlian • Jalur Prestasi, Afirmasi & Reguler. Bergabunglah menjadi bagian SMK unggul.</p>
          <div className="relative mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/ppdb" variant="white">Daftar Sekarang</Button>
            <Link href="/program-keahlian" className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-white/50 px-6 py-3 text-sm font-bold hover:bg-white/10">Lihat Jurusan</Link>
          </div>
        </div>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <span className="flex items-center gap-2"><Award size={16} className="text-accent" /> Akreditasi A Unggul</span>
          <span className="flex items-center gap-2"><Building2 size={16} className="text-accent" /> 80+ Mitra Industri</span>
          <span className="flex items-center gap-2"><Users size={16} className="text-accent" /> 95% Lulusan Terserap</span>
        </div>
      </Container>
    </section>
  );
}
