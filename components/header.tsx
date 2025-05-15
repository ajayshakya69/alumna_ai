"use client"

import { useEffect, useRef } from "react"

export default function Header({ onContactClick }: { onContactClick: () => void }) {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const headline = headlineRef.current
    if (headline) {
      headline.classList.add("animate-fade-in")
    }
  }, [])

  return (
    <header className="container mx-auto px-4 py-8 md:py-16 relative z-10">
      <div className="flex flex-col items-center">
        <div className="self-start mb-16">
          <h1 className="text-xl font-semibold text-white">Alumna.ai</h1>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h2
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 transition-opacity duration-1000"
          >
            <span className="block text-white">TRANSFORMING</span>
            <span className="block text-[#946DF0]">HIGHER</span>
            <span className="block text-white">EDUCATION THROUGH</span>
            <span className="block text-[#E87DB3]">AI INNOVATION</span>
          </h2>

          <p className="mt-8 text-white/80 max-w-[60%] mx-auto text-sm md:text-base opacity-0 animate-fade-in animation-delay-300">
            Empowering students and institutions with AI-driven insights, transforming learning, career guidance, and
            management for a smarter, more connected future.
          </p>

          <button
            onClick={onContactClick}
            className="mt-8 px-8 py-3 bg-[#8C67E2] text-white rounded-md hover:bg-[#7d5ad3] transition-colors opacity-0 animate-fade-in animation-delay-500"
          >
            Get in touch
          </button>
        </div>
      </div>
    </header>
  )
}
