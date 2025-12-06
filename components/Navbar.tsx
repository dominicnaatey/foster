"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FosterCare" width={45} height={45} priority />
          <span className="font-display text-xl font-bold">FosterCare</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="text-gray-700 hover:text-gray-900">How It Works</Link>
          <Link href="#blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
          <Link href="#cta" className="text-gray-700 hover:text-gray-900">Get Involved</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button href="#cta" variant="primary">Become a Foster Parent</Button>
          </div>
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            <Link href="#how-it-works" className="block text-gray-700 hover:text-gray-900">How It Works</Link>
            <Link href="#blog" className="block text-gray-700 hover:text-gray-900">Blog</Link>
            <Link href="#cta" className="block text-gray-700 hover:text-gray-900">Get Involved</Link>
            <Button href="#cta" variant="black" className="w-full mt-2">Become a Foster Parent</Button>
          </div>
        </div>
      )}
    </header>
  );
}
