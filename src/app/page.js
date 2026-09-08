import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Services from "@/components/sections/Services";
import GrowthProcess from "@/components/sections/GrowthProcess";
import PaymentMethods from "@/components/sections/PaymentMethods";
import GrowthTimeline from "@/components/sections/GrowthTimeline";
import Advantages from "@/components/sections/Advantages";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-[#FAFAFA]">
      <Header />
      <Hero />
      <Statistics />
      <Services />
      <GrowthProcess />
      <PaymentMethods />
      <GrowthTimeline />
      <Advantages />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
