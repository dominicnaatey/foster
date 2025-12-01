"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CtaSection from "@/components/CtaSection";

export default function FosterAgencyPage() {
  return (
    <div className="font-display bg-background-light text-[#333]">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <main>
            <HeroSection />
            <StatsSection />
            <HowItWorks />
            <Testimonials />
            <BlogSection />
            <CtaSection />
          </main>
        </div>
      </div>
    </div>
  );
}
