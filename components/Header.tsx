'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { 
  User,
  PlusCircle,
  Menu
} from "lucide-react"

interface HeaderProps {
  variant?: 'default' | 'glass' | 'admin'
}

export default function Header({ 
  variant = 'default'
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Header styling based on variant
  const headerStyles = {
    default: "border-b border-gray-200 bg-white sticky top-0 z-50 backdrop-blur-sm",
    glass: "border-b border-white/20 bg-black/20 backdrop-blur-md sticky top-0 z-50",
    admin: "border-b border-blue-600/20 bg-blue-50/90 backdrop-blur-md sticky top-0 z-50"
  }

  // Button styling based on variant
  const buttonStyles = {
    default: "border-gray-300 text-gray-700 hover:bg-gray-50",
    glass: "border-white/50 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white/70 backdrop-blur-sm",
    admin: "border-blue-300 text-blue-700 hover:bg-blue-50"
  }

  // Logo configuration based on variant
  const logoConfig = {
    default: { src: "/AC_LOGO_HORIZONTAL.png", width: 280, height: 70, filter: "" },
    glass: { src: "/AC_LOGO_INVERTED.png", width: 64, height: 64, filter: "" },
    admin: { src: "/AC_LOGO_HORIZONTAL.png", width: 280, height: 70, filter: "" }
  }[variant]

  // Navigation links for public users
  const publicNavLinks = [
    { href: "/about", label: "About" },
    { href: "/our-team", label: "Our Team" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/agentic-value", label: "Agentic Value" }
  ]

  // Navigation links for authenticated users
  const authenticatedNavLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/explore", label: "Explore Deals" },
    { href: "/deal-curator", label: "Deal Curator" },
    ...(user?.role === 'admin' ? [{ href: "/admin", label: "Admin Panel" }] : [])
  ]

  const navLinks = isAuthenticated ? authenticatedNavLinks : publicNavLinks

  return (
    <header className={headerStyles[variant]}>
      <div className="container mx-auto px-4 py-4" ref={menuRef}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src={logoConfig.src} 
              alt="Advanced Curation Logo" 
              width={logoConfig.width} 
              height={logoConfig.height} 
              className={`h-16 w-auto ${logoConfig.filter}`}
            />
          </Link>
          
          {/* Hamburger Menu Button */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={buttonStyles[variant]}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className={`absolute top-full right-0 w-80 ${variant === 'glass' ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'} border border-gray-200 rounded-lg shadow-lg z-40 mt-2`}>
            <div className="p-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="text-gray-600 hover:text-emerald-600 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  {!isAuthenticated ? (
                    <>
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
                    </>
                  ) : (
                    <>
                      <Link href="/profile">
                        <Button variant="outline" size="sm" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                          <User className="w-4 h-4 mr-2" />
                          Profile
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full border-red-300 text-red-700 hover:bg-red-50"
                        onClick={() => logout()}
                      >
                        Logout
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}