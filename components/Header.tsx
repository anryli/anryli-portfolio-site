import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="text-xl font-bold">Jiayi Li</h1>
        <ul className="flex flex-wrap space-x-6 text-sm md:text-base">
          {['Home', 'Services', 'Resume', 'Project', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`} className="hover:text-yellow-400">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
