import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Services from "@/components/sections/Services";
import FacebookMarketing from "@/components/sections/FacebookMarketing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Statistics />
      <Services />
      <FacebookMarketing />
    </main>
  );
}
