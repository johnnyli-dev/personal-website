import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FileText, ExternalLink } from "lucide-react"

export const metadata = {
  title: "CV | Jonathan Li",
  description: "Curriculum Vitae of Jonathan Li",
}

export default function CVPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-foreground">
            CV
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="border border-border rounded-lg p-8 bg-card/50">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <FileText className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-foreground mb-2">
                  Jonathan Li — Curriculum Vitae
                </h2>
                <p className="text-muted-foreground mb-6">
                  My full CV including education, experience, research, and skills.
                </p>
                <Link
                  href="/docs/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  View PDF
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-sm text-muted-foreground text-center">
            For a detailed overview of my background, visit the{" "}
            <Link href="/background" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">
              Background
            </Link>{" "}
            page.
          </p>
        </ScrollReveal>
      </div>
    </div>
  )
}
