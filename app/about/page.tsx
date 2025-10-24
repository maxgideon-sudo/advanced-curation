import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Target, 
  Zap, 
  Shield,
  Users,
  Trophy,
  Globe,
  TrendingUp,
  User,
  PlusCircle
} from "lucide-react"

export default function AboutPage() {
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
            <div className="flex items-center space-x-4">
              <Link href="/auth">
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <User className="w-4 h-4 mr-2" />
                  Client Login
                </Button>
              </Link>
              <Link href="/gate">
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
      <section className="relative py-20 px-4 bg-linear-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionizing
            <span className="block bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Programmatic Advertising
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We&apos;re democratizing programmatic deal creation with AI-powered tools that make complex DSP operations accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe programmatic advertising shouldn&apos;t require a team of technical experts. Advanced Curation bridges the gap between sophisticated demand-side platforms and the agencies and brands who need to create effective campaigns quickly.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform transforms what used to take weeks of back-and-forth with DSP specialists into a streamlined, AI-guided process that delivers Deal IDs in under an hour.
              </p>
              <Link href="/how-it-works">
                <Button size="lg" className="bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg">
                  See How It Works
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="bg-emerald-100 rounded-3xl p-8 flex items-center justify-center">
              <Target className="w-48 h-48 text-emerald-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Making an Impact</h2>
            <p className="text-xl text-gray-600">
              Our platform is trusted by agencies and brands worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Active Clients</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Deals Created</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-emerald-50 rounded-xl">
              <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Simplicity</h3>
              <p className="text-gray-600 leading-relaxed">
                We make complex programmatic processes simple and accessible, eliminating barriers that prevent teams from creating effective campaigns.
              </p>
            </div>
            
            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                We protect our clients&apos; data and campaigns with enterprise-grade security, ensuring your advertising strategies remain confidential.
              </p>
            </div>
            
            <div className="text-center p-8 bg-teal-50 rounded-xl">
              <div className="w-20 h-20 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously evolve our AI and machine learning capabilities to stay ahead of the rapidly changing programmatic landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-linear-to-br from-emerald-100 to-green-100 rounded-3xl p-8 flex items-center justify-center">
              <Zap className="w-48 h-48 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cutting-Edge Technology</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our platform leverages advanced AI and machine learning to analyze campaign requirements and automatically generate optimal targeting parameters for major DSPs including DV360, The Trade Desk, and Amazon DSP.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">AI-powered targeting optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Real-time DSP integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Automated deal setup and configuration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Comprehensive performance analytics</span>
                </div>
              </div>
              <Link href="/agentic-value">
                <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Learn About Our AI
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Campaigns?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the revolution in programmatic advertising. Create your first Deal ID in under an hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gate">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-emerald-600 hover:bg-gray-50 shadow-xl">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/our-team">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 backdrop-blur-sm">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}