'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, User, PlusCircle, Menu } from "lucide-react"

export default function NotFound() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image 
                src="/AC_LOGO.png" 
                alt="Advanced Curation Logo" 
                width={40} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
            
            {/* Hamburger Menu Button */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-colors py-2">About</Link>
                  <Link href="/our-team" className="text-gray-600 hover:text-emerald-600 transition-colors py-2">Our Team</Link>
                  <Link href="/how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors py-2">How It Works</Link>
                  <Link href="/agentic-value" className="text-gray-600 hover:text-emerald-600 transition-colors py-2">Agentic Value</Link>
                  <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                    <Link href="/auth">
                      <Button variant="outline" size="sm" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                        <User className="w-4 h-4 mr-2" />
                        Client Login
                      </Button>
                    </Link>
                    <Link href="/gate">
                      <Button size="sm" className="w-full bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg">
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Create Deal ID
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 404 Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Image 
              src="/AC_LOGO.png" 
              alt="Advanced Curation Logo" 
              width={120} 
              height={120} 
              className="h-30 w-auto mx-auto opacity-50"
            />
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}