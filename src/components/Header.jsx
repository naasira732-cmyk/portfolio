// src/components/Header.jsx

import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold">
          👨‍💻 Naasir
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <a href="#Home" className="hover:text-cyan-500 transition">
            Home
          </a>

          <a href="#About" className="hover:text-cyan-500 transition">
            About
          </a>

          <a href="#Projects" className="hover:text-cyan-500 transition">
            Projects
          </a>

          <a href="#Contact" className="hover:text-cyan-500 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="bg-[#0f172a] text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Login
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-5 font-medium">
          <a
            href="#Home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-500"
          >
            Home
          </a>

          <a
            href="#About"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-500"
          >
            About
          </a>

          <a
            href="#Projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-500"
          >
            Projects
          </a>

          <a
            href="#Contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-500"
          >
            Contact
          </a>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="bg-[#0f172a] text-white px-4 py-2 rounded-xl"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}