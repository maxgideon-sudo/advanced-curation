import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, MoreHorizontal, Eye, Download, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

// Mock data for deals
const mockDeals = [
  { 
    id: 1, 
    dealId: "AC-CTV-001", 
    company: "Nike",
    dsp: "DV360",
    mediaType: "CTV",
    status: "Active",
    flightStart: "2024-01-15",
    flightEnd: "2024-02-15",
    created: 2 
  },
  { 
    id: 2, 
    dealId: "AC-DIS-002", 
    company: "Coca-Cola",
    dsp: "The Trade Desk",
    mediaType: "Display",
    status: "Active",
    flightStart: "2024-01-20",
    flightEnd: "Always On",
    created: 5 
  },
  { 
    id: 3, 
    dealId: "AC-OLV-003", 
    company: "Ford Motor",
    dsp: "Amazon DSP",
    mediaType: "OLV",
    status: "Paused",
    flightStart: "2024-01-10",
    flightEnd: "2024-03-10",
    created: 1 
  },
  { 
    id: 4, 
    dealId: "AC-APP-004", 
    company: "Samsung",
    dsp: "DV360",
    mediaType: "In-App",
    status: "Draft",
    flightStart: "2024-02-01",
    flightEnd: "2024-03-01",
    created: 7 
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-400 via-green-500 to-teal-600">
      {/* Header */}
      <header className="border-b border-green-600/20 bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white hover:text-green-100 transition-colors">
              Advanced Curation
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20 hover:text-white">
                Settings
              </Button>
              <Link href="/deal-curator">
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  New Deal ID
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Deal Dashboard</h1>
          <p className="text-green-100">Manage your programmatic deals and track performance</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Active Deals</CardTitle>
              <div className="text-2xl font-bold text-green-600">12</div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-slate-500">+2 this week</p>
            </CardContent>
          </Card>
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Deals Created</CardTitle>
              <div className="text-2xl font-bold">28</div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-slate-500">Across all campaigns</p>
            </CardContent>
          </Card>
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">DSP Integrations</CardTitle>
              <div className="text-2xl font-bold">5</div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-slate-500">Connected platforms</p>
            </CardContent>
          </Card>
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Media Types</CardTitle>
              <div className="text-2xl font-bold">4</div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-slate-500">CTV, OLV, Display, In-App</p>
            </CardContent>
          </Card>
        </div>

        {/* My Deals */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white drop-shadow-lg">My Deals</h2>
            <Link href="/deal-curator">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
                <PlusCircle className="w-4 h-4 mr-2" />
                Create New Deal
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {mockDeals.map((deal) => (
              <Card key={deal.id} className="hover:shadow-xl transition-shadow bg-white/95 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{deal.dealId}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          deal.status === 'Active' ? 'bg-green-100 text-green-700' :
                          deal.status === 'Paused' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                          {deal.status}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-3">{deal.company} • {deal.dsp}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-slate-500">Media Type</span>
                          <p className="font-medium">{deal.mediaType}</p>
                        </div>
                        <div>
                          <span className="font-medium text-slate-500">Flight Start</span>
                          <p>{deal.flightStart}</p>
                        </div>
                        <div>
                          <span className="font-medium text-slate-500">Flight End</span>
                          <p>{deal.flightEnd}</p>
                        </div>
                        <div>
                          <span className="font-medium text-slate-500">Created</span>
                          <p>{deal.created} day{deal.created !== 1 ? 's' : ''} ago</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">Edit</Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Target className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/deal-curator">
                <Button variant="outline" className="w-full justify-start border-green-600 text-green-600 hover:bg-green-50">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create CTV Deal
                </Button>
              </Link>
              <Link href="/deal-curator">
                <Button variant="outline" className="w-full justify-start border-green-600 text-green-600 hover:bg-green-50">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create Display Deal
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start border-green-600 text-green-600 hover:bg-green-50">
                <Download className="w-4 h-4 mr-2" />
                Export All Deals
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <TrendingUp className="w-5 h-5" />
                Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">CTV Deals</span>
                  <span className="font-semibold">8 Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Display Deals</span>
                  <span className="font-semibold">4 Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">OLV Deals</span>
                  <span className="font-semibold">2 Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">In-App Deals</span>
                  <span className="font-semibold">3 Active</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}