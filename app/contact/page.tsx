export default function Contact() {
    return (
      <div className="container mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left">
          Contact Me
        </h1>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full sm:w-auto"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
  