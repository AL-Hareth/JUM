import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[30] mt-3 w-52 p-2 shadow">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/step-one">Step One</Link>
          </li>
          <li>
            <Link href="/quizes">Quizes</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <Link href="/" className="btn btn-ghost text-xl">JUM</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/step-one">Step One</Link>
          </li>
          <li>
            <Link href="/quizes">Quizes</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
}
