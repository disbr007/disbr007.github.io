import Image from "next/image";
import headshot from "../assets/images/headshot_1000.png";
import { ProjectCard } from "../components/project-card";
import { featuredProjects } from "../lib/projects";
import { education, experience, skills, summary } from "../lib/resume";
import { site } from "../lib/site";

export default function HomePage() {
  return (
    <>
      <main className="resume-page resume-page--home">
        <aside className="resume-sidebar">
          <section className="resume-sidebar__portrait">
            <Image
              src={headshot}
              alt="Jeff Disbrow portrait"
              className="resume-hero__image"
              priority
              sizes="92px"
            />
            <div>
              <p className="eyebrow">Jeff Disbrow</p>
              <p className="resume-sidebar__meta">{site.email}</p>
            </div>
          </section>

          <section className="resume-pane">
            <p className="eyebrow">Skills</p>
            <div className="skill-grid skill-grid--sidebar">
              {skills.map((group) => (
                <article className="resume-mini-pane" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="chip-row">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>

        <div className="resume-main">
          <section className="resume-pane resume-summary">
            <p className="eyebrow">Summary</p>
            <p className="resume-hero__summary">{summary}</p>
          </section>

        <section className="resume-pane" id="experience">
          <p className="eyebrow">Experience</p>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                  <div className="timeline-item__meta">
                    <h3>{item.company}</h3>
                    <p>{item.role}</p>
                  </div>
                  <div className="timeline-item__dates">{item.dates}</div>
                  <ul className="bullet-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

        <section className="resume-pane" id="education">
          <p className="eyebrow">Education</p>

          <div className="education-grid education-grid--stacked">
            {education.map((item) => (
              <article className="resume-card" key={`${item.school}-${item.title}`}>
                  <div className="resume-card__head">
                    <div>
                      <h3>{item.school}</h3>
                      <p>{item.title}</p>
                    </div>
                    <span>{item.dates}</span>
                  </div>
                  {item.detail ? <p>{item.detail}</p> : null}
                </article>
              ))}
            </div>
          </section>

        <section className="resume-pane" id="projects">
          <p className="eyebrow">Projects</p>

          <div className="project-grid project-grid--resume">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <nav className="floating-contact" aria-label="Contact links">
        <a className="floating-contact__link" href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a className="floating-contact__link" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a className="floating-contact__link" href={site.resume} target="_blank" rel="noreferrer" aria-label="Resume">
          <ResumeIcon />
        </a>
        <a className="floating-contact__link" href={`mailto:${site.email}`} aria-label="Email">
          <MailIcon />
        </a>
      </nav>
    </>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.35 1.1 2.92.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.7-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.56 1.41.21 2.46.11 2.72.64.71 1.02 1.61 1.02 2.7 0 3.85-2.34 4.7-4.57 4.94.36.31.68.93.68 1.88v2.79c0 .27.18.59.69.49A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.94 6.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.56 8.13h2.75V20H5.56V8.13Zm4.34 0h2.63v1.62h.04c.37-.7 1.27-1.44 2.61-1.44 2.79 0 3.3 1.84 3.3 4.24V20h-2.74v-6.06c0-1.45-.03-3.31-2.02-3.31-2.03 0-2.34 1.58-2.34 3.21V20H9.9V8.13Z"
      />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 2h8l4 4v16H6V2Zm8 1.5V7h3.5L14 3.5ZM8 10.25h8v1.5H8v-1.5Zm0 3.5h8v1.5H8v-1.5Zm0 3.5h5v1.5H8v-1.5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 7.25L5.5 7.75V18h13V7.75L12 12.25ZM12 10.5 18.75 6H5.25L12 10.5Z"
      />
    </svg>
  );
}
