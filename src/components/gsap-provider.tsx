"use client"

import { useEffect } from "react"

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import and initialize GSAP animations
    import("@/lib/gsap-animations").then(({ initGSAPAnimations }) => {
      initGSAPAnimations()
    })
  }, [])
  
  return <>{children}</>
}
