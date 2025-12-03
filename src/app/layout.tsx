import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/app/components/navigation"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider"
import GSAPProvider from "@/components/gsap-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Beimnet Demisew - Full-Stack Developer",
  description:
    "Computer Science graduate passionate about building modern, scalable web applications. Specializing in React, Next.js, Node.js, and TypeScript for exceptional user experiences.",
  keywords: "Full-Stack Developer, React, Next.js, Node.js, TypeScript, Web Development, Frontend, Backend, Database Design",
  authors: [{ name: "Beimnet Demisew" }],
  openGraph: {
    title: "Beimnet Demisew - Full-Stack Developer",
    description:
      "Computer Science graduate passionate about building modern, scalable web applications with React, Next.js, and Node.js.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GSAPProvider>
            <Toaster />
            <Navigation />
            {children}
          </GSAPProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
