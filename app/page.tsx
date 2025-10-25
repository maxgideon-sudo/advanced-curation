'use client'

import Link from "next/link"
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
      <section className="relative py-12 px-4 bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-100/20 to-green-100/20 animate-pulse"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-200/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-teal-200/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight animate-fade-in">
            <span className="inline-block animate-shimmer bg-linear-to-r from-emerald-600 via-green-500 to-emerald-600 bg-clip-text text-transparent bg-size-[200%_auto]">
              A Real Agentic Deal Desk
            </span>
          </h1>
                    <p className="text-xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
            Create custom Deal IDs for all media types immediately for free. Launch campaigns in minutes, not weeks. Stop waiting for replies to your emails! Start with your first deal today.
          </p>
          <div className="flex justify-center items-center mb-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
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
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              AC is Purpose Built for Media Buyers and Trading Desks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, target, and optimize programmatic deals in one intuitive platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <Zap className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">Agentic Deal Creation</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Use our powerful tools to create your custom media plan or manually enter your details and we&rsquo;ll take it from there. Get deals live in seconds.
              </p>
            </div>

            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <Target className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">Smart Targeting</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Reach your ideal customers by location, media type, and DSP with precision. CTV, OLV, Display, and In-App support.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <DollarSign className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">Flexible Pricing</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                No hidden costs or markups. No changes to your current payment process, no new contracts to sign. Just free deal creation.
              </p>
            </div>

            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <BarChart3 className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">Real-Time Analytics</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Track performance, campaign metrics, ROI and more with our comprehensive dashboard.
              </p>
            </div>

            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <Shield className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">Enterprise Security</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Bank-grade security, encrypted data, and compliance with industry standards. Your deals are safe with us.
              </p>
            </div>

            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                <Clock className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">Quick Launch</h3>
              <p className="text-gray-600 group-hover:text-gray-700">
                Our intuitive process gets your Deal IDs created and campaigns live in minutes, not days.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Why Choose Advanced Curation?
            </h2>
            <p className="text-xl text-gray-600">
              Join agencies &amp; brands already running successful programmatic campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-3">
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

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-3">
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

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-3">
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
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Pricing & Ease of Use
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing with no hidden fees or long-term commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Pricing</h3>
              <p className="text-gray-600 mb-4">Pay only for what you use</p>
              
              <div className="space-y-3 mb-6">
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
                    <span className="font-semibold">No Hidden Fees</span>
                    <p className="text-sm text-gray-600">What you see is what you pay</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Designed for Everyone</h3>
              <p className="text-gray-600 mb-4">No technical skills required</p>
              
              <div className="space-y-3 mb-6">
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
      <section className="py-12 px-4 bg-linear-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-3">Ready to Streamline Your Deal Creation?</h2>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Launch your first Deal ID today. No fees, no contracts, simply deals sent to your DSP of choice.
          </p>
          <Link href="/gate">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-emerald-600 hover:bg-gray-50 shadow-xl">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>


    </div>
  )
}
