"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const Projects = () => {
  const projects = [
    {
      title: "Smart Hire",
      description:
        "Smart Hire is an intelligent recruitment platform built with React, TypeScript, Node.js, and PostgreSQL. It allows employers to post jobs, manage applications, and streamline the hiring process. Job seekers receive AI-powered job recommendations based on their skills and experience. The system creates a faster, smarter, and more efficient hiring experience for everyone.",
      image: "/smart hire.png",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/beimnetdemisew/Final_Year_Project",
      liveUrl: "https://final-year-project-smoky.vercel.app/",
      featured: false,
    },
    // {
    //   title: "Library Management System",
    //   description:
    //     "A desktop-based library management system developed using Java Swing and MySQL. It supports book cataloging, member registration, borrowing/return tracking, and admin controls through a user-friendly GUI.",
    //   image: "/library.jpeg",
    //   technologies: ["Java", "Swing", "MySQL", "JDBC"],
    //   githubUrl: "https://github.com/beimnetdemisew",
    //   liveUrl: "#",
    //   featured: true,
    // },
    {
      title: "Hotel Management System",
      description:
        "A web-based hotel management system developed using Next.js, Nest.js, PostgreSQL, and Tailwind CSS. It supports room booking, customer management, reservation tracking, and admin controls through a user-friendly GUI.",
      image: "/vigorHMS.jpg",
      technologies: ["TypeScript", "Next.js", "Nest.js", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/Bekur-Technologies/bekur-hms-frontend",
      liveUrl: "https://hms.automataintelligence.ai/",
      featured: false,
    },
    {
      title: "Adiss Parking",
      description:
        "Addis Parking is a mobile-friendly platform built with React, Nest.js, PostgreSQL, and Tailwind CSS. It functions both as a smart parking system and a ride-hailing service. Users can easily find and reserve nearby parking spots, check real-time availability, and make secure payments. In addition, the platform allows users to request rides, track drivers, and enjoy a smooth Tow Ride–style experience. Designed with an intuitive interface, Addis Parking improves urban mobility by reducing traffic congestion and offering convenient transportation and parking solutions in one unified system.",
      image: "/adiss parking.png",
      technologies: ["React", "Nest.js", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/Sumuni-Creative-Solutions/usp-towtruck-frontend",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Inventory System",
      description:
        "An Inventory System built with Next.js, Node.js, and PostgreSQL that helps businesses track and manage stock in real time. It allows users to add, update, and monitor products with accurate, up-to-date inventory information. The system improves efficiency by reducing manual errors and providing fast, reliable insights into stock status.",
      technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 gsap-stagger-children"
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
              >
                <Card className="bg-white/80 !pt-0 dark:bg-slate-800/50 border-gray-200 dark:border-slate-300 hover:border-cyan-500 dark:hover:border-cyan-500/40 transition-all duration-700 overflow-hidden h-full ">
                  <div className="group relative w-full h-[320px] rounded-2xl overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={0}
                      className="w-full h-full object-cover rounded-2xl transform-gpu will-change-transform origin-center scale-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 motion-reduce:transition-none motion-reduce:transform-none"                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-cyan-600 to-emerald-600">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl !== "#" && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">Want to see more of my work or discuss a project?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white font-semibold px-8 py-3"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
