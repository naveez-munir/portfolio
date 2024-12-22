"use client"

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { Menu, X } from "lucide-react"
import { navItems } from "@/data/navItem";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBarItems = navItems;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto w-11/12 px-4 sm:px-6">
        <motion.div
          layout
          className={`relative flex h-14 items-center justify-between gap-3
            bg-accent px-6 shadow-lg backdrop-blur-sm
            ${isMenuOpen ? 'rounded-t-2xl md:rounded-full' : 'rounded-full'}
          `}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <motion.div
            className="flex items-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-background text-2xl font-bold">NM</h1>
          </motion.div>

          <nav className="hidden lg:flex grow justify-center">
            <ul className="flex items-center space-x-2 lg:space-x-6">
              {navBarItems.map(({ label, link }, index) => (
                <motion.li
                  key={label}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2 * (index + 1),
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                >
                  <Link
                    href={link}
                    className="text-background font-semibold hover:text-background/80 transition-all duration-500 text-sm lg:text-lg"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.button
            className="md:hidden text-background hover:text-background/80 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
            >
              <Link
                href="https://drive.google.com/file/d/1HMnLbtve9g8sGuW1gcPl2oLoUOEb4lwe/view"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-background text-background font-semibold py-1 px-3 lg:py-2 lg:px-4 rounded-full
                  hover:bg-background hover:text-accent transition-all duration-500"
              >
                Download CV
              </Link>
            </motion.div>
            <ThemeToggle />
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute left-0 right-0 top-14 md:hidden overflow-hidden"
              >
                <motion.div
                  className="bg-accent rounded-b-2xl shadow-lg"
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <ul className="flex flex-col items-center space-y-4 py-6">
                    {navBarItems.map(({ label, link }, index) => (
                      <motion.li
                        key={label}
                        className="w-full px-6"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.15 * index,
                          duration: 0.5
                        }}
                      >
                        <Link
                          href={link}
                          className="text-background font-semibold transition-all duration-500 text-lg block text-center
                            hover:text-background/80 py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {label}
                        </Link>
                      </motion.li>
                    ))}
                    <motion.li
                      className="flex items-center gap-4 pt-4 border-t border-background/10 w-full justify-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
                      >
                        <Link
                          href="https://drive.google.com/file/d/1HMnLbtve9g8sGuW1gcPl2oLoUOEb4lwe/view"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-background text-background font-semibold py-2 px-6 rounded-full
                            hover:bg-background hover:text-accent transition-all duration-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Download CV
                        </Link>
                      </motion.div>
                      <ThemeToggle />
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
};
