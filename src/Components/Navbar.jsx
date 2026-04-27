import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaTwitter, FaGithub, FaWhatsapp, FaLinkedin, FaMailchimp } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import Logo from "../assets/logo.jpeg"

const NavBar = () => {
  const [shadow, setShadow] = useState(false)
  const [menu, setMenu] = useState(false)
  const toggle = () => setMenu(!menu)

  useEffect(() => {
    const handleShadow = () => {
      window.scrollY >= 90 ? setShadow(true) : setShadow(false)
    }
    window.addEventListener('scroll', handleShadow)
    return () => window.removeEventListener('scroll', handleShadow)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [menu])

  const navLinks = [
    { href: '/#home', label: 'Home' },
    // { href: '/#about', label: 'About' },
    // { href: '/#skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ]

  const socials = [
    { href: 'https://www.linkedin.com/in/esther-otudoh?utm_source=share_via&utm_content=profile&utm_medium=member_ios', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
  ]

  return (
    <>
      {/* ── Desktop / Tablet Navbar ── */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          shadow
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] h-[72px]'
            : 'bg-transparent h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-full">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
              <img
                src={Logo}
                alt="Logo"
                className="relative w-[52px] h-[52px] rounded-full object-cover border-2 border-transparent group-hover:border-violet-400 transition-all duration-300 shadow-md"
              />
            </div>
            <span className="font-bold text-gray-900 tracking-tight text-xl hidden sm:block">
              VirtualancerHub<span className="text-violet-600">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                >
                  {label}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-1 mr-2">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full text-gray-500 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* CV Download Button */}
            <a
              href="/Esthers-cv.docx"
              download="Esther's-cv.docx"
              className="flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white text-sm font-semibold rounded-full shadow-md shadow-violet-200 transition-all duration-200"
            >
              <HiDownload size={16} />
              Download CV
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggle}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Open menu"
          >
            <AiOutlineMenu size={22} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {/* Overlay */}
      <div
        onClick={toggle}
        className={`lg:hidden fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          menu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer Panel */}
      <div
        className={`lg:hidden fixed top-0 left-0 z-[70] h-screen w-[78%] sm:w-[60%] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          menu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-bold text-gray-900 text-lg">
              VirtualancerHub<span className="text-violet-600">.</span>
            </span>
          </div>
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors duration-200"
            aria-label="Close menu"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <ul className="flex flex-col px-6 py-6 gap-1 flex-1 overflow-y-auto">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                onClick={toggle}
                className="flex items-center py-3.5 px-4 rounded-xl text-gray-700 font-medium hover:bg-violet-50 hover:text-violet-700 transition-all duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer Footer */}
        <div className="px-6 pb-8 pt-4 border-t border-gray-100 space-y-4">
          {/* CV Download */}
          <a
            href="/Esthers-cv.docx"
            download="Esther's-cv.docx "
            className="flex items-center justify-center gap-2 w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-md shadow-violet-200 transition-all duration-200 active:scale-95"
          >
            <HiDownload size={18} />
            Download CV
          </a>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full border border-gray-200 text-gray-500 hover:text-violet-600 hover:border-violet-300 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar