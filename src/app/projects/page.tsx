import styles from "./page.module.css";

export default function Projects() {
  return (
    <article>
      <h1>Projects</h1>

      <div className={styles.project}>
        <h3>Agentic Vulnerability Detection Platform</h3>
        <p className={styles.tech}>
          Python, FastAPI, PostgreSQL, React, Docker, Frida
        </p>
        <ul>
          <li>
            Engineered a vulnerability scanning pipeline that automatically
            processed 50+ open-source Android apps, integrating static (Jadx,
            MobSF) and dynamic (Frida) analysis into Dockerized workflows
          </li>
          <li>
            Designed and deployed a PostgreSQL + FastAPI backend with React
            dashboards, enabling interactive reporting of 300+ detected
            vulnerabilities categorized by OWASP Mobile Top 10
          </li>
          <li>
            Implemented AI-assisted classification of vulnerability severity,
            achieving 92% accuracy compared to expert labels
          </li>
        </ul>
      </div>

      <div className={styles.project}>
        <h3>Synthetic Websites for Browser Agents</h3>
        <p className={styles.tech}>Next.js, React, TypeScript, Tailwind CSS, Docker</p>
        <ul>
          <li>
            Designed and shipped self-contained synthetic website environments
            for evaluating browser-based AI agents at Scale AI
          </li>
          <li>
            Instrumented full client-side event logging, scoped ground-truth
            criteria and verification checkpoints for traceable and scalable
            agent evaluation
          </li>
        </ul>
      </div>
    </article>
  );
}
