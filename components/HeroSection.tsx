import Image from "next/image";
// removed unused Link
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="bg-white w-full h-screen">
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
              <span className="text-primary">foster care for youth</span>
            </h1>
            <p className="text-gray-700 md:text-xl font-semibold">
              Providing therapeutic enrichment and stable community-based care for boys ages 9–18
            </p>
            <div className="flex items-center gap-4">
              <Button href="#cta" variant="black">Get Involved</Button>
              <Button href="#how-it-works" variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
