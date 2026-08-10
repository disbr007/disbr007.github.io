export const summary =
  "Software Engineer focused on building the software and data systems needed to tackle climate change. I lead and contribute across the full development lifecycle, from product strategy and architecture through deployment and monitoring. With a geospatial background, I specialize in distilling complex environmental datasets into relevant, usable information.";

export const experience = [
  {
    role: "Staff Software Engineer",
    company: "PVcase",
    dates: "Mar 2025 - Present",
    bullets: [
      "Led the creation, review, and approval of architectural decisions via ADRs.",
      "Developed strategy and tooling for application data migrations.",
      "Refactored a legacy task processing service to worker processes pulling from NATS.",
      "Partnered on KPIs and SLOs to improve system reliability and reduce incidents.",
    ],
  },
  {
    role: "Software Engineer | Engineering Manager",
    company: "PVcase",
    dates: "Jan 2021 - Mar 2025",
    bullets: [
      "Designed and built an ETL pipeline and backend service for third-party RTO/ISO capacity data.",
      "Built a GIS data ingestion service that reduced manual data processing time by 70%.",
      "Led a full-stack engineering and QA team across deployment strategy and monitoring.",
      "Helped expand technical product coverage into Europe under an aggressive timeline.",
    ],
  },
  {
    role: "Graduate Research Assistant",
    company: "Polar Geospatial Center",
    dates: "Oct 2018 - Jan 2021",
    bullets: [
      "Built a pipeline for selecting, ordering, downloading, and archiving satellite imagery.",
      "Developed imagery selection logic for Arctic coastline mapping using sea-ice data.",
      "Created orthorectified, pansharpened, DEM, and cartographic products from satellite imagery.",
    ],
  },
];

export const education = [
  {
    title: "M.S. Natural Resources Science",
    school: "University of Minnesota",
    dates: "Dec 2023",
    detail:
      "Assessment, Monitoring, and Geospatial Analysis Track. Thesis: Retrogressive Thaw Slump Classification Using High Resolution Satellite Imagery and Stereo-Derived Digital Elevation Models.",
  },
  {
    title: "B.S. Parks, Recreation, and Tourism",
    school: "University of Vermont",
    dates: "Dec 2012",
    detail: "",
  },
];

export const skills = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "SQL", "Bash"],
  },
  {
    label: "Databases",
    items: ["Postgres", "Firebase", "PostGIS", "DynamoDB"],
  },
  {
    label: "Messaging / Events",
    items: ["NATS", "Firebase Queue", "SQS/SNS"],
  },
  {
    label: "DevOps + Cloud",
    items: ["Docker", "Kubernetes", "EC2", "RDS", "EKS", "S3", "ECR", "CloudFront", "GitHub Actions", "Grafana"],
  },
];
