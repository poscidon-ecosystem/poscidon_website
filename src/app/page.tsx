import { FloatingLightsAnimation } from "@/components/floating-lights-animation"
import { AboutSection } from "@/components/about-section"
import { ResearchSection } from "@/components/research-section"
import { TokenSection } from "@/components/token-section"
import { CommunitySection } from "@/components/community-section"
import { FaqSection } from "@/components/faq-section"
import { PartnersSection } from "@/components/partners-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FloatingLightsAnimation />
      </div>
      
             {/* EMERGENCY BUTTON OUTSIDE ALL CONTAINERS */}
       <div className="absolute fixed top-[60vh] left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
         <Link
           href="/apply-for-funding" 
           className="border-2 rounded-lg border-white text-white w-[300px] h-[60px] text-sm sm:text-lg font-bold cursor-pointer flex items-center justify-center hover:bg-white/10 transition-colors"
         >
           Apply for Funding
         </Link>
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
