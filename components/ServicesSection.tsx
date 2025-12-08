export default function ServicesSection() {
  return (
    <section className="bg-linear-to-b from-[#F8F2E9] to-white font-display">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-sm font-semibold tracking-widest text-black/70 font-display">
          OUR SERVICES
        </div>
        <div className="mt-4 grid grid-cols-1 md:flex gap-12 md:gap-12">
          <div className="md:w-[38%]">
            <h3 className="font-display text-3xl md:text-4xl text-black font-bold">
              CRISIS RESPITE
            </h3>
            <p className="mt-3 text-black/80 leading-relaxed">
              Short-term care and intervention strategies provided to a person
              for both medical and behavioral needs that support the caregiver
              and/or protect the person or others living with that person.
            </p>
          </div>

          <div className="md:w-[72%]">
            <h3 className="font-display text-3xl md:text-4xl text-black font-bold">
              FOSTER CARE
            </h3>
            <p className="mt-3 text-black/80 leading-relaxed text">
              Individual waiver services that provide ongoing residential care
              and supportive services in a home licensed as family foster care
              or corporate foster care. Child foster care services are provided
              to children younger than 18 years old who cannot be cared for in
              the biological or adoptive home. These services are individualized
              and based on the needs of the child, as identified in the support
              plan.
            </p>
          </div>
        </div>

        <div className="mt-10 text-start">
          <p className="font-display text-2xl md:text-3xl text-black">
            Additional Services Are Available Upon Request
          </p>
        </div>
      </div>
    </section>
  );
}
