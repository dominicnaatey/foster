"use client";

import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen w-full">
      <main className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-6xl">
          <div className="w-full">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[320px]"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 35%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvzSPh4j3bUl56Bfi42tp6P2d0yrUaEPFzyPfdJTOU0jho7-eQClTA6jKuaBFZBJ5DzlqhAxjWwlLDD6fALoCsu-bhYFjOtWSPf6SzDhh1NSsXM9XNE5iKVOMKGK1IkVLE8J3lhhBHC9NL9ABmNcEgGw_W4COzh7j1ZYM6YWwlYKIqllSIh3FwJ1LToaxHtugpcJXDQMYCEVk2x9ho2SHzbdWEDLHMDd2U30g9INjT9gcB5hdOhnr4MUAcjmduDwXb9BlYHCdTbQ")',
              }}
            >
              <div className="flex p-8">
                <p className="text-white text-5xl font-bold leading-tight tracking-tight">Let&apos;s Connect</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-6 p-4 pt-12">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">
                We&apos;d Love to Hear From You
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl">
                Whether you&apos;re interested in becoming a foster parent, volunteering, making a donation,
                or just have a question, we&apos;re here to help guide you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-4 mt-8">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight">Send us a Message</h2>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col sm:col-span-2">
                  <label className="text-slate-900 dark:text-white text-base font-medium pb-2" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    placeholder="Enter your full name"
                    className="form-input w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-background-dark h-12 p-3 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-slate-900 dark:text-white text-base font-medium pb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="form-input w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-background-dark h-12 p-3 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-slate-900 dark:text-white text-base font-medium pb-2" htmlFor="phone">
                    Phone <span className="text-slate-500 text-sm">(Optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="form-input w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-background-dark h-12 p-3 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <label className="text-slate-900 dark:text-white text-base font-medium pb-2" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="form-select w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-background-dark h-12 p-3 focus:ring-2 focus:ring-primary/50"
                  >
                    <option>Becoming a Foster Parent</option>
                    <option>Donations</option>
                    <option>Volunteering</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <label className="text-slate-900 dark:text-white text-base font-medium pb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help?"
                    className="form-textarea min-h-32 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-background-dark p-3 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <input id="consent" type="checkbox" className="form-checkbox h-5 w-5 text-primary border-slate-300 dark:border-slate-700" />
                  <label htmlFor="consent" className="text-slate-700 dark:text-slate-300 text-sm">
                    I agree to be contacted by the Foster Agency.
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <button className="w-full sm:w-auto h-12 px-6 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors">Send Message</button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold">Our Location</h3>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJWaIcS-6PTDN8MaY3hj-qzTU89-Lt8psS2aQ3HYUZDtQbNH4zkzM6TO1v-5h-uM-soZrmsTkkJmcecWOV2ikINgiAQtC5NLb_yeSy52Q0iubHTCkoShsAcIWYcyqWvntyQMhrZ2b2LH7YhVzlGrqH5j48jer9raqMV6e0sgn6SgAodBsfcVrBOOiC30oXziHU7jgD6g-0lH_RHCz7uAslRdP25SpqYb8Fk_a7BB_Gvuwgf8KJqV-hWBt68V0QwCcBIwGS8grU_A"
                    alt="Map"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <p>
                    123 Community Lane,
                    <br />San Francisco, CA 94102,
                    <br />United States
                  </p>
                </div>
                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <p>info@fosteragency.org</p>
                </div>
              </div>
              <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">emergency</span>
                  <h4 className="text-primary text-lg font-bold">In an Emergency?</h4>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  If you are a foster parent and have an urgent situation outside of business hours,
                  please call our 24/7 emergency line at (123) 555-0199.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
