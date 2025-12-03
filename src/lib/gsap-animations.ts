"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Fade in from bottom - use with className "gsap-fade-in-up"
export const fadeInUp = () => {
  return gsap.utils.toArray(".gsap-fade-in-up").forEach((element: any) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })
}

// Slide in from left - use with className "gsap-slide-left"
export const slideInLeft = () => {
  return gsap.utils.toArray(".gsap-slide-left").forEach((element: any) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })
}

// Slide in from right - use with className "gsap-slide-right"
export const slideInRight = () => {
  return gsap.utils.toArray(".gsap-slide-right").forEach((element: any) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })
}

// Scale in - use with className "gsap-scale-in"
export const scaleIn = () => {
  return gsap.utils.toArray(".gsap-scale-in").forEach((element: any) => {
    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })
}

// Stagger children animation - parent gets className "gsap-stagger-children"
export const staggerChildren = () => {
  return gsap.utils.toArray(".gsap-stagger-children").forEach((parent: any) => {
    const children = parent.children
    gsap.fromTo(
      children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: parent,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })
}

// Text split reveal - use with className "gsap-split-text"
export const splitTextReveal = () => {
  return gsap.utils.toArray(".gsap-split-text").forEach((element: any) => {
    const text = element.textContent
    const words = text.split(" ").map((word: string) => 
      word === " " ? "&nbsp;" : `<span class="word">${word}</span>`
    ).join(" ")
    element.innerHTML = words
    
    const wordsEl = element.querySelectorAll(".word")
    
    gsap.fromTo(
      wordsEl,
      { opacity: 0, y: 100, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })
}

// Parallax effect - use with className "gsap-parallax" and data-speed attribute
export const parallaxElements = () => {
  return gsap.utils.toArray(".gsap-parallax").forEach((element: any) => {
    const speed = element.dataset.speed || 0.5
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  })
}

// Initialize all GSAP animations
export const initGSAPAnimations = () => {
  if (typeof window === "undefined") return
  
  fadeInUp()
  slideInLeft()
  slideInRight()
  scaleIn()
  staggerChildren()
  splitTextReveal()
  parallaxElements()
  
  // Refresh on resize
  const handleResize = () => {
    ScrollTrigger.refresh()
  }
  
  window.addEventListener("resize", handleResize)
  window.addEventListener("orientationchange", handleResize)
  
  return () => {
    window.removeEventListener("resize", handleResize)
    window.removeEventListener("orientationchange", handleResize)
  }
}

