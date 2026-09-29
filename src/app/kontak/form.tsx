"use client";

import { useState } from "react";

type Errors = { nama?: string; email?: string; pesan?: string };

export function ContactForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (nama.trim().length < 3) e.nama = "Nama minimal 3 karakter.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Masukkan alamat email yang valid.";
    if (pesan.trim().length < 10) e.pesan = "Pesan minimal 10 karakter.";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  }

  function onReset() {
    setNama("");
    setEmail("");
    setPesan("");
    setErrors({});
    setSent(false);
  }

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="text-lg font-bold text-emerald-800">Pesan Terkirim!</p>
        <p className="mt-1 text-sm text-emerald-700">
          Terima kasih, {nama}. Pesan Anda telah kami terima dan akan dibalas maksimal 2 hari kerja.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-primary px-6 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
        >
          Kirim Pesan Lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Formulir kontak" className="space-y-4">
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
          className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          aria-invalid={Boolean(errors.nama)}
          aria-describedby={errors.nama ? "err-nama" : undefined}
        />
        {errors.nama && <p id="err-nama" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.nama}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="cth. budi@email.com"
          className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email && <p id="err-email" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="pesan" className="mb-1 block text-sm font-semibold text-ink">
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={5}
          value={pesan}
          onChange={(ev) => setPesan(ev.target.value)}
          placeholder="Tulis pertanyaan seputar PPDB, program keahlian, atau kerja sama..."
          className="w-full resize-y rounded-xl border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          aria-invalid={Boolean(errors.pesan)}
          aria-describedby={errors.pesan ? "err-pesan" : undefined}
        />
        {errors.pesan && <p id="err-pesan" role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.pesan}</p>}
      </div>
      <button
        type="submit"
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#15803D]"
      >
        Kirim Pesan
      </button>
    </form>
  );
}
