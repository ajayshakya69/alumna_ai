"use client"

import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import Loader from "@/components/loader"
import Header from "@/components/header"
import WhatAlumnaDoes from "@/components/what-alumna-does"
import SolutionFeatures from "@/components/solution-features"
import BottomSection from "@/components/bottom-section"
import ComingSoon from "@/components/coming-soon"
import WaitlistModal from "@/components/waitlist-modal"
import CursorGlow from "@/components/cursor-glow"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // Show loader for at least 2.5 seconds

    return () => clearTimeout(timer)
  }, [])

  const openWaitlist = () => {
    setIsWaitlistOpen(true)
  }

  const closeWaitlist = () => {
    setIsWaitlistOpen(false)
  }

  return (
    <main className={`min-h-screen bg-[#060606] text-white ${inter.className}`}>
      <CursorGlow/>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col">
          <Header onContactClick={openWaitlist} />
          <WhatAlumnaDoes />
          <ComingSoon />
          <SolutionFeatures />
          <BottomSection />
          <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
          <Footer/>
        </div>
      )}
    </main>
  )
}
