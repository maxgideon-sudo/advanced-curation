'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Grid, List } from "lucide-react"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Explore Collections</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Search collections, tags, or content..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <div className="flex border rounded-lg">
              <Button variant="ghost" size="sm" className="rounded-r-none">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-l-none">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm text-slate-600">Popular tags:</span>
            {['Technology', 'Design', 'Business', 'Science', 'Art', 'Education'].map((tag) => (
              <Button key={tag} variant="outline" size="sm" className="text-xs">
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 12 }, (_, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-full h-40 bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-lg mb-4"></div>
                <CardTitle className="text-lg">Collection {i + 1}</CardTitle>
                <CardDescription>
                  A comprehensive collection of curated content about modern web development practices and trends.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                  <span>{25} items</span>
                  <span>{7} days ago</span>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
                  <span className="text-sm text-slate-600">curator{i + 1}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                    Web Dev
                  </span>
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                    JavaScript
                  </span>
                  {i % 3 === 0 && (
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs">
                      React
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Collections
          </Button>
        </div>
      </div>
    </div>
  )
}