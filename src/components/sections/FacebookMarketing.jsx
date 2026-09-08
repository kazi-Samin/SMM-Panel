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
    <section className="w-full bg-white pb-24 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        <div className="bg-[#FFF9F3] rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 border border-orange-100">
          
          {/* Left Column - Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h3 className="font-switzer font-bold text-[28px] md:text-[32px] text-text-main mb-6 leading-[1.3]">
              Facebook Marketing Services
            </h3>
            <p className="font-inter font-medium text-[16px] leading-[1.6] text-text-muted mb-10">
              Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.
            </p>
            <button className="flex w-fit items-center gap-2 font-inter font-medium text-[16px] text-white bg-primary hover:bg-primary-hover transition-colors px-8 py-4 rounded-full shadow-md shadow-orange-500/20">
              View Facebook Services
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Column - Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {facebookFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-4 group">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-primary font-inter font-bold text-[14px] flex items-center justify-center border border-orange-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    {feature.number}
                  </div>
                  {/* Text */}
                  <div className="pt-1">
                    <p className="font-inter text-[16px] leading-[1.5] text-text-muted">
                      <strong className="font-semibold text-text-main group-hover:text-primary transition-colors">{feature.title}</strong> {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
