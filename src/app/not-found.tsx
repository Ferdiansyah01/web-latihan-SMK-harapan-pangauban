import { Container, Button } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <Container className="py-20 text-center sm:py-28">
      <p className="text-7xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">Halaman Tidak Ditemukan</h1>
      <p className="mx-auto mt-2 max-w-md text-muted">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <div className="mt-8">
        <Button href="/">Kembali ke Beranda</Button>
      </div>
    </Container>
  );
}
