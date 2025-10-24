'use client'

import { usePathname } from 'next/navigation'
import { AuthProvider } from "@/lib/auth-context"
import Header from "@/components/Header"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname()

  // Define which pages should have headers and their variants
  const getHeaderConfig = (path: string) => {
    // Admin/protected pages - different header or no header
    if (path.startsWith('/admin')) {
      return { show: true, variant: 'admin' as const }
    }
    
    // Glass effect pages
    if (['/dashboard', '/deal-curator', '/gate'].includes(path)) {
      return { show: true, variant: 'glass' as const }
    }
    
    // Public pages - default header
    if ([
      '/', 
      '/about', 
      '/our-team', 
      '/how-it-works', 
      '/agentic-value', 
      '/explore'
    ].includes(path)) {
      return { show: true, variant: 'default' as const }
    }
    
    // Auth pages or other special pages - no header
    if (path.startsWith('/auth') || path === '/not-found') {
      return { show: false, variant: 'default' as const }
    }
    
    // Default: show header for unknown routes
    return { show: true, variant: 'default' as const }
  }

  const headerConfig = getHeaderConfig(pathname)

  return (
    <AuthProvider>
      {headerConfig.show && <Header variant={headerConfig.variant} />}
      {children}
    </AuthProvider>
  )
}