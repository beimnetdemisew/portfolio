"use client"

import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

interface FilterProps {
  projects: any[]
  onFilterChange: (filteredProjects: any[]) => void
}

export function ProjectFilter({ projects, onFilterChange }: FilterProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])

  // Extract unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>()
    projects.forEach((project) => {
      project.technologies.forEach((tech: string) => techs.add(tech))
    })
    return Array.from(techs).sort()
  }, [projects])

  // Filter projects based on search and selected technologies
  const filteredProjects = useMemo(() => {
    let filtered = projects

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some((tech: string) =>
            tech.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    }

    // Filter by selected technologies
    if (selectedTechs.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTechs.some((tech) => project.technologies.includes(tech))
      )
    }

    onFilterChange(filtered)
    return filtered
  }, [searchQuery, selectedTechs, projects, onFilterChange])

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTechs([])
  }

  const hasActiveFilters = searchQuery || selectedTechs.length > 0

  return (
    <div className="space-y-6 mb-12">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search projects by name, description, or technology..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-4 py-3 bg-white/80 dark:bg-slate-800/50 border-gray-300 dark:border-slate-700 focus:border-cyan-500 dark:focus:border-cyan-400"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Technology Filters */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Filter by Technology:
          </h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Clear all
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {allTechnologies.map((tech) => {
            const isSelected = selectedTechs.includes(tech)
            return (
              <Badge
                key={tech}
                variant={isSelected ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-cyan-600 hover:bg-cyan-700 text-white border-cyan-600"
                    : "bg-white/80 dark:bg-slate-800/50 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:border-cyan-500 dark:hover:border-cyan-400"
                }`}
                onClick={() => toggleTech(tech)}
              >
                {tech}
              </Badge>
            )
          })}
        </div>
      </div>

      {/* Results count */}
      {hasActiveFilters && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      )}
    </div>
  )
}

