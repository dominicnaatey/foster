"use client";

import React from "react";

export default function GalleryPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50 min-h-screen flex flex-col">
      <main className="flex-1 px-4 sm:px-8 md:px-20 lg:px-40 py-5 flex justify-center">
        <div className="w-full max-w-[960px]">

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 p-4 sm:p-6 md:p-8">
            <div className="flex min-w-72 flex-col gap-3 text-center sm:text-left">
              <p className="text-[#0d141b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                Our Community in Photos
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-base">
                Explore the moments that shape our journey and celebrate the connections we build every day.
              </p>
            </div>
          </div>

          {/* Chips */}
          <div className="flex gap-3 p-3 flex-wrap pr-4 justify-center sm:justify-start">
            <Chip active label="All" />
            <Chip label="Events" />
            <Chip label="Success Stories" />
            <Chip label="Our Homes" />
            <Chip label="Community" />
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
            {IMAGES.map((item, i) => (
              <div
                key={i}
                className="bg-cover bg-center flex flex-col rounded-xl justify-end p-4 aspect-[3/4] group cursor-pointer overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url("${item.url}")`,
                }}
              >
                <p className="text-white text-base font-bold leading-tight line-clamp-3 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function Chip({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-xl px-4 transition-colors
        ${
          active
            ? "bg-primary text-white"
            : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-[#0d141b] dark:text-slate-300"
        }
      `}
    >
      <p className="text-sm font-medium leading-normal">{label}</p>
    </div>
  );
}

const IMAGES = [
  {
    title: "Summer Picnic Fun",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSA8jCSTNdedHdD9Jqei9tFl2TCejfBRXBuB_dQetNSCkSelKYzosrrrbPlklRuoeq8VsM9tTwCgUFaW62jK0WDwhk0gZFpGjh27NGV8-o20sWR9KKIGzmg_S-v6FsCcZiQJgAHK4hoDyIGYKUjK1K15z_9Jor3JjsFZyWZqq8MnFrdUfABP7lC37wsF6cwJj2YvIA7LNR69bme0bcaCYa2IzLh1tZThW0IKyw8iP1AhTOWaNA6jCW5oolWNr34evFMLiHGMO51g",
  },
  {
    title: "A Forever Family",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr48lpLNE_RdGD6omTOAlqjazUBPgahNgcLXMZEYu8DwJSdxLV8i4CL7hCoWBVKom0YuLWqlauxLE485Q0hN5W1qyQgD_pa21NIyWDdSInFdOQEHgAya3oKlCm0XRsfFgHTdB-TiNFX2u1x9pc3mJuxqMZxj9Viv5wGBJjGdCwqVoUJ_g6-1PXDrTakCVyanJqHwjUa0K_dMvuS_L8M1euTBSQ_xzL2O_FEbBscOdVG6t466XDwEM4knEuZ8FvfbA06b_JO7Sjzw",
  },
  {
    title: "Our Welcoming Living Room",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDYo1dthlgD2ua60ZcbAeGV4Qjmq1Wi_qpyt8wmw1rC2vYVNf5YUoaXA2TcsbBtkJYAR8w03dPtf4vsm-MmagWb4MZHqc4Zrp3qAnIfo8eTRbsFx9CoK36rkljz-MENnhrMTN0UOq2UWBnfZH1tAoPC6U11iuNDranqnIfLy5Be8yF0zSRy7cvWHZg6NhjpUBWlHtMz0WmbJbXjyxuselK4_wHh_2kbh-pPkytk2CC4kyqFXx4-aj1PLsJ-iIjRMpTKLwWPPefKQ",
  },
  {
    title: "Top Left",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZ8fcw1bJ22D2HpF8HYOgcS7KQQxJHXDefrUQzgVL7dnt3lMRziDof4yr2CNgFevZpdcm1t1D4gkh5OH0xfaIqmLXSICbASkbURmsgA3Kbv9pftO8uNyYgzlz28UuXlA6II1Z7WJ4FM7KUCkUi-IImuhEgaGnudK3GiK1CSECxXFtUXglRs3NeDwFwykD0Hx6fttOA64eC8qg5zvxmE0R-84v-9-evyQRp2_cvkboxTWx6arA4qwMyIgfMfoCIESvEpMXXNbq3I5Q",
  },
  {
    title: "Top Right",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj1OseGoDnvRI9MDwk676cQPCrRDOYp7BSS0coDwoP2ghQX0LGNBLwAp0uOgqXmvG_8bgIqotoWSKn74nIRhi7UQciTxw1xHP4qgmcty0z59o8GsUppZQ0sUj2bLknPF51gqqJrM32PR1vCq1828RdMMmW9Lm8eRxJKEI69qlNZyt5ksHYXdbWz6eLek9sM6bohlyA567bMcGU7fa5BqPbryPDnPo5Pn2JFL-F5mOJ27A5vT1lLCzTmS3m6ypZMeoVQs0kym-gJiJC",
  },
  {
    title: "Bottom Right",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPD48sT5-93yVPlxrU7FKTcIsSHmQ897X0Efux_X4FYEI_e3VfAsDyzoD2O5zZg-JqFWO2SMLVpXsV1-xw8SiFKaviq8BfxfBq1QMx-lFPExV63dG291kNlbpVFIGKvniOE65IcNhPujiWm7TGJE65IUCB7tN-u2e3wn2SIIEHBrw16bFDs_hBPpIk5Mfr61ubLfOzMqPn4Qihf-IZPeLZ23jO0sJ-rJFdWayR-HZPN8DaRoDD0d1QNb69dWoqPFRb2MQTAgyMdFxB",
  },
];
