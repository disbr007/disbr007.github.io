import Link from "next/link";
import { ProjectCard } from "../../components/project-card";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <main className="section">
      <div className="section-heading section-heading--wide">
        <p className="eyebrow">Projects</p>
        <h1>Projects and experiments.</h1>
        <p>
          <Link href="/" className="text-link">
            Back to home
          </Link>
        </p>
      </div>

      <div className="project-grid project-grid--all">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
