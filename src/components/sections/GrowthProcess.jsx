import React from 'react';

const steps = [
  {
    num: "01",
    title: "Create Account",
    desc: "Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard."
  },
  {
    num: "02",
    title: "Add Funds",
    desc: "Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately."
  },
  {
    num: "03",
    title: "Select Service",
    desc: "Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly."
  },
  {
    num: "04",
    title: "Place your order",
    desc: "Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly."
  }
];

export default function GrowthProcess() {
  return (
    <section className="w-full bg-[#FFF9F3] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 text-primary font-inter font-semibold text-[14px] uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            WORKING PROCESS
          </div>
          <h2 className="font-switzer font-bold text-[32px] md:text-[36px] lg:text-[40px] text-text-main mb-6">
            Grow Your Socials in 4 Simple Steps
          </h2>
          <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[1.6] text-text-muted max-w-[800px]">
            A simple and efficient process designed to deliver fast and reliable results. Just place your order, and our system will handle the rest to help grow your social media presence smoothly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 border-dashed border-2 border-transparent border-t-orange-200" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              {/* Step Number Badge */}
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-primary font-switzer font-bold text-[32px] md:text-[40px] flex items-center justify-center mb-6 border border-orange-100 group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
                {step.num}
              </div>
              
              <h3 className="font-inter font-semibold text-[20px] text-text-main mb-4">
                {step.title}
              </h3>
              
              <p className="font-inter font-medium text-[15px] md:text-[16px] leading-[1.6] text-text-muted">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
