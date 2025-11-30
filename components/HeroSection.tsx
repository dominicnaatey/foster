export default function HeroSection() {
  return (
    <section className="w-full @container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[60vh] md:min-h-[75vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center text-center px-4 py-10 @[480px]:px-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfcfKYoC6MORc0EG4a_FPs_yw-VOy7Py8nUGtEB80V2RTZCjYCH7dtcXMWfdPMJKXv320NaKtgvBjF1VVO0B8RHd8c7240c4exlKgp-U2O3t9flO5hObWzRuA81a1Y1XISSPaC3LRaZrXEwzDc3hnfSbNJAXGgh0XlkGvx941G0Ult09iwa08wuzBUQxy5Q9LZZsgKp0f_nHq-bJeNTKjA_eaOJYKkAow_Nu7ppOhxYTjxsVB42emphWI_IZ7VukpcUargus1-og")',
          }}
        >
          <div className="max-w-3xl flex flex-col gap-4">
            <h1 className="text-white text-4xl font-black @[480px]:text-6xl leading-tight">
              Open Your Heart, Open Your Home
            </h1>
            <h2 className="text-white text-base @[480px]:text-lg">
              Every child deserves a safe and loving family. Discover how you can change a life forever.
            </h2>
          </div>
          <button className="rounded-xl h-12 px-5 bg-primary text-white text-base font-bold hover:opacity-90 transition-opacity @[480px]:h-14 @[480px]:text-lg">
            Become a Foster Parent
          </button>
        </div>
      </div>
    </section>
  );
}
