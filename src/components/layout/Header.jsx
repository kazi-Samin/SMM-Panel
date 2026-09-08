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
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-inter font-bold text-xl text-primary flex items-center gap-2">
          LOGO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "font-inter text-base transition-colors hover:text-primary",
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
            href="/signin" 
            className="font-inter font-semibold text-primary px-4 py-2 hover:bg-orange-50 rounded-lg transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="font-inter font-semibold text-white bg-primary hover:bg-primary-hover px-6 py-3 rounded-full transition-colors"
          >
            Sign Up
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
              href="/signin" 
              className="font-inter font-semibold text-primary text-center py-3 border border-primary rounded-lg"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="font-inter font-semibold text-white bg-primary text-center py-3 rounded-full"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
