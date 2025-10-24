'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  PlusCircle, 
  Target, 
  Shield, 
  Zap, 
  DollarSign, 
  BarChart3, 
  Clock, 
  CheckCircle,
  Play
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-100/20 to-green-100/20 animate-pulse"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-200/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-teal-200/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            <span className="inline-block animate-shimmer bg-linear-to-r from-emerald-600 via-green-500 to-emerald-600 bg-clip-text text-transparent bg-size-[200%_auto]">
              Agentic Ad Planning
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Create custom Deal IDs and PMPs for all media types with AI-powered targeting. 
            Launch campaigns in minutes, not weeks. Starting with your first deal today.
          </p>
          <div className="flex justify-center items-center mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link href="/gate">
              <Button size="lg" className="text-lg px-8 py-4 bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <PlusCircle className="w-5 h-5 mr-2" />
                Launch Your Deal
              </Button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              AI-powered targeting
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Live in minutes
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools for Programmatic Deal Creation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, target, and optimize programmatic deals in one intuitive platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <Zap className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">AI-Powered Creation</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Use our AI-powered targeting tools or manual setup. Get professional-quality Deal IDs in seconds with intelligent recommendations.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <Target className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">Smart Targeting</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Reach your ideal customers by location, media type, and DSP with precision. CTV, OLV, Display, and In-App support.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <DollarSign className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">Flexible Pricing</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Start small and scale up. No minimum commitments or hidden fees. Pay only for the deals you activate.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <BarChart3 className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">Real-Time Analytics</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Track deal performance, campaign metrics, and ROI with comprehensive dashboards and insights.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <Shield className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">Enterprise Security</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Bank-grade security, encrypted data, and compliance with industry standards. Your deals are safe with us.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <Clock className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">Quick Launch</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Our intuitive process gets your Deal IDs created and campaigns live in minutes, not weeks.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Advanced Curation?
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of agencies and brands already running successful programmatic campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  SC
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                  <p className="text-gray-600 text-sm">Marketing Director, Tech Startup</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Advanced Curation made programmatic deal creation accessible for the first time. We went from struggling with complex DSP setups to launching deals in minutes.&rdquo;
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  MR
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Marcus Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Owner, Media Trading Desk</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;The AI-powered targeting is incredibly precise. We&rsquo;re creating exactly the deal types we need, and the analytics show our efficiency clearly.&rdquo;
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  JK
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Jennifer Kim</h4>
                  <p className="text-gray-600 text-sm">Programmatic Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;No more waiting weeks for deal creation. The platform is intuitive and the support team helps optimize our targeting strategy.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing & Ease of Use
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing with no hidden fees or long-term commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Flexible Pricing</h3>
              <p className="text-gray-600 mb-6">Pay only for what you use</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <div>
                    <span className="font-semibold">No Setup Fees</span>
                    <p className="text-sm text-gray-600">Get started immediately</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <div>
                    <span className="font-semibold">Pay Per Deal</span>
                    <p className="text-sm text-gray-600">Only pay for activated Deal IDs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <div>
                    <span className="font-semibold">Volume Discounts</span>
                    <p className="text-sm text-gray-600">Save more as you scale</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <div>
                    <span className="font-semibold">No Hidden Fees</span>
                    <p className="text-sm text-gray-600">What you see is what you pay</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Designed for Everyone</h3>
              <p className="text-gray-600 mb-6">No technical skills required</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <div>
                    <span className="font-semibold">Intuitive Dashboard</span>
                    <p className="text-sm text-gray-600">Clean interface built for quick decisions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <div>
                    <span className="font-semibold">4-Step Launch</span>
                    <p className="text-sm text-gray-600">Average setup time: 15 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <div>
                    <span className="font-semibold">AI-Powered Recommendations</span>
                    <p className="text-sm text-gray-600">Smart suggestions based on your goals</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <div>
                    <span className="font-semibold">Real-Time Support</span>
                    <p className="text-sm text-gray-600">Expert help to optimize your deals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
                        <Link href="/gate">
              <Button size="lg" className="text-lg px-8 py-4 bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-xl">
                Start Your First Deal
                <Play className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
            {/* Final CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Streamline Your Deal Creation?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Launch your first Deal ID today. AI-powered targeting included.
          </p>
          <Link href="/gate">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-emerald-600 hover:bg-gray-50 shadow-xl">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image 
                  src="/AC_LOGO_INVERTED.png" 
                  alt="Advanced Curation Logo" 
                  width={64} 
                  height={64} 
                  className="h-16 w-auto mr-4"
                />
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Learn More</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/our-team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="/agentic-value" className="hover:text-white transition-colors">Agentic Value</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get Started</h4>
              <ul className="space-y-2">
                <li><Link href="/gate" className="hover:text-white transition-colors">Create Deal ID</Link></li>
                <li><Link href="/auth" className="hover:text-white transition-colors">Client Login</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Advanced Curation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
