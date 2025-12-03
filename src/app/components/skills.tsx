"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({})

  useEffect(() => {
    const skillCategories = [
      {
        title: "Frontend Development",
        skills: [
          { name: "React", level: 95 },
          { name: "Next.js", level: 100 },
          { name: "TypeScript", level: 88 },
          { name: "Tailwind CSS", level: 100 },
          { name: "JavaScript", level: 90 },
          { name: "HTML/CSS", level: 95 },
        ],
      },
      {
        title: "Backend Development",
        skills: [
          { name: "Node.js", level: 85 },
          { name: "PHP", level: 75 },
          { name: "Python", level: 70 },
          { name: "Java", level: 80 },
          { name: "REST APIs", level: 85 },
          { name: "Database Design", level: 90 },
        ],
      },
      {
        title: "Networking & Security",
        skills: [
          { name: "Cisco Packet Tracer", level: 88 },
          { name: "Network Design", level: 85 },
          { name: "DHCP/DNS/SMTP", level: 82 },
          { name: "Subnetting & VLANs", level: 80 },
          { name: "Router Configuration", level: 78 },
          { name: "Cybersecurity", level: 75 },
        ],
      },
      {
        title: "DevOps & Tools",
        skills: [
          { name: "Git & GitHub", level: 90 },
          { name: "Docker", level: 70 },
          { name: "AWS", level: 65 },
          { name: "Linux/CLI", level: 80 },
          { name: "CI/CD", level: 68 },
          { name: "Monitoring", level: 65 },
        ],
      },
    ]

    const animateSkills = () => {
      const allSkills: Record<string, number> = {}
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          allSkills[skill.name] = 0
        })
      })

      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)

        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            allSkills[skill.name] = Math.floor(skill.level * easeOutQuart)
          })
        })

        setAnimatedSkills({ ...allSkills })

        if (step >= steps) {
          clearInterval(timer)
          skillCategories.forEach(category => {
            category.skills.forEach(skill => {
              allSkills[skill.name] = skill.level
            })
          })
          setAnimatedSkills(allSkills)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }

    const timer = setTimeout(animateSkills, 500)
    return () => clearTimeout(timer)
  }, [])

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 100 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 100 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Nest.js", level: 80 },
        { name: "PostgreSQL", level: 75 },
        // { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 85 },
        // { name: "GraphQL", level: 65 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Linux/CLI", level: 80 },
        { name: "CI/CD", level: 68 },
        { name: "Vercel", level: 85 },
      ],
    },
  ]

  const certifications = [
    "Modern Web Development",
    "Full-Stack Applications",
    "React & Next.js",
    "Database Design",
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive skill set spanning modern web development technologies and tools
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={fadeInUp}
              className="md:col-span-1"
            >
              <Card className="bg-white/80 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 h-full backdrop-blur-sm">
                <CardContent className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center border-b border-cyan-500/20 pb-3">
                    {category.title}
                  </h3>
                  <div className="space-y-4 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
                            {animatedSkills[skill.name] || 0}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            className="bg-gradient-to-r from-cyan-600 to-emerald-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Specializations */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Areas of Specialization</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-cyan-50 to-emerald-50 dark:from-cyan-950 dark:to-emerald-950 border-cyan-300 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition-all duration-300 px-4 py-2 text-sm"
                >
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "15+", label: "Technologies Mastered" },
            { value: "100%", label: "Project Success Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
