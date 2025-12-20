"use client";

import React from "react";
import HeroSection01 from "@/components/HeroSection01";
import CareSection from "@/components/CareSection";
import BlogSection from "@/components/BlogSection";
import CtaSection from "@/components/CtaSection";
import ServicesSection from "@/components/ServicesSection";
import Carousel from "@/components/Carousel";

export default function FosterAgencyPage() {
  return (
    <div className="font-display bg-gray-50 text-[#333]">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <main>
            <HeroSection01 />
            <CareSection />
            <ServicesSection />
            <Carousel />
            <BlogSection />
            <CtaSection />
          </main>
        </div>
      </div>
    </div>
  );
}
