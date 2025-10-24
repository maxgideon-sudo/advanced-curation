'use client'

import { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Target, Calendar, Globe, Upload, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function DealCuratorPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user has passed through the gate
    if (typeof window !== 'undefined') {
      const access = sessionStorage.getItem('deal_curator_access')
      if (access !== 'granted') {
        // Redirect to gate page if no access
        router.replace('/gate')
      }
    }
  }, [router])

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-400 via-green-500 to-teal-600">
      {/* Header */}
      <header className="border-b border-green-600/20 bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white hover:text-green-100 transition-colors">
              Advanced Curation
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="border-white/50 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white/70 backdrop-blur-sm">
                  Client Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">AI-Powered Deal Curator</h1>
            <p className="text-green-100">Create custom Deal IDs and PMPs for your programmatic campaigns</p>
          </div>

          {/* Main Deal Creation Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Target className="w-5 h-5" />
                Deal Details
              </CardTitle>
              <CardDescription>
                Fill out the details below to generate your custom Deal ID
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input placeholder="your.email@agency.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Brand or Agency</label>
                  <Input placeholder="Company Name" />
                </div>
              </div>

              {/* DSP and Seat ID */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">DSP (Demand Side Platform)</label>
                  <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                    <option value="">Select DSP</option>
                    <option value="dv360">DV360</option>
                    <option value="the-trade-desk">The Trade Desk</option>
                    <option value="amazon-dsp">Amazon DSP</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Seat ID</label>
                  <Input placeholder="Enter your Seat ID" />
                </div>
              </div>

              {/* Flight Dates */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Calendar className="w-4 h-4" />
                  Flight Dates
                </label>
                <div className="flex items-center gap-4">
                  <input type="checkbox" id="always-on" className="rounded" />
                  <label htmlFor="always-on" className="text-sm">Always On Campaign</label>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Start Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">End Date</label>
                    <Input type="date" />
                  </div>
                </div>
              </div>

              {/* Media Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Media Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['CTV', 'OLV', 'Display', 'In-App'].map((type) => (
                    <label key={type} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                      <input type="radio" name="mediaType" value={type.toLowerCase()} />
                      <span className="text-sm font-medium">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Media-Specific Targeting */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Targeting Options</h3>
                
                {/* CTV Apps */}
                <Card className="border-dashed">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Upload className="w-4 h-4" />
                      <span className="font-medium">CTV Apps (if CTV selected)</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Search and select apps or upload Bundle IDs</p>
                    <div className="space-y-2">
                      <Input placeholder="Search for apps..." />
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">Upload CSV</Button>
                        <span className="text-xs text-slate-500">or upload Bundle IDs in CSV format</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Domain Lists */}
                <Card className="border-dashed">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-4 h-4" />
                      <span className="font-medium">Domain Lists (OLV/Display)</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Upload domains for OLV or Display campaigns</p>
                    <Button variant="outline" size="sm">Upload Domain CSV</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Geo Targeting */}
              <div>
                <label className="block text-sm font-medium mb-2">Geo Targeting</label>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['US Only', 'States', 'DMAs', 'Cities'].map((type) => (
                      <label key={type} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                        <input type="radio" name="geoType" value={type.toLowerCase()} />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Upload Zip Codes CSV</Button>
                    <span className="text-xs text-slate-500">For zip code targeting</span>
                  </div>
                </div>
              </div>

              {/* Ideal Inventory */}
              <div>
                <label className="block text-sm font-medium mb-2">Ideal Inventory Description</label>
                <textarea
                  className="w-full min-h-[120px] px-3 py-2 border border-input bg-background rounded-md"
                  placeholder="Describe your ideal inventory, target audience, campaign goals, and any specific requirements. Our AI will analyze this to provide optimal targeting recommendations..."
                />
                <p className="text-xs text-slate-500 mt-1">
                  Be as detailed as possible. This information is used by our AI to generate personalized targeting recommendations.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t">
                <Button size="lg" className="flex-1 bg-green-600 hover:bg-green-700 text-white shadow-lg">
                  Save & Activate Deal
                </Button>
                <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                  Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}