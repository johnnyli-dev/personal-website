import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata = {
  title: "Projects | Jonathan Li",
  description: "Projects and work by Jonathan Li",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-foreground">
            Projects
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center justify-center py-24 border border-border rounded-lg bg-card/50">
            <p className="text-2xl font-medium text-foreground mb-2">
              Work in Progress
            </p>
            <p className="text-muted-foreground text-center max-w-md">
              I&apos;m currently working on documenting my projects. Check back soon for updates on what I&apos;ve been building.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
