import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Calendar, MessageCircle, Clock, MapPin, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Assembly Presentations",
      duration: "45-60 minutes",
      audience: "Entire school",
      description:
        "High-energy presentations featuring music, drama, and inspiring messages that engage students and share hope.",
      features: ["Live music performances", "Interactive drama", "Student testimonies", "Q&A sessions"],
      image: "/high-school-assembly-with-students-engaged-and-sm.png",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Lunch & Learn Sessions",
      duration: "30 minutes",
      audience: "Small groups",
      description:
        "Intimate discussions during lunch periods covering topics like purpose, relationships, and overcoming challenges.",
      features: ["Small group discussions", "Relevant life topics", "Peer mentoring", "Resource sharing"],
      image: "/small-group-of-high-school-students-having-lunch.png",
      gradient: "from-secondary to-accent",
    },
    {
      title: "After-School Clubs",
      duration: "1 hour weekly",
      audience: "Interested students",
      description:
        "Ongoing clubs that build community and provide ongoing support and mentorship for interested students.",
      features: ["Weekly meetings", "Leadership development", "Community service projects", "Mentorship opportunities"],
      image: "/after-school-club-meeting-with-diverse-high-schoo.png",
      gradient: "from-accent to-primary",
    },
    {
      title: "Special Events",
      duration: "2-4 hours",
      audience: "School community",
      description:
        "Larger events like talent shows, community service days, and celebration assemblies that bring schools together.",
      features: ["Talent showcases", "Community service", "Celebration events", "School-wide participation"],
      image: "/high-school-talent-show-with-students-performing.png",
      gradient: "from-primary via-secondary to-accent",
    },
  ]

  const impactStats = [
    { number: "50+", label: "Schools Partnered", icon: MapPin },
    { number: "2,000+", label: "Students Reached", icon: Users },
    { number: "150+", label: "Programs Delivered", icon: Calendar },
    { number: "95%", label: "Positive Feedback", icon: Star },
  ]

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
              <Link href="/programs" className="text-primary font-semibold">
                Programs
              </Link>
              <Link href="/events" className="text-foreground hover:text-primary transition-colors">
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
            Our
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Engaging, relevant, and impactful programs designed to connect with high school students and make a lasting
            difference in their lives.
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

      {/* Programs Grid */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Program Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible programs designed to fit your school's schedule and meet your students' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${program.gradient} opacity-20`}></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-card-foreground">{program.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {program.duration}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    <Users className="w-3 h-3 mr-1" />
                    {program.audience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground">Program Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to bring our programs to your school and start making a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reach out to discuss your school's needs and schedule a consultation to plan the perfect program.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Customize</h3>
              <p className="text-muted-foreground leading-relaxed">
                We'll work with you to customize the program content and format to best serve your student population.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Deliver</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced team arrives ready to engage your students with high-quality, impactful programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Schools Are Saying</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from educators and students about the impact of our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The assembly was incredible! Our students were completely engaged, and we've had so many positive conversations since then.",
                author: "Principal Sarah Martinez",
                school: "Lincoln High School",
                program: "Assembly Presentation",
              },
              {
                quote:
                  "The lunch sessions have become the highlight of many students' weeks. They love the authentic conversations and support.",
                author: "Counselor Mike Johnson",
                school: "Roosevelt High School",
                program: "Lunch & Learn",
              },
              {
                quote:
                  "Our after-school club has grown from 5 to 25 students! The mentorship and community they've built is amazing.",
                author: "Teacher Lisa Chen",
                school: "Washington High School",
                program: "After-School Club",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50"
              >
                <CardContent className="p-6">
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
                    <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.program}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's work together to bring hope, encouragement, and positive impact to your students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Program
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask Questions
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
