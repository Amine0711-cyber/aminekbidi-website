"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/",           label: "Accueil" },
  { href: "/vision",     label: "Vision" },
  { href: "/ecosysteme", label: "Écosystème" },
  { href: "/parcours",   label: "Parcours" },
  { href: "/cas",        label: "Études de cas" },
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

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
              position: "relative",
              zIndex: 101,
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

          {/* Mobile toggle button — hamburger when closed, X when open */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 10,
              minWidth: 44,
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--foreground)",
              position: "relative",
              zIndex: 101,
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Overlay — tap outside to close ── */}
      {menuOpen && (
        <div
          className="md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 98,
          }}
        />
      )}

      {/* ── Slide drawer — always in DOM for smooth CSS transition ── */}
      <aside
        className="md:hidden"
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "60%",
          maxWidth: 280,
          background: "var(--background)",
          zIndex: 99,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 250ms ease-out",
          boxShadow: menuOpen ? "-8px 0 32px rgba(0,0,0,0.14)" : "none",
          overflowY: "auto",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 96,
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: 22,
                  fontWeight: 500,
                  color: isActive ? "var(--accent)" : "var(--foreground)",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  display: "block",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
