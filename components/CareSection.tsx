import Button from "@/components/Button";

export default function CareSection() {
  return (
    <section className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden text-center">
          <div aria-hidden className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-soft-yellow opacity-50 blur-2xl" />
          <p className="relative text-2xl md:text-3xl text-gray-700 font-semibold leading-relaxed">
            Trauma informed care with person-centered practices focused on reunification and/or a new sustainable beginning.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#how-it-works" variant="black">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
