import Button from "@/components/Button";

export default function CareSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-16 lg:px-24 xl:px-40 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8 md:p-12 ">
          <p className=" text-2xl md:text-4xl text-gray-800 text-center">
            Trauma informed care with person-centered practices focused on reunification and/or a new sustainable beginning.
          </p>
          <div className="flex justify-center">
            <Button href="./about" variant="black">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
