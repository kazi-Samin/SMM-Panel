import React from 'react';

const timelineSteps = [
  {
    period: "Weeks 1-2",
    whatYouDo: "Use SMM services to build initial followers and engagement",
    whyItWorks: "Creates baseline credibility and improves first impression",
    costTime: "৳2,000–5,000"
  },
  {
    period: "Weeks 3-4",
    whatYouDo: "Start posting consistent, high-quality content",
    whyItWorks: "Larger follower base increases organic engagement",
    costTime: "Mostly content effort"
  },
  {
    period: "Months 2-3",
    whatYouDo: "Continue content + light support if needed",
    whyItWorks: "Faster reach, better algorithm response",
    costTime: "Reduced SMM usage"
  },
  {
    period: "Months 3-6",
    whatYouDo: "Focus mainly on organic growth",
    whyItWorks: "Strong engagement pushes content naturally",
    costTime: "Minimal or no SMM needed"
  }
];

export default function GrowthTimeline() {
  return (
    <section className="w-full bg-[#FFF9F3] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 text-primary font-inter font-semibold text-[14px] uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            GROWTH
          </div>
          <h2 className="font-switzer font-bold text-[32px] md:text-[36px] lg:text-[40px] text-text-main mb-6">
            Growing on Social Media in Bangladesh
          </h2>
          <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[1.6] text-text-muted max-w-[800px]">
            The smartest way to grow is by combining SMM support with real content. You use SMM at the beginning for momentum, then let organic growth take over.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {timelineSteps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-orange-50 shadow-sm flex flex-col items-center">
              {/* Period Button */}
              <div className="bg-primary text-white font-inter font-semibold text-[16px] py-2 px-8 rounded-full mb-8 shadow-sm">
                {step.period}
              </div>

              {/* Steps inside card */}
              <div className="w-full flex flex-col gap-6 relative">
                {/* Vertical Dashed Line connecting the numbers */}
                <div className="absolute left-[15px] top-[24px] bottom-[24px] w-[2px] bg-gradient-to-b from-orange-200 to-transparent border-dashed" />

                {/* What You Do */}
                <div className="flex gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex-shrink-0 flex items-center justify-center font-switzer font-bold text-primary text-[14px] border border-orange-100">
                    01
                  </div>
                  <div>
                    <h4 className="font-switzer font-semibold text-[18px] text-text-main mb-2">What You Do</h4>
                    <p className="font-inter text-[14px] leading-[1.5] text-text-muted">{step.whatYouDo}</p>
                  </div>
                </div>

                {/* Why it Works */}
                <div className="flex gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex-shrink-0 flex items-center justify-center font-switzer font-bold text-primary text-[14px] border border-orange-100">
                    02
                  </div>
                  <div>
                    <h4 className="font-switzer font-semibold text-[18px] text-text-main mb-2">Why it Works</h4>
                    <p className="font-inter text-[14px] leading-[1.5] text-text-muted">{step.whyItWorks}</p>
                  </div>
                </div>

                {/* Estimated Cost/Time */}
                <div className="flex gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex-shrink-0 flex items-center justify-center font-switzer font-bold text-primary text-[14px] border border-orange-100">
                    03
                  </div>
                  <div>
                    <h4 className="font-switzer font-semibold text-[18px] text-text-main mb-2">Estimated Cost/Time</h4>
                    <p className="font-inter font-medium text-[16px] leading-[1.5] text-text-main">{step.costTime}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
