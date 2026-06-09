import Image from "next/image";
import Link from "next/link";
import headshot from "../../assets/images/headshot_1000.png";
import { site } from "../../lib/site";

const bullets = [
  "Led architecture decisions, data migrations, and reliability work on production systems.",
  "Built GIS ingestion and ETL pipelines that reduced manual data processing time.",
  "Created imagery, DEM, and cartographic products from satellite data and field workflows.",
];

export default function AboutPage() {
  return (
    <main className="section about-page">
      <div className="about-grid">
        <div className="about-card about-card--portrait">
          <Image src={headshot} alt="Jeff Disbrow portrait" className="about-card__image" />
          <p className="portrait-card__label">About</p>
          <h1>{site.name}</h1>
          <p>{site.role}</p>
        </div>

        <div className="about-card">
          <p className="eyebrow">Background</p>
          <h2>Software engineering with a geospatial background.</h2>
          <p>
            I work across the full development lifecycle: product strategy, architecture,
            implementation, deployment, and monitoring. My geospatial background helps me turn
            complex environmental data into usable software.
          </p>
          <p>
            The work here spans web applications, data pipelines, remote sensing, and small tools.
          </p>
          <ul className="bullet-list">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p>
            <Link href="/projects" className="text-link">
              Explore the projects
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
