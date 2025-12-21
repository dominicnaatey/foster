"use client";

import { motion } from "framer-motion";

export default function HeroAbout() {
  const images = [
    {
      src: "/images/aboutHero/1.jpg",
      alt: "bottom left",
      aspectRatio: "aspect-square",
    },
    {
      src: "/images/aboutHero/2.JPG",
      alt: "bottom center left",
      aspectRatio: "aspect-square",
    },
    {
      src: "/images/aboutHero/3.jpg",
      alt: "bottom center right",
      aspectRatio: "aspect-square",
    },
    {
      src: "/images/aboutHero/4.jpg",
      alt: "Bottom right",
      aspectRatio: "aspect-square",
    },
  ];

  return (
    <section className="relative bg-black">
      <div className="min-h-[56vh] md:min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-100">
            About <span className="text-blue-400">Us</span>
          </h1>
          <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-100 max-w-2xl mx-auto">
            We Are Dedicated To Providing Youth Therapeutic Enrichment Services Using Person-Centered Practices Within A Community-Based Model
          </p>
        </div>

        <div className={`max-w-6xl mx-auto absolute top-100 md:top-150 left-0 right-0 z-10`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end">
            {images.map((img, idx) => (
              <motion.div
                className={`px-2 ${idx >= 2 ? "hidden md:block" : ""} w-1/2 md:w-1/4`}
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -15, 0], opacity: 1 }}
                transition={{
                  opacity: { duration: 0.8, delay: idx * 0.2 },
                  y: {
                    repeat: Infinity,
                    duration: 3 + (idx % 2) + idx * 0.3,
                    ease: "easeInOut",
                    delay: idx * 0.2,
                  },
                }}
              >
                <div className={`relative overflow-hidden rounded-lg md:rounded-xl ${img.aspectRatio}`}>
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-10" />
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 bottom-0 overflow-hidden leading-none">
        <svg
          className="block w-full h-20 md:h-28"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0,100 C360,60 1080,60 1440,100 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </div>
      </div>

      
    </section>
  );
}
