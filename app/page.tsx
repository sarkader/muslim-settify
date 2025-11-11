import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ExclusiveCommunity } from "@/components/exclusive-community";
import { VideoTestimonials } from "@/components/video-testimonials";
import { SocialProof } from "@/components/social-proof";
import { FAQ } from "@/components/faq";
import { ApplyCTA } from "@/components/apply-cta";
import { Footer } from "@/components/footer";
import { WorldMapSection } from "@/components/world-map-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoTestimonials />
      <ExclusiveCommunity />
      <Features />
      <WorldMapSection />
      <SocialProof />
      <FAQ />
      <ApplyCTA />
      <Footer />
      </main>
  );
}
