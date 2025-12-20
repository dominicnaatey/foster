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
    src: "/images/carousel/1.jpg",
    label: "Image 1",
  },
  {
    src: "/images/carousel/2.jpg",
    label: "Image 2",
  },
  {
    src: "/images/carousel/3.jpg",
    label: "Image 3",
  },
  {
    src: "/images/carousel/4.jpg",
    label: "Image 4",
  },
  {
    src: "/images/carousel/5.jpg",
    label: "Image 5",
  },
  {
    src: "/images/carousel/6.jpg",
    label: "Image 6",
  },
  {
    src: "/images/carousel/7.jpg",
    label: "Image 7",
  },
  {
    src: "/images/carousel/8.jpg",
    label: "Image 8",
  },
  {
    src: "/images/carousel/9.jpg",
    label: "Image 9",
  },
  {
    src: "/images/carousel/10.jpg",
    label: "Image 10",
  },
  {
    src: "/images/carousel/11.jpg",
    label: "Image 11",
  },
  {
    src: "/images/carousel/12.jpg",
    label: "Image 12",
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
    <section className="w-full bg-white py-4">
      <div className="mx-auto px-0">
        <div className="hidden sm:flex items-center justify-between mb-6 ">
          <button aria-label="Previous" onClick={prev} className="rounded-full p-2 text-slate-600 hover:bg-slate-100">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button aria-label="Next" onClick={next} className="rounded-full p-2 text-slate-600 hover:bg-slate-100">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        <div ref={containerRef} className="relative overflow-hidden py-8">
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
                className="relative shrink-0 rounded-[32px] overflow-hidden shadow-lg aspect-square"
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
