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
    // Admin/protected pages - admin variant when authenticated
    if (path.startsWith('/admin')) {
      return { show: true, variant: 'admin' as const }
    }
    
    // Dashboard - glass variant when authenticated  
    if (['/dashboard'].includes(path)) {
      return { show: true, variant: 'glass' as const }
    }
    
    // All pages including 404 - default header (until user is authenticated)
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