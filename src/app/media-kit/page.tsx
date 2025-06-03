import { PageLayout } from "@/components/page-layout"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"

export default function MediaKitPage() {
  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Kit</h1>
          <p className="text-xl text-white/80 mb-8">
            Access Poscidon's brand assets and guidelines for consistent representation across all platforms.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Brand Guidelines</h2>
            <p className="text-white/80 mb-6">
              Our brand guidelines provide comprehensive information on how to properly use Poscidon's visual identity,
              including our logo, colors, typography, and more. Please follow these guidelines to ensure consistent
              representation of our brand.
            </p>
            <div className="flex justify-center">
              <a href="https://www.poscidondao.com/brand-guidelines.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#010737] hover:bg-white/90">Download Brand Guidelines</Button>
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-white/80 mb-6">
              For media inquiries, partnership opportunities, or additional brand assets, please contact our team.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Email</h3>
                <p className="text-white/80">
                  <a href="mailto:hello@poscidon.com" className="hover:text-white transition-colors">
                    hello@poscidon.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Social Media</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://x.com/PoSciDonDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    X (Twitter)
                  </a>
                  <a
                    href="https://discord.com/invite/75SrHpcNSZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Discord
                  </a>
                  <a
                    href="https://www.linkedin.com/company/poscidondao?trk=public_post_feed-actor-name"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://t.me/OfficialPoSciDonDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  )
}
