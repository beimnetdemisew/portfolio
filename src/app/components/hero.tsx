"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, ArrowDown, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SiUpwork } from "react-icons/si"

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const [currentSkill, setCurrentSkill] = useState(0)

  const skills = [
    "React Developer",
    "Next.js Expert", 
    "Full-Stack Engineer",
    "TypeScript Specialist",
    "UI/UX Enthusiast"
  ]

  useEffect(() => {
    setMounted(true)
    
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75] as const,
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-black" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Code Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-white/10 rounded-sm"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Greeting */}
            <motion.p 
              className="text-blue-400 font-medium text-lg flex items-center justify-center lg:justify-start gap-2"
              variants={itemVariants}
            >
              <Sparkles className="w-5 h-5" />
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight gsap-split-text"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r mr-2 from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent dark:text-gray-300">
                Beimnet
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent dark:text-gray-300">Demisew</span>
            </motion.h1>

            {/* Dynamic Skill */}
            <motion.div 
              className="text-2xl sm:text-3xl text-gray-300 font-medium h-12 flex items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.span
                key={currentSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              >
                {skills[currentSkill]}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              I build digital experiences that matter. Creating modern web applications 
              with clean code, beautiful design, and exceptional user experiences.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Code className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400/50 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 bg-transparent hover:border-blue-500"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Talk
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-6"
            variants={itemVariants}
          >
            {[
              { Icon: Github, href: "https://github.com/beimnetdemisew", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/beimnet-demisew-9b7ab3375/", label: "LinkedIn" },
              { Icon: Twitter, href: null, label: "Twitter" },
              { Icon: SiUpwork, href: null, label: "Upwork" },
            ].map((social, index) => (
              social.href ? (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.Icon size={20} className="text-white" />
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  className="p-3 bg-white/10 rounded-full transition-all duration-300 transform border border-white/20 flex items-center justify-center"
                  aria-label={social.label}
                  whileHover={{ scale: 1.05 }}
                >
                  <social.Icon size={20} className="text-white opacity-90" />
                </motion.div>
              )
            ))}
          </motion.div>

          {/* Availability Status */}
          <motion.div
            className="flex justify-center lg:justify-start items-center space-x-2 text-sm text-gray-400"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Available for new opportunities</span>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          variants={itemVariants}
        >
          <div className="relative">
            {/* Main Image Container */}
            <div
              className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-1 shadow-2xl"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 p-2">
                <Image
                  src="/beimnet.jpg"
                  alt="Beimnet-Demisew - Full-Stack Developer"
                  width={300}
                  height={300}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-green-500 opacity-20 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            {/* Floating Tech Icons */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-4 border border-blue-500/30"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Code className="w-6 h-6 text-blue-400" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-4 border border-green-500/30"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
            >
              <Sparkles className="w-6 h-6 text-green-400" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <ArrowDown className="w-6 h-6 text-blue-400 animate-bounce" />
      </motion.div>
    </section>
  )
}

export default Hero