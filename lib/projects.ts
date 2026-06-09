export type Project = {
  slug: string;
  title: string;
  category: string;
  stage: string;
  summary: string;
  overview: string[];
  focus: string[];
  stack: string[];
  metrics: { value: string; label: string }[];
  accent: string;
  tint: string;
  pin: { x: number; y: number };
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "planet-tools",
    title: "Planet Tools",
    category: "GIS utilities",
    stage: "Legacy work",
    summary:
      "Geospatial prototypes, map experiments, and small workflow helpers.",
    overview: [
      "A set of spatial tools and experiments covering map products, remote sensing workflows, and utility ideas that do not fit a single app category.",
      "Useful as a place to collect smaller GIS prototypes and tooling ideas.",
    ],
    focus: ["Map prototypes", "Workflow design", "Remote sensing"],
    stack: ["GIS workflows", "Spatial analysis", "Automation"],
    metrics: [
      { value: "1", label: "starting point" },
      { value: "3", label: "core themes" },
      { value: "∞", label: "small experiments" },
    ],
    accent: "#a8a8a8",
    tint: "#3f3f3f",
    pin: { x: 28, y: 36 },
  },
  {
    slug: "activity-viewer",
    title: "Activity Viewer",
    category: "Web app",
    stage: "Active",
    summary:
      "A 3D terrain visualization app that renders DEMs and overlays GPS activity tracks.",
    overview: [
      "Activity Viewer combines three related ideas: reading terrain data from GeoTIFF DEM files, transforming GPS tracks into the same spatial frame, and rendering both in a 3D scene that is easy to explore.",
      "It shows spatial data handling, terrain visualization, and interface work in one place.",
    ],
    focus: ["Terrain rendering", "Track draping", "Charting"],
    stack: ["React", "Three.js", "GeoTIFF", "GPX", "Zustand"],
    metrics: [
      { value: "3D", label: "terrain view" },
      { value: "GPX", label: "track import" },
      { value: "DEM", label: "elevation data" },
    ],
    accent: "#b5b5b5",
    tint: "#343434",
    pin: { x: 58, y: 31 },
    repoUrl: "https://github.com/disbr007/activity-viewer",
  },
  {
    slug: "min-wx",
    title: "MinWx",
    category: "Android app",
    stage: "Active",
    summary:
      "A minimal weather app for older Android hardware, focused on fast forecasts, favorites, and a clean information layout.",
    overview: [
      "MinWx is intentionally small. It targets a constrained Android device and keeps the product focused on what matters most: current weather, hourly forecasts, saved places, and readable data presentation.",
      "It shows that the same developer can ship useful spatially-informed tooling on mobile hardware too.",
    ],
    focus: ["Forecast UI", "Local preferences", "Older devices"],
    stack: ["Kotlin", "Android Views", "Open-Meteo", "SharedPreferences"],
    metrics: [
      { value: "API 23", label: "minimum device target" },
      { value: "24h", label: "hourly forecast" },
      { value: "Saved", label: "favorite locations" },
    ],
    accent: "#d0d0d0",
    tint: "#454545",
    pin: { x: 71, y: 68 },
    repoUrl: "https://github.com/disbr007/min-wx",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects;
