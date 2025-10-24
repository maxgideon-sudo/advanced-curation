import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, Search, BookOpen, Star, User } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-slate-900">Advanced Curation</h1>
              <p className="text-slate-600 hidden sm:block">Curate, organize, and discover amazing content</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button size="sm">
                <PlusCircle className="w-4 h-4 mr-2" />
                Create Collection
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Curate Content That Matters
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Organize articles, videos, links, and more into beautiful collections. 
            Share your curated content with the world or keep it private for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              <PlusCircle className="w-5 h-5 mr-2" />
              Start Curating
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Search className="w-5 h-5 mr-2" />
              Explore Collections
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Everything You Need to Curate
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle>Smart Collections</CardTitle>
                <CardDescription>
                  Organize your content into themed collections with rich metadata and tagging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Custom categories and tags</li>
                  <li>• Rich text descriptions</li>
                  <li>• Public or private collections</li>
                  <li>• Search and filter capabilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Star className="w-10 h-10 text-yellow-600 mb-4" />
                <CardTitle>Social Features</CardTitle>
                <CardDescription>
                  Share your collections, get feedback, and discover content from other curators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Comment on items</li>
                  <li>• Favorite collections</li>
                  <li>• Follow other curators</li>
                  <li>• Community discovery</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Search className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle>Powerful Search</CardTitle>
                <CardDescription>
                  Find exactly what you're looking for with advanced search and filtering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Full-text search</li>
                  <li>• Filter by type and tags</li>
                  <li>• Sort by date or popularity</li>
                  <li>• Save search queries</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Featured Collections
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample collections */}
            {Array.from({ length: 6 }, (_, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mb-4"></div>
                  <CardTitle className="text-lg">Sample Collection {i + 1}</CardTitle>
                  <CardDescription>
                    A curated collection of interesting articles and resources about technology and design.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>15 items</span>
                    <span>Updated 2 days ago</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                      Technology
                    </span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                      Design
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-semibold mb-4">Advanced Curation</h4>
          <p className="text-slate-400 mb-6">
            The ultimate platform for content curation and discovery
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/about" className="hover:text-slate-300">About</Link>
            <Link href="/privacy" className="hover:text-slate-300">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms</Link>
            <Link href="/contact" className="hover:text-slate-300">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
