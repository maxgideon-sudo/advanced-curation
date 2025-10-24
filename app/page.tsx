import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  PlusCircle, 
  Target, 
  TrendingUp, 
  User, 
  Shield, 
  Zap, 
  DollarSign, 
  BarChart3, 
  Clock, 
  CheckCircle,
  Play,
  Star
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Advanced Curation
              </h1>
              <span className="text-sm text-gray-600 hidden sm:block">Programmatic Deal Desk</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <User className="w-4 h-4 mr-2" />
                  Client Login
                </Button>
              </Link>
              <Link href="/deal-curator">
                <Button size="sm" className="bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create Deal ID
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-100/20 to-green-100/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Programmatic Deal Creation
            <span className="block bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Simplified
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create custom Deal IDs and PMPs for all media types with AI-powered targeting. 
            Launch campaigns in minutes, not weeks. Starting with your first deal today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/deal-curator">
              <Button size="lg" className="text-lg px-8 py-4 bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-xl">
                <PlusCircle className="w-5 h-5 mr-2" />
                Launch Your Deal
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-gray-300 text-gray-700 hover:bg-gray-50">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
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
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-linear-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Creation</h3>
              <p className="text-gray-600">
                Use our AI-powered targeting tools or manual setup. Get professional-quality Deal IDs in seconds with intelligent recommendations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-linear-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Targeting</h3>
              <p className="text-gray-600">
                Reach your ideal customers by location, media type, and DSP with precision. CTV, OLV, Display, and In-App support.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-linear-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Pricing</h3>
              <p className="text-gray-600">
                Start small and scale up. No minimum commitments or hidden fees. Pay only for the deals you activate.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-linear-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Track deal performance, campaign metrics, and ROI with comprehensive dashboards and insights.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-linear-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-grade security, encrypted data, and compliance with industry standards. Your deals are safe with us.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-linear-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Launch</h3>
              <p className="text-gray-600">
                Our intuitive process gets your Deal IDs created and campaigns live in minutes, not weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From strategy to live Deal ID in under an hour.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Deal Plan</h3>
              <p className="text-gray-600">
                Tell us about your campaign goals and target audience requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Your Media</h3>
              <p className="text-gray-600">
                Select media types: CTV, OLV, Display, or In-App with our smart targeting tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Configure DSP Settings</h3>
              <p className="text-gray-600">
                Set your DSP, Seat ID, and targeting parameters with AI recommendations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deploy & Track</h3>
              <p className="text-gray-600">
                Get your Deal ID and track performance with real-time analytics
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
            <Link href="/deal-curator">
              <Button size="lg" className="text-lg px-8 py-4 bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-xl">
                Start Your First Deal
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
          <Link href="/deal-curator">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-emerald-600 hover:bg-gray-50 shadow-xl">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Curation</h3>
              <p className="text-gray-400 mb-4">
                AI-powered programmatic deal creation for smarter media trading.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/deal-curator" className="hover:text-white transition-colors">Deal Curator</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lead Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Client Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
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
