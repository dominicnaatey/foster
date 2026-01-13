import Link from "next/link";
import Image from "next/image";
import { GlobeAltIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="FosterCare"
                  width={40}
                  height={40}
                  priority
                />
                <span className="font-display text-xs font-medium italic">
                  A New Direction <br />
                  For The Youth
                </span>
              </Link>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Providing Therapeutic Enrichment And Stable Community-Based Care
              For Boys And Girls.
            </p>
            <div className="flex gap-4">
              {["FB", "TW", "IG"].map((social) => (
                <a
                  key={social}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#111318] dark:text-white mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111318] dark:text-white mb-6">
              Support
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/contact"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/about"
                >
                  Safety Information
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111318] dark:text-white mb-6">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} A New Direction for Youth. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <GlobeAltIcon className="w-4 h-4" />
              <span className="text-sm">English (US)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CurrencyDollarIcon className="w-4 h-4" />
              <span className="text-sm">USD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
