export default function Home() {
  return (
    <section className="flex items-center justify-between min-h-screen w-full h-screen px-[20%] bg-gray-50 dark:bg-gray-900">
      {/* Text Section */}
      <div className="flex flex-col justify-center" style={{ width: '50%' }}>
        <h1 className="text-9xl font-bold text-white leading-snug">
          Hello I’m
          <br />
          <span className="text-green-500">Jiayi</span>
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white text-lg rounded-md hover:bg-green-600">
          Download CV
        </button>
      </div>

      {/* Photo Section */}
      <div
        className="rounded-full bg-gray-800 flex-shrink-0"
        style={{ width: '20vw', height: '20vw', position: 'relative' }}
      >
        {/* Placeholder for the photo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-lg">Your Photo</span>
        </div>
      </div>
    </section>
  );
}
