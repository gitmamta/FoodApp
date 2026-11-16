
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">

        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/080/763/original/healthy-food-logo-concept-logo-with-the-symbol-of-a-spoon-fork-and-leaf-can-be-for-restaurants-healthy-food-products-website-logos-for-food-consultants-vector.jpg"
            className="h-12 w-12 object-contain"
            alt="Veg-Foodie logo"
          />
          <span className="text-xl font-bold text-green-800 whitespace-nowrap">
            Veg-Foodie
          </span>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-green-800 text-2xl"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col gap-4 mt-4 md:mt-0 md:flex-row md:items-center md:gap-8 font-bold">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about-us" },
              { name: "Recipes", href: "/recipe" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-stone-700 hover:text-green-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/recipe"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-green-800 px-5 py-2 text-center text-white hover:bg-green-700"
              >
                Explore Recipes
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
