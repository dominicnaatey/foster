import Image from "next/image";
import Button from "@/components/Button";

export default function AboutCopy() {
  return (
    <section className="bg-white mt-40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-slate-800 text-base md:text-lg leading-relaxed">
            We are dedicated to providing youth therapeutic enrichment services
            that are geared to offer quality, person-centered practices in a
            community-based model to males 9–18 years of age (up to 21 years of
            age if extended foster care is available). This model provides local
            support and services for youth to reside in a community of choice
            and provides a more realistic approach of modeling the world in
            which we live.
          </p>
          <p className="text-slate-800 text-base md:text-lg leading-relaxed">
            Our team consists of a variety of professionals to help manage and
            alleviate hindrances, while cultivating and developing strengths.
            Our person-centered approach helps support youth regardless of
            socio-economic status, race, religious beliefs, political
            affiliation, or identifying gender. We work to create and coordinate
            the best possible wrap-around team and we offer one-on-one staffing
            services for those with higher medical, behavioral, mental, social,
            and/or academic needs.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-12">
        <div className="flex flex-col gap-2 bg-[#F8F2E9] p-8 md:p-12 shadow-sm">
          <h6 className="text-sm md:text-base text-black text-start">
            {" "}
            OUR MISSION
          </h6>
          <p className=" text-2xl md:text-3xl text-black text-start">
            Trauma informed care with person-centered practices focused on
            reunification and/or a new sustainable beginning
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-20">
        <div className="text-3xl md:text-8xl font-bold text-center italic text-black/15">
          MAKING A DIFFERENCE
        </div>
      </div>

      <div className="h-full px-4 py-16 md:py-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="grid h-full max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center justify-between">
          <div className="order-2 md:order-1 flex flex-col gap-4 md:pl-8 items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              Get Involved
            </h1>
            <p className="text-gray-800 md:text-lg">
              {`Are you passionate about what we're doing? Let us know! We are
              always looking for qualified individuals to help us make our
              vision a reality. We'll help you find a way to best suits you.
              We're excited to have you join the team!`}
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Button href="#cta" variant="black">
                Apply Now
              </Button>
            </div>
          </div>

          <div className="w-full order-1 md:order-2">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/hero-bg.jpg"
                alt="Community group"
                width={960}
                height={720}
                className="w-full h-[35vh] md:h-[400px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
