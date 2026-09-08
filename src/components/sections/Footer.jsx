import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#A34400] text-white pt-20 pb-8 relative overflow-hidden">
      
      {/* Optional decorative overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="bg-white text-primary font-inter font-bold text-[18px] px-6 py-2 rounded-xl mb-6 inline-block">
              LOGO
            </Link>
            <p className="font-inter text-[14px] text-white/80 leading-[1.8] mb-8 pr-4">
              SMM is Bangladesh&apos;s most trusted SMM panel. We offer fast, affordable social media growth services for every platform, with full support for local payments like bKash and Nagad.
            </p>
            {/* Social Icons (using simple colored circles as placeholders for the actual icons in Figma) */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold cursor-pointer hover:-translate-y-1 transition-transform">f</div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white font-bold cursor-pointer hover:-translate-y-1 transition-transform">ig</div>
              <div className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white font-bold cursor-pointer hover:-translate-y-1 transition-transform">tw</div>
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold cursor-pointer hover:-translate-y-1 transition-transform">wa</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-switzer font-bold text-[18px] mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Services', 'Blog', 'Contact Us', 'Terms of Service', 'Privacy Policy', 'Refund Policy'].map(link => (
                <li key={link}>
                  <Link href="#" className="font-inter text-[14px] text-white/80 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Pages */}
          <div className="lg:col-span-3">
            <h4 className="font-switzer font-bold text-[18px] mb-6">Services Pages</h4>
            <ul className="flex flex-col gap-3">
              {[
                'Facebook SMM Panel',
                'Instagram SMM Panel',
                'YouTube SMM Panel',
                'TikTok SMM Panel',
                'Telegram SMM Panel',
                'X-Twitter SMM Panel'
              ].map(link => (
                <li key={link}>
                  <Link href="#" className="font-inter text-[14px] text-white/80 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-switzer font-bold text-[18px] mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">📧</span>
                <span className="font-inter text-[14px] text-white/80 leading-[1.6]">info@smmsun.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">📞</span>
                <span className="font-inter text-[14px] text-white/80 leading-[1.6]">+1 833 252 278</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">🌍</span>
                <span className="font-inter text-[14px] text-white/80 leading-[1.6]">Serving all of Bangladesh<br/>Support: 24/7</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-inter text-[14px] text-white/60">
            © 2026 SMM Limited. All Rights Reserved. | Operated under the Bangladesh ICT framework.
          </p>
        </div>
      </div>
    </footer>
  );
}
