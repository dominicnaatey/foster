import Image from "next/image";
import Button from "@/components/Button";

export default function GetInvolved() {
  return (
    <div className="h-full px-4 py-16 md:pb-24 sm:px-8 md:px-16 lg:px-24 xl:px-40">
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
            <Button href="/contact" variant="black">
              Apply Now
            </Button>
          </div>
        </div>

        <div className="w-full order-1 md:order-2">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/getInvolved/1.jpg"
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
  );
}
