import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.name}>Jonathan Li</div>
      <div className={styles.bio}>Applied Mathematics &amp; CS at UC Berkeley</div>
      <ul className={styles.links}>
        <li>
          <a href="mailto:johnnylii@berkeley.edu">Email</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jonathanli1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jonathanli1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </aside>
  );
}
