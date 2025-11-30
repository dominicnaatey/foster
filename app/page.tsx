"use client";

import Image from "next/image";
import React from "react";

export default function FosterAgencyPage() {
  return (
    <div className="font-display bg-background-light text-[#333]">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <main>
            <section className="w-full @container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[60vh] md:min-h-[75vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center text-center px-4 py-10 @[480px]:px-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfcfKYoC6MORc0EG4a_FPs_yw-VOy7Py8nUGtEB80V2RTZCjYCH7dtcXMWfdPMJKXv320NaKtgvBjF1VVO0B8RHd8c7240c4exlKgp-U2O3t9flO5hObWzRuA81a1Y1XISSPaC3LRaZrXEwzDc3hnfSbNJAXGgh0XlkGvx941G0Ult09iwa08wuzBUQxy5Q9LZZsgKp0f_nHq-bJeNTKjA_eaOJYKkAow_Nu7ppOhxYTjxsVB42emphWI_IZ7VukpcUargus1-og")',
                  }}
                >
                  <div className="max-w-3xl flex flex-col gap-4">
                    <h1 className="text-white text-4xl font-black @[480px]:text-6xl leading-tight">
                      Open Your Heart, Open Your Home
                    </h1>
                    <h2 className="text-white text-base @[480px]:text-lg">
                      Every child deserves a safe and loving family. Discover how you can change a life forever.
                    </h2>
                  </div>

                  <button className="rounded-xl h-12 px-5 bg-primary text-white text-base font-bold hover:opacity-90 transition-opacity @[480px]:h-14 @[480px]:text-lg">
                    Become a Foster Parent
                  </button>
                </div>
              </div>
            </section>

            <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { label: "Children Welcomed Home", value: "850+" },
                  { label: "Families Supported", value: "500+" },
                  { label: "Years of Service", value: "15" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 text-center rounded-xl p-6 border bg-white"
                  >
                    <p className="text-gray-700 text-base font-medium">
                      {item.label}
                    </p>
                    <p className="text-gray-900 text-4xl font-bold">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="how-it-works" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 bg-white">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    How Foster Care Works
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Your journey to making a difference is a few simple steps away.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: "info",
                      title: "1. Learn More",
                      text: "Attend an info session to understand the process and rewards of fostering.",
                    },
                    {
                      icon: "description",
                      title: "2. Apply & Train",
                      text: "Complete the application and training to prepare for your journey.",
                    },
                    {
                      icon: "home",
                      title: "3. Welcome a Child",
                      text: "Provide a safe, nurturing home and make a lasting difference.",
                    },
                  ].map((step) => (
                    <div key={step.title} className="flex flex-col items-center p-6 text-center">
                      <div className="size-16 flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                        <span className="material-symbols-outlined text-4xl">
                          {step.icon}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Stories from Our Community
                  </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg border">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaoZyiBnH5h7D_Dw6JlzwS9AxuXdS-RCwiBRl0nfSzny-RzpE2QESuSLaayrwQ5lMAmNSej3q2Qmh8sOWWQBAGN0ZWXBnPlKsATo_nPIgAo3htrpPZicouF4bLmkjcSxIEgfr0iMDi89w9k-q5gl9mHMnIGHnwJeoBGVdnX328lZg6EOhqUsGyNbt_95zAD7P2myLam1QbgQ6HzukWluqa2BDli-lnLvalXyawb2_BBxX8RjJUwEn7R92yDdMOOgf_xanlAdDvNw"
                    alt="Portrait of Sarah Johnson"
                    width={180}
                    height={180}
                    className="rounded-full object-cover w-32 h-32 md:w-48 md:h-48"
                  />

                  <div className="text-center md:text-left">
                    <p className="text-lg italic">
                      &ldquo;Becoming a foster parent was the most rewarding decision of our lives...&rdquo;
                    </p>
                    <p className="mt-4 font-bold">- Sarah Johnson</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="blog" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">From Our Blog</h2>
                  <p className="mt-4 text-gray-600">
                    Get insights and stories from foster families and experts.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "A Day in the Life of a Foster Parent",
                      text: "Discover the daily joys and challenges...",
                      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoaQ-5PuBLrHTOmEwVmopGTyJh02gzykZT3pN7CWkgx46u4HhWHOwqVJTDSqFjpbLWOVm0b76CoHLHZTCdh0pF_7w_T-IARpT1UzMpb8OnP0vClLc3Jr9ooeGP7wWPn9joFXERVgVWARNJGDI3uU0e_EHmaxO0Tej2YVU3VGfecKPecGZ_UMFKQmcI3gQ5YQvdjyfVBsSEBBpHjLUTPV-hHFLL10npjPqH6BhU9wsPdbLzlq3YVuddlO-NH1_BTdAjPwm5L5B-Jg",
                    },
                    {
                      title: "Tips for New Foster Families",
                      text: "Feeling nervous? Here are five essential tips...",
                      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUBmvanOl63ThXAN6mk3lBpGtz7HXWyQVhHFotMFqbc_AdhMI_xYfg0ti1I3hF_w3mDtM_bBpYK_ymAVlBVtwbEzf_AmGy9Ymd4fLEhqKjExspsz2fB69CSCFabXYgEWIV-W1EOO_AfmEATy55YRyEBSAQWBKFN9762RIAnwU7udAi3YgxQkxKhkwhAP9-KJGdzdupyAuVrqs9Khi7NZvTFLZBNu8hMPt451dfwmKQE69sy8RfzzjLZxnjCeUBmUiEhDKMq2Rw0g",
                    },
                    {
                      title: "Community Support Stories",
                      text: "Learn how volunteers make a real difference...",
                      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5zkElBqVB7emC4jy9wtY8YDjblh-DOOv7OAR4EUq8_y-fAZyFeUh3Sw2RsH3UXtsvn895TT5SgWeW_wFjFMT-yareD4p2EOPDHynkyIOIV2vOqv3oIN1IUBUb10sN8PvLR_rtYBNb9CcRGdc0-QGpS6x4oh9vnj0CjY9JcvR9cY8jaXebxQkPoWMaXu53oSH2HAxBgtzD1ficcAvrxOuXilrQVIkDPRfXWmjEdw9umEsWEzfPasXcn__hoQp7JioX__GhT39u4g",
                    },
                  ].map((post) => (
                    <div
                      key={post.title}
                      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md border"
                    >
                      <Image
                        src={post.img}
                        alt={post.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover"
                      />

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg">{post.title}</h3>
                        <p className="text-gray-600 text-sm mt-2 flex-grow">
                          {post.text}
                        </p>
                        <a className="font-bold text-sm text-primary hover:underline mt-4">
                          Read More →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="cta" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 bg-soft-yellow text-center">
              <h2 className="text-3xl font-bold">Ready to Make a Lifelong Impact?</h2>
              <p className="mt-4 text-gray-700">
                Whether you can offer a home or support our mission, your help is invaluable.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="rounded-xl h-12 px-6 bg-primary text-white font-bold hover:opacity-90">
                  Become a Foster Parent
                </button>
                <button className="rounded-xl h-12 px-6 bg-peach text-gray-800 font-bold hover:opacity-90">
                  Donate Now
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
