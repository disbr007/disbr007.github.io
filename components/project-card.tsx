import Link from "next/link";
import type { Project } from "../lib/projects";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className="project-card__link">
        <ProjectVisual project={project} compact />
        <div className="project-card__body">
          <div className="project-card__meta">
            <span>{project.category}</span>
            <span>{project.stage}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="chip-row" aria-label={`${project.title} focus areas`}>
            {project.focus.slice(0, 3).map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
