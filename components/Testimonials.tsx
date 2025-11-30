import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Stories from Our Community</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg border">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaoZyiBnH5h7D_Dw6JlzwS9AxuXdS-RCwiBRl0nfSzny-RzpE2QESuSLaayrwQ5lMAmNSej3q2Qmh8sOWWQBAGN0ZWXBnPlKsATo_nPIgAo3htrpPZicouF4bLmkjcSxIEgfr0iMDi89w9k-q5gl9mHMnIGHnwJeoBGVdnX328lZg6EOhqUsGyNbt_95zAD7P2myLam1QbgQ6HzukWluqa2BDli-lnLvalXyawb2_BBxX8RjJUwEn7R92yDdMOOgf_xanlAdDvNw"
            alt="Portrait of Sarah Johnson"
            width={180}
            height={180}
            className="rounded-full object-cover w-32 h-32 md:w-48 md:h-48"
          />
          <div className="text-center md:text-left">
            <p className="text-lg italic">&ldquo;Becoming a foster parent was the most rewarding decision of our lives...&rdquo;</p>
            <p className="mt-4 font-bold">- Sarah Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
}
