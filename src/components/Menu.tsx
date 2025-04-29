'use client';

import { useState } from 'react';
import '../app/about/page';
import '../app/certificates/page';
import '../app/contact/page';
import Link from 'next/link';
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-5 right-5 z-50 w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          {/* Top Line */}
          <span
            className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-[9px]'
            }`}
          />
          {/* Middle Line */}
          <span
            className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Bottom Line */}
          <span
            className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 translate-y-[9px]'
            }`}
          />
        </div>
      </button>

      {/* Dropdown menu */}
      <div
        className={`fixed right-5 top-16 z-40 w-48 bg-white shadow-lg rounded-lg p-4 space-y-4 transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col text-center">
          <Link href="/" className="text-black hover:underline">
            Home
          </Link>
          <Link href={'about'} className="text-black hover:underline">
            About
          </Link>
          <Link href={'certificates'} className="text-black hover:underline">
            Certificates
          </Link>
          <Link href={'contact'} className="text-black hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
