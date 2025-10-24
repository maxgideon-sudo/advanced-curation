import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Brain,
  Zap,
  Target,
  BarChart3,
  Cpu,
  Shield,
  Globe,
  Clock,
  User,
  PlusCircle,
  CheckCircle,
  TrendingUp
} from "lucide-react"

export default function AgenticValuePage() {
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
            The Power of
            <span className="block bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Agentic AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our AI agents don&apos;t just automate tasks—they understand context, make intelligent decisions, and continuously optimize your programmatic campaigns.
          </p>
        </div>
      </section>

      {/* What is Agentic AI */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Our AI &quot;Agentic&quot;?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditional automation follows rigid rules. Agentic AI systems act autonomously, making context-aware decisions and adapting to changing conditions in real-time.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Autonomous decision-making based on campaign goals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Contextual understanding of advertising objectives</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Continuous learning from campaign performance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Real-time adaptation to market conditions</span>
                </div>
              </div>
            </div>
            <div className="bg-emerald-100 rounded-3xl p-8 flex items-center justify-center">
              <Brain className="w-48 h-48 text-emerald-600" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Capabilities</h2>
            <p className="text-xl text-gray-600">
              Our agentic AI transforms every aspect of programmatic deal creation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Targeting</h3>
              <p className="text-gray-600 leading-relaxed">
                AI analyzes your campaign objectives and automatically suggests optimal audience segments, geographic targeting, and behavioral parameters for maximum impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dynamic Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time bid adjustments, creative rotation, and budget allocation based on performance signals and market conditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Forecast campaign performance, identify optimization opportunities, and predict inventory availability before you commit to spend.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Deal Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate Deal IDs with optimized parameters across CTV, OLV, Display, and In-App inventory based on your campaign requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fraud Prevention</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered brand safety and fraud detection that continuously monitors inventory quality and blocks suspicious traffic patterns.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-DSP Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Unified insights across DV360, The Trade Desk, Amazon DSP, and other platforms with intelligent recommendations for each.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built on Advanced AI Architecture</h2>
            <p className="text-xl text-gray-600">
              Our proprietary AI system combines multiple specialized models for maximum effectiveness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-linear-to-br from-blue-100 to-purple-100 rounded-3xl p-8 flex items-center justify-center">
              <Cpu className="w-48 h-48 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Multi-Agent AI System</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Campaign Strategy Agent</h4>
                  <p className="text-gray-600">Analyzes objectives and recommends optimal media mix and targeting strategies</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Inventory Intelligence Agent</h4>
                  <p className="text-gray-600">Real-time analysis of available inventory quality and pricing across all DSPs</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization Agent</h4>
                  <p className="text-gray-600">Continuous monitoring and adjustment of campaign parameters for optimal ROI</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Fraud Detection Agent</h4>
                  <p className="text-gray-600">Advanced pattern recognition to identify and prevent invalid traffic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Benefits */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Measurable AI Impact</h2>
            <p className="text-xl text-gray-600">
              Our clients see dramatic improvements when they switch to agentic AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-gray-900 font-semibold mb-2">Time Reduction</div>
              <div className="text-gray-600 text-sm">From weeks to hours for deal creation</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-900 font-semibold mb-2">Performance Lift</div>
              <div className="text-gray-600 text-sm">Average CTR improvement vs manual targeting</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.8%</div>
              <div className="text-gray-900 font-semibold mb-2">Fraud Prevention</div>
              <div className="text-gray-600 text-sm">Invalid traffic blocked automatically</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-gray-900 font-semibold mb-2">Cost Efficiency</div>
              <div className="text-gray-600 text-sm">Reduction in wasted ad spend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future of AI */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Future is Agentic</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We&apos;re just getting started. Our roadmap includes even more sophisticated AI agents that will handle creative optimization, cross-channel attribution, and predictive budget allocation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Creative AI Agent</h4>
                    <p className="text-gray-600">Automatic creative testing and optimization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Attribution AI Agent</h4>
                    <p className="text-gray-600">Multi-touch attribution across all channels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Budget AI Agent</h4>
                    <p className="text-gray-600">Predictive budget allocation and pacing</p>
                  </div>
                </div>
              </div>
              <Link href="/how-it-works">
                <Button size="lg" className="bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg">
                  See How It Works
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="bg-linear-to-br from-emerald-100 to-green-100 rounded-3xl p-8 flex items-center justify-center">
              <Brain className="w-48 h-48 text-emerald-600" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Experience Agentic AI Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don&apos;t just automate—let our AI agents think, decide, and optimize for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gate">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-emerald-600 hover:bg-gray-50 shadow-xl">
                Start Creating Deals
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/our-team">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 backdrop-blur-sm">
                Meet Our AI Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}