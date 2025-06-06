import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from 'next/font/local'


const acumin = localFont({
  src: './AcuminProMedium.otf',
  variable: '--font-acumin',
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Poscidon - Revolutionizing Personalized Medicine Research Funding",
  description:
    "The first-ever decentralized biotech organization dedicated to funding personalized medicine research for life-altering diseases.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={acumin.variable}>
      <body className={acumin.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
