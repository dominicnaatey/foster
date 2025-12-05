import Button from "@/components/Button";

export default function CareSection() {
  return (
    <section className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 pb-16 pt-1">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8 bg-black p-8 md:p-12 rounded-xl shadow-sm">
          <p className="max-w-4xl text-2xl md:text-6xl text-gray-100 text-center">
            Trauma informed care with person-centered practices focused on reunification and/or a new sustainable beginning.
          </p>
          <div className="flex justify-center">
            <Button href="#how-it-works" variant="light">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
