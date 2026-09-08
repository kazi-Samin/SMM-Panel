import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#FFF5F0] via-[#FFF9F3] to-[#FFEEE0]">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] w-full min-h-[879px] relative pt-[140px] pb-[80px]">
        
        {/* Left Content (Text) */}
        <div className="flex flex-col items-start text-left w-full lg:w-[55%] relative z-20">
          
          {/* Rating/Review Tag */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="flex items-center gap-[3px]">
              {/* Green star icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#00B65C" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              {/* 5 orange boxes with white stars */}
              {[1, 2, 3, 4, 5].map(star => (
                <div key={star} className="w-[20px] h-[20px] bg-[#FF6B00] rounded-[2px] flex items-center justify-center">
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
          <h1 className="font-switzer font-bold text-[42px] sm:text-[52px] md:text-[60px] lg:text-[68px] leading-[1.15] text-text-main mb-8">
            <span className="text-[#FF6B00]">Best SMM Panel</span>
            <br />
            in Bangladesh - <span className="text-[#FF6B00] italic">Fast ,Safe</span> &
            <br />
            Growth in Social Media.
          </h1>

          {/* Subtitle */}
          <p className="font-inter font-normal text-[15px] md:text-[16px] leading-[1.75] text-text-muted max-w-[560px] mb-12">
            SMM is Bangladesh&apos;s most reliable &amp; cheap SMM panel for real social media growth. We built this platform for Bangladeshi businesses, creators, and agencies. You get fast delivery, safe methods, and followers that actually stay. No fake bots. No account risks. Just real results. Most panels chase big numbers. We focus on keeping those numbers. You get retention guarantees, delivery control, and long-term credibility.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Link 
              href="#services"
              className="font-inter font-semibold text-[16px] text-primary bg-white border-2 border-primary/30 hover:border-primary hover:bg-orange-50 px-8 py-[14px] rounded-[10px] transition-all text-center"
            >
              View Services
            </Link>
            <Link 
              href="/signup"
              className="font-inter font-semibold text-[16px] text-white bg-[#C45200] hover:bg-[#A34400] px-8 py-[14px] rounded-[10px] transition-all text-center shadow-lg shadow-orange-900/20"
            >
              Create an Account
            </Link>
          </div>
        </div>

        {/* Right Visual (Girl + decorations) — absolutely positioned on desktop */}
        <div className="hidden lg:block absolute top-0 right-0 w-[50%] h-full pointer-events-none z-10">
          <Image 
            src="/images/hero-girl.png" 
            alt="SMM Panel Hero" 
            width={900}
            height={900}
            className="absolute bottom-0 right-[-40px] w-auto h-[110%] max-h-[950px] object-contain object-bottom"
            priority
          />
        </div>

        {/* Mobile hero image fallback */}
        <div className="block lg:hidden mt-12 w-full flex justify-center">
          <Image 
            src="/images/hero-girl.png" 
            alt="SMM Panel Hero" 
            width={500}
            height={500}
            className="w-full max-w-[400px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
