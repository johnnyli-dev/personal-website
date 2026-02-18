export default function Projects() {
  return (
    <article>
      <h1>Projects</h1>

      <h2>Agentic Vulnerability Detection Platform</h2>
      <p>
        Engineered a vulnerability scanning pipeline that automatically
        processed 50+ open-source Android apps, integrating static (Jadx, MobSF)
        and dynamic (Frida) analysis into Dockerized workflows. Designed and
        deployed a PostgreSQL + FastAPI backend with React dashboards, enabling
        interactive reporting of 300+ detected vulnerabilities categorized by
        OWASP Mobile Top 10. Implemented AI-assisted classification of
        vulnerability severity, achieving 92% accuracy compared to expert labels.
      </p>
    </article>
  );
}
