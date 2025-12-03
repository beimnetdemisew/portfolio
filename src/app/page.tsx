import Hero from "@/app/components/hero"
import About from "@/app/components/about"
import TechStack from "@/components/ui/tech-stack"
import Projects from "@/app/components/projects"
import Contact from "@/app/components/contact"
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
