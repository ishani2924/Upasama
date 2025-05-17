import React, { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-gray-800">
          <a href="#" className="flex items-center">
            <span className="text-blue-600">Upasama</span>
            <span>.Ishani</span>
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
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
