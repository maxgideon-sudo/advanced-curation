'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, ArrowRight, Shield, Users, Zap } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function GatePage() {
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate a brief loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500))

    if (passcode === '1226') {
      // Store access in sessionStorage to verify on deal-curator page
      sessionStorage.setItem('deal_curator_access', 'granted')
      router.push('/deal-curator')
    } else {
      setError('Invalid access code. Please try again.')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-400 via-green-500 to-teal-600">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Exclusive Access Required</h1>
            <p className="text-green-100 text-lg">
              Enter your access code to begin creating AI-powered programmatic deals
            </p>
          </div>

          {/* Access Code Form */}
          <Card className="mb-8 bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-green-700 text-xl">
                <Lock className="w-5 h-5" />
                Access Code Required
              </CardTitle>
              <CardDescription className="text-base">
                This tool is currently in private beta. Please enter your 4-digit access code to continue.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="passcode" className="block text-sm font-medium mb-2 text-gray-700">
                    4-Digit Access Code
                  </label>
                  <Input
                    id="passcode"
                    type="text"
                    maxLength={4}
                    pattern="[0-9]{4}"
                    value={passcode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 4)
                      setPasscode(value)
                      setError('')
                    }}
                    placeholder="Enter 4-digit code"
                    className={`text-center text-2xl tracking-widest font-mono ${error ? 'border-red-500' : ''}`}
                    required
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <span className="w-4 h-4">⚠️</span>
                      {error}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3"
                  disabled={isLoading || passcode.length !== 4}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Verifying...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Access Deal Curator
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <h3 className="font-semibold mb-2">AI-Powered</h3>
                <p className="text-sm text-green-100">
                  Smart targeting recommendations based on your campaign goals
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                <h3 className="font-semibold mb-2">Lead Management</h3>
                <p className="text-sm text-green-100">
                  Comprehensive tracking from lead to client conversion
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Shield className="w-8 h-8 mx-auto mb-3 text-green-300" />
                <h3 className="font-semibold mb-2">Secure Access</h3>
                <p className="text-sm text-green-100">
                  Exclusive platform access for qualified media professionals
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="pt-6 text-center text-white">
              <h3 className="text-lg font-semibold mb-2">Need an Access Code?</h3>
              <p className="text-green-100 mb-4">
                Contact us to request access to our AI-powered deal creation platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="outline" 
                  className="border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 backdrop-blur-sm"
                >
                  Request Access
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 backdrop-blur-sm"
                >
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}