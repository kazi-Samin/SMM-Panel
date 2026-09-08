"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'API', href: '#api' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-inter font-bold text-[18px] text-primary flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-3 min-w-[120px]">
          LOGO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "font-inter text-[16px] transition-colors hover:text-primary",
                link.active ? "text-primary font-bold" : "text-[#393939] font-medium"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            href="/login" 
            className="font-inter font-semibold text-[15px] text-[#FF6B00] px-6 py-[10px] rounded-[10px] border border-[#FF6B00] hover:bg-orange-50 transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="font-inter font-semibold text-[15px] text-white px-6 py-[10px] rounded-[10px] bg-gradient-to-r from-[#F07A15] to-[#D55F00] shadow-md hover:shadow-lg transition-all"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#393939]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-6 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "font-inter text-lg py-2",
                link.active ? "text-primary font-bold" : "text-[#393939] font-medium"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
            <Link 
              href="/login" 
              className="font-inter font-semibold text-[#FF6B00] text-center py-3 border border-[#FF6B00] rounded-[10px]"
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="font-inter font-semibold text-white text-center py-3 bg-gradient-to-r from-[#F07A15] to-[#D55F00] rounded-[10px]"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
