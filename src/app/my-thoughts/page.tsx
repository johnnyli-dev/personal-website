import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata = {
  title: "My Thoughts | Jonathan Li",
  description: "Blog posts and thoughts by Jonathan Li",
}

export default function MyThoughtsPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-foreground">
            My Thoughts
          </h1>
          <p className="text-muted-foreground text-lg mb-16">
            A collection of writings on math, tech, research, and life.
          </p>
        </ScrollReveal>

        <div className="space-y-1">
          {posts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={0.05 * (index + 1)}>
              <Link
                href={`/my-thoughts/${post.slug}`}
                className="group block py-6 border-b border-border/50 hover:border-border transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h2 className="text-xl font-medium text-foreground group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h2>
                  <span className="font-mono text-sm text-muted-foreground shrink-0">
                    {post.date}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
