import React from 'react';
import { ArrowRight } from 'lucide-react';

const facebookFeatures = [
  {
    number: "01",
    title: "Facebook Post Likes-",
    desc: "Boost post engagement and credibility with real likes."
  },
  {
    number: "02",
    title: "Facebook Likes-",
    desc: "Grow your page popularity with high-quality likes."
  },
  {
    number: "03",
    title: "Facebook Comments-",
    desc: "Increase interaction with engaging comments."
  },
  {
    number: "04",
    title: "Facebook Shares-",
    desc: "Expand your reach with powerful shares."
  },
  {
    number: "05",
    title: "Facebook Video Views-",
    desc: "Get more visibility with high-retention video views."
  },
  {
    number: "06",
    title: "Facebook Reactions-",
    desc: "Make your posts more engaging with diverse reactions."
  }
];

export default function FacebookMarketing() {
  return (
    <section className="w-full bg-white pb-24 md:pb-32 relative overflow-visible">
      {/* Huge floating FB icon watermark */}
      <div className="hidden 2xl:flex absolute left-[-100px] top-[10%] w-[250px] h-[250px] z-20 opacity-90 pointer-events-none items-center justify-center rotate-[-15deg]">
        <svg viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <path d="M24 12.073C24 5.405 18.627 0 12 0C5.373 0 0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.408c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        <div className="bg-white rounded-[24px] p-8 md:p-12 border border-orange-200 flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          
          {/* Left Column - Image */}
          <div className="w-full lg:w-5/12 flex items-center justify-center bg-[#FFF9F3] rounded-[16px] overflow-hidden min-h-[400px]">
             <img src="/images/services/fb-rocket.jpg" alt="Facebook Marketing" className="w-full h-full object-cover" />
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <h3 className="font-switzer font-bold text-[24px] md:text-[28px] text-[#FF6B00] mb-4">
              Facebook Marketing Services
            </h3>
            <p className="font-inter font-medium text-[14px] md:text-[15px] leading-[1.6] text-text-muted mb-8 max-w-[90%]">
              Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {facebookFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start group">
                  <div 
                    className="flex-shrink-0 w-8 h-8 bg-[#E5783A] text-white font-inter font-bold text-[12px] flex items-center justify-center mt-1 shadow-sm"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  >
                    {feature.number}
                  </div>
                  <p className="font-inter text-[14px] leading-[1.6] text-text-muted pt-1.5">
                    <strong className="font-semibold text-[#E5783A]">{feature.title}</strong> {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <button className="flex w-fit items-center font-inter font-semibold text-[15px] text-white bg-[#C45200] hover:bg-[#A34400] transition-colors px-6 py-3 rounded-[8px]">
              View Facebook Services
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
