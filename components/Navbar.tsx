import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-bold">FosterCare</Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="text-gray-700 hover:text-gray-900">How It Works</Link>
          <Link href="#blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
          <Link href="#cta" className="text-gray-700 hover:text-gray-900">Get Involved</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#cta" className="rounded-xl h-10 px-4 bg-primary text-white font-bold hover:opacity-90 flex items-center">Become a Foster Parent</Link>
        </div>
      </nav>
    </header>
  );
}
