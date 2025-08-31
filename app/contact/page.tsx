"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  Calendar,
  GraduationCap,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [selectedForm, setSelectedForm] = useState("contact")

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Call us during business hours",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@outreachteam.org",
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Hope Street, Faith City, FC 12345",
      description: "Visit our office by appointment",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9AM-5PM",
      description: "Weekend events by arrangement",
    },
  ]

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", followers: "2.5K" },
    { icon: Instagram, name: "Instagram", url: "#", followers: "1.8K" },
    { icon: Twitter, name: "Twitter", url: "#", followers: "950" },
    { icon: Youtube, name: "YouTube", url: "#", followers: "1.2K" },
  ]

  const faqs = [
    {
      question: "How do I request a program for my school?",
      answer:
        "Use our School Partnership form above or call us directly. We'll schedule a consultation to discuss your needs and customize a program that fits your school's schedule and student population.",
    },
    {
      question: "What does it cost to host a program?",
      answer:
        "Our programs are offered free of charge to schools. We're supported by donations and grants, allowing us to serve schools regardless of their budget constraints.",
    },
    {
      question: "How far in advance should we book?",
      answer:
        "We recommend booking 4-6 weeks in advance, especially during peak seasons (fall and spring). However, we can sometimes accommodate shorter notice requests.",
    },
    {
      question: "What age groups do you serve?",
      answer:
        "We primarily focus on high school students (grades 9-12), but we can adapt our programs for middle school students (grades 6-8) upon request.",
    },
    {
      question: "Do you require any specific facilities?",
      answer:
        "Requirements vary by program type. Assemblies need an auditorium or gym, while workshops can use classrooms. We'll discuss specific needs during our consultation.",
    },
    {
      question: "How can I volunteer with your team?",
      answer:
        "Fill out our volunteer application form above. We provide training for all volunteers and have opportunities for various skill levels and time commitments.",
    },
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
              <Link href="/programs" className="text-foreground hover:text-primary transition-colors">
                Programs
              </Link>
              <Link href="/events" className="text-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/resources" className="text-foreground hover:text-primary transition-colors">
                Resources
              </Link>
              <Link href="/testimonies" className="text-foreground hover:text-primary transition-colors">
                Testimonies
              </Link>
              <Link href="/contact" className="text-primary font-semibold">
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
            Get
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Connected</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to bring hope and inspiration to your school? Want to volunteer and make a difference? We'd love to
            hear from you and explore how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-primary mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Can We Help?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the form that best fits your needs, and we'll get back to you within 24 hours.
            </p>
          </div>

          <Tabs value={selectedForm} onValueChange={setSelectedForm} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="contact">General</TabsTrigger>
              <TabsTrigger value="school">Schools</TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
              <TabsTrigger value="event">Events</TabsTrigger>
            </TabsList>

            {/* General Contact Form */}
            <TabsContent value="contact">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    General Contact
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Have a question or want to learn more about our programs? Send us a message.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="programs">Program Information</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* School Partnership Form */}
            <TabsContent value="school">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    School Partnership Request
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Request a program for your school. We'll customize it to fit your needs and schedule.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name</Label>
                      <Input id="contactName" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Title/Position</Label>
                      <Input id="title" placeholder="Principal, Counselor, etc." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schoolName">School Name</Label>
                    <Input id="schoolName" placeholder="Enter your school name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schoolAddress">School Address</Label>
                    <Input id="schoolAddress" placeholder="Street address, city, state, zip" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="schoolEmail">School Email</Label>
                      <Input id="schoolEmail" type="email" placeholder="Official school email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="schoolPhone">School Phone</Label>
                      <Input id="schoolPhone" type="tel" placeholder="Main office number" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentCount">Student Population</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Under 500</SelectItem>
                          <SelectItem value="medium">500-1000</SelectItem>
                          <SelectItem value="large">1000-2000</SelectItem>
                          <SelectItem value="xlarge">Over 2000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="programType">Preferred Program</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assembly">Assembly Presentation</SelectItem>
                          <SelectItem value="lunch">Lunch & Learn</SelectItem>
                          <SelectItem value="workshop">Leadership Workshop</SelectItem>
                          <SelectItem value="club">After-School Club</SelectItem>
                          <SelectItem value="custom">Custom Program</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeframe">Preferred Timeframe</Label>
                    <Input id="timeframe" placeholder="e.g., March 2024, Spring semester, etc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schoolMessage">Additional Information</Label>
                    <Textarea
                      id="schoolMessage"
                      placeholder="Tell us about your school's needs, goals, or any specific requirements..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity">
                    <Calendar className="mr-2 h-4 w-4" />
                    Request Program
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Volunteer Application Form */}
            <TabsContent value="volunteer">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Volunteer Application
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Join our team and help make a difference in students' lives. All volunteers receive training.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="volFirstName">First Name</Label>
                      <Input id="volFirstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="volLastName">Last Name</Label>
                      <Input id="volLastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="volEmail">Email</Label>
                      <Input id="volEmail" type="email" placeholder="Your email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="volPhone">Phone</Label>
                      <Input id="volPhone" type="tel" placeholder="Your phone number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volAddress">Address</Label>
                    <Input id="volAddress" placeholder="Street address, city, state, zip" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18-25">18-25</SelectItem>
                          <SelectItem value="26-35">26-35</SelectItem>
                          <SelectItem value="36-45">36-45</SelectItem>
                          <SelectItem value="46-55">46-55</SelectItem>
                          <SelectItem value="56+">56+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekdays">Weekdays Only</SelectItem>
                          <SelectItem value="weekends">Weekends Only</SelectItem>
                          <SelectItem value="both">Both Weekdays & Weekends</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Areas of Interest (Select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Assembly Presentations",
                        "Small Group Mentoring",
                        "Event Setup/Logistics",
                        "Administrative Support",
                        "Social Media/Marketing",
                        "Music/Creative Arts",
                      ].map((area) => (
                        <div key={area} className="flex items-center space-x-2">
                          <Checkbox id={area.replace(/\s+/g, "")} />
                          <Label htmlFor={area.replace(/\s+/g, "")} className="text-sm">
                            {area}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about any relevant experience working with youth, education, ministry, etc."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to volunteer?</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Share what motivates you to work with high school students..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="backgroundCheck" />
                    <Label htmlFor="backgroundCheck" className="text-sm">
                      I understand that a background check is required for all volunteers working with minors
                    </Label>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity">
                    <Users className="mr-2 h-4 w-4" />
                    Submit Application
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Event Booking Form */}
            <TabsContent value="event">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Event Booking Request
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Request a custom event or special program for your organization or community group.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventContact">Contact Name</Label>
                      <Input id="eventContact" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" placeholder="Church, community group, etc." />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventEmail">Email</Label>
                      <Input id="eventEmail" type="email" placeholder="Contact email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventPhone">Phone</Label>
                      <Input id="eventPhone" type="tel" placeholder="Contact phone" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="youth-rally">Youth Rally</SelectItem>
                        <SelectItem value="conference">Conference/Retreat</SelectItem>
                        <SelectItem value="community">Community Event</SelectItem>
                        <SelectItem value="fundraiser">Fundraising Event</SelectItem>
                        <SelectItem value="training">Training Workshop</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Preferred Date</Label>
                      <Input id="eventDate" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="attendees">Expected Attendees</Label>
                      <Input id="attendees" placeholder="Approximate number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="venue">Venue/Location</Label>
                    <Input id="venue" placeholder="Where will the event be held?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventDetails">Event Details</Label>
                    <Textarea
                      id="eventDetails"
                      placeholder="Describe your event, goals, target audience, and any specific requirements..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity">
                    <Calendar className="mr-2 h-4 w-4" />
                    Submit Request
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Social Media & FAQ */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Follow Our Journey</h2>
              <p className="text-muted-foreground mb-8">
                Stay connected with us on social media to see the latest updates, student stories, and upcoming events.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Card
                    key={social.name}
                    className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <social.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{social.name}</h3>
                        <p className="text-sm text-muted-foreground">{social.followers} followers</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-4">
                    <h3 className="font-semibold text-card-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
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
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <social.icon className="h-4 w-4 text-white" />
                  </Link>
                ))}
              </div>
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
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Partner with Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Request Program
                  </Link>
                </li>
                <li>
                  <Link href="/testimonies" className="hover:text-primary transition-colors">
                    Share Your Story
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
