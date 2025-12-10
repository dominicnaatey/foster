"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


type Item = {
  src: string;
  alt?: string;
  label?: string;
};

type Props = {
  items?: Item[];
  autoPlay?: boolean;
  intervalMs?: number;
};

const DEFAULT_ITEMS: Item[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxp21q0SKCygjh4fWwGKeL8fjlPEd56jPonxUDYopupBMq5Ieug1zWDj4Qq5xOsH0C7yLfnvB7qysdTV-xrLYJLM3iDiAxBJYHxcB2H5DIqZRNE5R72KAdPcKSHMb7WrTNvD1QHjY5HINRmAAkwW2TSOT6agV-HXDKK0crtmw7aVcqlpHa1Zbimf84jIq4vHBc1odCZOh7Buyw_XSnx3GaW-ZH2sT3N_Qc_uaVKF2zntMoAxEW7-rAvqPKWL1CmNBRBhK7tisv7Ipv",
    label: "Emotive Ear Ring",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjR_JU5qsDlHdO4M-mFrIlT2cGZ3qfjyuHtEGiZzV4ZTsnqico__RFN9mkbiEjVpdW1LlYMCKsmtVtnLTdhDsWt7hTO_raNwjj4q0fS0rKqcXYt3DL_LJkl_DST4grIcYwPlKO-8-lCxNAjy_LaUatTsuiNW9th9GRo4e2nEaU8atB5uEc36N0k8T6V8oR6bdVpgmdOeREuW1PGTnS6LIk-Y5TGvwwZzImpxFTkj9yhoxT9nCFPZhwUwb02qUTsNXoiBNhaWE0HBY9",
    label: "Tendon-Driven",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9ibr8IBbRozyR4JsKSLzXGmURZOMiFhGhcLDQsWMAFWAY-TOaRuaxA-G6cc4LE6XrCrjCcXiJ7G-Yydp8IYVZKyNy8z5NviacDz3Gef-dJNg52U3c1ATx5p6pTPE6H3ZyyNz7rpzV0OaxLC1NYNN-gtXaizCcxdSWw44K-bR90NjB-TxEM3B6QAPDzPHIgrJC71XpWAAEn3b-eBMELxWR2Ignglh02cuiqjNguYN7cebLRMR1wqeNykgAFuECHvQ-_KTeWGny4H46",
    label: "Gentle",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIrJgV0xIfiA5mbRev5GgG0ek0JgYZETsYuoIMT3pi7qbpVQqdDG6fzBxvin3bqsu4Z-qt4wOOds65HsC3lwWjp_rcuOZb9oySk5AnQgcwkYmYzFTA2JY0wHhSK8HKqsYTAv7GQcg-LaH-7qEOytdNWXqivOUMec2XLTGlH4oislTDjfur_dCPK2M8dy2F-FblbHDo0XsTgVq-SQRvPITzV7xHPBFQ6Uk4dUB_-ftuLryU0U-JJMzKoiY2atoSMH8ZMagFgvQC1u7l",
    label: "Bottom Left",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1yBADLVWuYiPZTbYoHx-L3wshm4mPYR5RpDvorYwsugoqW3472hgkxHbSifJZOlQBEhGNTtcr_6w_plrAKUpi_-UULHGel4xsSf1DbN2_3s_HCDe1nqIrhtT4F2ND68LXmTAuabIJd6XnuHMwB67gvPKUdyWhMpD4Mv9MccztasiOn--uhqIB5dS7XPRjhbc6rPq8-vA4Ln-V_8JGon9_GpA_An8cCObrVduUHIp6j4pnluTh28EF_yoc2unhzcTywzuxVxMQul0X",
    label: "Bottom Center Left",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWHxM2Ky2YquhLdRVrKCb2AHi3fiNk1fOzTAtlBNFmVbTVvs3hvAC2JenMBAyjz_EIEK1hiomIxBNOTzsQ8RvIe1--H-EPtH6xwhnaLujMNVS60Jp6ElI9AwwViyry5uWjj9I9YBqb0NN2CTfhAj6KzAfJaX1D-R5RXpj5wLgpaFmSkFDagSzh4Rm4kkv0ehpqq9bEWeDzbM9ubEaPlQNwcWxFa6uY_7xFJ0Kx10Ezkpa3p6Dt8TPf29wf5ofqDOecxo5YrDMLjlV4",
    label: "Bottom Center Right",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPD48sT5-93yVPlxrU7FKTcIsSHmQ897X0Efux_X4FYEI_e3VfAsDyzoD2O5zZg-JqFWO2SMLVpXsV1-xw8SiFKaviq8BfxfBq1QMx-lFPExV63dG291kNlbpVFIGKvniOE65IcNhPujiWm7TGJE65IUCB7tN-u2e3wn2SIIEHBrw16bFDs_hBPpIk5Mfr61ubLfOzMqPn4Qihf-IZPeLZ23jO0sJ-rJFdWayR-HZPN8DaRoDD0d1QNb69dWoqPFRb2MQTAgyMdFxB",
    label: "Bottom Right",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj1OseGoDnvRI9MDwk676cQPCrRDOYp7BSS0coDwoP2ghQX0LGNBLwAp0uOgqXmvG_8bgIqotoWSKn74nIRhi7UQciTxw1xHP4qgmcty0z59o8GsUppZQ0sUj2bLknPF51gqqJrM32PR1vCq1828RdMMmW9Lm8eRxJKEI69qlNZyt5ksHYXdbWz6eLek9sM6bohlyA567bMcGU7fa5BqPbryPDnPo5Pn2JFL-F5mOJ27A5vT1lLCzTmS3m6ypZMeoVQs0kym-gJiJC",
    label: "Top Right",
  },
];

export default function Carousel({ items, autoPlay = false, intervalMs = 6000 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visible, setVisible] = useState(3);
  const gap = 24;
  useEffect(() => {
    const calc = () => {
      const w = containerRef.current?.clientWidth ?? 0;
      setContainerWidth(w);
      if (w < 640) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const step = useMemo(() => {
    if (!containerWidth) return 0;
    const inner = containerWidth - 2 * 24;
    const width = Math.max(220, Math.floor(inner / visible) - gap);
    return width + gap;
  }, [containerWidth, visible]);

  const source = useMemo(() => (items && items.length ? items : DEFAULT_ITEMS), [items]);
  const looped = useMemo(() => [...source, ...source, ...source], [source]);
  const base = source.length;
  const cardWidth = step ? step - gap : 0;
  const maxIndexLoop = Math.max(0, looped.length - visible);
  const [index, setIndex] = useState(base);
  const [disableTransition, setDisableTransition] = useState(false);

  const total = maxIndexLoop + 1;
  const adjust = React.useCallback((n: number) => (n < base ? n + base : n > base * 2 ? n - base : n), [base]);
  const next = React.useCallback(() => {
    setIndex((i) => {
      const raw = (i + 1) % total;
      const adj = adjust(raw);
      setDisableTransition(adj !== raw);
      if (adj !== raw) setTimeout(() => setDisableTransition(false), 0);
      return adj;
    });
  }, [total, adjust]);
  const prev = React.useCallback(() => {
    setIndex((i) => {
      const raw = (i - 1 + total) % total;
      const adj = adjust(raw);
      setDisableTransition(adj !== raw);
      if (adj !== raw) setTimeout(() => setDisableTransition(false), 0);
      return adj;
    });
  }, [total, adjust]);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      next();
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoPlay, intervalMs, next]);

  const minX = -(maxIndexLoop * step);
  const trackX = -(index * step);

  // normalization handled in event handlers

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto px-0">
        <div className="flex items-center justify-between mb-6">
          <button aria-label="Previous" onClick={prev} className="rounded-full p-2 text-slate-600 hover:bg-slate-100">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button aria-label="Next" onClick={next} className="rounded-full p-2 text-slate-600 hover:bg-slate-100">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex items-stretch"
            drag="x"
            dragElastic={0.04}
            dragConstraints={{ left: minX, right: 0 }}
            animate={{ x: trackX }}
            transition={disableTransition ? { duration: 0 } : { type: "spring", stiffness: 240, damping: 30 }}
            onDragEnd={(_, info) => {
              const delta = Math.round(info.offset.x / step);
              setIndex((i) => {
                const raw = (i - delta + total) % total;
                const adj = adjust(raw);
                setDisableTransition(adj !== raw);
                if (adj !== raw) setTimeout(() => setDisableTransition(false), 0);
                return adj;
              });
            }}
            style={{ gap: `${gap}px`, paddingLeft: 24, paddingRight: 24 }}
          >
            {looped.map((img, i) => (
              <div
                key={`${i}-${i % base}`}
                className="relative shrink-0 rounded-[32px] overflow-hidden shadow-lg"
                style={{ width: cardWidth }}
              >
                <Image src={img.src} alt={img.alt ?? img.label ?? ""} width={1200} height={800} className="h-full w-full object-cover" />
                {img.label && (
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
                    {img.label}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
