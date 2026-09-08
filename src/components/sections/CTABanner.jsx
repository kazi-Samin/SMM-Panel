import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="w-full bg-white pt-24 pb-24 md:pb-32 px-6 md:px-12 xl:px-[120px] overflow-visible">
      <div className="max-w-[1440px] mx-auto relative rounded-[32px] bg-gradient-to-br from-[#FFF5F0] to-[#FFF9F3] border border-orange-50 pt-16 md:pt-20 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between shadow-sm">
        
        {/* Background Map Map pattern */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply flex justify-center items-center overflow-hidden rounded-[32px]">
          <Image 
            src="/images/cta/map.png"
            alt="World Map"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col relative z-10 w-full md:w-[60%] lg:w-[50%] pb-16 md:pb-20">
          <h2 className="font-inter font-bold text-[32px] md:text-[36px] lg:text-[42px] leading-[1.2] text-text-main mb-6">
            Ready to Grow Your Social <br className="hidden lg:block"/> Media in <span className="text-[#FF6B00]">Bangladesh?</span>
          </h2>
          
          <p className="font-inter font-medium text-[15px] md:text-[16px] leading-[1.6] text-text-muted mb-10 max-w-[500px]">
            Join over 68,000 users who are already using SMM to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="#services"
              className="font-inter font-semibold text-primary bg-white border border-primary hover:bg-orange-50 px-8 py-4 rounded-[12px] transition-all min-w-[180px] text-center"
            >
              See All Services
            </Link>
            <Link 
              href="/signup"
              className="font-inter font-semibold text-white bg-[#C45200] hover:bg-[#A34400] shadow-lg shadow-orange-900/20 px-8 py-4 rounded-[12px] transition-all min-w-[180px] text-center"
            >
              Create Free Account
            </Link>
          </div>
        </div>

        {/* Right side girl image */}
        <div className="w-full md:w-[40%] lg:w-[50%] flex justify-end relative z-10 mt-8 md:mt-0">
          <div className="relative w-full max-w-[400px] h-[450px] md:h-[500px] lg:h-[550px] md:mt-[-120px] lg:mt-[-150px]">
            <Image 
              src="/images/cta/cta-girl.png"
              alt="Ready to grow"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
