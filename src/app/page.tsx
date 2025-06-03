import { FloatingLightsAnimation } from "@/components/floating-lights-animation"
import { AboutSection } from "@/components/about-section"
import { ResearchSection } from "@/components/research-section"
import { TokenSection } from "@/components/token-section"
import { CommunitySection } from "@/components/community-section"
import { FaqSection } from "@/components/faq-section"
import { PartnersSection } from "@/components/partners-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FloatingLightsAnimation />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero section is now part of the animation */}
          <div className="h-screen" id="hero"></div>
          <AboutSection />
          <ResearchSection />
          <PartnersSection />
          <TokenSection />
          <CommunitySection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
