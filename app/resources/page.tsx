"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, Download, Search, BookOpen, Video, FileText, Users, GraduationCap, Star, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const resourceCategories = [
    { id: "all", name: "All Resources", count: 24, icon: BookOpen },
    { id: "study-guides", name: "Study Guides", count: 8, icon: FileText },
    { id: "videos", name: "Videos", count: 6, icon: Video },
    { id: "presentations", name: "Presentations", count: 5, icon: GraduationCap },
    { id: "activities", name: "Activities", count: 5, icon: Users },
  ]

  const featuredResources = [
    {
      id: 1,
      title: "Purpose & Identity Study Guide",
      description: "A comprehensive 8-week study guide helping students discover their purpose and identity.",
      category: "study-guides",
      type: "PDF Guide",
      pages: 32,
      downloads: 1250,
      rating: 4.9,
      image: "/study-guide-purpose-identity-cover-design.png",
      featured: true,
      free: true,
      gradient: "from-primary to-secondary",
    },
    {
      id: 2,
      title: "Hope in Hard Times Video Series",
      description:
        "Inspiring video series addressing mental health, anxiety, and finding hope during difficult seasons.",
      category: "videos",
      type: "Video Series",
      duration: "45 min",
      downloads: 890,
      rating: 4.8,
      image: "/hope-in-hard-times-video-series-thumbnail.png",
      featured: true,
      free: true,
      gradient: "from-secondary to-accent",
    },
    {
      id: 3,
      title: "Leadership Development Toolkit",
      description: "Complete toolkit for developing student leaders with activities, assessments, and guides.",
      category: "activities",
      type: "Activity Pack",
      pages: 45,
      downloads: 675,
      rating: 4.7,
      image: "/leadership-development-toolkit-cover.png",
      featured: true,
      free: false,
      gradient: "from-accent to-primary",
    },
  ]

  const allResources = [
    ...featuredResources,
    {
      id: 4,
      title: "Relationship Boundaries Workshop",
      description: "Interactive presentation on healthy relationships and setting boundaries.",
      category: "presentations",
      type: "PowerPoint",
      pages: 25,
      downloads: 445,
      rating: 4.6,
      image: "/relationship-boundaries-workshop-slide.png",
      featured: false,
      free: true,
      gradient: "from-primary to-secondary",
    },
    {
      id: 5,
      title: "Faith & Science Discussion Guide",
      description: "Thoughtful exploration of faith and science for curious students.",
      category: "study-guides",
      type: "Discussion Guide",
      pages: 18,
      downloads: 320,
      rating: 4.5,
      image: "/faith-science-discussion-guide-cover.png",
      featured: false,
      free: true,
      gradient: "from-secondary to-accent",
    },
    {
      id: 6,
      title: "Community Service Project Ideas",
      description: "50+ creative community service project ideas for student groups.",
      category: "activities",
      type: "Activity List",
      pages: 12,
      downloads: 780,
      rating: 4.8,
      image: "/community-service-project-ideas-list.png",
      featured: false,
      free: true,
      gradient: "from-accent to-primary",
    },
  ]

  const testimonials = [
    {
      quote: "These resources have transformed how we approach character education in our school.",
      author: "Sarah Johnson",
      role: "High School Counselor",
      school: "Lincoln High School",
    },
    {
      quote: "The video series was exactly what our students needed. Practical, relevant, and inspiring.",
      author: "Mike Rodriguez",
      role: "Youth Pastor",
      school: "Community Church",
    },
    {
      quote: "Our teachers love having access to these high-quality, faith-integrated materials.",
      author: "Dr. Lisa Chen",
      role: "Principal",
      school: "Roosevelt High School",
    },
  ]

  const filteredResources = allResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Outreach Team</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/programs" className="text-foreground hover:text-primary transition-colors">
                Programs
              </Link>
              <Link href="/events" className="text-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/resources" className="text-primary font-semibold">
                Resources
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Free
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            High-quality educational materials, study guides, and multimedia resources to support students, teachers,
            and youth leaders.
          </p>
        </div>
      </section>

      {/* Resource Stats */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {resourceCategories.slice(1).map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {category.count}
                </div>
                <p className="text-muted-foreground font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {resourceCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-gradient-to-r from-primary to-secondary" : ""}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular and impactful resources, trusted by educators and youth leaders nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredResources.map((resource) => (
              <Card
                key={resource.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${resource.gradient} opacity-20`}></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 text-foreground">Featured</Badge>
                    {resource.free && <Badge className="bg-green-500 text-white">Free</Badge>}
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{resource.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-card-foreground">{resource.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{resource.type}</span>
                    <span>•</span>
                    <span>{resource.pages ? `${resource.pages} pages` : resource.duration}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{resource.downloads}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {resource.free ? "Download Free" : "Get Access"}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">All Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our complete library of educational materials and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card
                key={resource.id}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${resource.gradient} opacity-20`}></div>
                  <div className="absolute top-2 left-2 flex gap-1">
                    {resource.featured && <Badge className="bg-white/90 text-foreground text-xs">Featured</Badge>}
                    {resource.free && <Badge className="bg-green-500 text-white text-xs">Free</Badge>}
                  </div>
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{resource.rating}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>{resource.type}</span>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{resource.downloads}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 text-xs">
                      <Download className="mr-1 h-3 w-3" />
                      {resource.free ? "Free" : "Get"}
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      <Eye className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No resources found matching your search criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">What Educators Are Saying</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from teachers, counselors, and youth leaders who use our resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get notified when we release new resources and educational materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Christian Outreach Team</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Inspiring faith and changing lives through high school outreach programs across the region.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-primary transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-primary transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-primary transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Get Involved</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/volunteer" className="hover:text-primary transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="hover:text-primary transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/testimonies" className="hover:text-primary transition-colors">
                    Testimonies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Christian High School Outreach Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
