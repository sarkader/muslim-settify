import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { VideoTestimonials } from "@/components/video-testimonials";
import { Case } from "@/components/ui/cases-with-infinite-scroll";
import { CombinedOverview } from "@/components/combined-overview";
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
      <Case />
      <CombinedOverview />
      <WorldMapSection />
      <SocialProof />
      <FAQ />
      <ApplyCTA />
      <Footer />
      </main>
  );
}
