"use client";

import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactIntro from "@/components/contact/ContactIntro";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 font-display min-h-screen w-full">
      <main className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-6xl">
          <ContactHero />
          <ContactIntro />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-4 mt-8">
            <ContactForm />
            <ContactSidebar />
          </div>
        </div>
      </main>
    </div>
  );
}
