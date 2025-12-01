import Button from "@/components/Button";

export default function CareSection() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8 bg-white p-8 rounded-xl shadow-sm">
          <p className="max-w-4xl text-5xl text-gray-700 text-center italic">
            Trauma informed care with person-centered practices focused on reunification and/or a new sustainable beginning.
          </p>
          <div className="flex justify-center">
            <Button href="#how-it-works" variant="black">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
