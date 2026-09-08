import React from 'react';

const stats = [
  { value: "321,879", label: "Order Processed" },
  { value: "6,245", label: "Available Services" },
  { value: "8,552", label: "Registered User" },
  { value: "#1", label: "Regional Rank" }
];

export default function Statistics() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent border-t border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center lg:text-left divide-x-0 lg:divide-x divide-gray-200">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start lg:pl-12 first:pl-0">
              <h3 className="font-switzer font-bold text-[32px] md:text-[40px] text-primary mb-2">
                {stat.value}
              </h3>
              <p className="font-inter font-medium text-[16px] text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
