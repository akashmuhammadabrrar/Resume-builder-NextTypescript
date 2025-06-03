"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-extrabold text-white tracking-wide md:mr-16">
          RESUME TAILOR
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-10 text-white font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/pricing", label: "Pricing" },
            { href: "/testimonials", label: "Testimonials" },
            { href: "/faq", label: "FAQ" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative group"
            >
              <span>{item.label}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <Link
          href="/login"
          className="hidden md:inline-block border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-black transition md:ml-16"
        >
          Login
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4 text-white text-center">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link
            href="/login"
            className="inline-block border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
