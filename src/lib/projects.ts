import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export interface Project {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  content: string;
}

export function getAllProjects(): Project[] {
  const filenames = fs.readdirSync(projectsDirectory);
  const projects = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: (data.description as string) || "",
        tags: (data.tags as string[]) || [],
        github: data.github as string | undefined,
        link: data.link as string | undefined,
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  const filePath = path.join(projectsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: (data.description as string) || "",
    tags: (data.tags as string[]) || [],
    github: data.github as string | undefined,
    link: data.link as string | undefined,
    content,
  };
}
