"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { POSTS, POPULAR_POSTS } from "@/lib/data/sampleBlogPosts";

export default function BlogListingPage() {
  return (
    <section className="font-display bg-gray-50 px-4 md:px-10 lg:px-20 py-10 lg:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <p className="text-primary text-sm font-bold uppercase tracking-wider">Our Blog</p>
          <p className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mt-2">Stories & Insights</p>
          <p className="text-slate-500 text-base lg:text-lg mt-4 max-w-2xl">Insights, stories, and news from our community, shared to inspire and inform.</p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 p-3 overflow-x-auto whitespace-nowrap mb-12">
          {["All", "Success Stories", "Parenting Tips", "Agency News", "Volunteer Spotlights"].map((chip, i) => (
            <div
              key={i}
              className={`flex h-10 px-4 items-center rounded-full shrink-0 cursor-pointer ${
                chip === "All"
                  ? "bg-primary text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 transition"
              }`}
            >
              <p className="text-sm font-medium">{chip}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {POSTS.map((post, i) => (
                <Link href={`/blog/${post.slug}`} className="flex flex-col gap-3 group" key={i}>
                  <div className="w-full bg-center bg-cover bg-no-repeat aspect-[4/3] rounded-xl overflow-hidden" style={{ backgroundImage: `url(${post.image})` }} />
                  <div className="flex flex-col gap-2 p-2">
                    <p className="text-slate-500 text-sm">
                      {post.category} • {post.date}
                    </p>
                    <p className="text-slate-900 text-lg font-bold group-hover:text-primary transition-colors">{post.title}</p>
                    <p className="text-slate-600 text-sm">{post.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center p-4 mt-12">
              <button className="flex size-10 items-center justify-center text-slate-500 hover:text-primary">
                <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <button className="size-10 bg-primary text-white rounded-full font-bold">1</button>
              {[2, 3, "...", 8].map((num, i) => (
                <button key={i} className="size-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-200">
                  {num}
                </button>
              ))}
              <button className="flex size-10 items-center justify-center text-slate-500 hover:text-primary">
                <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <aside className="w-full lg:w-1/3 flex flex-col gap-10">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input type="text" placeholder="Search articles..." className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-primary" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-slate-900">Popular Posts</h3>
              <div className="flex flex-col gap-4">
                {POPULAR_POSTS.map((post, i) => (
                  <a key={i} href="#" className="flex items-center gap-4 group">
                    <Image src={post.image} width={80} height={80} className="w-20 h-20 object-cover rounded-lg" alt={post.alt} />
                    <div>
                      <p className="font-bold text-slate-800 group-hover:text-primary transition-colors leading-snug">{post.title}</p>
                      <p className="text-sm text-slate-500 mt-1">{post.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

 
