"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Quote, Play, Star, Users, GraduationCap, MessageCircle, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function TestimoniesPage() {
  const [selectedCategory, setSelectedCategory] = useState("students")

  const impactStats = [
    { number: "2,000+", label: "Students Impacted", icon: Users },
    { number: "95%", label: "Positive Feedback", icon: Star },
    { number: "50+", label: "School Partners", icon: GraduationCap },
    { number: "85%", label: "Recommend to Others", icon: TrendingUp },
  ]

  const studentTestimonies = [
    {
      id: 1,
      name: "Maria Rodriguez",
      age: 17,
      school: "Lincoln High School",
      story:
        "I was struggling with depression and felt like I had no purpose. The assembly changed everything for me. I learned that I'm valued and have a unique purpose. Now I'm leading a peer support group at our school.",
      image: "/student-testimony-maria-rodriguez-portrait.png",
      program: "Spring Assembly",
      impact: "Started peer support group",
      gradient: "from-primary to-secondary",
      featured: true,
    },
    {
      id: 2,
      name: "James Thompson",
      age: 16,
      school: "Roosevelt High School",
      story:
        "I used to get in trouble a lot and didn't care about my future. The leadership workshop showed me I could be a positive influence. I'm now student body president and my grades have improved dramatically.",
      image: "/student-testimony-james-thompson-portrait.png",
      program: "Leadership Workshop",
      impact: "Became student body president",
      gradient: "from-secondary to-accent",
      featured: true,
    },
    {
      id: 3,
      name: "Sarah Kim",
      age: 18,
      school: "Washington High School",
      story:
        "The lunch sessions helped me through my parents' divorce. Having a safe space to talk and receive encouragement made all the difference. I've learned to find hope even in difficult times.",
      image: "/student-testimony-sarah-kim-portrait.png",
      program: "Lunch & Learn",
      impact: "Improved mental health",
      gradient: "from-accent to-primary",
      featured: false,
    },
    {
      id: 4,
      name: "Marcus Johnson",
      age: 17,
      school: "Jefferson High School",
      story:
        "I was heading down the wrong path with the wrong crowd. The after-school club gave me a new group of friends and mentors who believed in me. Now I'm planning to go to college.",
      image: "/student-testimony-marcus-johnson-portrait.png",
      program: "After-School Club",
      impact: "College-bound",
      gradient: "from-primary via-secondary to-accent",
      featured: false,
    },
  ]

  const educatorTestimonies = [
    {
      id: 1,
      name: "Dr. Lisa Martinez",
      role: "Principal",
      school: "Lincoln High School",
      years: 15,
      story:
        "In 15 years of education, I've never seen a program create such positive change in our school culture. Students are more engaged, kinder to each other, and our disciplinary issues have decreased by 40%.",
      image: "/educator-testimony-dr-lisa-martinez-portrait.png",
      impact: "40% decrease in disciplinary issues",
      gradient: "from-primary to-secondary",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Guidance Counselor",
      school: "Roosevelt High School",
      years: 8,
      story:
        "The resources and ongoing support have been invaluable. I've seen students who were struggling find hope and direction. The team provides exactly what our students need during these challenging years.",
      image: "/educator-testimony-michael-chen-portrait.png",
      impact: "Improved student mental health",
      gradient: "from-secondary to-accent",
    },
    {
      id: 3,
      name: "Jennifer Williams",
      role: "English Teacher",
      school: "Washington High School",
      years: 12,
      story:
        "The character education components have transformed my classroom. Students are more respectful, engaged, and willing to support each other. It's created the positive learning environment I've always wanted.",
      image: "/educator-testimony-jennifer-williams-portrait.png",
      impact: "Improved classroom culture",
      gradient: "from-accent to-primary",
    },
  ]

  const parentTestimonies = [
    {
      id: 1,
      name: "Robert and Susan Davis",
      relation: "Parents of Emma Davis",
      school: "Lincoln High School",
      story:
        "Emma came home from the assembly completely changed. She had new confidence and started making better choices. The positive influence has lasted months, and we're so grateful for this program.",
      image: "/parent-testimony-robert-susan-davis-portrait.png",
      impact: "Lasting positive change",
      gradient: "from-primary to-secondary",
    },
    {
      id: 2,
      name: "Angela Rodriguez",
      relation: "Mother of Carlos Rodriguez",
      school: "Roosevelt High School",
      story:
        "Carlos was struggling with peer pressure and making poor decisions. After joining the after-school club, he found mentors and friends who encouraged him. He's now focused on his future and making us proud.",
      image: "/parent-testimony-angela-rodriguez-portrait.png",
      impact: "Overcame peer pressure",
      gradient: "from-secondary to-accent",
    },
  ]

  const videoTestimonies = [
    {
      id: 1,
      title: "Student Panel: Life Change Stories",
      duration: "8:32",
      thumbnail: "/video-testimony-student-panel-thumbnail.png",
      description: "Five students share how the outreach programs changed their lives and futures.",
      views: 1250,
    },
    {
      id: 2,
      title: "Principal Testimonials",
      duration: "5:47",
      thumbnail: "/video-testimony-principals-thumbnail.png",
      description: "School administrators discuss the positive impact on their school communities.",
      views: 890,
    },
    {
      id: 3,
      title: "Parent Perspectives",
      duration: "6:15",
      thumbnail: "/video-testimony-parents-thumbnail.png",
      description: "Parents share how the programs have positively influenced their teenagers.",
      views: 675,
    },
  ]

  const getCurrentTestimonies = () => {
    switch (selectedCategory) {
      case "students":
        return studentTestimonies
      case "educators":
        return educatorTestimonies
      case "parents":
        return parentTestimonies
      default:
        return studentTestimonies
    }
  }

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
              <Link href="/resources" className="text-foreground hover:text-primary transition-colors">
                Resources
              </Link>
              <Link href="/testimonies" className="text-primary font-semibold">
                Testimonies
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
            Real
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hear from students, educators, and families whose lives have been transformed through our outreach programs.
            These are the stories that drive our mission forward.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Student Stories */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Student Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These powerful testimonies show the real impact of hope, encouragement, and mentorship in students' lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {studentTestimonies
              .filter((testimony) => testimony.featured)
              .map((testimony) => (
                <Card
                  key={testimony.id}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={testimony.image || "/placeholder.svg"}
                      alt={testimony.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${testimony.gradient} opacity-20`}></div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">Featured Story</Badge>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-1">{testimony.name}</h3>
                      <p className="text-white/90 text-sm">
                        {testimony.school} • Age {testimony.age}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="h-6 w-6 text-primary mr-2" />
                      <Badge variant="outline">{testimony.program}</Badge>
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                      "{testimony.story}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-semibold text-card-foreground">Impact: </span>
                        <span className="text-muted-foreground">{testimony.impact}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Read Full Story
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Testimonies */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">All Testimonies</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Browse testimonies by category to see the wide-reaching impact of our programs.
              </p>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="educators">Educators</TabsTrigger>
                <TabsTrigger value="parents">Parents</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="students" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studentTestimonies.map((testimony) => (
                  <Card
                    key={testimony.id}
                    className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
                  >
                    <div className="flex gap-4 p-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimony.image || "/placeholder.svg"}
                          alt={testimony.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-card-foreground">{testimony.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {testimony.program}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {testimony.school} • Age {testimony.age}
                        </p>
                        <blockquote className="text-sm text-muted-foreground leading-relaxed italic mb-3">
                          "{testimony.story.substring(0, 150)}..."
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-primary font-medium">{testimony.impact}</span>
                          <Button size="sm" variant="ghost" className="text-xs">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="educators" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {educatorTestimonies.map((testimony) => (
                  <Card
                    key={testimony.id}
                    className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimony.image || "/placeholder.svg"}
                            alt={testimony.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{testimony.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {testimony.role} • {testimony.years} years
                          </p>
                          <p className="text-xs text-muted-foreground">{testimony.school}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="text-sm text-muted-foreground leading-relaxed italic mb-4">
                        "{testimony.story}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {testimony.impact}
                        </Badge>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="parents" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {parentTestimonies.map((testimony) => (
                  <Card
                    key={testimony.id}
                    className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
                  >
                    <div className="flex gap-4 p-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimony.image || "/placeholder.svg"}
                          alt={testimony.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-card-foreground mb-1">{testimony.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{testimony.relation}</p>
                        <p className="text-xs text-muted-foreground mb-3">{testimony.school}</p>
                        <blockquote className="text-sm text-muted-foreground leading-relaxed italic mb-4">
                          "{testimony.story}"
                        </blockquote>
                        <Badge variant="outline" className="text-xs">
                          {testimony.impact}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Testimonies */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Video Testimonies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch powerful video testimonies that capture the emotion and impact of life transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonies.map((video) => (
              <Card
                key={video.id}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-primary ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">{video.duration}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{video.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{video.views} views</span>
                    <Button size="sm" variant="ghost" className="text-xs">
                      Watch Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Share Your Story</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Have you been impacted by our programs? We'd love to hear your story and share it with others who need hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Submit Your Story
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Record Video Testimony
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
