'use client'

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-gray-300">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/AC_LOGO_INVERTED.png" 
                alt="Advanced Curation Logo" 
                width={120} 
                height={120} 
                className="h-24 w-auto mr-4"
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
  )
}