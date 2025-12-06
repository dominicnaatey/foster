"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import PopupMenu from "@/components/PopupMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const startXRef = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    setOpen(true);
    requestAnimationFrame(() => setSlideIn(true));
  };
  const closeMenu = () => {
    setSlideIn(false);
    setTimeout(() => setOpen(false), 300);
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FosterCare" width={45} height={45} priority />
          <span className="font-display text-xl font-bold">FosterCare</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
          <Link href="/gallery" className="text-gray-700 hover:text-gray-900">Gallery</Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button href="/contact" variant="black">Get Involved</Button>
          </div>
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => (open ? closeMenu() : openMenu())}
          >
            {open ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden fixed inset-0 z-1000 flex" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div
            id="mobile-nav"
            ref={(el) => { panelRef.current = el; }}
            className={`w-screen h-full bg-white shadow-[8px_0_16px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out will-change-transform flex flex-col`}
            style={{ transform: slideIn ? "translateX(0)" : "translateX(-100%)" }}
            onTouchStart={(e) => {
              startXRef.current = e.touches[0].clientX;
            }}
            onTouchMove={(e) => {
              // prevent accidental horizontal scroll
              const dx = (startXRef.current ?? e.touches[0].clientX) - e.touches[0].clientX;
              if (Math.abs(dx) > 10) e.preventDefault();
            }}
            onTouchEnd={(e) => {
              const endX = e.changedTouches[0].clientX;
              const startX = startXRef.current ?? endX;
              if (startX - endX > 60) closeMenu();
              startXRef.current = null;
            }}
          >
            <button aria-label="Close menu" className="absolute top-6 right-3 rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
              <XMarkIcon className="w-8 h-8" />
            </button>
            <PopupMenu open={open} onClose={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
}
