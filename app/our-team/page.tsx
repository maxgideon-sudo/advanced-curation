'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Linkedin,
  Twitter,
  Github,
  Mail
} from "lucide-react"

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-linear-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Meet the Team Behind
            <span className="block bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Advanced Curation
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our team combines deep expertise in programmatic advertising, AI/ML engineering, and enterprise software to democratize deal creation.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced leaders from top-tier advertising technology companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* CEO */}
            <div className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-32 h-32 bg-linear-to-r from-emerald-600 to-green-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6">
                AS
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Alex Stevenson</h3>
              <p className="text-lg text-emerald-600 font-semibold mb-4">CEO & Co-Founder</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Former VP of Product at The Trade Desk with 12+ years building programmatic solutions. Led product teams that processed $10B+ in annual ad spend.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* CTO */}
            <div className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-32 h-32 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6">
                MK
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Maya Kim</h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">CTO & Co-Founder</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Former Principal Engineer at Google Ads with expertise in large-scale ML systems. PhD in Computer Science from Stanford, specialized in real-time bidding algorithms.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                  <Github className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* VP Product */}
            <div className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-32 h-32 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6">
                JC
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Jordan Chen</h3>
              <p className="text-lg text-purple-600 font-semibold mb-4">VP of Product</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Former Product Lead at DV360 and Amazon DSP. Expert in programmatic workflow optimization with deep understanding of advertiser and agency needs.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Excellence</h2>
            <p className="text-xl text-gray-600">
              Our engineering team brings together expertise from leading technology companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                RJ
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Riley Johnson</h3>
              <p className="text-sm text-emerald-600 font-semibold mb-2">Senior AI Engineer</p>
              <p className="text-gray-600 text-sm">ML systems specialist from OpenAI</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                SP
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Sam Patel</h3>
              <p className="text-sm text-blue-600 font-semibold mb-2">Backend Lead</p>
              <p className="text-gray-600 text-sm">Distributed systems expert from Stripe</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                EB
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Emma Brown</h3>
              <p className="text-sm text-purple-600 font-semibold mb-2">Frontend Lead</p>
              <p className="text-gray-600 text-sm">UX engineering from Figma</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                DL
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">David Lee</h3>
              <p className="text-sm text-teal-600 font-semibold mb-2">DevOps Engineer</p>
              <p className="text-gray-600 text-sm">Infrastructure scaling from Netflix</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <p className="text-xl text-gray-600">
              Industry veterans guiding our strategic direction
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-24 h-24 bg-linear-to-r from-gray-600 to-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                TR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tom Rodriguez</h3>
              <p className="text-lg text-gray-600 font-semibold mb-4">Former CEO, MediaMath</p>
              <p className="text-gray-600 leading-relaxed">
                20+ years in programmatic advertising. Led MediaMath through hypergrowth and public offering.
              </p>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-24 h-24 bg-linear-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                LW
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lisa Wang</h3>
              <p className="text-lg text-gray-600 font-semibold mb-4">Former VP, Amazon Advertising</p>
              <p className="text-gray-600 leading-relaxed">
                Expert in retail media and programmatic strategy. Scaled Amazon&apos;s DSP to $30B+ in annual spend.
              </p>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-24 h-24 bg-linear-to-r from-green-600 to-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                MF
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mark Foster</h3>
              <p className="text-lg text-gray-600 font-semibold mb-4">Former CTO, Xandr</p>
              <p className="text-gray-600 leading-relaxed">
                Technology leader who built enterprise-scale programmatic platforms serving Fortune 500 brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600">
              Building a team that&apos;s as innovative as our technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Believe</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation Through Simplicity</h4>
                    <p className="text-gray-600">The best solutions make complex problems feel effortless.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Customer-First Thinking</h4>
                    <p className="text-gray-600">Every feature starts with understanding our users&apos; real needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Continuous Learning</h4>
                    <p className="text-gray-600">The advertising technology landscape evolves rapidly—so do we.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Transparency & Trust</h4>
                    <p className="text-gray-600">Open communication and honest feedback drive our best work.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Team</h3>
                <p className="text-gray-600 mb-6">
                  We&apos;re always looking for talented engineers, product managers, and advertising technology experts.
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the future of programmatic deal creation with our expert team behind you.
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