import Link from "next/link";
import React from "react";
export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 text-white p-[2rem] flex justify-between items-center">
      <span className="text-3xl">Legends</span>
      <ul className="flex gap-5 items-center">
        <li>
          <Link href="/">Overview</Link>
        </li>
        <li>
          <Link href="/">Featured</Link>
        </li>
        <li>
          <Link href="/">Getting Started</Link>
        </li>
        <li>
          <Link href="/">Media</Link>
        </li>
        <li>
          <Link href="/">FAQ</Link>
        </li>
      </ul>

      <div className="flex gap-3">
        <button className="border border-white rounded-lg px-2 py-1">
          Account
        </button>
        <button className=" text-black bg-yellow-500 rounded-lg px-2 py-1">
          Subscribe
        </button>
      </div>
    </nav>
  );
};
