"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <a
            href="https://github.com/jonathanli1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jonathanli1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:johnnylii@berkeley.edu">Email</a>
        </div>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Jonathan Li
        </p>
      </div>
    </footer>
  );
}
