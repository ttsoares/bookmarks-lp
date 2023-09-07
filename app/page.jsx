import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/download";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen lg:px-[100px]">
      <Hero />
      <Features />
      <Download />
      <Faq />
    </main>
  );
}
