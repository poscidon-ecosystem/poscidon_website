import { PageLayout } from "@/components/page-layout"
import { AnimatedSection } from "@/components/animated-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Poscidon",
  description:
    "Learn more about Poscidon's mission to revolutionize personalized medicine research funding through decentralized science (DeSci).",
  keywords: [
    "About Poscidon",
    "Poscidon mission",
    "decentralized science",
    "DeSci",
    "biotech funding",
    "personalized medicine research",
  ],
  openGraph: {
    title: "About | Poscidon",
    description:
      "Learn more about Poscidon's mission to revolutionize personalized medicine research funding through decentralized science (DeSci).",
    url: "https://poscidon.com/about",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/og-image-about.png",
        width: 1200,
        height: 630,
        alt: "About Poscidon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Poscidon",
    description:
      "Learn more about Poscidon's mission to revolutionize personalized medicine research funding through decentralized science (DeSci).",
    images: ["https://poscidon.com/twitter-image-about.png"],
  },
};

export default function About() {
  return (
    <PageLayout>
      {/* Hexagon background pattern - web3 style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-full h-full bg-[url('/hexagon-grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#78DFEC]/20 blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full bg-[#2E8ED7]/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-[#22D6C4]/10 blur-3xl"></div>
        </div>
      </div>

      <div className="container relative mx-auto py-16 px-4 z-10">
        <AnimatedSection className="mb-20">
          <div className="flex flex-col items-center">
            {/* <div className="inline-block mb-6 px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/80">POSCIDON</span>
            </div> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center text-white">
              About Poscidon
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-[#2E8ED7] to-[#22D6C4] rounded-full mb-8"></div>
            <p className="text-xl text-white/80 text-center max-w-3xl mx-auto">
              Learn more about our mission to revolutionize personalized medicine research funding.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <AnimatedSection className="col-span-1" delay={0.2} direction="left">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm h-full">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <title>Our Mission Icon</title>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <div className="pl-14">
                <p className="text-lg text-white/80 mb-6">
                  Poscidon is a decentralized biotech organization dedicated to funding personalized medicine
                  research for life-altering diseases. We aim to address the challenges in the current research funding
                  process, which is often centralized, biased, and inefficient.
                </p>
                <p className="text-lg text-white/80">
                  By leveraging blockchain technology and decentralized governance, we're creating a more transparent,
                  efficient, and democratic system for funding scientific research that can lead to breakthroughs in
                  personalized medicine.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="col-span-1" delay={0.3} direction="right">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm h-full">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6] flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <title>Our Approach Icon</title>
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Our Approach</h2>
              </div>
              <div className="pl-14">
                <p className="text-lg text-white/80 mb-6">
                  We focus on funding early-stage, pre-patented projects from academic research groups, private labs, and
                  early-startup biotech companies that work on bridging the gap between academic research and industrial
                  commercialization for personalized medicine.
                </p>
                <p className="text-lg text-white/80">
                  Our team consists of experts in virology, immunology, biotechnology, oncology, and epidemiology, allowing us
                  to assess which projects have the potential to make a significant impact in the personalized medicine field.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-20" delay={0.4}>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#78DFEC]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b1dee] to-[#2E8ED7] flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <title>Why Decentralization Matters Icon</title>
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold">Why Decentralization Matters</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                <div className="relative pl-8 border-l border-white/20">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#2E8ED7] to-[#78DFEC] -translate-x-1/2"></div>
                  <p className="text-lg text-white/80">
                    The current funding system for scientific research is often influenced by political priorities, economic
                    conditions, and institutional biases. These influences can shift funding away from certain areas of science,
                    regardless of their scientific merit.
                  </p>
                </div>
                
                <div className="relative pl-8 border-l border-white/20">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#22D6C4] to-[#A1ECD6] -translate-x-1/2"></div>
                  <p className="text-lg text-white/80">
                    By decentralizing the funding process, we can reduce these biases and create a more equitable system that
                    prioritizes scientific merit and potential impact over other factors. This approach can lead to more
                    innovative research and faster breakthroughs in personalized medicine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#010737]/80 to-[#020a4f]/80 backdrop-blur-sm text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full border border-[#78DFEC]/20"></div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full border border-[#22D6C4]/20"></div>
              <div className="absolute left-1/2 top-1/2 w-80 h-80 rounded-full border border-[#2E8ED7]/10 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                We invite scientists, entrepreneurs, investors, and decentralized science enthusiasts to join our community
                and be part of the revolution in personalized medicine research funding. Together, we can create a more
                democratic and unbiased ecosystem that redefines the funding process of personalized medicine research.
              </p>
              
              <button className="px-8 py-3 bg-gradient-to-r from-[#2E8ED7] to-[#22D6C4] rounded-lg text-white font-medium hover:shadow-lg hover:shadow-[#78DFEC]/20 transition-all duration-300 transform hover:-translate-y-1">
                Join the DAO
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  )
}
