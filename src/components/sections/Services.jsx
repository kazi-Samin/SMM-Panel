import React from 'react';
import { cn } from '@/lib/utils';

const socialPlatforms = [
  "Facebook", "Instagram", "X (Twitter)", "YouTube", 
  "TikTok", "LinkedIn", "Telegram", "Discord", 
  "Spotify", "SoundCloud", "Snapchat", "Website Traffic"
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary font-inter font-semibold text-[14px] uppercase tracking-wider mb-4 border border-orange-100">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            our services
          </div>
          <h2 className="font-switzer font-bold text-[32px] md:text-[36px] lg:text-[40px] text-text-main mb-6">
            Powerful SMM Services for Fast Growth
          </h2>
          <p className="font-inter font-normal text-[18px] leading-[1.6] text-text-muted max-w-[800px]">
            Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok, we&apos;ve got you covered.
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialPlatforms.map((platform, index) => (
            <button 
              key={index}
              className={cn(
                "group flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-100 bg-white hover:bg-orange-50 hover:border-primary transition-all shadow-sm hover:shadow-md",
                index === 0 ? "border-primary bg-orange-50 shadow-sm" : "" // Active state simulation
              )}
            >
              <div className="w-6 h-6 rounded-md bg-gray-100 group-hover:bg-white flex items-center justify-center text-gray-500 group-hover:text-primary transition-colors">
                {/* Fallback Icon placeholder */}
                <div className="w-3 h-3 rounded-full border-2 border-current" />
              </div>
              <span className="font-inter font-semibold text-[16px] md:text-[18px] text-text-main group-hover:text-primary transition-colors">
                {platform}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
