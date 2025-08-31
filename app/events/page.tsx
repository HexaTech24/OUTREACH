"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Calendar, MapPin, Clock, Users, Star, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function EventsPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const upcomingEvents = [
    {
      id: 1,
      title: "Spring Assembly Tour",
      date: "2024-03-15",
      time: "10:00 AM",
      location: "Lincoln High School",
      type: "Assembly",
      description: "High-energy spring assembly focusing on hope and new beginnings.",
      attendees: 850,
      image: "/spring-assembly-high-school-auditorium-filled.png",
      status: "upcoming",
      gradient: "from-primary to-secondary",
    },
    {
      id: 2,
      title: "Leadership Workshop",
      date: "2024-03-22",
      time: "2:00 PM",
      location: "Roosevelt High School",
      type: "Workshop",
      description: "Interactive workshop on developing leadership skills and character.",
      attendees: 45,
      image: "/leadership-workshop-high-school-students-engaged.png",
      status: "upcoming",
      gradient: "from-secondary to-accent",
    },
    {
      id: 3,
      title: "Community Service Day",
      date: "2024-03-28",
      time: "9:00 AM",
      location: "Washington High School",
      type: "Service",
      description: "Students and volunteers working together on community improvement projects.",
      attendees: 120,
      image: "/community-service-day-high-school-students-volun.png",
      status: "upcoming",
      gradient: "from-accent to-primary",
    },
    {
      id: 4,
      title: "Talent Showcase",
      date: "2024-04-05",
      time: "7:00 PM",
      location: "Jefferson High School",
      type: "Showcase",
      description: "Students showcase their talents while hearing inspiring messages.",
      attendees: 300,
      image: "/talent-showcase-high-school-stage-performance.png",
      status: "upcoming",
      gradient: "from-primary via-secondary to-accent",
    },
  ]

  const pastEvents = [
    {
      id: 5,
      title: "Winter Assembly Series",
      date: "2024-02-14",
      location: "Multiple Schools",
      type: "Assembly",
      description: "Successful winter tour reaching 5 schools with messages of love and acceptance.",
      attendees: 2400,
      feedback: 4.9,
      highlights: ["98% positive feedback", "15 student follow-ups", "3 new school partnerships"],
    },
    {
      id: 6,
      title: "Holiday Service Project",
      date: "2024-12-15",
      location: "City Community Center",
      type: "Service",
      description: "Students from 8 schools came together to serve families in need during the holidays.",
      attendees: 180,
      feedback: 4.8,
      highlights: ["200 families served", "500 gifts distributed", "Local news coverage"],
    },
  ]

  const eventTypes = [
    { name: "All Events", count: upcomingEvents.length, color: "primary" },
    { name: "Assemblies", count: upcomingEvents.filter((e) => e.type === "Assembly").length, color: "secondary" },
    { name: "Workshops", count: upcomingEvents.filter((e) => e.type === "Workshop").length, color: "accent" },
    { name: "Service", count: upcomingEvents.filter((e) => e.type === "Service").length, color: "primary" },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentMonth)
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1)
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
    }
    setCurrentMonth(newDate)
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
              <Link href="/events" className="text-primary font-semibold">
                Events
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
            Upcoming
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join us for inspiring assemblies, engaging workshops, and meaningful community service opportunities at high
            schools across the region.
          </p>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-r from-${type.color} to-secondary rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${type.color} to-secondary bg-clip-text text-transparent mb-2`}
                >
                  {type.count}
                </div>
                <p className="text-muted-foreground font-medium">{type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Don't Miss Out</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Register your school for these upcoming events and give your students an unforgettable experience.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50 overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-20`}></div>
                      <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">{event.type}</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-card-foreground mb-2">{event.title}</CardTitle>
                          <div className="space-y-2">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="text-sm">{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="w-4 h-4 mr-2" />
                              <span className="text-sm">{event.time}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span className="text-sm">{event.location}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Users className="w-4 h-4 mr-2" />
                              <span className="text-sm">{event.attendees} expected attendees</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity"
                        >
                          Register School
                        </Button>
                        <Button size="sm" variant="outline">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Calendar View */}
            <TabsContent value="calendar" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Event Calendar</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  View all upcoming events in calendar format to plan your school's participation.
                </p>
              </div>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground">{getMonthName(currentMonth)}</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="text-center min-w-[60px]">
                          <div className="text-2xl font-bold text-primary">{new Date(event.date).getDate()}</div>
                          <div className="text-xs text-muted-foreground uppercase">
                            {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-card-foreground mb-1">{event.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{event.location}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {event.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{event.time}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Past Events</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  See the impact we've made together and get inspired for future events.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {pastEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-card-foreground mb-2">{event.title}</CardTitle>
                          <div className="space-y-2">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="text-sm">{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span className="text-sm">{event.location}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Users className="w-4 h-4 mr-2" />
                              <span className="text-sm">{event.attendees} attendees</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Star className="w-4 h-4 mr-2" />
                              <span className="text-sm">{event.feedback}/5.0 rating</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary">{event.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-card-foreground">Event Highlights:</h4>
                        <ul className="space-y-1">
                          {event.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Request Event CTA */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Want to Host an Event?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't see your school on the calendar? Let's work together to bring an inspiring event to your students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <Plus className="mr-2 h-5 w-5" />
              Request an Event
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Full Calendar
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
                  <Link href="/testimonies" className="hover:text-primary transition-colors">
                    Testimonies
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
                  <Link href="/resources" className="hover:text-primary transition-colors">
                    Resources
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
