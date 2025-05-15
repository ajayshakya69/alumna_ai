"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would normally submit to a backend
    console.log("Form submitted:", formData)
    alert("Thanks for reaching out! This is a demo form.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#946DF0] mb-8 text-center">Get in touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white/80 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C67E2] text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white/80 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C67E2] text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white/80 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C67E2] text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-[#8C67E2] text-white rounded-md hover:bg-[#7d5ad3] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
