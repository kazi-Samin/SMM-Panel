import React from 'react';

const paymentMethods = [
  "Google Pay",
  "Mastercard",
  "PayPal",
  "Apple Pay",
  "Visa",
  "Bkash"
];

export default function PaymentMethods() {
  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Huge Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-5 z-0">
        <h2 className="font-bricolage font-bold text-[120px] md:text-[200px] leading-none whitespace-nowrap text-gray-900">
          Multiple Payments
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary font-inter font-semibold text-[14px] uppercase tracking-wider mb-6 border border-orange-100 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Payment Methods
            </div>
            
            <h2 className="font-switzer font-bold text-[32px] md:text-[36px] lg:text-[40px] text-text-main mb-6 leading-[1.2]">
              Multiple Payment Methods
            </h2>
            
            <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[1.6] text-text-muted">
              We accept Visa, Mastercard, American Express, Bkash, Nagad, Rocket, and more, so you are never stuck at checkout. Deposits are instant, and you can start with as little as $1, which means there is no reason to wait before placing your first order.
            </p>
          </div>

          {/* Right Visual/Logos */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-orange-400/5 blur-[100px] rounded-full mix-blend-multiply" />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 relative z-10">
              {paymentMethods.map((method, idx) => (
                <div key={idx} className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all rounded-2xl p-6 h-32 flex items-center justify-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-inter font-bold text-gray-400 group-hover:text-primary transition-colors text-lg relative z-10">
                    {method}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
