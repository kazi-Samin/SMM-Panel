import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[879px] w-full flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements (from Figma: Light flare, Stars, Dot Pattern, Earth) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* We use CSS gradients and decorative elements to mimic the background structure */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-emerald-400/10 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] w-full flex flex-col items-center text-center">
        
        {/* Rating/Review Tag */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-gray-100">
          <div className="flex text-yellow-400">
            {/* 5 Stars */}
            {[1, 2, 3, 4, 5].map(star => (
              <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#FABB05]">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="font-inter font-medium text-[14px] text-text-main">
            Excellent 4.8 out of 5
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-switzer font-bold text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] text-text-main max-w-[800px] mb-6">
          Best SMM Panel <br className="hidden md:block" />
          in Bangladesh - Fast ,Safe & Growth in Social Media.
        </h1>

        {/* Subtitle */}
        <p className="font-inter font-medium text-[16px] leading-[1.6] text-text-muted max-w-[700px] mb-10">
          SMM is Bangladesh&apos;s most reliable & cheap SMM panel for real social media growth. We built this platform for Bangladeshi businesses, creators, and agencies. You get fast delivery, safe methods, and followers that actually stay. No fake bots. No account risks. Just real results. Most panels chase big numbers. We focus on keeping those numbers. You get retention guarantees, delivery control, and long-term credibility.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="#services"
            className="font-inter font-semibold text-primary bg-white border border-gray-200 hover:border-primary hover:bg-orange-50 px-8 py-4 rounded-full transition-all"
          >
            View Services
          </Link>
          <Link 
            href="/signup"
            className="font-inter font-semibold text-white bg-primary hover:bg-primary-hover shadow-lg shadow-orange-500/20 px-8 py-4 rounded-full transition-all"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </section>
  );
}
