export default function HowItWorks() {
  const steps = [
    {
      icon: "info",
      title: "1. Learn More",
      text: "Attend an info session to understand the process and rewards of fostering.",
    },
    {
      icon: "description",
      title: "2. Apply & Train",
      text: "Complete the application and training to prepare for your journey.",
    },
    {
      icon: "home",
      title: "3. Welcome a Child",
      text: "Provide a safe, nurturing home and make a lasting difference.",
    },
  ];

  return (
    <section id="how-it-works" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How Foster Care Works</h2>
          <p className="mt-4 text-gray-600">Your journey to making a difference is a few simple steps away.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center p-6 text-center">
              <div className="size-16 flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
