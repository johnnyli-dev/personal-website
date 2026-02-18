import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function MyThoughts() {
  const posts = getAllPosts();

  return (
    <article>
      <h1>My Thoughts</h1>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li key={post.slug} style={{ marginBottom: "1.5rem" }}>
              <Link href={`/my-thoughts/${post.slug}`}>
                <strong>{post.title}</strong>
              </Link>
              <br />
              <small style={{ color: "var(--color-text-secondary)" }}>
                {post.date}
              </small>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
