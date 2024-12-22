export default function Project() {
    return (
      <div className="container mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-100 p-4 shadow-md rounded-lg text-center">
            <h2 className="text-lg font-bold">Portfolio Website</h2>
            <p className="mt-2 text-sm sm:text-base">
              A personal website built with Next.js and Tailwind.
            </p>
          </div>
          <div className="bg-gray-100 p-4 shadow-md rounded-lg text-center">
            <h2 className="text-lg font-bold">E-commerce Platform</h2>
            <p className="mt-2 text-sm sm:text-base">
              A full-stack e-commerce app using MongoDB and React.
            </p>
          </div>
        </div>
      </div>
    );
  }
  