import Link from "next/link";

export default function CtaSection() {
  return (
    <section id="cta" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 bg-soft-yellow text-center">
      <h2 className="text-3xl font-bold">Ready to Make a Lifelong Impact?</h2>
      <p className="mt-4 text-gray-700">Whether you can offer a home or support our mission, your help is invaluable.</p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/contact" className="rounded-xl h-12 px-6 bg-primary text-white font-bold hover:opacity-90 flex items-center justify-center">Get Involved</Link>
      </div>
    </section>
  );
}
