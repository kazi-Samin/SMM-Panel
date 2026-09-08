import React from 'react';
import Image from 'next/image';

const stats = [
  { icon: "/images/stats/orders.png", value: "321,879", label: "Order Processed" },
  { icon: "/images/stats/services.png", value: "6,245", label: "Available Services" },
  { icon: "/images/stats/users.png", value: "8,552", label: "Registered User" },
  { icon: "/images/stats/rank.png", value: "#1", label: "Regional Rank" }
];

export default function Statistics() {
  return (
    <section className="w-full relative z-20 pt-20 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border border-orange-50 hover:-translate-y-1 transition-transform">
              <div className="flex-shrink-0 w-[80px] h-[80px] relative">
                <Image 
                  src={stat.icon} 
                  alt={stat.label}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-switzer font-bold text-[24px] md:text-[28px] text-text-main leading-tight">
                  {stat.value}
                </h3>
                <p className="font-inter font-medium text-[14px] text-text-muted mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
