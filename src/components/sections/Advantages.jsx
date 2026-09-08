import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const advantages = [
  {
    title: "We Never Ask for Your Password",
    description: "You give us your username or profile link. That's it. We can't access your account. When you buy followers from us, we're accessing your public profile. The same profile millions of people can already see. Zero security risk.",
    icon: "/images/advantages/password.png",
    linkText: "Read more"
  },
  {
    title: "We Use Real Users, Not Bots",
    description: "This is the difference between safe and unsafe SMM services. Unsafe services use bots, fake accounts, and empty profiles. Instagram, Facebook, and YouTube algorithms detect these instantly. That's when bans happen.",
    icon: "/images/advantages/users.png",
    linkText: "Read more"
  },
  {
    title: "We Deliver Gradually",
    description: "Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms notice. They flag your account. We spread delivery over time. 5,000 followers arrive over 2-4 days, not 2 hours. This makes growth look natural.",
    icon: "/images/advantages/gradual.png",
    linkText: "Read more"
  },
  {
    title: "Our Track Record",
    description: "321,879 completed orders. Not a single customer has reported an account ban caused by our services. That's not luck. We follow platform guidelines. We understand how Instagram, Facebook, YouTube, and TikTok detect fake activity.",
    icon: "/images/advantages/track-record.png",
    linkText: "Read more"
  }
];

export default function Advantages() {
  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute left-[-200px] top-[100px] w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 text-primary font-inter font-semibold text-[14px] uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            ADVANTAGES
          </div>
          <h2 className="font-switzer font-bold text-[32px] md:text-[36px] lg:text-[40px] text-text-main mb-6">
            Advantages of using our panel services
          </h2>
          <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[1.6] text-text-muted max-w-[700px]">
            Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all flex flex-col items-start text-left">
              <div className="w-[80px] h-[80px] relative mb-8 bg-blue-50/50 rounded-2xl flex items-center justify-center p-4">
                <Image 
                  src={adv.icon} 
                  alt={adv.title} 
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h3 className="font-switzer font-bold text-[22px] md:text-[24px] text-text-main mb-4">
                {adv.title}
              </h3>
              <p className="font-inter font-normal text-[15px] leading-[1.6] text-text-muted mb-6 flex-grow">
                {adv.description}
              </p>
              <Link href="#" className="font-inter font-semibold text-primary text-[15px] flex items-center gap-2 hover:underline">
                {adv.linkText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
