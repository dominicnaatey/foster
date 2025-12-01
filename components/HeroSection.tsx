import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-screen">
      <div className="h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfcfKYoC6MORc0EG4a_FPs_yw-VOy7Py8nUGtEB80V2RTZCjYCH7dtcXMWfdPMJKXv320NaKtgvBjF1VVO0B8RHd8c7240c4exlKgp-U2O3t9flO5hObWzRuA81a1Y1XISSPaC3LRaZrXEwzDc3hnfSbNJAXGgh0XlkGvx941G0Ult09iwa08wuzBUQxy5Q9LZZsgKp0f_nHq-bJeNTKjA_eaOJYKkAow_Nu7ppOhxYTjxsVB42emphWI_IZ7VukpcUargus1-og"
                alt="Community group"
                width={960}
                height={720}
                className="w-full h-[50vh] md:h-[65vh] object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:pl-8">
            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              Uplifting Our Community With
              {" "}
              <span className="text-primary italic">Heartfelt Care</span>
            </h1>
            <p className="text-gray-700 md:text-lg">
              Dedicated to nurturing well-being and providing shelter, nourishment, and hope in a compassionate environment.
            </p>
            <div>
              <button className="rounded-full h-12 px-6 bg-black text-white font-bold hover:opacity-90">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
