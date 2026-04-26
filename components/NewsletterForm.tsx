"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-inter text-base text-[#0A0A0A]">
        Inscription enregistrée. À très bientôt.
      </p>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 w-full"
        aria-label="Inscription newsletter"
      >
        <input
          type="email"
          required
          placeholder="votre@email.com"
          className="flex-1 font-inter text-sm px-4 py-3 border border-[#E5E5E0] bg-white text-foreground placeholder:text-[#6B7280] focus:outline-none focus:border-[#0A0A0A] transition-colors"
          aria-label="Adresse email"
        />
        <button
          type="submit"
          className="font-inter text-sm font-medium bg-[#0A0A0A] text-white px-6 py-3 hover:bg-[#1E3A8A] transition-colors duration-200 whitespace-nowrap w-full sm:w-auto min-h-[44px]"
        >
          S&apos;inscrire
        </button>
      </form>
      <p className="mt-4 font-inter text-xs text-[#6B7280]">
        Désinscription en un clic. Aucune donnée vendue.
      </p>
    </>
  );
}
