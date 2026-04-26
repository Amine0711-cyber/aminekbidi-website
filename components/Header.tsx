"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",           label: "Accueil" },
  { href: "/vision",     label: "Vision" },
  { href: "/ecosysteme", label: "Écosystème" },
  { href: "/parcours",   label: "Parcours" },
  { href: "/contact",    label: "Contact" },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Desktop / Tablet header ── */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          height: 72,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          transition: "background 250ms ease, border-color 250ms ease",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          background: scrolled ? "rgba(250,250,248,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(1.2)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.2)" : undefined,
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-w-hero)",
            margin: "0 auto",
            padding: "0 var(--padding-x-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              color: "var(--foreground)",
              textDecoration: "none",
            }}
          >
            AK
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex"
            style={{ gap: 40, alignItems: "center" }}
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link${isActive ? " active" : ""}`}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                    color: isActive ? "var(--accent)" : "var(--foreground)",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 10,
              minWidth: 44,
              minHeight: 44,
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 1,
                  background: "var(--foreground)",
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--background)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 48,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "none",
              border: "none",
              fontSize: 24,
              cursor: "pointer",
              color: "var(--foreground)",
              lineHeight: 1,
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>

          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: 32,
                fontWeight: 500,
                color: "var(--foreground)",
                textDecoration: "none",
                transition: "color 200ms ease",
                padding: "8px 32px",
                minHeight: 44,
                display: "flex",
                alignItems: "center",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
