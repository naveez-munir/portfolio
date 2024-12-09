"use client"

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { Menu, X } from "lucide-react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBarItems = [
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Experience", link: "#experience" },
    { label: "Projects", link: "#projects" },
    { label: "Contact", link: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto w-11/12 px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-full bg-accent px-6 shadow-lg backdrop-blur-sm">
          <div className="flex items-center">
            <h1 className="text-background text-2xl font-bold">NM</h1>
          </div>

          <nav className="hidden md:flex grow justify-center">
            <ul className="flex items-center space-x-2 lg:space-x-6">
              {navBarItems.map(({ label, link }) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="text-background font-semibold transition duration-200 text-sm lg:text-lg"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden text-background"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>


          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/path-to-cv.pdf"
              download
              className="border-2 border-borderColor text-background font-semibold py-1 px-3 lg:py-2 lg:px-4 rounded-full hover:bg-background hover:text-foreground transition"
            >
              Download CV
            </Link>
            <ThemeToggle />
          </div>

          {isMenuOpen && (
            <div className="absolute top-14 left-0 w-full bg-foreground shadow-lg md:hidden">
              <ul className="flex flex-col items-center space-y-4 py-4">
                {navBarItems.map(({ label, link }) => (
                  <li key={label}>
                    <Link
                      href={link}
                      className="text-background font-semibold transition duration-200 text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="flex items-center space-x-4">
                  <Link
                    href="/path-to-cv.pdf"
                    download
                    className="border-2 border-background text-background font-semibold py-2 px-6 rounded-full"
                  >
                    Download CV
                  </Link>
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

