import { AnimatedSection } from "@/components/animated-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ecosystem | Poscidon - Decentralized Science Platform",
  description:
    "Explore the Poscidon ecosystem - a comprehensive decentralized science platform connecting researchers, funders, and innovators in biotech and personalized medicine.",
  keywords: [
    "Poscidon ecosystem",
    "DeSci platform",
    "decentralized science",
    "biotech ecosystem",
    "research funding",
    "blockchain research",
  ],
  openGraph: {
    title: "Ecosystem | Poscidon - Decentralized Science Platform",
    description:
      "Explore the Poscidon ecosystem - a comprehensive decentralized science platform connecting researchers, funders, and innovators in biotech and personalized medicine.",
    url: "https://poscidon.com/ecosystem",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/ecosystem.svg",
        width: 1200,
        height: 630,
        alt: "Poscidon Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function EcosystemPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#010737] via-[#020a4f] to-[#010737]">
          {/* Floating light particles */}
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-70 shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] top-[20%] left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-70 shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] top-[60%] left-[80%] animate-[float_8s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-70 shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] top-[30%] left-[70%] animate-[float_7s_ease-in-out_infinite] [animation-delay:-2s]"></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-70 shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] top-[80%] left-[20%] animate-[float_9s_ease-in-out_infinite_reverse] [animation-delay:-4s]"></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-70 shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] top-[10%] left-[50%] animate-[float_5s_ease-in-out_infinite] [animation-delay:-1s]"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero Section with Ecosystem SVG */}
          <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
            <div className="container mx-auto text-center">
              <AnimatedSection className="mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  The Poscidon
                  <span className="bg-gradient-to-r from-[#2E8ED7] to-[#78DFEC] bg-clip-text text-transparent">
                    {" "}Ecosystem
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                  A comprehensive decentralized science platform connecting researchers, funders, and innovators
                </p>
              </AnimatedSection>
              
              {/* Ecosystem SVG Centerpiece */}
              <AnimatedSection delay={0.3} className="my-16">
                <div className="relative max-w-6xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2E8ED7]/20 to-[#78DFEC]/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 group">
                    <Image
                      src="/ecosystem.svg"
                      alt="Poscidon Ecosystem Diagram"
                      width={1839}
                      height={673}
                      className="w-full h-auto drop-shadow-[0_0_30px_rgba(46,142,215,0.3)] transition-all duration-500 group-hover:drop-shadow-[0_0_50px_rgba(46,142,215,0.5)] group-hover:scale-[1.02]"
                      priority
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Ecosystem Overview Section */}
          <section className="py-20 px-4 md:px-8 bg-[#010737]/80 backdrop-blur-sm">
            <div className="container mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Powering the Future of 
                  <span className="bg-gradient-to-r from-[#22D6C4] to-[#A1ECD6] bg-clip-text text-transparent">
                    {" "}Decentralized Science
                  </span>
                </h2>
                <p className="text-white/80 text-lg max-w-4xl mx-auto">
                  Our ecosystem brings together cutting-edge blockchain technology, innovative research funding mechanisms, 
                  and a vibrant community of scientists, investors, and innovators working together to accelerate 
                  breakthroughs in personalized medicine and biotech research.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-8">
                <AnimatedSection
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20"
                  delay={0.2}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" stroke="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="2"/>
                      <circle cx="12" cy="5" r="1.5"/>
                      <circle cx="19" cy="12" r="1.5"/>
                      <circle cx="12" cy="19" r="1.5"/>
                      <circle cx="5" cy="12" r="1.5"/>
                      <circle cx="7.5" cy="7.5" r="1.5"/>
                      <circle cx="16.5" cy="7.5" r="1.5"/>
                      <line x1="12" y1="10" x2="12" y2="6.5" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="14" y1="12" x2="17.5" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="12" y1="14" x2="12" y2="17.5" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="10" y1="12" x2="6.5" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="10.5" y1="10.5" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5"/>
                      <line x1="13.5" y1="10.5" x2="15" y2="9" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Decentralized Funding</h3>
                  <p className="text-white/70 text-lg">
                    Revolutionary blockchain-based funding mechanisms that eliminate traditional barriers and accelerate research timelines.
                  </p>
                </AnimatedSection>

                <AnimatedSection
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20"
                  delay={0.3}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Global Community</h3>
                  <p className="text-white/70 text-lg">
                    A thriving network of researchers, investors, and innovators collaborating to solve humanity's greatest health challenges.
                  </p>
                </AnimatedSection>

                <AnimatedSection
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20"
                  delay={0.4}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0b1dee] to-[#2E8ED7] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Transparent Governance</h3>
                  <p className="text-white/70 text-lg">
                    DAO-driven decision making ensures every stakeholder has a voice in shaping the future of scientific research funding.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Ecosystem Components Section */}
          <section className="py-20 px-4 md:px-8">
            <div className="container mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ecosystem Components
                </h2>
                <p className="text-white/80 text-lg max-w-3xl mx-auto">
                  Each component of our ecosystem works in harmony to create a seamless, efficient, and transparent research funding platform.
                </p>
              </AnimatedSection>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection delay={0.2}>
                  <div className="space-y-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#2E8ED7]/50 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <span className="w-3 h-3 bg-[#78DFEC] rounded-full mr-3"></span>
                        Poscidon DAO
                      </h3>
                      <p className="text-white/70">
                        Decentralized governance structure enabling community-driven decision making for research funding allocation and platform development.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#22D6C4]/50 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <span className="w-3 h-3 bg-[#22D6C4] rounded-full mr-3"></span>
                        Smart Contracts
                      </h3>
                      <p className="text-white/70">
                        Automated, transparent funding mechanisms that ensure research milestones are met before releasing funds, reducing risk and increasing accountability.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#0b1dee]/50 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <span className="w-3 h-3 bg-[#0b1dee] rounded-full mr-3"></span>
                        IP Pool
                      </h3>
                      <p className="text-white/70">
                        Innovative intellectual property management system that fairly distributes research outcomes among contributors and stakeholders.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="space-y-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#2E8ED7]/50 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <span className="w-3 h-3 bg-[#2E8ED7] rounded-full mr-3"></span>
                        Operations Hub
                      </h3>
                      <p className="text-white/70">
                        Centralized platform for project management, milestone tracking, and coordination between researchers, funders, and the broader community.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#A1ECD6]/50 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <span className="w-3 h-3 bg-[#A1ECD6] rounded-full mr-3"></span>
                        Token Economy
                      </h3>
                      <p className="text-white/70">
                        Dual-token system incentivizing long-term participation, governance engagement, and successful research outcomes within the ecosystem.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#78DFEC]/50 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <span className="w-3 h-3 bg-[#78DFEC] rounded-full mr-3"></span>
                        Research Network
                      </h3>
                      <p className="text-white/70">
                        Global network of verified researchers, institutions, and laboratories collaborating on breakthrough personalized medicine projects.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Integration & Flow Section */}
          <section className="py-20 px-4 md:px-8 bg-[#010737]/80 backdrop-blur-sm">
            <div className="container mx-auto">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Seamless Integration
                </h2>
                <p className="text-white/80 text-lg max-w-3xl mx-auto">
                  Our ecosystem components work together to create a frictionless experience from research proposal to breakthrough discovery.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Propose", desc: "Researchers submit innovative biotech projects" },
                  { step: "02", title: "Evaluate", desc: "Community reviews and votes on proposals" },
                  { step: "03", title: "Fund", desc: "Smart contracts automatically release funding" },
                  { step: "04", title: "Discover", desc: "Breakthrough research benefits humanity" }
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <div className="text-center relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-20 px-4 md:px-8">
            <div className="container mx-auto text-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Join the Revolution?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Be part of the future of scientific research funding. Whether you're a researcher, investor, or innovator, 
                  there's a place for you in the Poscidon ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/apply-for-funding">
                    <Button className="bg-gradient-to-r from-[#2E8ED7] to-[#78DFEC] text-white hover:from-[#2E8ED7]/90 hover:to-[#78DFEC]/90 px-8 py-3 text-lg">
                      Apply for Funding
                    </Button>
                  </Link>
                  <Link href="/get-involved">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                      Get Involved
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
