"use client";

import React from "react";
import LG from "../../components/LightGallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = React.useState<
    "All" | "Events" | "Success Stories" | "Our Homes" | "Community"
  >("All");
  return (
    <div className="font-display bg-gray-50 text-[#0d141b] min-h-screen flex flex-col">
      <main className="flex-1 px-4 sm:px-8 md:px-20 lg:px-40 py-5 flex justify-center">
        <div className="w-full max-w-[960px]">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 p-4 sm:p-6 md:p-8">
            <div className="flex min-w-72 flex-col gap-3 text-center sm:text-left">
              <p className="text-[#0d141b] text-4xl font-black leading-tight tracking-[-0.033em]">
                Our Community in Photos
              </p>
              <p className="text-slate-500 text-base">
                Explore the moments that shape our journey and celebrate the
                connections we build every day.
              </p>
            </div>
          </div>

          {/* Chips */}
          <div className="px-4 sm:px-6">
            <div className="tabs-scroll flex gap-2 justify-start overflow-x-auto overscroll-contain touch-pan-x whitespace-nowrap -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory md:overflow-visible md:whitespace-normal">
              {(["All", "Events", "Success Stories", "Our Homes", "Community"] as const).map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={
                    `inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 shrink-0 snap-start ` +
                    (activeTab === tab
                      ? "bg-black text-white shadow-sm"
                      : "bg-slate-200 text-[#0d141b] hover:bg-slate-300")
                  }
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-2 md:columns-4 gap-4 p-4">
            <LG
              selector=".gallery-item"
              plugins={[lgThumbnail]}
              thumbnail={true}
              animateThumb={true}
              thumbWidth={74}
              thumbHeight={"32"}
              appendThumbnailsTo={".lg-outer"}
              currentPagerPosition={"middle"}
              alignThumbnails={"middle"}
              exThumbImage={"data-exthumbimage"}
              appendSubHtmlTo={".lg-item"}
              allowMediaOverlap={false}
              subHtmlSelectorRelative={true}
            >
              {(activeTab === "All" ? IMAGES : IMAGES.filter((it) => it.category === activeTab)).map((item, i) => (
                <a
                  key={i}
                  className="gallery-item block mb-4 break-inside-avoid rounded-xl overflow-hidden group cursor-pointer relative"
                  href={item.url}
                  data-sub-html={`#caption-${i}`}
                  data-exthumbimage={item.url}
                >
                  <img src={item.url} alt={item.title} className="hidden" />
                  <div id={`caption-${i}`} className="hidden">
                    <p className="text-white text-sm">{item.title}</p>
                  </div>
                  <div
                    className={`bg-cover bg-center rounded-xl flex flex-col justify-end p-4 ${item.aspect ?? "aspect-auto"} h-auto min-h-[200px]`}
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url("${item.url}")`,
                    }}
                  >
                    <p className="text-white text-base font-bold leading-tight line-clamp-3 transform transition-transform duration-300 group-hover:-translate-y-1">
                      {item.title}
                    </p>
                  </div>
                </a>
              ))}
            </LG>
          </div>
        </div>
      </main>
    </div>
  );
}

 

const IMAGES = [
  {
    title: "Summer Picnic Fun",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSA8jCSTNdedHdD9Jqei9tFl2TCejfBRXBuB_dQetNSCkSelKYzosrrrbPlklRuoeq8VsM9tTwCgUFaW62jK0WDwhk0gZFpGjh27NGV8-o20sWR9KKIGzmg_S-v6FsCcZiQJgAHK4hoDyIGYKUjK1K15z_9Jor3JjsFZyWZqq8MnFrdUfABP7lC37wsF6cwJj2YvIA7LNR69bme0bcaCYa2IzLh1tZThW0IKyw8iP1AhTOWaNA6jCW5oolWNr34evFMLiHGMO51g",
    aspect: "aspect-[3/4]",
    category: "Events",
  },
  {
    title: "A Forever Family",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr48lpLNE_RdGD6omTOAlqjazUBPgahNgcLXMZEYu8DwJSdxLV8i4CL7hCoWBVKom0YuLWqlauxLE485Q0hN5W1qyQgD_pa21NIyWDdSInFdOQEHgAya3oKlCm0XRsfFgHTdB-TiNFX2u1x9pc3mJuxqMZxj9Viv5wGBJjGdCwqVoUJ_g6-1PXDrTakCVyanJqHwjUa0K_dMvuS_L8M1euTBSQ_xzL2O_FEbBscOdVG6t466XDwEM4knEuZ8FvfbA06b_JO7Sjzw",
    aspect: "aspect-[4/3]",
    category: "Success Stories",
  },
  {
    title: "Our Welcoming Living Room",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDYo1dthlgD2ua60ZcbAeGV4Qjmq1Wi_qpyt8wmw1rC2vYVNf5YUoaXA2TcsbBtkJYAR8w03dPtf4vsm-MmagWb4MZHqc4Zrp3qAnIfo8eTRbsFx9CoK36rkljz-MENnhrMTN0UOq2UWBnfZH1tAoPC6U11iuNDranqnIfLy5Be8yF0zSRy7cvWHZg6NhjpUBWlHtMz0WmbJbXjyxuselK4_wHh_2kbh-pPkytk2CC4kyqFXx4-aj1PLsJ-iIjRMpTKLwWPPefKQ",
    aspect: "aspect-[1/1]",
    category: "Our Homes",
  },
  {
    title: "Top Left",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZ8fcw1bJ22D2HpF8HYOgcS7KQQxJHXDefrUQzgVL7dnt3lMRziDof4yr2CNgFevZpdcm1t1D4gkh5OH0xfaIqmLXSICbASkbURmsgA3Kbv9pftO8uNyYgzlz28UuXlA6II1Z7WJ4FM7KUCkUi-IImuhEgaGnudK3GiK1CSECxXFtUXglRs3NeDwFwykD0Hx6fttOA64eC8qg5zvxmE0R-84v-9-evyQRp2_cvkboxTWx6arA4qwMyIgfMfoCIESvEpMXXNbq3I5Q",
    aspect: "aspect-[16/9]",
    category: "Community",
  },
  {
    title: "Top Right",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj1OseGoDnvRI9MDwk676cQPCrRDOYp7BSS0coDwoP2ghQX0LGNBLwAp0uOgqXmvG_8bgIqotoWSKn74nIRhi7UQciTxw1xHP4qgmcty0z59o8GsUppZQ0sUj2bLknPF51gqqJrM32PR1vCq1828RdMMmW9Lm8eRxJKEI69qlNZyt5ksHYXdbWz6eLek9sM6bohlyA567bMcGU7fa5BqPbryPDnPo5Pn2JFL-F5mOJ27A5vT1lLCzTmS3m6ypZMeoVQs0kym-gJiJC",
    aspect: "aspect-[9/16]",
    category: "Events",
  },
  {
    title: "Bottom Right",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPD48sT5-93yVPlxrU7FKTcIsSHmQ897X0Efux_X4FYEI_e3VfAsDyzoD2O5zZg-JqFWO2SMLVpXsV1-xw8SiFKaviq8BfxfBq1QMx-lFPExV63dG291kNlbpVFIGKvniOE65IcNhPujiWm7TGJE65IUCB7tN-u2e3wn2SIIEHBrw16bFDs_hBPpIk5Mfr61ubLfOzMqPn4Qihf-IZPeLZ23jO0sJ-rJFdWayR-HZPN8DaRoDD0d1QNb69dWoqPFRb2MQTAgyMdFxB",
    aspect: "aspect-[3/2]",
    category: "Community",
  },
  {
    title: "Bottom Left",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIrJgV0xIfiA5mbRev5GgG0ek0JgYZETsYuoIMT3pi7qbpVQqdDG6fzBxvin3bqsu4Z-qt4wOOds65HsC3lwWjp_rcuOZb9oySk5AnQgcwkYmYzFTA2JY0wHhSK8HKqsYTAv7GQcg-LaH-7qEOytdNWXqivOUMec2XLTGlH4oislTDjfur_dCPK2M8dy2F-FblbHDo0XsTgVq-SQRvPITzV7xHPBFQ6Uk4dUB_-ftuLryU0U-JJMzKoiY2atoSMH8ZMagFgvQC1u7l",
    aspect: "aspect-[2/3]",
    category: "Our Homes",
  },
  {
    title: "Community Gathering",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWHxM2Ky2YquhLdRVrKCb2AHi3fiNk1fOzTAtlBNFmVbTVvs3hvAC2JenMBAyjz_EIEK1hiomIxBNOTzsQ8RvIe1--H-EPtH6xwhnaLujMNVS60Jp6ElI9AwwViyry5uWjj9I9YBqb0NN2CTfhAj6KzAfJaX1D-R5RXpj5wLgpaFmSkFDagSzh4Rm4kkv0ehpqq9bEWeDzbM9ubEaPlQNwcWxFa6uY_7xFJ0Kx10Ezkpa3p6Dt8TPf29wf5ofqDOecxo5YrDMLjlV4",
    aspect: "aspect-[21/9]",
    category: "Events",
  },
  {
    title: "Home & Care",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1yBADLVWuYiPZTbYoHx-L3wshm4mPYR5RpDvorYwsugoqW3472hgkxHbSifJZOlQBEhGNTtcr_6w_plrAKUpi_-UULHGel4xsSf1DbN2_3s_HCDe1nqIrhtT4F2ND68LXmTAuabIJd6XnuHMwB67gvPKUdyWhMpD4Mv9MccztasiOn--uhqIB5dS7XPRjhbc6rPq8-vA4Ln-V_8JGon9_GpA_An8cCObrVduUHIp6j4pnluTh28EF_yoc2unhzcTywzuxVxMQul0X",
    aspect: "aspect-[5/4]",
    category: "Our Homes",
  },
  {
    title: "Portrait",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZ8fcw1bJ22D2HpF8HYOgcS7KQQxJHXDefrUQzgVL7dnt3lMRziDof4yr2CNgFevZpdcm1t1D4gkh5OH0xfaIqmLXSICbASkbURmsgA3Kbv9pftO8uNyYgzlz28UuXlA6II1Z7WJ4FM7KUCkUi-IImuhEgaGnudK3GiK1CSECxXFtUXglRs3NeDwFwykD0Hx6fttOA64eC8qg5zvxmE0R-84v-9-evyQRp2_cvkboxTWx6arA4qwMyIgfMfoCIESvEpMXXNbq3I5Q",
    aspect: "aspect-[2/3]",
    category: "Success Stories",
  },
  {
    title: "Landscape",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj1OseGoDnvRI9MDwk676cQPCrRDOYp7BSS0coDwoP2ghQX0LGNBLwAp0uOgqXmvG_8bgIqotoWSKn74nIRhi7UQciTxw1xHP4qgmcty0z59o8GsUppZQ0sUj2bLknPF51gqqJrM32PR1vCq1828RdMMmW9Lm8eRxJKEI69qlNZyt5ksHYXdbWz6eLek9sM6bohlyA567bMcGU7fa5BqPbryPDnPo5Pn2JFL-F5mOJ27A5vT1lLCzTmS3m6ypZMeoVQs0kym-gJiJC",
    aspect: "aspect-[16/10]",
    category: "Community",
  },
];
