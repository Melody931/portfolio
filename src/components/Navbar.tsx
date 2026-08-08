import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-white"
        >
          J<span className="text-[#8B5CF6]">L</span>C
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`border-t border-white/10 bg-[#0B1020]/95 px-5 py-4 backdrop-blur-md transition-all duration-200 md:hidden ${
          menuOpen
            ? 'visible max-h-96 opacity-100'
            : 'invisible max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar