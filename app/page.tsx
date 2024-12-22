import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center md:text-left md:flex md:items-center md:space-x-8">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Hello, I’m Jiayi Li
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600">
            Welcome to my personal portfolio!
          </p>
        </div>
        <Image
          src="/your-photo.jpg" // Replace with the actual path of your photo
          alt="Jiayi Li"
          width={200}
          height={200}
          className="mt-6 md:mt-0 rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
