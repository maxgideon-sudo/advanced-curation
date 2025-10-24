import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, MoreHorizontal, Eye, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"

// Mock data for collections
const mockCollections = [
  { id: 1, title: "Web Development Resources", items: 24, views: 156, likes: 12, days: 2 },
  { id: 2, title: "Design Inspiration", items: 18, views: 89, likes: 8, days: 5 },
  { id: 3, title: "AI & Machine Learning", items: 31, views: 203, likes: 19, days: 1 },
  { id: 4, title: "Startup Insights", items: 15, views: 67, likes: 6, days: 7 },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Advanced Curation
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Settings</Button>
              <Button size="sm">
                <PlusCircle className="w-4 h-4 mr-2" />
                New Collection
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">My Dashboard</h1>
          <p className="text-slate-600">Manage your collections and track their performance</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Collections</CardTitle>
              <div className="text-2xl font-bold">4</div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Items</CardTitle>
              <div className="text-2xl font-bold">88</div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Views</CardTitle>
              <div className="text-2xl font-bold">515</div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Likes</CardTitle>
              <div className="text-2xl font-bold">45</div>
            </CardHeader>
          </Card>
        </div>

        {/* My Collections */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">My Collections</h2>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Create New
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mockCollections.map((collection) => (
              <Card key={collection.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{collection.title}</CardTitle>
                      <CardDescription>
                        Last updated {collection.days} day{collection.days !== 1 ? 's' : ''} ago
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{collection.items}</span>
                      <span className="text-slate-500">items</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-slate-400" />
                      <span>{collection.views}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-slate-400" />
                      <span>{collection.likes}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">Public</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button size="sm">View</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Recent Activity</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { type: 'like', content: 'Someone liked your "Web Development Resources" collection', time: '2 hours ago' },
                  { type: 'comment', content: 'New comment on "Design Inspiration"', time: '5 hours ago' },
                  { type: 'view', content: '"AI & Machine Learning" reached 200 views', time: '1 day ago' },
                  { type: 'add', content: 'You added 3 new items to "Startup Insights"', time: '2 days ago' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      {activity.type === 'like' && <Heart className="w-4 h-4 text-blue-600" />}
                      {activity.type === 'comment' && <MessageCircle className="w-4 h-4 text-blue-600" />}
                      {activity.type === 'view' && <Eye className="w-4 h-4 text-blue-600" />}
                      {activity.type === 'add' && <PlusCircle className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-900">{activity.content}</p>
                      <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}