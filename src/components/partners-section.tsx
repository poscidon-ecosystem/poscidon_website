import { AnimatedSection } from "@/components/animated-section"
// import Image from "next/image" // Keep this commented out if 'Cannot find module' persists
// For now, let's use a standard img tag if next/image is problematic
const Image = (props: any) => <img {...props} />;

export function PartnersSection() {
  const partners = [
    { name: "AxonDAO", logo: "/logos_axondao.svg" },
    { name: "Boost VC", logo: "/logos_boostvc.svg" },
    { name: "Cyberscope", logo: "/logos_Cyberscope.svg" },
    { name: "Human.tech", logo: "/logos_human.tech.svg" },
    // { name: "Lilypad", logo: "/logos_lilypad.svg" }, // Temporarily removed
    { name: "QuillAudits", logo: "/logos_quillaudits.svg" },
    { name: "Rare Compute", logo: "/logos_rarecompute.svg" },
  ]

  // Duplicate the partners array to create a seamless loop effect
  const allPartners = [...partners, ...partners]

  return (
    <section className="py-16 px-4 md:px-8 bg-[#010737]/80 backdrop-blur-sm relative overflow-hidden">
      {/* Hexagon background pattern - web3 style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-full h-full bg-[url('/hexagon-grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#78DFEC]/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#2E8ED7]/10 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-10" triggerOnce={true} direction="down" duration={0.5}>
          {/* Content for the first AnimatedSection starts here */}
          <div className="inline-block mb-6 px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-white/80">TRUSTED COLLABORATORS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#78DFEC] to-white">Our Partners</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#2E8ED7] to-[#22D6C4] rounded-full mb-8 mx-auto"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            We collaborate with leading organizations in blockchain, science, and technology to advance personalized medicine research.
          </p>
          {/* Content for the first AnimatedSection ends here */}
        </AnimatedSection>

        <AnimatedSection delay={0.2} triggerOnce={true} direction="up" duration={0.5}>
          {/* Content for the second AnimatedSection starts here */}
          <div className="relative overflow-hidden py-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            {/* Gradient overlay on left */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#010737]/90 to-transparent"></div>
            {/* Gradient overlay on right */}
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#010737]/90 to-transparent"></div>
            {/* Carousel attempt - content from previous state, likely to be replaced by Embla */}
            <div className="flex animate-carousel">
              {allPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center h-24 group"
                >
                  <Image // This will use the placeholder img tag for now
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={80}
                    className="h-24 w-auto object-contain" // Removed filter/opacity for now
                    // unoptimized={true} // Not needed for standard img
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Content for the second AnimatedSection ends here */}
        </AnimatedSection>
      </div>
    </section>
  )
} 