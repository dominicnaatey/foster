export default function StatsSection() {
  const stats = [
    { label: "Children Welcomed Home", value: "850+" },
    { label: "Families Supported", value: "500+" },
    { label: "Years of Service", value: "15" },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2 text-center rounded-xl p-6 border bg-white">
            <p className="text-gray-700 text-base font-medium">{item.label}</p>
            <p className="text-gray-900 text-4xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
