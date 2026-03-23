import Link from "next/link"
import { getAllProjects } from "@/lib/projects"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ExternalLink, Github } from "lucide-react"

export const metadata = {
  title: "Projects | Jonathan Li",
  description: "Projects and work by Jonathan Li",
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-foreground">
            Projects
          </h1>
        </ScrollReveal>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={0.1 * (index + 1)}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-xl font-medium text-foreground group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h2>
                  <span className="font-mono text-sm text-muted-foreground shrink-0">
                    {project.date}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded bg-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 ml-auto shrink-0">
                    {project.github && (
                      <Github className="w-4 h-4 text-muted-foreground" />
                    )}
                    {project.link && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
