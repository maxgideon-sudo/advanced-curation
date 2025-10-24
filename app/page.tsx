import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, Search, Target, TrendingUp, User, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-400 via-green-500 to-teal-600">
      {/* Header */}
      <header className="border-b border-green-600/20 bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">Advanced Curation</h1>
              <p className="text-green-100 hidden sm:block">Agentic Programmatic Deal Desk</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20 hover:text-white">
                  <User className="w-4 h-4 mr-2" />
                  Client Login
                </Button>
              </Link>
              <Link href="/deal-curator">
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create Deal ID
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            AI-Powered Deal Desk for Programmatic Media
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Create custom Deal IDs and PMPs for programmatic buying across all media types. 
            From CTV to Display, streamline your media trading with intelligent deal curation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/deal-curator">
              <Button size="lg" className="text-lg px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white shadow-xl">
                <PlusCircle className="w-5 h-5 mr-2" />
                Create Your First Deal
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/20 hover:text-white">
              <Search className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12 drop-shadow-lg">
            Everything You Need for Media Trading
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <Target className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle>AI-Powered Deal Curation</CardTitle>
                <CardDescription>
                  Leverage OpenAI to analyze inventory requirements and generate optimal deal targeting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Intelligent inventory analysis</li>
                  <li>• Custom targeting recommendations</li>
                  <li>• Multi-media type support</li>
                  <li>• Real-time deal optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>Multi-Media Support</CardTitle>
                <CardDescription>
                  Create deals across CTV, OLV, Display, and In-App with platform-specific targeting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Connected TV (CTV) apps</li>
                  <li>• Online Video (OLV) domains</li>
                  <li>• Display advertising</li>
                  <li>• In-App mobile targeting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <Shield className="w-10 h-10 text-teal-600 mb-4" />
                <CardTitle>DSP Integration Ready</CardTitle>
                <CardDescription>
                  Generate Deal IDs compatible with major DSPs and manage seat ID validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Major DSP compatibility</li>
                  <li>• Seat ID validation</li>
                  <li>• Custom PDF exports</li>
                  <li>• Deal management dashboard</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12 drop-shadow-lg">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-green-800">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Enter Deal Details</h4>
              <p className="text-green-100">
                Input your DSP, seat ID, media type, flight dates, and targeting requirements through our intelligent form.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-orange-800">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">AI Analysis</h4>
              <p className="text-green-100">
                Our AI engine analyzes your ideal inventory description and generates optimized targeting recommendations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-teal-800">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Deploy & Manage</h4>
              <p className="text-green-100">
                Receive your custom Deal ID, export targeting details, and manage all your deals from your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-linear-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Media Trading?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join leading agencies and brands using Advanced Curation for smarter programmatic deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/deal-curator">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-orange-600 hover:bg-orange-50 border-white shadow-lg">
                Start Creating Deals
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-semibold mb-4">Advanced Curation</h4>
          <p className="text-slate-400 mb-6">
            The future of programmatic deal creation and management
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/about" className="hover:text-green-400 transition-colors">About</Link>
            <Link href="/how-it-works" className="hover:text-green-400 transition-colors">How It Works</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
