import React from 'react';
import { cn } from '@/lib/utils';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaYoutube, 
  FaTiktok, 
  FaLinkedinIn, 
  FaTelegram, 
  FaDiscord, 
  FaSpotify, 
  FaSoundcloud, 
  FaSnapchat 
} from 'react-icons/fa6';
import { BsGlobe } from 'react-icons/bs';

const socialPlatforms = [
  { name: "Facebook", icon: <FaFacebookF size={14} className="text-[#1877F2]" /> },
  { name: "Instagram", icon: <FaInstagram size={14} className="text-[#E4405F]" /> },
  { name: "X (Twitter)", icon: <FaXTwitter size={14} className="text-black" /> },
  { name: "YouTube", icon: <FaYoutube size={14} className="text-[#FF0000]" /> },
  { name: "TikTok", icon: <FaTiktok size={14} className="text-black" /> },
  { name: "LinkedIn", icon: <FaLinkedinIn size={14} className="text-[#0A66C2]" /> },
  { name: "Telegram", icon: <FaTelegram size={14} className="text-[#0088cc]" /> },
  { name: "Discord", icon: <FaDiscord size={14} className="text-[#5865F2]" /> },
  { name: "Spotify", icon: <FaSpotify size={14} className="text-[#1DB954]" /> },
  { name: "SoundCloud", icon: <FaSoundcloud size={14} className="text-[#ff5500]" /> },
  { name: "Snapchat", icon: <FaSnapchat size={14} className="text-[#FFFC00] drop-shadow-sm" /> },
  { name: "Website Traffic", icon: <BsGlobe size={14} className="text-gray-600" /> }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          
          {/* Custom "our services" badge */}
          <div className="flex flex-col items-center justify-center mb-4">
            <span className="font-inter font-semibold text-[14px] text-[#FF6B00] uppercase tracking-wider mb-1">
              our services
            </span>
            <div className="relative flex items-center justify-center w-[60px] h-[2px] bg-[#FF6B00]">
              <div className="absolute w-[6px] h-[6px] rounded-full bg-[#FF6B00]" />
            </div>
          </div>

          <h2 className="font-switzer font-bold text-[32px] md:text-[36px] lg:text-[40px] text-text-main mb-6">
            Powerful <span className="text-[#FF6B00]">SMM Services</span> for Fast Growth
          </h2>
          <p className="font-inter font-normal text-[15px] md:text-[16px] leading-[1.6] text-text-muted max-w-[700px]">
            Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok, we&apos;ve got you covered.
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialPlatforms.map((platform, index) => (
            <button 
              key={index}
              className={cn(
                "group flex items-center gap-3 px-5 py-3 md:px-6 md:py-3 rounded-[12px] transition-all shadow-sm",
                index === 0 
                  ? "bg-gradient-to-r from-[#F07A15] to-[#D55F00] text-white" // Active state
                  : "bg-[#FFF9F3] text-text-main hover:bg-[#FFEEDD]" // Inactive state
              )}
            >
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center transition-colors shadow-sm">
                {platform.icon}
              </div>
              <span className={cn(
                "font-inter font-semibold text-[14px] md:text-[15px] transition-colors",
                index === 0 ? "text-white" : "text-text-main"
              )}>
                {platform.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
