import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "public/logo.png";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 text-white p-[2rem] px-[7rem] flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" className="w-10 h-10" />
        <span className="text-3xl font-bold">Legends</span>
      </div>
      <ul className="flex gap-12 items-center">
        <li className="text-lg">
          <Link href="/">Overview</Link>
        </li>
        <li className="text-lg">
          <Link href="/">Featured</Link>
        </li>
        <li className="text-lg">
          <Link href="/">Getting Started</Link>
        </li>
        <li className="text-lg">
          <Link href="/">Media</Link>
        </li>
        <li className="text-lg">
          <Link href="/">FAQ</Link>
        </li>
      </ul>

      <div className="flex gap-3">
        <button className="border border-white rounded-lg px-4 py-2">
          Account
        </button>
        <button className=" text-black bg-yellow-500 rounded-lg px-4 py-2">
          Subscribe
        </button>
      </div>
    </nav>
  );
};
