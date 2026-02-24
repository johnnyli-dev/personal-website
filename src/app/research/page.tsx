import styles from "./page.module.css";

export default function Experience() {
  return (
    <article>
      <h1 className={styles.pageTitle}>Background</h1>

      <div className={styles.timeline}>
        <div className={`${styles.timelineItem} ${styles.sectionLabel}`}>
          <div className={styles.timelineNode} />
          <div className={styles.timelineContent}>
            <h2>Education</h2>
          </div>
        </div>

        <div className={`${styles.timelineItem} ${styles.timelineEntry}`}>
          <div className={styles.timelineNode} />
          <div className={styles.timelineContent}>
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
        </div>

        <div className={styles.timelineDivider}>
          <div className={styles.dividerLine} />
        </div>

        <div className={`${styles.timelineItem} ${styles.sectionLabel}`}>
          <div className={styles.timelineNode} />
          <div className={styles.timelineContent}>
            <h2>Experience</h2>
          </div>
        </div>

        <div className={`${styles.timelineItem} ${styles.timelineEntry}`}>
          <div className={styles.timelineNode} />
          <div className={styles.timelineContent}>
            <div className={styles.entryHeader}>
              <h3>Apple — Vision Products Group</h3>
              <span className={styles.date}>Summer 2026</span>
            </div>
            <p className={styles.role}>Incoming SWE Intern — Sunnyvale, CA</p>
          </div>
        </div>

        <div className={`${styles.timelineItem} ${styles.timelineEntry}`}>
          <div className={styles.timelineNode} />
          <div className={styles.timelineContent}>
            <div className={styles.entryHeader}>
              <h3>Stanford AI Lab (SAIL)</h3>
              <span className={styles.date}>July 2025 – Present</span>
            </div>
            <p className={styles.role}>Undergraduate Researcher — Berkeley, CA</p>
            <p>
              Building evaluation infrastructure for cybersecurity agents —
              containerized environments, Docker pipelines, and data analysis.
            </p>
          </div>
        </div>

        <div className={`${styles.timelineItem} ${styles.timelineEntry}`}>
          <div className={styles.timelineNode} />
          <div className={styles.timelineContent}>
            <div className={styles.entryHeader}>
              <h3>Scale AI</h3>
              <span className={styles.date}>June – Aug 2025</span>
            </div>
            <p className={styles.role}>
              Strategic Product Management Intern — San Francisco, CA
            </p>
            <p>
              Analyzed model performance across client cohorts and shipped a
              synthetic website generation tool.
            </p>
          </div>
        </div>

        <div className={`${styles.timelineItem} ${styles.timelineEntry}`}>
          <div className={styles.timelineNode} />
          <div className={styles.timelineContent}>
            <div className={styles.entryHeader}>
              <h3>Airspace Technologies</h3>
              <span className={styles.date}>May – Aug 2024</span>
            </div>
            <p className={styles.role}>Data Analytics Intern — Carlsbad, CA</p>
            <p>
              Built freight cost estimation algorithms and automated data pipelines.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
