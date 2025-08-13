"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Users, ArrowRight, ExternalLink, X, Sparkles } from "lucide-react"

export default function SurveyLandingPage() {
  const [showThankYou, setShowThankYou] = useState(false)
  const [email, setEmail] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const embedSection = document.getElementById("survey-embed")
      if (embedSection) {
        const rect = embedSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        setShowStickyCTA(!isVisible && window.scrollY > 400)

        // Mock progress based on scroll within embed section
        if (isVisible) {
          const progress = Math.min(100, Math.max(0, ((window.innerHeight - rect.top) / window.innerHeight) * 100))
          setScrollProgress(progress)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSurvey = () => {
    document.getElementById("survey-embed")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToWhy = () => {
    document.getElementById("why-matters")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg">Decision Pulse</div>
          <Button onClick={scrollToSurvey} className="bg-blue-600 hover:bg-blue-700 text-white">
            Take the Survey
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
        <div className="space-y-8 animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Two-Minute Decision Pulse</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're exploring new ways people make choices at work. Share your approach in ~2 minutes. No personal info
            required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToSurvey}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              Start the 2-minute survey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="ghost" onClick={scrollToWhy} className="text-blue-600 hover:text-blue-700 font-medium">
              Why this matters
            </Button>
          </div>

          <div className="max-w-md mx-auto pt-8">
            <Card className="p-6 bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800">
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Get early access to results</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Join waitlist</Button>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700 underline">Skip—stay anonymous</button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Anonymous by default
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              No login
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              ~2 minutes
            </Badge>
          </div>
        </div>
      </section>

      {/* Survey Embed Section */}
      <section id="survey-embed" className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Tally Embed */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <iframe
              src="https://tally.so/r/3EO4Mq"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Decision Making Survey"
              className="w-full"
              style={{ background: "transparent" }}
            />
          </div>

          {/* Fallback Link */}
          <div className="text-center">
            <a
              href="https://tally.so/r/3EO4Mq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Open survey in a new tab
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section id="why-matters" className="max-w-6xl mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why this matters</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">1,248 responses and counting</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Clarity</h3>
              <p className="text-gray-600 dark:text-gray-400">See which patterns actually help teams move faster.</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Signal, not spam</h3>
              <p className="text-gray-600 dark:text-gray-400">Quick, focused questions—no email needed.</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Give back</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your input shapes a better tool for real-world decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ & Privacy</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Do I need to share personal info?</h3>
            <p className="text-gray-600 dark:text-gray-400">No. It's anonymous by default.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">How long will it take?</h3>
            <p className="text-gray-600 dark:text-gray-400">About 2 minutes.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Who is this for?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Operators, creators, and leaders who make decisions daily.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">What happens with the data?</h3>
            <p className="text-gray-600 dark:text-gray-400">Aggregated only. No personal identifiers.</p>
          </div>
        </div>
        <div className="text-center mt-8 space-x-6">
          <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-700">
            Contact
          </a>
          <button className="text-blue-600 hover:text-blue-700">View policy</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Decision Pulse. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky Mini CTA */}
      {showStickyCTA && (
        <Button
          onClick={scrollToSurvey}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
          size="lg"
        >
          Start Survey
        </Button>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <CardContent className="p-8 text-center space-y-6">
              <button
                onClick={() => setShowThankYou(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold">Thanks for sharing!</h3>
              <p className="text-gray-600 dark:text-gray-400">Your input helps us build something genuinely useful.</p>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  See aggregated insights (soon)
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Join waitlist
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
