import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ExclusiveCommunity } from "@/components/exclusive-community";
import { VideoTestimonials } from "@/components/video-testimonials";
import { ProgramIncludes } from "@/components/program-includes";
import { SocialProof } from "@/components/social-proof";
import { FAQ } from "@/components/faq";
import { ApplyCTA } from "@/components/apply-cta";
import { Footer } from "@/components/footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { WorldMapDemo } from "@/components/ui/world-map-demo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AuroraBackground
        className="h-auto min-h-[85vh] items-stretch justify-start overflow-hidden md:min-h-[90vh] md:py-10"
        showRadialGradient={false}
      >
        <Hero />
      </AuroraBackground>
      <VideoTestimonials />
      <ExclusiveCommunity />
      <Features />
      <WorldMapDemo />
      <ProgramIncludes />
      <SocialProof />
      <FAQ />
      <ApplyCTA />
      <Footer />
    </main>
  );
}
