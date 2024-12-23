export default function Services() {
  const services = [
    { id: 1, title: 'Software Development Engineer', description: 'Building robust applications.' },
    { id: 2, title: 'UI/UX Design', description: 'Creating stunning user interfaces.' },
    { id: 3, title: 'Logo Design', description: 'Designing modern logos.' },
    { id: 4, title: 'SEO', description: 'Improving web search rankings.' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-white">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-800 p-6 rounded-md hover:bg-green-500 transition"
          >
            <h2 className="text-xl font-bold text-white">{service.title}</h2>
            <p className="mt-2 text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
