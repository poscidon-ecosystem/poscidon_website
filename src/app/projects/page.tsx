import { PageLayout } from "@/components/page-layout"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-white/80">
            Discover the innovative personalized medicine research projects currently being funded through the Poscidon
            platform.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="h-24 w-24 bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                  <line x1="2" x2="22" y1="7" y2="7"></line>
                  <line x1="8" x2="16" y1="21" y2="21"></line>
                  <line x1="12" x2="12" y1="17" y2="21"></line>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-semibold">Rare Compute Foundation</h2>
                  <div className="bg-white/20 rounded-full px-4 py-1 text-sm">Funding: $115,000</div>
                </div>
                <p className="text-white/80 mb-4">
                  This project aims to use next-generation AI-driven BioML agents and a wet-dry feedback loop to
                  fast-track the discovery of novel personalized therapeutics (small molecules, peptides, and binders)
                  for rare diseases.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 rounded-full px-3 py-1 text-sm">Artificial Intelligence</span>
                  <span className="bg-white/10 rounded-full px-3 py-1 text-sm">Drug Discovery</span>
                  <span className="bg-white/10 rounded-full px-3 py-1 text-sm">Rare Diseases</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="h-24 w-24 bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6] rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M7 7h10"></path>
                  <path d="M10 16V7"></path>
                  <path d="M14 16V7"></path>
                  <path d="M17 12h-3"></path>
                  <path d="M7 12h3"></path>
                  <path d="M7 16h10"></path>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-semibold">weCURA: Personalized Cancer Therapy Tool</h2>
                </div>
                <p className="text-white/80 mb-4">
                  This AI tool will allow clinicians to predict which cancer patients need existing anti-cancer
                  treatments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 rounded-full px-3 py-1 text-sm">Artificial Intelligence</span>
                  <span className="bg-white/10 rounded-full px-3 py-1 text-sm">Cancer</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center">
          <p className="text-xl md:text-2xl font-medium text-white mb-6">
            Have an innovative personalized medicine research project?
          </p>
          <Link href="/apply-for-funding">
            <Button size="lg" className="bg-gradient-to-r from-[#2E8ED7] to-[#22D6C4] text-white hover:shadow-lg hover:shadow-[#78DFEC]/20 transition-all duration-300">
              Apply for Funding
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </PageLayout>
  )
}
