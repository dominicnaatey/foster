"use client";

import { motion } from "framer-motion";

export default function HeroAbout() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZ8fcw1bJ22D2HpF8HYOgcS7KQQxJHXDefrUQzgVL7dnt3lMRziDof4yr2CNgFevZpdcm1t1D4gkh5OH0xfaIqmLXSICbASkbURmsgA3Kbv9pftO8uNyYgzlz28UuXlA6II1Z7WJ4FM7KUCkUi-IImuhEgaGnudK3GiK1CSECxXFtUXglRs3NeDwFwykD0Hx6fttOA64eC8qg5zvxmE0R-84v-9-evyQRp2_cvkboxTWx6arA4qwMyIgfMfoCIESvEpMXXNbq3I5Q",
      alt: "bottom left",
      aspectRatio: "aspect-square",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj1OseGoDnvRI9MDwk676cQPCrRDOYp7BSS0coDwoP2ghQX0LGNBLwAp0uOgqXmvG_8bgIqotoWSKn74nIRhi7UQciTxw1xHP4qgmcty0z59o8GsUppZQ0sUj2bLknPF51gqqJrM32PR1vCq1828RdMMmW9Lm8eRxJKEI69qlNZyt5ksHYXdbWz6eLek9sM6bohlyA567bMcGU7fa5BqPbryPDnPo5Pn2JFL-F5mOJ27A5vT1lLCzTmS3m6ypZMeoVQs0kym-gJiJC",
      alt: "bottom center left",
      aspectRatio: "aspect-square",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIrJgV0xIfiA5mbRev5GgG0ek0JgYZETsYuoIMT3pi7qbpVQqdDG6fzBxvin3bqsu4Z-qt4wOOds65HsC3lwWjp_rcuOZb9oySk5AnQgcwkYmYzFTA2JY0wHhSK8HKqsYTAv7GQcg-LaH-7qEOytdNWXqivOUMec2XLTGlH4oislTDjfur_dCPK2M8dy2F-FblbHDo0XsTgVq-SQRvPITzV7xHPBFQ6Uk4dUB_-ftuLryU0U-JJMzKoiY2atoSMH8ZMagFgvQC1u7l",
      alt: "bottom center right",
      aspectRatio: "aspect-square",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPD48sT5-93yVPlxrU7FKTcIsSHmQ897X0Efux_X4FYEI_e3VfAsDyzoD2O5zZg-JqFWO2SMLVpXsV1-xw8SiFKaviq8BfxfBq1QMx-lFPExV63dG291kNlbpVFIGKvniOE65IcNhPujiWm7TGJE65IUCB7tN-u2e3wn2SIIEHBrw16bFDs_hBPpIk5Mfr61ubLfOzMqPn4Qihf-IZPeLZ23jO0sJ-rJFdWayR-HZPN8DaRoDD0d1QNb69dWoqPFRb2MQTAgyMdFxB",
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

        <div className={`max-w-6xl mx-auto absolute bottom-0 md:top-160 left-0 right-0 z-10`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end">
            {images.map((img, idx) => (
              <motion.div
                className="w-1/4 px-2"
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.8,
                  delay: idx * 0.1,
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
