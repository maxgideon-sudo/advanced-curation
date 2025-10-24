'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Target, 
  Settings, 
  Play,
  BarChart3,
  CheckCircle
} from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-12 px-4 bg-linear-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            How Advanced Curation
            <span className="block bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Works for You
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            From strategy to live Deal ID in under an hour. Our streamlined process makes programmatic deal creation accessible to everyone.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From strategy to live Deal ID in under an hour.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Deal Plan</h3>
              <p className="text-gray-600">
                Tell us about your campaign goals and target audience requirements
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Your Media</h3>
              <p className="text-gray-600">
                Select media types: CTV, OLV, Display, or In-App with our smart targeting tools
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Configure DSP Settings</h3>
              <p className="text-gray-600">
                Set your DSP, Seat ID, and targeting parameters with AI recommendations
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deploy & Track</h3>
              <p className="text-gray-600">
                Get your Deal ID and track performance with real-time analytics
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/gate">
              <Button size="lg" className="text-lg px-8 py-4 bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-xl">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Step-by-Step Breakdown</h2>
          
          <div className="space-y-16">
            {/* Step 1 Detail */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Create Your Deal Plan</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Start by describing your campaign objectives, target audience, and key performance indicators. Our AI analyzes your requirements to suggest optimal targeting strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Define campaign goals and KPIs
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Specify target audience demographics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Set budget and timeline parameters
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-100 rounded-2xl p-8 flex items-center justify-center">
                <Target className="w-32 h-32 text-emerald-600" />
              </div>
            </div>

            {/* Step 2 Detail */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-green-100 rounded-2xl p-8 flex items-center justify-center">
                <Play className="w-32 h-32 text-green-600" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Choose Your Media Types</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Select from CTV, OLV, Display, or In-App advertising formats. Our platform provides intelligent recommendations based on your audience and campaign goals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    CTV for premium video reach
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    OLV for online video engagement
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Display and In-App for broad reach
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 Detail */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Configure DSP Settings</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Connect your preferred DSP, set your Seat ID, and configure targeting parameters. Our AI provides recommendations to optimize your targeting strategy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    DV360, The Trade Desk, Amazon DSP support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Automated Seat ID configuration
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    AI-powered targeting optimization
                  </li>
                </ul>
              </div>
              <div className="bg-blue-100 rounded-2xl p-8 flex items-center justify-center">
                <Settings className="w-32 h-32 text-blue-600" />
              </div>
            </div>

            {/* Step 4 Detail */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-purple-100 rounded-2xl p-8 flex items-center justify-center">
                <BarChart3 className="w-32 h-32 text-purple-600" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Deploy & Track Performance</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Receive your Deal ID immediately and monitor campaign performance with real-time analytics. Track impressions, clicks, conversions, and ROI.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Instant Deal ID generation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Real-time performance monitoring
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    Comprehensive ROI analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of agencies and brands creating successful programmatic campaigns with Advanced Curation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gate">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-emerald-600 hover:bg-gray-50 shadow-xl">
                Start Creating Deals
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 backdrop-blur-sm">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}