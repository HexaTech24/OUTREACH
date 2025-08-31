import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Eye, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <Link href="/about" className="text-primary font-semibold">
                About
              </Link>
              <Link href="/programs" className="text-foreground hover:text-primary transition-colors">
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
            About Our
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover the heart behind our outreach efforts and meet the passionate team dedicated to making a difference
            in young lives.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To reach high school students across our region with the love of Christ, providing hope,
                  encouragement, and practical support through meaningful relationships and engaging programs.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-secondary/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To see every high school student in our region experience the transforming power of God's love,
                  equipped with faith, purpose, and the tools to make a positive impact in their communities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-accent/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Authenticity, compassion, excellence, and unity guide everything we do. We believe in meeting students
                  where they are and walking alongside them with genuine care and respect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a small group of passionate believers in 2018 has grown into a vibrant community of
                  over 100 volunteers dedicated to reaching high school students across our region.
                </p>
                <p>
                  Our journey began when a group of young adults recognized the unique challenges facing today's
                  teenagers and felt called to make a difference. Through prayer, planning, and persistent outreach,
                  we've been able to visit over 50 schools and connect with thousands of students.
                </p>
                <p>
                  Today, we continue to expand our reach while maintaining our core commitment to authentic
                  relationships, relevant programming, and life-changing encounters with God's love.
                </p>
              </div>
              <Button className="mt-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity">
                Learn About Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Image
                  src="/diverse-group-of-young-volunteers-praying-together.png"
                  alt="Our team in prayer"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate leaders dedicated to empowering the next generation through faith and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Executive Director",
                bio: "Sarah has been leading youth ministry for over 8 years and founded our outreach team with a vision to reach every high school in the region.",
                image: "/professional-headshot-of-young-woman-with-warm-smi.png",
              },
              {
                name: "Michael Chen",
                role: "Program Coordinator",
                bio: "Michael oversees our school visit programs and has a heart for connecting with students through sports and creative arts.",
                image: "/professional-headshot-of-young-asian-man-smiling.png",
              },
              {
                name: "Emily Rodriguez",
                role: "Volunteer Manager",
                bio: "Emily coordinates our amazing team of volunteers and ensures everyone is equipped and supported in their ministry roles.",
                image: "/professional-headshot-of-young-latina-woman-with-b.png",
              },
              {
                name: "David Thompson",
                role: "Events Director",
                bio: "David brings creativity and energy to our events, making sure every gathering is memorable and impactful for students.",
                image: "/professional-headshot-of-young-man-with-friendly-e.png",
              },
              {
                name: "Rachel Kim",
                role: "Communications Lead",
                bio: "Rachel manages our digital presence and helps share the stories of transformation happening in our community.",
                image: "/professional-headshot-of-young-korean-woman-with-p.png",
              },
              {
                name: "James Wilson",
                role: "Outreach Pastor",
                bio: "James provides spiritual guidance and pastoral care for both our team and the students we serve in schools.",
                image: "/professional-headshot-of-young-pastor-with-warm-ex.png",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Team</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for passionate individuals who want to make a difference in the lives of high school
            students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
            >
              Contact Leadership
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
