"use client"

import { useEffect, useState } from "react"

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#060606] flex flex-col items-center justify-center z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-t-2 border-[#8C67E2] animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-r-2 border-[#E87DB3] animate-spin animation-delay-150"></div>
        <div className="absolute inset-0 rounded-full border-b-2 border-[#FFC899] animate-spin animation-delay-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-sm font-medium">{progress}%</span>
        </div>
      </div>
      <p className="mt-4 text-white/70 text-sm">Loading Alumna.ai</p>
    </div>
  )
}
