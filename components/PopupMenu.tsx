"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type PopupMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function PopupMenu({ open, onClose }: PopupMenuProps) {
  useEffect(() => {
    if (!open) return;
    const y = window.scrollY;
    const b = document.body as HTMLBodyElement;
    b.style.position = "fixed";
    b.style.top = `-${y}px`;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      const top = b.style.top;
      b.style.position = "";
      b.style.top = "";
      const py = top ? -parseInt(top) || 0 : 0;
      window.scrollTo(0, py);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  return (
    <div
      className="h-screen p-6 flex flex-col bg-background-light font-display transition-opacity duration-300"
      role="menu"
      aria-hidden={!open}
      aria-label="Popup navigation"
    >
      <header className="pb-6">
        <Link href="/" onClick={() => onClose()}>
          <Image
            alt="A New Direction For Health logo"
            src="/logo.png"
            width={45}
            height={45}
            className="w-12 h-12"
          />
        </Link>
      </header>

      <nav className="grow">
        <ul className="space-y-4">
          <div className="border-b border-gray-200" />
          <li>
            <Link
              href="/"
              className="block py-0 text-base text-gray-800"
              onClick={() => onClose()}
            >
              Home
            </Link>
          </li>
          <div className="border-b border-gray-200" />
          <li>
            <Link
              href="/about"
              className="block py-0 text-base text-gray-800"
              onClick={() => onClose()}
            >
              About Us
            </Link>
          </li>
          <div className="border-b border-gray-200" />
          <li>
            <Link
              href="/gallery"
              className="block py-0 text-base text-gray-800"
              onClick={() => onClose()}
            >
              Gallery
            </Link>
          </li>
          <div className="border-b border-gray-200" />
          {/* <li>
            <Link
              href="/blog"
              className="block py-0 text-base text-gray-800"
              onClick={() => onClose()}
            >
              Blog
            </Link>
          </li>
          <div className="border-b border-gray-200" /> */}
          <li>
            <Link
              href="/contact"
              className="block py-0 text-base text-gray-800"
              onClick={() => onClose()}
            >
              Contact
            </Link>
          </li>
          <div className="border-b border-gray-200" />
        </ul>
      </nav>

      <footer className="pt-8 pb-4">
        <Link href="/contact" className="block w-full">
          <span
            className="inline-flex w-full items-center justify-center bg-black text-white py-4 px-6 text-lg font-semibold rounded-full"
            onClick={onClose}
          >
            Get Involved
          </span>
        </Link>
      </footer>
    </div>
  );
}
