export default function Resume() {
    return (
      <div className="container mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800">Resume</h1>
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-700">Education</h2>
          <p className="mt-2 text-sm sm:text-base">
            Master&apos;s Degree in Computer Science - XYZ University
          </p>
          <h2 className="text-xl font-bold mt-6 text-gray-700">Experience</h2>
          <ul className="list-disc mt-2 ml-6 text-sm sm:text-base text-gray-700">
            <li>Software Engineer at ABC Corp</li>
            <li>Freelance Web Developer</li>
          </ul>
        </div>
      </div>
    );
  }
  