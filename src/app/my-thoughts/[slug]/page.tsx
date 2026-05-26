import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import { ArrowLeft } from "lucide-react"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { ScrollReveal } from "@/components/scroll-reveal"

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-[700px] mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <Link
            href="/my-thoughts"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all posts
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-foreground text-balance">
              {post.title}
            </h1>
            <time className="font-mono text-sm text-muted-foreground">
              {post.date}
            </time>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <article className="text-muted-foreground leading-relaxed space-y-6 [&_h1]:text-2xl [&_h1]:font-medium [&_h1]:text-foreground [&_h1]:mt-10 [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:leading-relaxed [&_strong]:text-foreground [&_strong]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{post.content}</ReactMarkdown>
          </article>
        </ScrollReveal>
      </div>
    </div>
  )
}
