"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import CareSection from "@/components/CareSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CtaSection from "@/components/CtaSection";

export default function FosterAgencyPage() {
  return (
    <div className="font-display bg-white text-[#333]">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <main>
            <HeroSection />
            <section>
              <div className="mx-auto px-4">
                <CareSection />
              </div>
            </section>

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
