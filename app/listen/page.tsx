"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Headphones, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ListenPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-[#1E90FF]" />
              <Heart className="h-8 w-8 text-[#FF1E56]" fill="#FF1E56" />
              <span className="text-xl font-bold text-foreground">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1E90FF]/20 to-[#1E90FF]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#1E90FF] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Headphones className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Listen & <span className="text-[#1E90FF]">Be Inspired</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Request access to our library of inspiring messages, testimonies, and spiritual resources
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#1E90FF]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-[#1E90FF]">Resource Access Request</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="border-[#1E90FF]/30 focus:border-[#1E90FF]"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-[#1E90FF]/30 focus:border-[#1E90FF]"
                />
              </div>

              <div>
                <Label htmlFor="interests">What would you like to listen to?</Label>
                <Textarea
                  id="interests"
                  placeholder="Tell us what type of content interests you (testimonies, sermons, worship music, etc.)..."
                  className="border-[#1E90FF]/30 focus:border-[#1E90FF]"
                />
              </div>

              <Button className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white py-3 text-lg">
                Request Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
