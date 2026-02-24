import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import styles from "./page.module.css";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <article className={styles.page}>
      <p className={styles.prose}>
        Hey there, I&apos;m <strong>Jonathan</strong>. I&apos;m studying{" "}
        <strong>Applied Mathematics</strong> and <strong>Computer Science</strong>{" "}
        at <strong>UC Berkeley</strong>. I like building things at the
        intersection of <strong>[your interest]</strong> and{" "}
        <strong>[your interest]</strong>, and I&apos;m currently{" "}
        <strong>[what you&apos;re doing now]</strong>.
      </p>

      <p className={styles.prose}>
        This summer, I&apos;ll be at <strong>Apple</strong> working on the{" "}
        <strong>Vision Products Group</strong>. Previously, I worked at{" "}
        <strong>Scale AI</strong> and <strong>Airspace Technologies</strong>,
        and I&apos;m currently a researcher at{" "}
        <strong>Stanford AI Lab (SAIL)</strong> focused on{" "}
        <strong>[topic]</strong>.
      </p>

      <p className={styles.prose}>
        In my free time, I enjoy <strong>[hobby]</strong>,{" "}
        <strong>[hobby]</strong>, and <strong>[hobby]</strong>.
      </p>

      <p className={styles.prose}>
        I do some <strong>[activity]</strong> and <strong>[activity]</strong> as
        well — you can find that in{" "}
        <a href="/my-thoughts">my thoughts</a>.
      </p>

      {recentPosts.length > 0 && (
        <section className={styles.recent}>
          <h2>Recent thoughts</h2>
          <ul className={styles.postList}>
            {recentPosts.map((post) => (
              <li key={post.slug} className={styles.postItem}>
                <Link href={`/my-thoughts/${post.slug}`} className={styles.postLink}>
                  {post.title}
                </Link>
                <span className={styles.postDate}>{post.date}</span>
              </li>
            ))}
          </ul>
          <Link href="/my-thoughts" className={styles.viewAll}>
            All posts &rarr;
          </Link>
        </section>
      )}
    </article>
  );
}
