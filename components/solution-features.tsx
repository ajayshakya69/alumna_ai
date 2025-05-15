"use client"

import {
  LucideGraduationCap,
  LucideSchool,
  LucideBriefcase,
  LucideUsers,
  LucideBarChart,
  LucideBuilding,
} from "lucide-react"
import { useEffect, useRef } from "react"

const features = [
  {
    title: "AI-Powered Career Guidance",
    description: "Personalized career recommendations based on skills, interests, and industry trends.",
    icon: LucideGraduationCap,
  },
  {
    title: "Smart Admissions & Financial Assistance",
    description: "AI-driven university selection and financial aid insights.",
    icon: LucideSchool,
  },
  {
    title: "Internship & Placement Optimization",
    description: "Intelligent job matching, resume enhancement, and interview preparation.",
    icon: LucideBriefcase,
  },
  {
    title: "Alumni Engagement & Networking",
    description: "AI-driven mentorship programs and lifelong professional connections.",
    icon: LucideUsers,
  },
  {
    title: "Institutional Management & Analytics",
    description: "Predictive enrollment trends, resource allocation, and data-driven decision making.",
    icon: LucideBarChart,
  },
  {
    title: "Continuous Learning Pathways",
    description: "Personalized skill development and lifelong learning recommendations.",
    icon: LucideBuilding,
  },
]

export default function SolutionFeatures() {
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = featuresRef.current?.querySelectorAll(".feature-card")
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("feature-card-visible")
              }, 150 * index) // Staggered animation
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#8C67E2] mb-10">Solution key features</h2>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#8C67E2]/30 transition-all duration-300 opacity-0 transform translate-y-8"
            >
              <feature.icon className="w-8 h-8 text-[#946DF0] mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
