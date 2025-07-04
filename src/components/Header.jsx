import React, { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="fixed top-0 left-0 w-full bg-[#001F3F] shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-white">
          <a href="#" className="flex items-center">
            <span className="text-white">Upasama</span>
            <span className="text-[#66a3ff]">.Ishani</span>
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="text-white hover:text-[#66a3ff] transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-[#66a3ff] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-[#66a3ff] transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-white hover:text-[#66a3ff] transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#66a3ff] transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-[#66a3ff] transition-colors duration-300"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#133E87] border-t border-[#0a2a5e] animate-fadeIn">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-white hover:text-[#66a3ff] transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#66a3ff] transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white hover:text-[#66a3ff] transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-white hover:text-[#66a3ff] transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#66a3ff] transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
