'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight
} from "lucide-react"

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-12 px-4 bg-linear-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Our Culture &
            <span className="block bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Core Values
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            We&apos;re building more than just technology—we&apos;re creating a culture of innovation, transparency, and customer success that drives everything we do.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-12 px-4 bg-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Culture</h2>
            <p className="text-xl text-gray-600">
              Building a team that&apos;s as innovative as our technology
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What We Believe</h3>
            <div className="grid md:grid-cols-2 gap-6">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-linear-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-3">Experience Our Values in Action</h2>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            See how our culture of innovation and simplicity transforms programmatic deal creation.
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