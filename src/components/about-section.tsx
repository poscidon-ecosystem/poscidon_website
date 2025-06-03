import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export function AboutSection() {
  return (
    <section id="about" className="pt-24 pb-20 px-4 md:px-8 bg-[#010737]/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transforming Scientific Research Funding</h2>
          <p className="text-white/80">
            We're addressing the challenges in personalized medicine research through blockchain technology and
            decentralized governance.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
            delay={0.2}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
            <p className="text-white/70">
              Our blockchain-based protocol ensures complete transparency in the funding process, reducing bias and
              increasing efficiency.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
            delay={0.3}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Decentralization</h3>
            <p className="text-white/70">
              Our DAO governance model allows community members to have a say in which research projects receive
              funding.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
            delay={0.4}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#0b1dee] to-[#2E8ED7] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Incentivization</h3>
            <p className="text-white/70">
              Our dual-token model incentivizes participation in governance and long-term engagement with the ecosystem.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16 text-center" delay={0.5}>
          <a href="https://www.poscidondao.com/Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-[#010737] hover:bg-white/90">Read Whitepaper</Button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
