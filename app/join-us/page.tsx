"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, UserPlus, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-[#FF1E56]" />
              <Heart className="h-8 w-8 text-[#FF1E56]" fill="#FF1E56" />
              <span className="text-xl font-bold text-foreground">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#FF1E56]/20 to-[#FF1E56]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#FF1E56] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <UserPlus className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join Our <span className="text-[#FF1E56]">Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Become part of our team and help transform lives through faith-based outreach programs
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#FF1E56]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-[#FF1E56]">Volunteer Application</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="border-[#FF1E56]/30 focus:border-[#FF1E56]"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="border-[#FF1E56]/30 focus:border-[#FF1E56]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-[#FF1E56]/30 focus:border-[#FF1E56]"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="border-[#FF1E56]/30 focus:border-[#FF1E56]"
                />
              </div>

              <div>
                <Label htmlFor="age">Age Group *</Label>
                <Select>
                  <SelectTrigger className="border-[#FF1E56]/30 focus:border-[#FF1E56]">
                    <SelectValue placeholder="Select your age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="16-18">16-18 years</SelectItem>
                    <SelectItem value="19-25">19-25 years</SelectItem>
                    <SelectItem value="26-35">26-35 years</SelectItem>
                    <SelectItem value="36-50">36-50 years</SelectItem>
                    <SelectItem value="50+">50+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="interests">Areas of Interest *</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {[
                    "School Assemblies",
                    "Youth Mentoring",
                    "Community Service",
                    "Event Planning",
                    "Music Ministry",
                    "Prayer Support",
                  ].map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox id={interest} />
                      <Label htmlFor={interest} className="text-sm">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="experience">Previous Experience</Label>
                <Textarea
                  id="experience"
                  placeholder="Tell us about any relevant experience you have..."
                  className="border-[#FF1E56]/30 focus:border-[#FF1E56]"
                />
              </div>

              <div>
                <Label htmlFor="motivation">Why do you want to join us?</Label>
                <Textarea
                  id="motivation"
                  placeholder="Share your heart and motivation for joining our outreach team..."
                  className="border-[#FF1E56]/30 focus:border-[#FF1E56]"
                />
              </div>

              <Button className="w-full bg-[#FF1E56] hover:bg-[#FF1E56]/90 text-white py-3 text-lg">
                Submit Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
