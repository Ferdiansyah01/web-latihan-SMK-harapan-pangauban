"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Container, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FacilityCard } from "@/components/cards";
import { facilities } from "@/data/school";
import { cn } from "@/lib/utils";

const INTERVAL = 5000;

export function FacilitiesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = facilities.length;

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return 0;
    const first = track.children[0] as HTMLElement;
    const gap = parseFloat(getComputedStyle(track).columnGap || "20");
    return first.offsetWidth + gap;
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const target = ((i % count) + count) % count;
      setIndex(target);
      track.scrollTo({ left: target * step(), behavior: "smooth" });
    },
    [count, step]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Geser otomatis tiap 5 detik; timer me-reset setiap index berubah
  useEffect(() => {
    const t = setTimeout(() => {
      setIndex((i) => {
        const target = (i + 1) % count;
        const track = trackRef.current;
        if (track) {
          const first = track.children[0] as HTMLElement | undefined;
          const gap = parseFloat(getComputedStyle(track).columnGap || "20");
          track.scrollTo({
            left: target * ((first?.offsetWidth ?? 0) + gap),
            behavior: "smooth",
          });
        }
        return target;
      });
    }, INTERVAL);
    return () => clearTimeout(t);
  }, [index, count]);

  // Sinkronkan dots saat pengguna menggeser manual (swipe/scroll)
  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = step();
    if (s > 0) setIndex(Math.min(count - 1, Math.round(track.scrollLeft / s)));
  }, [count, step]);

  return (
    <section aria-label="Fasilitas sekolah" className="bg-white">
      <Container className="py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            align="left"
            eyebrow="Sarana & Prasarana"
            title="Fasilitas Sekolah"
            description="Laboratorium, bengkel, dan ruang praktik berstandar industri."
          />
          <Link
            href="/sarana-prasarana"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent"
          >
            Lihat Semua <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

        <Reveal delay={100}>
          <div
            role="region"
            aria-roledescription="korsel"
            aria-label="Korsel fasilitas sekolah"
            className="relative mt-8"
          >
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {facilities.map((f, i) => (
              <div
                key={f.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} dari ${count}`}
                className="w-[85%] shrink-0 snap-start sm:w-[47%] lg:w-[31.8%]"
              >
                <FacilityCard item={f} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Fasilitas sebelumnya"
              className="flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition-colors hover:bg-slate-100"
            >
              <ChevronLeft size={20} aria-hidden />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Navigasi fasilitas">
              {facilities.map((f, i) => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ke fasilitas ${i + 1}: ${f.nama}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    i === index ? "w-8 bg-primary" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Fasilitas berikutnya"
              className="flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-sm transition-colors hover:bg-slate-100"
            >
              <ChevronRight size={20} aria-hidden />
            </button>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
