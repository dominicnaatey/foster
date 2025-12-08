"use client";

import React from "react";
import Image from "next/image";

export default function BlogArticle() {
  return (
    <main className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen py-5 sm:py-8 lg:py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div
          className="w-full bg-center bg-cover bg-no-repeat rounded-xl shadow-lg min-h-[320px] md:min-h-[480px]"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnUyMxnrz03S9O_4lDd7GIu-xu2b5tfMTw4yf-tDpAF-_SfeymfJUfuuB1fiUFv9UNM-z93jHC94pGjvonDM0L_M0hHh_lskUnXhjb_Ye-t_FdKsFkBq7Ujo4Y_wNCx2i6kUQkk8zrZmmBAu9N87eMcShuyK7ZVsf84LWz6hiagb7ahSEaqdRxTatDd4fUkvEoetNBgft0kBdtmOq83ruFIyTn8UTw2m2siwdy6yYSQOl5XIdndWanBoMdMn_Up1eaOAVol1_Rsw")',
          }}
        />

        <h1 className="text-slate-900 dark:text-slate-50 text-3xl md:text-5xl font-bold leading-tight tracking-tight pt-8 pb-4">
          Five Things We&apos;ve Learned from Our Foster Families This Year
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXYfOmt0cRporoSLRF3507rPOCjl8sV3-Na7mULMo4fSHAmazAj3IhXSOpxfkhpvkvZ9oxSjDoJ3a_d_cRL7aHduxepYtPzWRRNbcwDIgtfjpB8OkKHqFw4znEGZWP8ZaDesceDulgkx-3JV6zvvfuW5lque6pFGkiFqhnSgUgIYY7-6DVXvWlg3VwQFs7Xk1tRQ5yaWSnU1ExObcHjTRB8dH5uzIy2NKSVbK7uzmm32SzTs5aGz35ZUCGvx5IXky4TJkCA4f3Mw")',
              }}
            />
            <p className="text-base font-medium text-slate-800 dark:text-slate-200">By Jane Doe, Community Director</p>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 shrink-0">October 26, 2023 • 7 min read</p>
        </div>

        <div className="font-body text-lg text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
          <p>Starting a journey into foster care is a profound step, filled with moments of immense joy, learning, and growth...</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 pt-4">1. The Power of a Simple &quot;Yes&quot;</h2>
          <p>Every journey begins with a single step...</p>
          <blockquote className="border-l-4 border-accent bg-amber-50 dark:bg-amber-900/20 p-6 rounded-r-lg my-8">
            <p className="text-xl italic font-medium text-slate-800 dark:text-amber-100">&quot;Fostering is about providing a safe harbor, not just a house...&quot;</p>
          </blockquote>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 pt-4">2. Community is Everything</h2>
          <p>No one fosters alone...</p>
          <figure className="my-8">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAClMQ6XFNvBo39ymAFahE3oiWJDZk-dTewVQ3xxeWGDHth3Cz4cC8G7K322HcqTZpbg_Tkq2hJL-GVPsnhKOkv0DMSKGQHcTBOzWf303eJkHYtdJoEBU7DZp_ZDHJl04S-ErmMqpFplrpuYVoOaV1IA0TlaBu24mAMUYtlVT_zdTqPJKBSj0yErLZLJ8RQXypd_YBQXdx9jpL8_LdYISDRDqUYEeMJ8uf81CkkazZvap9TT8Z8NpYzr-B9sdUUSosU0O5R5-S0mg"
              alt="Community picnic"
              width={1200}
              height={700}
              className="rounded-xl shadow-md object-cover w-full"
            />
            <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">Our annual community picnic brings families together.</figcaption>
          </figure>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 pt-4">3. Resilience is a Learned Skill</h2>
          <p>Both children and parents demonstrate incredible resilience...</p>
          <div className="sticky top-24 z-10 my-10 flex flex-col items-center gap-4 py-6 border-y border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Share this story</h3>
            <div className="flex items-center gap-4">
              <span className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">link</span>
              <span className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">mail</span>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-slate-100">4. Small Moments Have the Biggest Impact</h2>
          <p>It&apos;s rarely the grand gestures...</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-slate-100">5. Love is an Action</h2>
          <p>Finally, and most importantly, our foster families have shown us that love is not just a feeling...</p>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a className="group flex flex-col gap-3" href="#">
              <div className="rounded-lg overflow-hidden">
                <div
                  className="aspect-video bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDH8QgSjO8DkD1BISbhzTevig26G4i0w8RwRbEFFOxN_o1r6HvmPCwiVH5f3fRD4yfF3f3zhn6TiBL_fML0jjlaP1vIz8vd0lg4WRpikrCWY6dLyIJfw5KswRGlIODltq4yuX5HeY3cPwtS-28Igwzp2znUanZ6rzxVtal7kK6zKyoKx_0xL6jtYRTKKzxL2kxldtJBKswSEdDtUL07NFT2BsqXgcsIkVtUMvzzfMhKEwEUUP8tlTl84-i6tLkZTdPPEnS8oRVqPA')",
                  }}
                />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">A Day in the Life of a Foster Parent</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Discover the daily joys and challenges...</p>
            </a>
            <a className="group flex flex-col gap-3" href="#">
              <div className="rounded-lg overflow-hidden">
                <div
                  className="aspect-video bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAfVc9X3YlbLwOt1pPXgYzZCgb0aRFb6tpIKe74uZamBYKgphxRrCO_-NTujcLO-XjOYnP8jHHdZWu1-0-EuJv1ozzew3aI7F4tNbO-uxaITQ9Z4aWL15Y4Yqy3ZrPvp8a_ZgFb-HSxdCZw2670s5mJfV42vRoYeD-In6bK93hQ0xMYHffIJF_Sc2TV34yLD3P44m04xvf4AMqbVpKUzRVaO9kHx0OjoSmmM6H70ehCCaS5PFJt8-j6hp5I6vRKMDxqIsa4flzFQ')",
                  }}
                />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">How Your Donations Make a Difference</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">See the tangible impact of your generosity...</p>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
