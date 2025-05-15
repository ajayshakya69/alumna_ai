import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alumna.ai - Transforming Higher Education Through AI Innovation",
  description:
    "Alumna.ai is redefining the future of education with AI-powered solutions for students, institutions, and alumni.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover
					theme="colored"
				/>
        {children}
        </body>
    </html>
  )
}
