// Unduh foto Unsplash ke public/images (sekali jalan).
// Memakai IP langsung + SNI karena DNS untuk images.unsplash.com flaky di jaringan ini.
// Jalankan: node scripts/download-images.mjs
import https from "node:https";
import fs from "node:fs";
import path from "node:path";

const HOST_IP = "151.101.194.208";
const HOST = "images.unsplash.com";

const PHOTOS = {
  kampus: "photo-1562774053-701939374585",
  kampusLama: "photo-1541339907198-e08756dedf3f",
  labKomputer: "photo-1531482615713-2afd69097998",
  kode: "photo-1555066931-4365d14bab8c",
  kodeLaptop: "photo-1498050108023-c5249f4df085",
  laptopGelap: "photo-1531297484001-80022131f5a1",
  laptopKode: "photo-1517694712202-14dd9538aa97",
  sirkuit: "photo-1518770660439-4636190af475",
  robot: "photo-1485827404703-89b55fcc595e",
  server: "photo-1558494949-ef010cbdcc31",
  industri: "photo-1504328345606-18bbc8c9d7d1",
  insinyur: "photo-1581091226825-a6a2a5aee158",
  insinyurLapangan: "photo-1581094794329-c8112a89af12",
  mesinMobil: "photo-1486262715619-67b85e0b08d3",
  wisuda: "photo-1523050854058-8df90110c9f1",
  wisudaTopi: "photo-1523580494863-6f3031224c94",
  wisudaGedung: "photo-1571260899304-425eee4c7ef2",
  lulusan: "photo-1523240795612-9a054b0db644",
  siswaLaptop: "photo-1522202176988-66273c2fd55f",
  kelas: "photo-1509062522246-3755977927d7",
  kelasTablet: "photo-1580582932707-520aed937b7b",
  aula: "photo-1505373877841-8d25f7d46678",
  rapat: "photo-1552664730-d307ca884978",
  tim: "photo-1521737604893-d14cc237f11d",
  timLaptop: "photo-1519389950473-47ba0277781c",
  kerjaTim: "photo-1504384308090-c894fdcc538d",
  presentasi: "photo-1542744173-8e7e53415bb0",
  perpusRak: "photo-1524995997946-a1c2e315a42f",
  perpusGedung: "photo-1507842217343-583bb7270b66",
  labSains: "photo-1532094349884-543bc11b234d",
  desain: "photo-1561070791-2526d30994b5",
  kameraFilm: "photo-1516035069371-29a1b244cc32",
  produksiFilm: "photo-1485846234645-a62644f84728",
  stadion: "photo-1574629810360-7efbbe195018",
  olahraga: "photo-1571019613454-1cb2f99b2d8b",
  bisnis: "photo-1454165804606-c3d57bc86b40",
  siber: "photo-1550751827-4bd374c3f58b",
};

const OUT_DIR = path.join(process.cwd(), "public", "images");
fs.mkdirSync(OUT_DIR, { recursive: true });

function download(key, id, attempt = 1) {
  return new Promise((resolve) => {
    const dest = path.join(OUT_DIR, `foto-${key}.jpg`);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 20000) {
      console.log(`skip ${key} (sudah ada)`);
      resolve(true);
      return;
    }
    const urlPath = `/${id}?auto=format&fit=crop&w=1200&q=70`;
    const req = https.get(
      {
        hostname: HOST_IP,
        path: urlPath,
        servername: HOST,
        headers: { Host: HOST, "User-Agent": "Mozilla/5.0" },
        timeout: 120000,
      },
      (res) => {
        if (res.statusCode !== 200) {
          console.log(`HTTP ${res.statusCode} ${key} (percobaan ${attempt})`);
          res.resume();
          resolve(false);
          return;
        }
        const out = fs.createWriteStream(dest);
        let bytes = 0;
        res.on("data", (c) => (bytes += c.length));
        res.pipe(out);
        out.on("finish", () => {
          console.log(`OK ${key} (${(bytes / 1024).toFixed(0)} KB)`);
          resolve(true);
        });
        out.on("error", () => resolve(false));
      }
    );
    req.on("timeout", () => {
      console.log(`TIMEOUT ${key} (percobaan ${attempt})`);
      req.destroy();
      resolve(false);
    });
    req.on("error", (e) => {
      console.log(`ERROR ${key}: ${e.message} (percobaan ${attempt})`);
      resolve(false);
    });
  });
}

async function runPool(entries, size) {
  const results = {};
  let i = 0;
  async function worker() {
    while (i < entries.length) {
      const [key, id] = entries[i++];
      let ok = false;
      for (let a = 1; a <= 3 && !ok; a++) ok = await download(key, id, a);
      results[key] = ok;
      if (!ok) console.log(`GAGAL TOTAL: ${key}`);
    }
  }
  await Promise.all(Array.from({ length: size }, worker));
  return results;
}

const entries = Object.entries(PHOTOS);
const results = await runPool(entries, 6);
const failed = entries.filter(([k]) => !results[k]).map(([k]) => k);
console.log(`\nSelesai: ${entries.length - failed.length}/${entries.length} berhasil.`);
if (failed.length) {
  console.log("Gagal:", failed.join(", "));
  process.exitCode = 1;
}
