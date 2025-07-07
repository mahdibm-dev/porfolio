import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mahdi Ben Messaoud - Frontend Developer",
  description: "Frontend Developer building engaging web experiences with React, Vue, and Next.js",
  keywords: "frontend developer, react, vue, next.js, web development, portfolio",
  authors: [{ name: "Mahdi Ben Messaoud" }],
  openGraph: {
    title: "Mahdi Ben Messaoud - Frontend Developer",
    description: "Frontend Developer building engaging web experiences with React, Vue, and Next.js",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
