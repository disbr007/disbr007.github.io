import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "../../../components/project-visual";
import { getProject, projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section project-detail">
      <div className="section-heading section-heading--wide">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>

      <div className="project-detail__hero">
        {project.slug === "planet-tools" ? (
          <div className="project-detail__image-card">
            <Image
              src="/planet_thumb.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 1080px) 100vw, 70vw"
              className="project-detail__image"
              priority
            />
            <div className="project-detail__image-overlay" aria-hidden="true" />
          </div>
        ) : (
          <ProjectVisual project={project} />
        )}
        <aside className="project-detail__panel">
          <div className="project-detail__meta">
            <div>
              <span>Stage</span>
              <strong>{project.stage}</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>{project.focus.join(" · ")}</strong>
            </div>
            <div>
              <span>Stack</span>
              <strong>{project.stack.join(" · ")}</strong>
            </div>
          </div>
          <div className="button-row button-row--stacked">
            <Link href="/projects" className="button button--ghost">
              Back to all projects
            </Link>
            {project.repoUrl ? (
              <a className="button button--primary" href={project.repoUrl} target="_blank" rel="noreferrer">
                View repo
              </a>
            ) : null}
          </div>
        </aside>
      </div>

      <div className="project-detail__body">
        <section className="prose-card">
          <h2>Overview</h2>
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="prose-card">
          <h2>Highlights</h2>
          <div className="metric-grid">
            {project.metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="chip-row">
            {project.focus.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
