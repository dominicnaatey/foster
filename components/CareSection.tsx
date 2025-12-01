import Button from "@/components/Button";

export default function CareSection() {
  return (
    <section className="bg-blue-300 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-20 rounded-3xl">
      <div aria-hidden className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-soft-red opacity-90 blur-2xl" />
      <div className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden text-center">
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
