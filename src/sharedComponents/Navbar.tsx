import Image from "next/image";
import Link from "next/link";
import icon from '../../public/icon.png'

const Navbar = () => {
  return (
    <header className="bg-green-800 font-semibold fixed top-0 w-full">
      <section className="flex justify-between items-center section my-0 py-4">
        <div>
          <Image
            src={icon}
            alt="sajmul image"
            className="w-12 rounded-full"
          />
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
          </ul>
        </nav>

        <button>Resume</button>
      </section>
    </header>
  );
};

export default Navbar;
