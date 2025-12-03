"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Code, Zap, Database, Server, Calendar, Award, Users } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const About = () => {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    technologies: 0,
    clients: 0,
  })

  useEffect(() => {
    const animateCounts = () => {
      const targets = { years: 3, projects: 15, technologies: 20, clients: 8 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)

        setCounts({
          years: Math.floor(targets.years * easeOutQuart),
          projects: Math.floor(targets.projects * easeOutQuart),
          technologies: Math.floor(targets.technologies * easeOutQuart),
          clients: Math.floor(targets.clients * easeOutQuart),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounts(targets)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }

    const timer = setTimeout(animateCounts, 500)
    return () => clearTimeout(timer)
  }, [])

  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      description: "Started my journey with HTML, CSS, and JavaScript. Built my first website and fell in love with web development.",
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: "2023",
      title: "Frontend Focus",
      description: "Dove deep into React, Next.js, and TypeScript. Created interactive web applications and learned modern development practices.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      year: "2024",
      title: "Full-Stack Mastery",
      description: "Expanded to backend development with Node.js, databases, and APIs. Built complete end-to-end solutions.",
      icon: <Server className="w-5 h-5" />,
    },
    {
      year: "2025",
      title: "Professional Growth",
      description: "Working on complex projects, continuously learning new technologies and best practices.",
      icon: <Award className="w-5 h-5" />,
    },
  ]

  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Building fast, efficient applications that provide exceptional user experiences",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Approaching challenges with creativity and finding elegant solutions",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working closely with teams to deliver outstanding results together",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <motion.div
            className="space-y-8 gsap-slide-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              I’m a Computer Science graduate passionate about crafting meaningful digital experiences. What started as curiosity about how websites work has grown into a drive to build applications that are intuitive, impactful, and user-centered.              </p>
              
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-blue-400/50 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 bg-transparent hover:border-blue-500"
                asChild
              >
                <a href="#contact">Let's Connect</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="space-y-8 gsap-slide-right"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Journey</h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-blue-400 font-semibold">{item.year}</span>
                      <span className="text-gray-900 dark:text-white font-medium">{item.title}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-700"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-12">What I Value</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger-children">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-white dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Stats */}
        {/* <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            { value: counts.years, suffix: "+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> },
            { value: counts.projects, suffix: "+", label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
            { value: counts.technologies, suffix: "+", label: "Technologies", icon: <Zap className="w-6 h-6" /> },
            { value: counts.clients, suffix: "+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-400 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}

export default About