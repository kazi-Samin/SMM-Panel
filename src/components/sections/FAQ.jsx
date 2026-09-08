"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqsLeft = [
  {
    question: "Is buying followers legal in Bangladesh?",
    answer: "Yes, buying followers or likes is not illegal in Bangladesh. It's considered a marketing strategy to improve social proof. Just make sure you don't violate any platform rules, and your account stays safe."
  },
  { question: "How long does delivery take?", answer: "Delivery usually begins within a few minutes to hours depending on the service selected." },
  { question: "Will engagement drop?", answer: "We provide high-quality services with minimal drop rates. Some services even come with a refill guarantee." },
  { question: "Is Drip feed safer?", answer: "Yes, drip feeding delivers followers gradually, mimicking organic growth perfectly and keeping your account safe." }
];

const faqsRight = [
  { question: "Can I order daily?", answer: "Absolutely. You can place as many orders as you need on a daily basis." },
  { question: "What if service is not delivered?", answer: "If an order fails to deliver, the amount will be automatically refunded to your SMM panel balance." },
  { question: "Can agencies resell services?", answer: "Yes! Many of our top clients are agencies who resell our services to their own clients at a markup." },
  { question: "Which platform is best for business in BD?", answer: "Facebook and Instagram are currently the most powerful platforms for generating business leads and sales in Bangladesh." }
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div 
      className={cn(
        "rounded-[12px] overflow-hidden transition-all duration-300 border cursor-pointer",
        isOpen ? "bg-[#C45200] border-[#C45200] shadow-lg shadow-orange-900/10" : "bg-gray-50 border-gray-100 hover:bg-gray-100"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between p-5 md:p-6">
        <h4 className={cn(
          "font-inter font-semibold text-[15px] md:text-[16px]",
          isOpen ? "text-white" : "text-text-main"
        )}>
          {faq.question}
        </h4>
        <div className={cn(
          "flex-shrink-0 ml-4",
          isOpen ? "text-white" : "text-text-muted"
        )}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      
      {isOpen && (
        <div className="px-5 md:px-6 pb-6">
          <div className="w-full h-[1px] bg-white/20 mb-4" />
          <p className="font-inter font-normal text-[14px] leading-[1.6] text-white/90">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState("L-0");

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-20 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 text-primary font-inter font-semibold text-[14px] uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            FAQ
          </div>
          <h2 className="font-switzer font-bold text-[32px] md:text-[36px] lg:text-[40px] text-text-main mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[1.6] text-text-muted max-w-[600px]">
            Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {faqsLeft.map((faq, idx) => {
              const id = `L-${idx}`;
              return (
                <FAQItem 
                  key={id} 
                  faq={faq} 
                  isOpen={openIndex === id} 
                  onClick={() => toggleFAQ(id)} 
                />
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {faqsRight.map((faq, idx) => {
              const id = `R-${idx}`;
              return (
                <FAQItem 
                  key={id} 
                  faq={faq} 
                  isOpen={openIndex === id} 
                  onClick={() => toggleFAQ(id)} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
