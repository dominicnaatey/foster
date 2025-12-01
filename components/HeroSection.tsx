import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full h-screen">
      <div className="h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="grid h-full max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/hero-bg.jpg"
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
              Trauma-informed, person-centered 
              {" "}
              <span className="text-primary italic">foster care for youth</span>
            </h1>
            <p className="text-gray-700 md:text-lg">
              Providing therapeutic enrichment and stable community-based care for boys ages 9–18
            </p>
            <div className="flex items-center gap-4">
              <Link href="#cta" className="rounded-full h-12 px-6 bg-primary text-white font-bold hover:opacity-90">
                Get Involved
              </Link>
              <Link href="#how-it-works" className="rounded-full h-12 px-6 border border-gray-300 text-gray-800 font-bold hover:bg-gray-100">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
