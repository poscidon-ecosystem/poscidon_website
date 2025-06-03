import { PageLayout } from "@/components/page-layout"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { TokenCard } from "@/components/token-card"

export default function SciTokenPage() {
  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SCI Token</h1>
          <p className="text-xl text-white/80">
            The governance token that powers the Poscidon ecosystem and grants voting rights in the DAO.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto bg-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Explore SCI</h2>
          <p className="text-white/80 mb-6 text-center">
            The SCI token is the backbone of the PoSciDonDAO ecosystem, allowing holders to vote on proposals regarding
            DAO operations and the election of scientific experts that review personalized medicine research projects.
          </p>
          <div className="flex justify-center">
            <a
              href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x25E0A7767d03461EaF88b47cd9853722Fe05DFD3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-[#010737] hover:bg-white/90 px-8">Buy SCI</Button>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">SCI Utility</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
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
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Governance</h3>
              <p className="text-white/70">
                After locking SCI tokens, members receive governance rights over PoSciDonDAO's treasury, its operations,
                the election of scientific experts, and over the management of the personalized medicine IP portfolio.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
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
                  <path d="M12 8v4l2 2"></path>
                  <path d="M18.42 9A4 4 0 0 0 19 12"></path>
                  <path d="M12 2a2 2 0 0 1 2 2"></path>
                  <path d="M20 12a2 2 0 0 1-2 2"></path>
                  <path d="M12 22a2 2 0 0 1-2-2"></path>
                  <path d="M4 12a2 2 0 0 1 2-2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stake in IP</h3>
              <p className="text-white/70">
                A portion of the revenue generated from commercialized IP will be used to buy back SCI from the market
                followed by a token burn, ensuring token holders benefit from scientific innovation and a growing IP
                portfolio.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
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
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Incentives</h3>
              <p className="text-white/70">
                SCI is used to attract and incentivise talent and experts to support the development of PoSciDonDAO's
                funded personalized medicine research projects.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
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
                  <path d="M12 2v6.5"></path>
                  <path d="M18.4 6.5 13.5 9"></path>
                  <path d="M13.5 15 18.4 17.5"></path>
                  <path d="M12 15.5V22"></path>
                  <path d="M5.6 17.5 10.5 15"></path>
                  <path d="M10.5 9 5.6 6.5"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rewards</h3>
              <p className="text-white/70">
                Voting on governance proposals will give you PO, a non-tradable non-fungible token. PO can be exchanged
                for SCI tokens and in the future for other rewards including conference tickets and merch.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Token Allocation</h2>
            <p className="text-center mb-8 text-xl">Maximum Total Supply: 18,910,000</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Foundation - 37% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#2E8ED7" // steelBlue
                    strokeWidth="20"
                    strokeDasharray={`${37 * 2.51} ${100 * 2.51 - 37 * 2.51}`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                  {/* Community - 32.456% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#78DFEC" // tropicalBlue
                    strokeWidth="20"
                    strokeDasharray={`${32.456 * 2.51} ${100 * 2.51 - 32.456 * 2.51}`}
                    strokeDashoffset={`${-(37) * 2.51}`}
                    transform="rotate(-90 50 50)"
                  />
                  {/* DAO Operators - 15% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#22D6C4" // aquaBlue
                    strokeWidth="20"
                    strokeDasharray={`${15 * 2.51} ${100 * 2.51 - 15 * 2.51}`}
                    strokeDashoffset={`${-(37 + 32.456) * 2.51}`}
                    transform="rotate(-90 50 50)"
                  />
                  {/* Public Sale - 11.17% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#0b1dee" // deepseaBlue
                    strokeWidth="20"
                    strokeDasharray={`${11.17 * 2.51} ${100 * 2.51 - 11.17 * 2.51}`}
                    strokeDashoffset={`${-(37 + 32.456 + 15) * 2.51}`}
                    transform="rotate(-90 50 50)"
                  />
                  {/* Private Sale - 4.374% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#A1ECD6" // mintGreen
                    strokeWidth="20"
                    strokeDasharray={`${4.374 * 2.51} ${100 * 2.51 - 4.374 * 2.51}`}
                    strokeDashoffset={`${-(37 + 32.456 + 15 + 11.17) * 2.51}`}
                    transform="rotate(-90 50 50)"
                  />
                  {/* Inner circle to create donut */}
                  <circle cx="50" cy="50" r="30" fill="#010737" />
                </svg>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4" style={{ backgroundColor: "#2E8ED7" }}></div>
                  <div className="flex-1">
                    <div className="font-medium">Foundation</div>
                    <div>37%</div>
                    <div className="text-sm text-white/70">6,996,700 Tokens</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4" style={{ backgroundColor: "#78DFEC" }}></div>
                  <div className="flex-1">
                    <div className="font-medium">Community</div>
                    <div>32.456%</div>
                    <div className="text-sm text-white/70">6,137,429.6 Tokens</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4" style={{ backgroundColor: "#22D6C4" }}></div>
                  <div className="flex-1">
                    <div className="font-medium">DAO Operators</div>
                    <div>15%</div>
                    <div className="text-sm text-white/70">2,836,500 Tokens</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4" style={{ backgroundColor: "#0b1dee" }}></div>
                  <div className="flex-1">
                    <div className="font-medium">Public Sale</div>
                    <div>11.17%</div>
                    <div className="text-sm text-white/70">2,112,262.4 Tokens</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4" style={{ backgroundColor: "#A1ECD6" }}></div>
                  <div className="flex-1">
                    <div className="font-medium">Private Sale</div>
                    <div>4.374%</div>
                    <div className="text-sm text-white/70">827,108 Tokens</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Dual-Token Economy Section moved to after Token Allocation */}
        <AnimatedSection delay={0.5} className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Dual-Token Economy</h2>
          <p className="text-white/80 text-center mb-8">
            Poscidon features a unique dual-token model designed to incentivize participation and long-term engagement.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <TokenCard
              name="SCI Token"
              description="The tradable governance token that grants voting rights in the DAO. Lock SCI tokens to participate in governance decisions."
              features={[
                "Tradable on exchanges",
                "Governance voting power",
                "Token burn mechanism",
                "Total supply: 18,910,000",
              ]}
              isPrimary={true}
            />

            <TokenCard
              name="PO Token"
              description="A non-tradable NFT awarded for governance participation. Exchange PO tokens for SCI tokens and other rewards."
              features={[
                "Proof of participation",
                "Account-bound NFT",
                "Exchangeable for rewards",
                "Incentivizes governance",
              ]}
              isPrimary={false}
            />
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  )
}
