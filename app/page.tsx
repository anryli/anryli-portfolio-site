export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-lg text-gray-400">Software Developer</h2>
      <h1 className="text-5xl font-bold text-white">
        Hello I’m <span className="text-green-500">Jiayi Li</span>
      </h1>
      <p className="mt-4 text-gray-400">
        I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.
      </p>
      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Download CV
        </button>
        <div className="flex space-x-4">
          {['github', 'linkedin', 'twitter'].map((icon) => (
            <a
              key={icon}
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition"
            >
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
