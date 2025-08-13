import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Two-Minute Decision Pulse — Anonymous Survey",
  description: "Share how you make decisions at work. Anonymous. ~2 minutes.",
  openGraph: {
    title: "Two-Minute Decision Pulse — Anonymous Survey",
    description: "Share how you make decisions at work. Anonymous. ~2 minutes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Two-Minute Decision Pulse — Anonymous Survey",
    description: "Share how you make decisions at work. Anonymous. ~2 minutes.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
