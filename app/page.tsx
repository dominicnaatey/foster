"use client";

import React from "react";
import HeroSection01 from "@/components/HeroSection01";
import HeroSection from "@/components/HeroSection";
import CareSection from "@/components/CareSection";
import ProgramHighlights from "@/components/ProgramHighlights";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CtaSection from "@/components/CtaSection";
import ServicesSection from "@/components/ServicesSection";
import ImageGallery from "@/components/ImageGallery";

export default function FosterAgencyPage() {
  return (
    <div className="font-display bg-gray-50 text-[#333]">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <main>
            {/* <HeroSection /> */}
            <HeroSection01 />
            <CareSection />
            <ServicesSection />
            {/* <ProgramHighlights /> */}
            <ImageGallery />
            {/* <Testimonials /> */}
            <BlogSection />
            <CtaSection />
          </main>
        </div>
      </div>
    </div>
  );
}
