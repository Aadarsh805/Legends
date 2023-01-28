import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="p-[5rem] flex justify-between text-[1.3rem] bg-black text-white items-center">
      <div className="w-[20vw] flex flex-col gap-4">
        <span>logo</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui fugit
          vitae id placeat laborum est.
        </p>
        <p>Lorem ipsum dolor, sit amet consectetu.</p>
      </div>
      <div className="flex gap-12">
        <ul className="flex gap-12 items-center flex-col">
          <li className="text-2xl">
            <Link href="/">Overview</Link>
          </li>
          <li className="text-2xl">
            <Link href="/">Featured</Link>
          </li>
          <li className="text-2xl">
            <Link href="/">Getting Started</Link>
          </li>
          <li className="text-2xl">
            <Link href="/">Media</Link>
          </li>
          <li className="text-2xl">
            <Link href="/">FAQ</Link>
          </li>
        </ul>
        <ul className="flex gap-12 items-center flex-col">
          <li className="text-2xl">
            <Link href="/">Overview</Link>
          </li>
          <li className="text-2xl">
            <Link href="/">Featured</Link>
          </li>
          <li className="text-2xl">
            <Link href="/">Getting Started</Link>
          </li>
          <li className="text-2xl">
            <Link href="/">Media</Link>
          </li>
          <li className="text-2xl">
            <Link href="/">FAQ</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
