import type { Metadata } from "next";
import { Container, PageHero, Badge } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Ekstrakurikuler | Kesiswaan SMK Harapan Pangauban",
  description:
    "10 ekstrakurikuler SMK Harapan Pangauban: Robotik, Paskibra, Pramuka, Futsal, Basket, Seni Musik, Film, PMR, Rohis, dan English Club beserta jadwal latihannya.",
};

const ekskul = [
  { nama: "Robotik", desc: "Perakitan dan pemrograman robot line follower, soccer, dan IoT untuk kontes regional–nasional.", jadwal: "Selasa & Kamis, 15.30–17.30", tempat: "Lab Mekatronika", pembina: "Agus Wijaya, S.T., M.T." },
  { nama: "Paskibra", desc: "Baris-berbaris, tata upacara, dan pasukan pengibar bendera upacara sekolah dan kota.", jadwal: "Rabu & Sabtu, 15.30–17.30", tempat: "Lapangan Utama", pembina: "Hendra Gunawan, S.Pd." },
  { nama: "Pramuka", desc: "Gugus depan wajib kelas X: tali-temali, survival, kepemimpinan regu, dan perkemahan.", jadwal: "Jumat, 14.00–16.00", tempat: "Lapangan & Aula", pembina: "Dewi Anggraini, S.Pd., M.Pd." },
  { nama: "Futsal", desc: "Tim futsal putra dan putri dengan liga internal dan persiapan O2SN.", jadwal: "Senin & Kamis, 16.00–18.00", tempat: "Lapangan Futsal", pembina: "Yusuf Maulana, A.Md." },
  { nama: "Basket", desc: "Klub basket dengan program fundamental, sparing antar sekolah, dan DBL preparation.", jadwal: "Selasa & Jumat, 16.00–18.00", tempat: "Lapangan Basket", pembina: "Dedi Kurniawan, S.Kom." },
  { nama: "Seni Musik", desc: "Band, angklung, dan paduan suara untuk pensi, upacara, dan festival pelajar.", jadwal: "Rabu, 15.30–17.30", tempat: "Ruang Seni", pembina: "Maya Putri, S.Psi." },
  { nama: "Film (Lensa Muda)", desc: "Produksi film pendek, sinematografi, dan editing — peraih Film Terbaik Festival Pelajar.", jadwal: "Kamis, 15.30–17.30", tempat: "Studio DKV", pembina: "Hendra Gunawan, S.Pd." },
  { nama: "PMR", desc: "Palang Merah Remaja: pertolongan pertama, donor darah, dan siaga UKS.", jadwal: "Sabtu, 09.00–11.00", tempat: "UKS", pembina: "Ratna Sari, S.IP." },
  { nama: "Rohis", desc: "Kerohanian Islam: kajian pekanan, tahsin, PHBI, dan pesantren kilat Ramadan.", jadwal: "Jumat, 13.00–14.00", tempat: "Masjid Sekolah", pembina: "Dewi Anggraini, S.Pd., M.Pd." },
  { nama: "English Club", desc: "Debate, speech, dan persiapan TOEIC bersama native-speaker partner.", jadwal: "Senin, 15.30–17.00", tempat: "Lab Bahasa", pembina: "Siti Nurhaliza, S.Kom., M.Kom." },
];

export default function EkstrakurikulerPage() {
  return (
    <>
      <PageHero
        eyebrow="Kesiswaan — Ekstrakurikuler"
        title="Ekstrakurikuler"
        description="10 pilihan kegiatan pengembangan diri di luar jam pelajaran — setiap siswa wajib mengikuti minimal satu ekstrakurikuler."
      />
      <Container className="py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ekskul.map((e) => (
            <article key={e.nama} className="flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <h2 className="text-lg font-bold text-ink">{e.nama}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{e.desc}</p>
              <dl className="mt-4 space-y-1.5 border-t pt-4 text-sm">
                <div className="flex gap-2">
                  <dt className="w-20 shrink-0 font-semibold text-ink">Jadwal</dt>
                  <dd className="text-muted">{e.jadwal}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-20 shrink-0 font-semibold text-ink">Tempat</dt>
                  <dd className="text-muted">{e.tempat}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-20 shrink-0 font-semibold text-ink">Pembina</dt>
                  <dd className="text-muted">{e.pembina}</dd>
                </div>
              </dl>
              <div className="mt-3">
                <Badge variant="accent">Pendaftaran via OSIS</Badge>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
