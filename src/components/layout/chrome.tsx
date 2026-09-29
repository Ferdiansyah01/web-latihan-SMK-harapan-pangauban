"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Camera,
  Play,
  Globe,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { mainNavigation, secondaryNavigation, schoolProfile } from "@/data/navigation";
import { GlobalSearch } from "./GlobalSearch";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Beranda SMK Harapan Pangauban">
          <Image
            src="/images/logo-sekolah.png"
            alt="Logo SMK Harapan Pangauban"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full bg-white object-contain shadow-sm"
            priority
          />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-tight text-ink sm:text-base">SMK Harapan Pangauban</span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-muted sm:text-[11px]">Jawa Barat • Indonesia</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigasi utama">
          {mainNavigation.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-slate-100"
                >
                  {item.label} <ChevronDown size={14} aria-hidden />
                </Link>
                <div className="invisible absolute left-0 top-full w-60 translate-y-1 rounded-xl border bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className={cn("rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100", pathname === item.href ? "text-primary" : "text-ink")}>
                {item.label}
              </Link>
            )
          )}
          <Link href="/ppdb" className="ml-2 inline-flex min-h-[44px] items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
            PPDB
          </Link>
          <span className="ml-2"><GlobalSearch /></span>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 xl:hidden">
          <GlobalSearch />
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t bg-white xl:hidden">
          <nav className="space-y-1 px-4 py-4" aria-label="Navigasi seluler">
            {[...mainNavigation, ...secondaryNavigation].map((item) =>
              item.children ? (
                <div key={item.label} className="rounded-xl border">
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold"
                    onClick={() => setOpenAccordion(openAccordion === item.label ? null : item.label)}
                    aria-expanded={openAccordion === item.label}
                  >
                    {item.label}
                    <ChevronDown size={16} className={cn("transition-transform", openAccordion === item.label && "rotate-180")} />
                  </button>
                  {openAccordion === item.label && (
                    <div className="border-t bg-slate-50 px-2 py-2">
                      <Link href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-primary">
                        Semua {item.label}
                      </Link>
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-white">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-slate-100">
                  {item.label}
                </Link>
              )
            )}
            <Link href="/ppdb" onClick={() => setMobileOpen(false)} className="block rounded-xl bg-accent px-4 py-3 text-center text-sm font-bold text-white">
              PPDB — Daftar Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0B2B2C] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-sekolah.png"
              alt="Logo SMK Harapan Pangauban"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full bg-white object-contain"
            />
            <span className="text-base font-extrabold leading-tight">SMK Harapan<br />Pangauban</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Sekolah vokasi unggul berbasis teknologi dan industri. Membentuk lulusan kompeten, berkarakter, dan siap kerja.
          </p>
          <div className="mt-4 flex gap-2">
            <a href="#" aria-label="Instagram" className="rounded-lg bg-white/10 p-2.5 hover:bg-accent"><Camera size={16} /></a>
            <a href="#" aria-label="YouTube" className="rounded-lg bg-white/10 p-2.5 hover:bg-accent"><Play size={16} /></a>
            <a href="#" aria-label="Facebook" className="rounded-lg bg-white/10 p-2.5 hover:bg-accent"><Globe size={16} /></a>
          </div>
        </div>
        <nav aria-label="Navigasi footer">
          <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-300">Navigasi</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li><Link className="hover:text-white" href="/profil">Profil Sekolah</Link></li>
            <li><Link className="hover:text-white" href="/program-keahlian">Program Keahlian</Link></li>
            <li><Link className="hover:text-white" href="/kesiswaan/prestasi">Prestasi</Link></li>
            <li><Link className="hover:text-white" href="/berita">Berita</Link></li>
            <li><Link className="hover:text-white" href="/galeri">Galeri</Link></li>
          </ul>
        </nav>
        <nav aria-label="Layanan footer">
          <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-300">Layanan</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li><Link className="hover:text-white" href="/ppdb">PPDB Online</Link></li>
            <li><Link className="hover:text-white" href="/perpustakaan">E-Library</Link></li>
            <li><Link className="hover:text-white" href="/konseling">E-Counseling</Link></li>
            <li><Link className="hover:text-white" href="/layanan">Layanan Digital</Link></li>
            <li><Link className="hover:text-white" href="/hubungan-industri/bkk">Career Center & BKK</Link></li>
            <li><Link className="hover:text-white" href="/hubungan-industri/teaching-factory">Teaching Factory</Link></li>
            <li><Link className="hover:text-white" href="/agenda">Kalender Akademik</Link></li>
            <li><Link className="hover:text-white" href="/pengumuman">Pengumuman</Link></li>
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-300">Kontak</h3>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-white/80">
            <p>{schoolProfile.alamat}</p>
            <p>{schoolProfile.telepon}</p>
            <p>{schoolProfile.email}</p>
          </address>
          <p className="mt-4 text-xs text-white/50">NPSN {schoolProfile.npsn} • Akreditasi {schoolProfile.akreditasi}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 SMK Harapan Pangauban. All Rights Reserved.</p>
          <p>Dinas Pendidikan • Kementerian Pendidikan</p>
        </div>
      </div>
    </footer>
  );
}
