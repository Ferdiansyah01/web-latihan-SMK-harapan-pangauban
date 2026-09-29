"use client";

import { useState } from "react";

type Errors = { nama?: string; kelas?: string; layanan?: string; tanggal?: string; pesan?: string };

const kelasList = ["X RPL", "X SIJA", "X TEI", "X TM", "X TOI", "X DKV", "X TKR", "X AKL", "XI RPL", "XI SIJA", "XI TEI", "XI TM", "XI TOI", "XI DKV", "XI TKR", "XI AKL", "XII RPL", "XII SIJA", "XII TEI", "XII TM", "XII TOI", "XII DKV", "XII TKR", "XII AKL"];

const layananList = ["Akademik", "Karier", "Pribadi/Sosial", "Bullying"];

const inputCls =
  "w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

export function BookingForm() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [layanan, setLayanan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [pesan, setPesan] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [booked, setBooked] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (nama.trim().length < 3) e.nama = "Nama minimal 3 karakter.";
    if (!kelas) e.kelas = "Pilih kelas Anda.";
    if (!layanan) e.layanan = "Pilih jenis layanan.";
    if (!tanggal) e.tanggal = "Tanggal konseling wajib diisi.";
    if (pesan.trim().length < 10) e.pesan = "Ceritakan kebutuhan Anda minimal 10 karakter.";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setBooked(true);
  }

  function onReset() {
    setNama("");
    setKelas("");
    setLayanan("");
    setTanggal("");
    setPesan("");
    setErrors({});
    setBooked(false);
  }

  if (booked) {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="text-lg font-bold text-emerald-800">Jadwal Konseling Terkirim!</p>
        <p className="mt-1 text-sm text-emerald-700">
          Terima kasih, {nama} ({kelas}). Pengajuan layanan {layanan} pada {tanggal} telah kami terima. Guru
          BK akan menghubungi Anda untuk konfirmasi jadwal.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-primary px-6 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
        >
          Buat Jadwal Lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Formulir penjadwalan konseling" className="space-y-4">
      <div>
        <label htmlFor="nama" className="mb-1 block text-sm font-semibold text-ink">
          Nama Lengkap
        </label>
        <input
          id="nama"
          name="nama"
          type="text"
          autoComplete="name"
          value={nama}
          onChange={(ev) => setNama(ev.target.value)}
          placeholder="cth. Budi Santoso"
          className={inputCls}
          aria-invalid={Boolean(errors.nama)}
          aria-describedby={errors.nama ? "err-nama" : undefined}
        />
        {errors.nama && <p id="err-nama" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.nama}</p>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="kelas" className="mb-1 block text-sm font-semibold text-ink">
            Kelas
          </label>
          <select
            id="kelas"
            name="kelas"
            value={kelas}
            onChange={(ev) => setKelas(ev.target.value)}
            className={inputCls}
            aria-invalid={Boolean(errors.kelas)}
            aria-describedby={errors.kelas ? "err-kelas" : undefined}
          >
            <option value="">-- Pilih kelas --</option>
            {kelasList.map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
          {errors.kelas && <p id="err-kelas" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.kelas}</p>}
        </div>
        <div>
          <label htmlFor="layanan" className="mb-1 block text-sm font-semibold text-ink">
            Jenis Layanan
          </label>
          <select
            id="layanan"
            name="layanan"
            value={layanan}
            onChange={(ev) => setLayanan(ev.target.value)}
            className={inputCls}
            aria-invalid={Boolean(errors.layanan)}
            aria-describedby={errors.layanan ? "err-layanan" : undefined}
          >
            <option value="">-- Pilih layanan --</option>
            {layananList.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
          {errors.layanan && <p id="err-layanan" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.layanan}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="tanggal" className="mb-1 block text-sm font-semibold text-ink">
          Tanggal Konseling
        </label>
        <input
          id="tanggal"
          name="tanggal"
          type="date"
          value={tanggal}
          onChange={(ev) => setTanggal(ev.target.value)}
          className={inputCls}
          aria-invalid={Boolean(errors.tanggal)}
          aria-describedby={errors.tanggal ? "err-tanggal" : undefined}
        />
        {errors.tanggal && <p id="err-tanggal" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.tanggal}</p>}
      </div>
      <div>
        <label htmlFor="pesan" className="mb-1 block text-sm font-semibold text-ink">
          Cerita / Kebutuhan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={5}
          value={pesan}
          onChange={(ev) => setPesan(ev.target.value)}
          placeholder="Ceritakan secara singkat hal yang ingin didiskusikan..."
          className={`${inputCls} resize-y`}
          aria-invalid={Boolean(errors.pesan)}
          aria-describedby={errors.pesan ? "err-pesan" : undefined}
        />
        {errors.pesan && <p id="err-pesan" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.pesan}</p>}
      </div>
      <button
        type="submit"
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#15803D]"
      >
        Ajukan Jadwal Konseling
      </button>
    </form>
  );
}
