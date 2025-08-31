"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, HelpCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GetHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-[#3EB489]" />
              <Heart className="h-8 w-8 text-[#FF1E56]" fill="#FF1E56" />
              <span className="text-xl font-bold text-foreground">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#3EB489]/20 to-[#3EB489]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#3EB489] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <HelpCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get the <span className="text-[#3EB489]">Help</span> You Need
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to support you through life's challenges with guidance, prayer, and resources
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#3EB489]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-[#3EB489]">Support Request</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="border-[#3EB489]/30 focus:border-[#3EB489]"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-[#3EB489]/30 focus:border-[#3EB489]"
                />
              </div>

              <div>
                <Label htmlFor="helpType">Type of Support Needed *</Label>
                <Select>
                  <SelectTrigger className="border-[#3EB489]/30 focus:border-[#3EB489]">
                    <SelectValue placeholder="Select the type of help you need" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spiritual">Spiritual Guidance</SelectItem>
                    <SelectItem value="emotional">Emotional Support</SelectItem>
                    <SelectItem value="prayer">Prayer Request</SelectItem>
                    <SelectItem value="counseling">Counseling</SelectItem>
                    <SelectItem value="resources">Resource Assistance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="situation">Tell us about your situation *</Label>
                <Textarea
                  id="situation"
                  placeholder="Please share what you're going through and how we can help..."
                  className="border-[#3EB489]/30 focus:border-[#3EB489] min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="urgency">Urgency Level *</Label>
                <Select>
                  <SelectTrigger className="border-[#3EB489]/30 focus:border-[#3EB489]">
                    <SelectValue placeholder="How urgent is your request?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Can wait a few days</SelectItem>
                    <SelectItem value="medium">Medium - Within 24 hours</SelectItem>
                    <SelectItem value="high">High - As soon as possible</SelectItem>
                    <SelectItem value="emergency">Emergency - Immediate attention needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-[#3EB489] hover:bg-[#3EB489]/90 text-white py-3 text-lg">
                Submit Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
