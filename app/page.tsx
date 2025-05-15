"use client"

import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import Loader from "@/components/loader"
import Header from "@/components/header"
import WhatAlumnaDoes from "@/components/what-alumna-does"
import SolutionFeatures from "@/components/solution-features"
import BottomSection from "@/components/bottom-section"
import ContactForm from "@/components/contact-form"
import CursorGlow from "@/components/cursor-glow"
import { useRef } from "react"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [loading, setLoading] = useState(true)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // Show loader for at least 2.5 seconds

    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className={`min-h-screen bg-gradient-background text-white ${inter.className}`}>
      <CursorGlow />
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col">
          <div className="gradient-overlay"></div>
          <Header onContactClick={scrollToContact} />
          <WhatAlumnaDoes />
          <SolutionFeatures />
          <BottomSection onContactClick={scrollToContact} />
          <div ref={contactRef}>
            <ContactForm />
          </div>
          <Footer/>
        </div>
      )}
    </main>
  )
}
