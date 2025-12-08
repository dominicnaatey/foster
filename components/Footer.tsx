import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="A New Direction for Youth" width={28} height={28} />
          <span className="font-display text-sm font-bold text-slate-900">A New Direction for Youth</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <Link href="/about" className="hover:text-slate-900">About</Link>
          <Link href="/blog" className="hover:text-slate-900">Blog</Link>
          <Link href="/contact" className="hover:text-slate-900">Contact</Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <p className="text-center text-xs text-slate-500">© {new Date().getFullYear()} A New Direction for Youth. All rights reserved.</p>
      </div>
    </footer>
  );
}
