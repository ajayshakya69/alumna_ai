"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updatePosition)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <div
      className={`cursor-glow fixed pointer-events-none z-10 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative">
        <div className="absolute w-[150px] h-[150px] rounded-full bg-gradient-to-r from-[#8C67E2]/30 via-[#E87DB3]/30 to-[#FFC899]/30 blur-[50px]"></div>
        <div className="absolute w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#8C67E2]/20 via-[#E87DB3]/20 to-[#FFC899]/20 blur-[30px]"></div>
        <div className="absolute w-[50px] h-[50px] rounded-full bg-gradient-to-r from-[#8C67E2]/10 via-[#E87DB3]/10 to-[#FFC899]/10 blur-[15px]"></div>
      </div>
    </div>
  )
}
