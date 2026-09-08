import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[879px] w-full flex items-center pt-32 pb-20 overflow-hidden">
      
      {/* Background Decor (from screenshot it is a warm gradient/soft peach) */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-gradient-to-br from-[#FFF5F0] via-[#FFF9F3] to-[#FFF5F0]" />
      
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left pt-12">
          
          {/* Rating/Review Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="flex items-center gap-[2px]">
              {/* Green star icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#00B65C" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              {/* 5 orange boxes with white stars */}
              {[1, 2, 3, 4, 5].map(star => (
                <div key={star} className="w-5 h-5 bg-[#FF6B00] rounded-[3px] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="font-inter font-medium text-[16px] text-text-main">
              <strong className="font-bold">Excellent</strong> 4.8 out of 5
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-switzer font-bold text-[48px] md:text-[56px] lg:text-[64px] leading-[1.15] text-text-main max-w-[800px] mb-8">
            <span className="text-[#FF6B00]">Best SMM Panel</span> <br />
            in Bangladesh - <span className="text-[#FF6B00]">Fast ,Safe</span> & <br />
            Growth in Social Media.
          </h1>

          {/* Subtitle */}
          <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[1.6] text-text-muted max-w-[691px] mb-10 border-l-2 border-transparent">
            SMM is Bangladesh&apos;s most reliable & cheap SMM panel for real social media growth. We built this platform for Bangladeshi businesses, creators, and agencies. You get fast delivery, safe methods, and followers that actually stay. No fake bots. No account risks. Just real results. Most panels chase big numbers. We focus on keeping those numbers. You get retention guarantees, delivery control, and long-term credibility.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link 
              href="#services"
              className="font-inter font-semibold text-primary bg-white border-2 border-primary/20 hover:border-primary px-8 py-4 rounded-[12px] transition-all min-w-[180px] text-center"
            >
              View Services
            </Link>
            <Link 
              href="/signup"
              className="font-inter font-semibold text-white bg-[#C45200] hover:bg-[#A34400] shadow-lg shadow-orange-900/20 px-8 py-4 rounded-[12px] transition-all min-w-[200px] text-center"
            >
              Create an Account
            </Link>
          </div>
        </div>

        {/* Right Visual Placeholder/Image */}
        <div className="relative h-full min-h-[600px] hidden lg:block">
           <img 
              src="/images/hero-graphic.png" 
              alt="Hero Graphic" 
              className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[150%] max-w-none object-contain scale-[1.3] transform origin-right pointer-events-none"
           />
        </div>
      </div>
    </section>
  );
}
