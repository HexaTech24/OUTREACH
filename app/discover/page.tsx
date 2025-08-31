"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Compass, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DiscoverPage() {
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
      <section className="py-16 bg-gradient-to-br from-[#FF1E56]/20 via-[#1E90FF]/10 to-[#3EB489]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-[#FF1E56] to-[#1E90FF] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Compass className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Discover Your <span className="text-[#FF1E56]">Purpose</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore your calling, gifts, and purpose through our personalized discovery programs
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#FF1E56]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-[#FF1E56]">Discovery Journey Application</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="border-[#FF1E56]/30 focus:border-[#FF1E56]"
                />
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
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Your age"
                  className="border-[#FF1E56]/30 focus:border-[#FF1E56]"
                />
              </div>

              <div>
                <Label htmlFor="stage">Life Stage *</Label>
                <Select>
                  <SelectTrigger className="border-[#FF1E56]/30 focus:border-[#FF1E56]">
                    <SelectValue placeholder="Where are you in life right now?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">High School Student</SelectItem>
                    <SelectItem value="college">College Student</SelectItem>
                    <SelectItem value="young-adult">Young Adult</SelectItem>
                    <SelectItem value="career">Early Career</SelectItem>
                    <SelectItem value="established">Established Career</SelectItem>
                    <SelectItem value="transition">Life Transition</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Areas of Interest *</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {[
                    "Leadership Development",
                    "Creative Arts",
                    "Community Service",
                    "Mentoring Others",
                    "Teaching/Speaking",
                    "Music Ministry",
                    "Technology",
                    "Sports/Fitness",
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
                <Label htmlFor="goals">What are you hoping to discover? *</Label>
                <Textarea
                  id="goals"
                  placeholder="Tell us what you're hoping to learn about yourself, your purpose, or your calling..."
                  className="border-[#FF1E56]/30 focus:border-[#FF1E56] min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="challenges">Current Challenges</Label>
                <Textarea
                  id="challenges"
                  placeholder="What challenges or questions are you facing in your journey?"
                  className="border-[#FF1E56]/30 focus:border-[#FF1E56]"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-[#FF1E56] to-[#1E90FF] hover:from-[#FF1E56]/90 hover:to-[#1E90FF]/90 text-white py-3 text-lg">
                Begin Discovery Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
