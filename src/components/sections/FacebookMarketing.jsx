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
    <section className="w-full bg-white pb-24 md:pb-32 mt-12 relative">
      {/* Floating FB Icon - Absolute positioned */}
      <div className="hidden lg:block absolute left-[-40px] top-[40%] w-[180px] h-[180px] z-20 pointer-events-none">
        <img src="/images/services/fb-floating.png" alt="Facebook Floating" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        <div className="bg-white rounded-[24px] p-8 md:p-12 border border-[#FF914D] flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10 shadow-sm">
          
          {/* Left Column - Image */}
          <div className="w-full lg:w-5/12 flex items-center justify-center bg-[#FFF9F3] rounded-[16px] overflow-hidden min-h-[400px]">
             <img src="/images/services/fb-rocket.png" alt="Facebook Marketing" className="w-full h-full object-cover" />
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <h3 className="font-switzer font-bold text-[24px] md:text-[28px] text-[#FF6B00] mb-4">
              Facebook Marketing Services
            </h3>
            <p className="font-inter font-medium text-[14px] md:text-[15px] leading-[1.6] text-text-muted mb-8 max-w-[90%]">
              Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {facebookFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5783A] text-white font-inter font-bold text-[13px] flex items-center justify-center mt-1">
                    {feature.number}
                  </div>
                  <p className="font-inter text-[14px] leading-[1.6] text-text-muted pt-1">
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
