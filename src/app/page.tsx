import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import styles from "./page.module.css";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <article className={styles.page}>
      <p className={styles.greeting}>Hey!</p>

      <p className={styles.prose}>
        My name is <strong>Jonathan Li</strong>, I&apos;m studying{" "}
        <strong>Applied Mathematics</strong> and <strong>Computer Science</strong>{" "}
        at <strong>UC Berkeley</strong>. I like building things involving <strong>Math, CS, and Datascience</strong>
        . I&apos;m currently{" "} super interested in Computational Mathematics, Abstract Algebra, and Mixed Reality.
        
      </p>

      <p className={styles.prose}>
        This summer, I&apos;ll be at <strong>Apple</strong> as a Software Enginering Intern working in the{" "}
        <strong>Vision Products Group</strong>. Previously, I worked at{" "}
        <strong>Scale AI</strong> as a Product Managment Intern and <strong>Airspace Technologies</strong>,
        as a Data Analyst Intern. Currently, I'm a machine learning researcher at{" "}
        <strong>Stanford AI Lab (SAIL)</strong> focusing on{" "}
        <strong>AI Cybersecurity Benchmarks</strong>.
      </p>

      <p className={styles.prose}>
        In my free time, I enjoy <strong>playing volleyball</strong>,{" "}
        <strong>golfing</strong>, <strong>traveling</strong>, and <strong>trying new foods</strong>.
      </p>

      <p className={styles.prose}>
        I try to jot down <a href="/my-thoughts">my thoughts</a> about a great variety of things. Feel free to check them out if you are interested!
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
