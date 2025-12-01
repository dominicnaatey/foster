import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Supporting Youth With Care That Adapts to Their Needs</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-gray-700">Males ages 9–18 (up to 21 with extended foster care)</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-gray-700">Community-based model to allow youth to live in a real-world environment</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-gray-700">Person-centered therapeutic support</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-gray-700">Staff from diverse professional backgrounds</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-gray-700">Inclusive of all socio-economic, racial, religious, political, and gender identities</p>
            </li>
          </ul>
        </div>
        <div className="relative">
          <Image
            src="/hero-bg.jpg"
            alt="Caring support for youth"
            width={800}
            height={600}
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
