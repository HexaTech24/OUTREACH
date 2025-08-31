"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Heart,
  Users,
  Calendar,
  BookOpen,
  MessageCircle,
  Phone,
  Play,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  Headphones,
  HelpCircle,
  MessageSquare,
  Compass,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  const galleryImages = [
    "/gallery/outreach-moments/high-school-assembly-engaged-students.png",
    "/gallery/outreach-moments/diverse-volunteers-praying-together.png",
    "/gallery/outreach-moments/leadership-workshop-students-learning.png",
    "/gallery/outreach-moments/community-service-students-volunteering.png",
    "/gallery/outreach-moments/talent-showcase-stage-performance.png",
    "/gallery/outreach-moments/students-studying-together-collaboration.png",
    "/gallery/outreach-moments/assembly-students-raising-hands-engaged.png",
    "/gallery/outreach-moments/youth-group-discussion-circle.png",
  ]

  const nextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <Heart className="h-8 w-8 text-[#FF1E56] animate-pulse" fill="#FF1E56" />
              <span className="text-xl font-bold text-foreground">Outreach Team</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 animate-slide-in-right">
              <Link
                href="/about"
                className="text-foreground hover:text-[#FF1E56] transition-all duration-300 hover:scale-105 font-medium"
              >
                About
              </Link>
              <Link
                href="/programs"
                className="text-foreground hover:text-[#FF1E56] transition-all duration-300 hover:scale-105 font-medium"
              >
                Programs
              </Link>
              <Link
                href="/events"
                className="text-foreground hover:text-[#FF1E56] transition-all duration-300 hover:scale-105 font-medium"
              >
                Events
              </Link>
              <Link
                href="/testimonies"
                className="text-foreground hover:text-[#FF1E56] transition-all duration-300 hover:scale-105 font-medium"
              >
                Stories
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-[#FF1E56] transition-all duration-300 hover:scale-105 font-medium"
              >
                Contact
              </Link>
              <Button className="bg-[#FF1E56] text-white hover:bg-[#FF1E56]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-[#FF1E56]/25">
                <Link href="/contact">Join Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 30, 86, 0.3), rgba(26, 26, 26, 0.7)), url('/high-school-students-diverse-group-laughing.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E56]/40 to-secondary/30 animate-pulse-slow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance animate-fade-in-up">
              Inspiring Faith,
              <span className="text-[#FF1E56] animate-bounce-subtle drop-shadow-lg"> Changing Lives</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-300">
              Join our vibrant community as we reach out to high schools across the region, sharing hope, building
              relationships, and making a lasting impact in young lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#FF1E56] text-white hover:bg-[#FF1E56]/90 transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-[#FF1E56]/50 animate-bounce-on-hover border-2 border-[#FF1E56]"
                >
                  Get Involved Today
                  <ArrowRight className="ml-2 h-5 w-5 animate-slide-right" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#FFD300] text-[#FFD300] hover:bg-[#FFD300] hover:text-black transition-all duration-300 bg-white/10 backdrop-blur-sm transform hover:scale-105"
                onClick={() => document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Help Section */}
      <section className="py-16 bg-gradient-to-br from-[#FF1E56]/10 via-[#1E90FF]/5 to-[#3EB489]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/high-school-students-diverse-group-laughing.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-[#FF1E56]">Shalom</span> Beloved
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Kindly let us know how we can help you
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Please select any of the tabs below according to your area of need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Join Us Tab */}
            <Link href="/join-us" className="animate-fade-in-up animation-delay-100">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 border-2 border-[#FF1E56]/30 hover:border-[#FF1E56] cursor-pointer bg-gradient-to-br from-[#FF1E56]/20 to-[#FF1E56]/10 hover:from-[#FF1E56]/30 hover:to-[#FF1E56]/20 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-[#FF1E56] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-[#FF1E56]/50 animate-pulse">
                    <UserPlus className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-[#FF1E56] transition-colors">
                    Join Us
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Become part of our mission to transform lives and make a lasting impact
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Listen Tab */}
            <Link href="/listen" className="animate-fade-in-up animation-delay-200">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 border-2 border-[#1E90FF]/30 hover:border-[#1E90FF] cursor-pointer bg-gradient-to-br from-[#1E90FF]/20 to-[#1E90FF]/10 hover:from-[#1E90FF]/30 hover:to-[#1E90FF]/20 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-[#1E90FF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-[#1E90FF]/50 animate-pulse">
                    <Headphones className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-[#1E90FF] transition-colors">
                    Listen
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Access inspiring messages, testimonies, and spiritual resources
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Get Help Tab */}
            <Link href="/get-help" className="animate-fade-in-up animation-delay-300">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 border-2 border-[#3EB489]/30 hover:border-[#3EB489] cursor-pointer bg-gradient-to-br from-[#3EB489]/20 to-[#3EB489]/10 hover:from-[#3EB489]/30 hover:to-[#3EB489]/20 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-[#3EB489] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-[#3EB489]/50 animate-pulse">
                    <HelpCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-[#3EB489] transition-colors">
                    Get Help
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Find support, guidance, and resources for your personal journey
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Ask Tab */}
            <Link href="/ask" className="animate-fade-in-up animation-delay-400">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 border-2 border-[#FFD300]/30 hover:border-[#FFD300] cursor-pointer bg-gradient-to-br from-[#FFD300]/20 to-[#FFD300]/10 hover:from-[#FFD300]/30 hover:to-[#FFD300]/20 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-[#FFD300] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-[#FFD300]/50 animate-pulse">
                    <MessageSquare className="h-10 w-10 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-[#FFD300] transition-colors">
                    Ask
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Submit your questions and receive personalized guidance
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Discover Tab */}
            <Link href="/discover" className="animate-fade-in-up animation-delay-500">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 border-2 border-[#FF1E56]/30 hover:border-[#FF1E56] cursor-pointer bg-gradient-to-br from-[#FF1E56]/20 via-[#1E90FF]/10 to-[#3EB489]/20 hover:from-[#FF1E56]/30 hover:to-[#3EB489]/30 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#FF1E56] to-[#1E90FF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-[#FF1E56]/50 animate-pulse">
                    <Compass className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-[#FF1E56] transition-colors">
                    Discover
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Explore your purpose, faith, and calling through our programs
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See Our <span className="text-[#FF1E56]">Impact</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how we're transforming lives and building lasting relationships in high schools across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Video */}
            <div className="relative group animate-fade-in-left">
              <div className="aspect-video bg-gradient-to-br from-[#FF1E56]/20 to-secondary/20 rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-2 border-[#FF1E56]/20">
                <iframe
                  src="https://www.youtube.com/embed/WjEWsWn_J6E"
                  title="Our Story: Changing Lives Together"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-semibold text-foreground mt-4">Our Story: Changing Lives Together</h3>
              <p className="text-muted-foreground">See testimonials from students and educators about our impact</p>
            </div>

            {/* Secondary Videos */}
            <div className="space-y-6 animate-fade-in-right">
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-32 h-20 bg-gradient-to-br from-[#FF1E56]/20 to-primary/20 rounded-lg overflow-hidden flex-shrink-0 relative transform group-hover:scale-105 transition-all duration-300 border border-[#FF1E56]/30">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/high-school-leadership-workshop-students-engaged.png')" }}
                  ></div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="h-6 w-6 text-[#FF1E56]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-[#FF1E56] transition-colors">
                    Leadership Workshop Highlights
                  </h4>
                  <p className="text-sm text-muted-foreground">Empowering students to become leaders</p>
                </div>
              </div>

              <div className="flex gap-4 group cursor-pointer">
                <div className="w-32 h-20 bg-gradient-to-br from-secondary/20 to-[#FF1E56]/20 rounded-lg overflow-hidden flex-shrink-0 relative transform group-hover:scale-105 transition-all duration-300 border border-[#FF1E56]/30">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/high-school-students-community-service-volunteering.png')" }}
                  ></div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="h-6 w-6 text-[#FF1E56]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-[#FF1E56] transition-colors">
                    Community Service Impact
                  </h4>
                  <p className="text-sm text-muted-foreground">Students making a difference in their communities</p>
                </div>
              </div>

              <div className="flex gap-4 group cursor-pointer">
                <div className="w-32 h-20 bg-gradient-to-br from-[#FF1E56]/20 to-secondary/20 rounded-lg overflow-hidden flex-shrink-0 relative transform group-hover:scale-105 transition-all duration-300 border border-[#FF1E56]/30">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/high-school-talent-show-students-performing-stage.png')" }}
                  ></div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="h-6 w-6 text-[#FF1E56]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-[#FF1E56] transition-colors">
                    Talent Showcase
                  </h4>
                  <p className="text-sm text-muted-foreground">Celebrating student creativity and gifts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Picture Gallery Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Moments That <span className="text-[#FF1E56]">Matter</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Capturing the joy, growth, and transformation happening in our outreach programs.
            </p>
          </div>

          {/* Main Gallery */}
          <div className="relative mb-8 animate-fade-in">
            <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FF1E56]/20">
              <img
                src={galleryImages[currentGalleryIndex] || "/placeholder.svg"}
                alt="Outreach program moment"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FF1E56] text-white rounded-full p-3 hover:bg-[#FF1E56]/90 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-[#FF1E56]/50"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FF1E56] text-white rounded-full p-3 hover:bg-[#FF1E56]/90 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-[#FF1E56]/50"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex justify-center gap-4 overflow-x-auto pb-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentGalleryIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 ${
                  index === currentGalleryIndex
                    ? "ring-4 ring-[#FF1E56] shadow-lg scale-110"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gradient-to-br from-[#FF1E56]/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about" className="animate-fade-in-up animation-delay-100">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-2 border-[#FF1E56]/30 hover:border-[#FF1E56] cursor-pointer bg-gradient-to-br from-[#FF1E56]/10 to-[#FF1E56]/5">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#FF1E56] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-[#FF1E56]/50">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-[#FF1E56] transition-colors">
                    About Us
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Learn about our mission and the amazing team behind our outreach efforts.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/programs" className="animate-fade-in-up animation-delay-200">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-2 border-secondary/20 hover:border-secondary cursor-pointer bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <BookOpen className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-secondary transition-colors">
                    Programs
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Discover our school visits, youth activities, and community outreach programs.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/events" className="animate-fade-in-up animation-delay-300">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-2 border-accent/20 hover:border-accent cursor-pointer bg-gradient-to-br from-accent/5 to-accent/10">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Calendar className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                    Events
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Stay updated with our upcoming events and see highlights from past gatherings.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/testimonies" className="animate-fade-in-up animation-delay-400">
              <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-2 border-[#FF1E56]/20 hover:border-[#FF1E56] cursor-pointer bg-gradient-to-br from-[#FF1E56]/5 to-accent/5">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF1E56] to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-[#FF1E56]/30">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-[#FF1E56] transition-colors">
                    Testimonies
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Read inspiring stories from students whose lives have been transformed.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF1E56]/10 to-secondary/10 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/high-school-students-diverse-group-studying-together.png')" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Making a <span className="text-[#FF1E56]">Difference</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the incredible impact we're making in schools and communities across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up animation-delay-100">
              <div className="text-5xl md:text-6xl font-bold text-[#FF1E56] mb-2 animate-count-up drop-shadow-lg">
                50+
              </div>
              <p className="text-lg font-semibold text-foreground mb-1">Schools Visited</p>
              <p className="text-muted-foreground">Reaching students across the region</p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2 animate-count-up">2,000+</div>
              <p className="text-lg font-semibold text-foreground mb-1">Students Reached</p>
              <p className="text-muted-foreground">Lives touched through our programs</p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2 animate-count-up">100+</div>
              <p className="text-lg font-semibold text-foreground mb-1">Volunteers</p>
              <p className="text-muted-foreground">Dedicated team members serving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-[#FF1E56]/20 to-secondary/20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/high-school-assembly-students-raising-hands-engaged.png')" }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Ready to Make a <span className="text-[#FF1E56]">Difference</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
            Join our team of passionate volunteers and help us reach even more students with hope and encouragement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#FF1E56] text-white hover:bg-[#FF1E56]/90 transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-[#FF1E56]/50 animate-bounce-on-hover border-2 border-[#FF1E56]"
              >
                Volunteer With Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-white/10 backdrop-blur-sm transform hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-[#FF1E56]" fill="#FF1E56" />
                <span className="text-xl font-bold text-foreground">Ephesus Outreach</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Inspiring faith and changing lives through high school outreach programs across the region.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-[#FF1E56] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-[#FF1E56] transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-[#FF1E56] transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/testimonies" className="hover:text-[#FF1E56] transition-colors">
                    Testimonies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Get Involved</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-[#FF1E56] transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FF1E56] transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#FF1E56] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-[#FF1E56] transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Ephesus Outreach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
