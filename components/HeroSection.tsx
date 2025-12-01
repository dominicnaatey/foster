import Image from "next/image";
// removed unused Link
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="bg-white w-full md:h-screen">
      <div className="h-full px-4 py-16 md:py-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="grid h-full max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center justify-between">
          <div className="w-full order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/hero-bg.jpg"
                alt="Community group"
                width={960}
                height={720}
                className="w-full h-[35vh] md:h-[65vh] object-cover"
                priority
              />
            </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col gap-6 md:pl-8 items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              Trauma-informed, person-centered 
              {" "}
              <span className="text-black">foster care for youth</span>
            </h1>
            <p className="text-gray-700 md:text-xl font-semibold">
              Providing therapeutic enrichment and stable community-based care for boys ages 9–18
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Button href="#cta" variant="black">Get Involved</Button>
              <Button href="#how-it-works" variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
