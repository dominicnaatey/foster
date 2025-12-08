"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const images = [
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
];

export default function ImageGallery() {
  return (
    <section w-full className="bg-white flex flex-col items-center pt-20 pb-24">
      <div className="flex items-center justify-center gap-16 mb-8">
        <button aria-label="Previous" className="text-gray-500 hover:text-gray-800 transition-colors">
          <ChevronLeftIcon className="w-8 h-8" />
        </button>
        <button aria-label="Next" className="text-gray-500 hover:text-gray-800 transition-colors">
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-6 px-16 overflow-visible">
        <div className="relative w-[380px] rounded-[40px] overflow-hidden shrink-0 shadow-sm">
          <Image
            src={images[0].src}
            alt={images[0].label}
            width={600}
            height={800}
            className="rounded-[40px] object-cover aspect-[4/4.3]"
          />
          <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
            {images[0].label}
          </span>
        </div>

        <div className="relative w-[620px] rounded-[45px] overflow-hidden shrink-0 shadow-lg scale-[1.03]">
          <Image
            src={images[1].src}
            alt={images[1].label}
            width={900}
            height={600}
            className="rounded-[45px] object-cover aspect-4/3"
          />
          <span className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
            {images[1].label}
          </span>
        </div>

        <div className="relative w-[380px] rounded-[40px] overflow-hidden shrink-0 shadow-sm">
          <Image
            src={images[2].src}
            alt={images[2].label}
            width={600}
            height={800}
            className="rounded-[40px] object-cover aspect-[4/4.3]"
          />
          <span className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
            {images[2].label}
          </span>
        </div>
      </div>

      <div className="flex space-x-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="w-2 h-2 rounded-full bg-gray-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-gray-900 ring-2 ring-gray-900/30" />
        <div className="w-2 h-2 rounded-full bg-gray-400" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
      </div>
    </section>
  );
}
