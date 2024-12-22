import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services/">Services</Link>
          </li>
          <li>
            <Link href="/resume/">Resume</Link>
          </li>
          <li>
            <Link href="/project/">Projects</Link>
          </li>
          <li>
            <Link href="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
