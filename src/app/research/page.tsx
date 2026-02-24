import styles from "./page.module.css";

export default function Experience() {
  return (
    <article>
      <h1>Experience</h1>

      <div className={styles.entry}>
        <div className={styles.entryHeader}>
          <h3>Apple — Vision Products Group</h3>
          <span className={styles.date}>Summer 2026</span>
        </div>
        <p className={styles.role}>Incoming SWE Intern — Sunnyvale, CA</p>
      </div>

      <div className={styles.entry}>
        <div className={styles.entryHeader}>
          <h3>Stanford AI Lab (SAIL)</h3>
          <span className={styles.date}>July 2025 – Present</span>
        </div>
        <p className={styles.role}>Undergraduate Researcher — Berkeley, CA</p>
        <ul>
          <li>
            Building evaluation infrastructure for cybersecurity agents using
            containerized Android Emulator/ADB + Frida environments with typed
            event/trace schemas
          </li>
          <li>
            Built self-contained Docker stacks with verifiable Python probes,
            pytest runners, and CI hooks for scalable evaluation pipelines
          </li>
          <li>
            Partnered with researchers to refine frameworks and produce
            Pandas/Seaborn analysis notebooks
          </li>
        </ul>
      </div>

      <div className={styles.entry}>
        <div className={styles.entryHeader}>
          <h3>Scale AI</h3>
          <span className={styles.date}>June – Aug 2025</span>
        </div>
        <p className={styles.role}>
          Strategic Product Management Intern — San Francisco, CA
        </p>
        <ul>
          <li>
            Drove $30M/quarter in client model support by building NumPy/Pandas
            pipelines to analyze failure cohorts, producing Seaborn visuals that
            shaped client roadmaps
          </li>
          <li>
            Increased model performance by up to 22% for a key client by
            diagnosing subject-area weaknesses and identifying targeted dataset
            improvements
          </li>
          <li>
            Designed and shipped Synthetic Websites in Next.js + TypeScript with
            Tailwind CSS, instrumented with full client-side event logging and
            packaged via Docker
          </li>
        </ul>
      </div>

      <div className={styles.entry}>
        <div className={styles.entryHeader}>
          <h3>Airspace Technologies</h3>
          <span className={styles.date}>May – Aug 2024</span>
        </div>
        <p className={styles.role}>Data Analytics Intern — Carlsbad, CA</p>
        <ul>
          <li>
            Developed and optimized SQL algorithms for freight shipping cost
            estimation, driving $400K in projected annual savings
          </li>
          <li>
            Engineered an automated system leveraging OpenAI function calling to
            incorporate client preferences
          </li>
          <li>
            Automated ingestion and revision of 10M+ rows into Snowflake,
            streamlining data integration
          </li>
        </ul>
      </div>

      <hr />

      <h2>Education</h2>
      <div className={styles.entry}>
        <div className={styles.entryHeader}>
          <h3>University of California, Berkeley</h3>
          <span className={styles.date}>Expected June 2027</span>
        </div>
        <p className={styles.role}>BA Applied Mathematics and Computer Science</p>
        <p>
          Relevant coursework: Data Structures &amp; Algorithms, AI, Real
          Analysis, Abstract Algebra
        </p>
      </div>
    </article>
  );
}
