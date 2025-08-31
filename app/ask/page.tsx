"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, MessageSquare, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AskPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-[#FFD300]" />
              <Heart className="h-8 w-8 text-[#FF1E56]" fill="#FF1E56" />
              <span className="text-xl font-bold text-foreground">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFD300]/20 to-[#FFD300]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-[#FFD300] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <MessageSquare className="h-12 w-12 text-[#1A1A1A]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ask Your <span className="text-[#FFD300]">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No question is too big or small. We're here to provide thoughtful, caring answers
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#FFD300]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-[#FFD300]">Submit Your Question</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="border-[#FFD300]/30 focus:border-[#FFD300]"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-[#FFD300]/30 focus:border-[#FFD300]"
                />
              </div>

              <div>
                <Label htmlFor="category">Question Category *</Label>
                <Select>
                  <SelectTrigger className="border-[#FFD300]/30 focus:border-[#FFD300]">
                    <SelectValue placeholder="What is your question about?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="faith">Faith & Spirituality</SelectItem>
                    <SelectItem value="relationships">Relationships</SelectItem>
                    <SelectItem value="purpose">Life Purpose</SelectItem>
                    <SelectItem value="bible">Bible Questions</SelectItem>
                    <SelectItem value="prayer">Prayer</SelectItem>
                    <SelectItem value="personal">Personal Growth</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="question">Your Question *</Label>
                <Textarea
                  id="question"
                  placeholder="Please share your question in detail..."
                  className="border-[#FFD300]/30 focus:border-[#FFD300] min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="context">Additional Context</Label>
                <Textarea
                  id="context"
                  placeholder="Any additional background or context that might help us provide a better answer..."
                  className="border-[#FFD300]/30 focus:border-[#FFD300]"
                />
              </div>

              <Button className="w-full bg-[#FFD300] hover:bg-[#FFD300]/90 text-[#1A1A1A] py-3 text-lg font-semibold">
                Submit Question
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
