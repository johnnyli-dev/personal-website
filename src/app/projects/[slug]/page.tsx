import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { getAllProjects, getProjectBySlug } from "@/lib/projects"
import { ScrollReveal } from "@/components/scroll-reveal"

export function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({ slug: project.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-[700px] mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all projects
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-foreground text-balance">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <time className="font-mono text-sm text-muted-foreground">
                {project.date}
              </time>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              )}
            </div>
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
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <article className="text-muted-foreground leading-relaxed space-y-6 [&_h1]:text-2xl [&_h1]:font-medium [&_h1]:text-foreground [&_h1]:mt-10 [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:leading-relaxed [&_strong]:text-foreground [&_strong]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_table]:w-full [&_table]:border-collapse [&_th]:text-left [&_th]:text-foreground [&_th]:font-medium [&_th]:pb-2 [&_th]:border-b [&_th]:border-border [&_td]:py-2 [&_td]:border-b [&_td]:border-border/50 [&_img]:w-full [&_img]:rounded-lg [&_img]:my-8 [&_img]:border [&_img]:border-border">
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </article>
        </ScrollReveal>
      </div>
    </div>
  )
}
