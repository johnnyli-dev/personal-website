import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div className="min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
        <ScrollReveal delay={0}>
          <h1 className="text-6xl md:text-7xl font-medium tracking-tight mb-16 text-foreground">
            Hey!
          </h1>
        </ScrollReveal>

        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
          <ScrollReveal delay={0.1}>
            <p>
              My name is <strong className="text-foreground font-medium">Jonathan Li</strong>,
              I&apos;m studying <strong className="text-foreground font-medium">Applied Mathematics</strong> and{" "}
              <strong className="text-foreground font-medium">Computer Science</strong> at{" "}
              <strong className="text-foreground font-medium">UC Berkeley</strong>. I like building
              things involving <strong className="text-foreground font-medium">Math, CS, and Data Science</strong>.
              I&apos;m currently super interested in Computational Mathematics, Abstract Algebra, and Mixed Reality.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p>
              This summer, I&apos;ll be at <strong className="text-foreground font-medium">Apple</strong> as
              a Software Engineering Intern working in the{" "}
              <strong className="text-foreground font-medium">Vision Products Group</strong>. Previously,
              I worked at <strong className="text-foreground font-medium">Scale AI</strong> as a Product
              Management Intern and <strong className="text-foreground font-medium">Airspace Technologies</strong>,
              as a Data Analyst Intern. Currently, I&apos;m a machine learning researcher at{" "}
              <strong className="text-foreground font-medium">Stanford AI Lab (SAIL)</strong> focusing on{" "}
              <strong className="text-foreground font-medium">AI Cybersecurity Benchmarks</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p>
              In my free time, I enjoy <strong className="text-foreground font-medium">playing volleyball</strong>,{" "}
              <strong className="text-foreground font-medium">golfing</strong>,{" "}
              <strong className="text-foreground font-medium">traveling</strong>, and{" "}
              <strong className="text-foreground font-medium">trying new foods</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p>
              I try to jot down my thoughts about a great variety of things. Feel free to{" "}
              <Link
                href="/my-thoughts"
                className="text-foreground font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                check them out
              </Link>{" "}
              if you are interested!
            </p>
          </ScrollReveal>
        </div>

        {recentPosts.length > 0 && (
          <ScrollReveal delay={0.5} className="mt-20">
            <div className="border-t border-border pt-12">
              <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-8">
                Recent Thoughts
              </h2>

              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/my-thoughts/${post.slug}`}
                    className="group flex items-baseline justify-between py-3 border-b border-border/50 hover:border-border transition-colors"
                  >
                    <span className="text-foreground group-hover:opacity-70 transition-opacity">
                      {post.title}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground ml-4 shrink-0">
                      {post.date}
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                href="/my-thoughts"
                className="inline-flex items-center gap-2 mt-8 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors group"
              >
                All posts
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  )
}
