import styles from "./timeline.module.css";

export const metadata = {
  title: "Background | Jonathan Li",
  description: "Education, experience, and research background of Jonathan Li",
}

export default function BackgroundPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
        <h1 className={`text-4xl md:text-5xl font-medium tracking-tight text-foreground ${styles.pageTitle}`}>
          Background
        </h1>

        <div className={styles.timeline}>
          <div className={`${styles.timelineItem} ${styles.sectionLabel}`}>
            <div className={styles.timelineNode} />
            <div className={styles.timelineContent}>
              <h2 className="text-lg font-medium text-foreground">Education</h2>
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.timelineEntry}`}>
            <div className={styles.timelineNode} />
            <div className={styles.timelineContent}>
              <div className={styles.entryHeader}>
                <h3 className="text-base font-medium text-foreground">University of California, Berkeley</h3>
                <span className={`font-mono ${styles.date}`}>Exp: June 2027</span>
              </div>
              <p className={styles.role}>BA Applied Mathematics and Computer Science</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
              <h2 className="text-lg font-medium text-foreground">Experience</h2>
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.timelineEntry}`}>
            <div className={styles.timelineNode} />
            <div className={styles.timelineContent}>
              <div className={styles.entryHeader}>
                <h3 className="text-base font-medium text-foreground">Apple</h3>
                <span className={`font-mono ${styles.date}`}>Summer 2026</span>
              </div>
              <p className={styles.role}>Incoming SWE Intern</p>
              <p className="text-muted-foreground text-sm leading-relaxed">Vision Products Group</p>
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.timelineEntry}`}>
            <div className={styles.timelineNode} />
            <div className={styles.timelineContent}>
              <div className={styles.entryHeader}>
                <h3 className="text-base font-medium text-foreground">Scale AI</h3>
                <span className={`font-mono ${styles.date}`}>June – Aug 2025</span>
              </div>
              <p className={styles.role}>Strategic Product Management Intern</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Analyzed model performance across client cohorts and shipped a
                synthetic website generation tool.
              </p>
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.timelineEntry}`}>
            <div className={styles.timelineNode} />
            <div className={styles.timelineContent}>
              <div className={styles.entryHeader}>
                <h3 className="text-base font-medium text-foreground">Airspace Technologies</h3>
                <span className={`font-mono ${styles.date}`}>May – Aug 2024</span>
              </div>
              <p className={styles.role}>Data Analytics Intern</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Built freight cost estimation algorithms and automated data pipelines.
              </p>
            </div>
          </div>

          <div className={styles.timelineDivider}>
            <div className={styles.dividerLine} />
          </div>

          <div className={`${styles.timelineItem} ${styles.sectionLabel}`}>
            <div className={styles.timelineNode} />
            <div className={styles.timelineContent}>
              <h2 className="text-lg font-medium text-foreground">Research</h2>
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.timelineEntry}`}>
            <div className={styles.timelineNode} />
            <div className={styles.timelineContent}>
              <div className={styles.entryHeader}>
                <h3 className="text-base font-medium text-foreground">Stanford AI Lab (SAIL)</h3>
                <span className={`font-mono ${styles.date}`}>July 2025 – Present</span>
              </div>
              <p className={styles.role}>Undergraduate Researcher</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building evaluation infrastructure for cybersecurity agents —
                containerized environments, Docker pipelines, and data analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
