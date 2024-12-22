export default function Services() {
    return (
      <div className="container mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left">
          Services
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 text-center md:text-left">
          I offer a variety of services to help bring your ideas to life:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <li className="bg-gray-100 p-4 shadow-md rounded-lg text-center">
            Web Development
          </li>
          <li className="bg-gray-100 p-4 shadow-md rounded-lg text-center">
            UI/UX Design
          </li>
          <li className="bg-gray-100 p-4 shadow-md rounded-lg text-center">
            Mobile App Development
          </li>
          <li className="bg-gray-100 p-4 shadow-md rounded-lg text-center">
            Custom Software Solutions
          </li>
        </ul>
      </div>
    );
  }
  