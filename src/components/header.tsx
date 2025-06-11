"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { PoscidonLogo } from "./poscidon-logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`w-full py-4 px-4 md:px-8 fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#010737]/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <PoscidonLogo className="w-32 text-white hover:text-seaBlue-700 transition-colors duration-300" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link href="/about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/sci-token" className="text-white/80 hover:text-white transition-colors">
              SCI Token
            </Link>
            <Link href="/projects" className="text-white/80 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/ecosystem" className="text-white/80 hover:text-white transition-colors">
              Ecosystem
            </Link>
            <Link href="/get-involved" className="text-white/80 hover:text-white transition-colors">
              Get Involved
            </Link>
            <Link
              href="https://dao.poscidon.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              Donate
            </Link>
          </nav>

          <Button className="bg-white text-[#010737] hover:bg-white/90">
            <Link href="https://dao.poscidon.com/" target="_blank" rel="noopener noreferrer">
              Visit dApp
            </Link>
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#010737]/95 backdrop-blur-md p-4 border-t border-white/10">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-lg text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/sci-token"
              className="text-lg text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SCI Token
            </Link>
            <Link
              href="/projects"
              className="text-lg text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/ecosystem"
              className="text-lg text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ecosystem
            </Link>
            <Link
              href="/get-involved"
              className="text-lg text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
            <a
              href="https://dao.poscidon.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </a>
            <Button className="bg-white text-[#010737] hover:bg-white/90 w-full text-lg">
              <a href="https://dao.poscidon.com/" target="_blank" rel="noopener noreferrer">
                Visit dApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
