import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
        {post.date}
      </p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
