import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from 'next/font/local'


const acumin = localFont({
  src: './AcuminProMedium.otf',
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Poscidon | Revolutionizing Personalized Medicine Research Funding",
  description:
    "The first-ever decentralized biotech organization dedicated to funding personalized medicine research for life-altering diseases.",
  openGraph: {
    title: "Poscidon | Revolutionizing Personalized Medicine Research Funding",
    description: "The first-ever decentralized biotech organization dedicated to funding personalized medicine research for life-altering diseases.",
    url: "https://poscidon.com",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/psdlogo_white.png",
        width: 1200,
        height: 630,
        alt: "Poscidon Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poscidon | Revolutionizing Personalized Medicine Research Funding",
    description: "The first-ever decentralized biotech organization dedicated to funding personalized medicine research for life-altering diseases.",
    images: ["https://poscidon.com/twitter-card.png"],
    creator: "@PoSciDonDAO",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={acumin.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Poscidon",
              "url": "https://poscidon.com",
              "logo": "https://poscidon.com/psdlogo_blue.png",
              "sameAs": [
                "https://x.com/PoSciDonDAO",
                "https://www.linkedin.com/company/poscidondao",
                "https://discord.com/invite/75SrHpcNSZ",
                "https://t.me/OfficialPoSciDonDAO"
              ]
            })
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
