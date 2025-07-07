'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-gold/20 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center space-x-3 group hover:opacity-90 transition duration-300">
           

            <span className="text-gold font-orbitron text-xl tracking-wide glow-text">
              SVB Innovations
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-raleway">
          {navItems.map((link, index) => (
            <Link key={index} href={link.href} legacyBehavior>
              <a className="text-gold relative group transition duration-300 hover:text-yellow-400">
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
              </a>
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="text-gold w-6 h-6" /> : <Menu className="text-gold w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-black border-t border-gold/10">
          {navItems.map((link, index) => (
            <Link key={index} href={link.href} legacyBehavior>
              <a
                onClick={() => setIsOpen(false)}
                className="block text-gold hover:text-yellow-400 font-raleway text-sm border-b border-gray-700 pb-2"
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
