import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/download";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-20">
      <Hero />
      <Features />
      <Download />
      <Faq />
    </main>
  );
}
