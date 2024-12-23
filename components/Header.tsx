import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 h-16">
      <nav className="container mx-auto flex justify-between items-center h-full px-6">
        <h1 className="text-2xl font-bold">
          <span className="text-green-500">Jiayi Li</span>
        </h1>
        <ul className="flex space-x-8 text-sm">
          {['Home', 'Resume', 'Project', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="hover:text-green-500"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Hire Me
        </button>
      </nav>
    </header>
  );
};

export default Header;
