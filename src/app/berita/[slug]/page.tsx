import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { news } from "@/data/news";
import { Container, Badge, Breadcrumb } from "@/components/ui/primitives";
import { NewsCard } from "@/components/cards";
import { formatTanggal } from "@/lib/utils";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) return { title: "Berita Tidak Ditemukan" };
  return {
    title: `${item.title} | SMK Harapan Pangauban`,
    description: item.excerpt,
  };
}

export default async function BeritaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();
  if (!item) return null;

  const related = news.filter((n) => n.slug !== item.slug && n.category === item.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : news.filter((n) => n.slug !== item.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.excerpt,
    datePublished: item.tanggal,
    author: { "@type": "Organization", name: item.penulis },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={`relative overflow-hidden bg-gradient-to-br ${item.imageGradient}`}>
        {item.image && (
          <>
            <Image src={item.image} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F3D3E]/70 to-[#0F3D3E]/30" aria-hidden />
          </>
        )}
        <Container className="relative py-12 text-white sm:py-16">
          <Breadcrumb items={[{ label: "Berita", href: "/berita" }, { label: item.title }]} />
          <div className="mt-4 max-w-3xl">
            <Badge className="bg-white text-primary">{item.category}</Badge>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{item.title}</h1>
            <p className="mt-3 text-sm text-white/80">
              {formatTanggal(item.tanggal)} • {item.penulis}
            </p>
          </div>
        </Container>
      </div>
      <Container className="py-10">
        <article className="mx-auto max-w-3xl">
          <p className="text-lg font-medium leading-relaxed text-ink">{item.excerpt}</p>
          <div className="mt-6 space-y-4">
            {item.content.map((p, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          <Link href="/berita" className="mt-8 inline-flex text-sm font-semibold text-accent">
            ← Kembali ke Berita
          </Link>
        </article>

        <div className="mt-14">
          <h2 className="text-xl font-bold text-ink">Berita Terkait</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
