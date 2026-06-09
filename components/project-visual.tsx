import Image from "next/image";
import type { ReactNode } from "react";
import type { Project } from "../lib/projects";

export function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const uid = project.slug.replace(/[^a-z0-9]+/gi, "-");
  const width = compact ? 640 : 960;
  const height = compact ? 380 : 560;

  const variants: Record<
    string,
    {
      contour: string[];
      trace: string[];
      extras: ReactNode;
    }
  > = {
    "planet-tools": {
        contour: [
          "M60 290 C140 160, 240 140, 330 208 S520 330, 620 198 S790 120, 880 220",
          "M74 330 C176 214, 248 190, 338 250 S512 382, 634 262 S782 182, 900 296",
          "M46 382 C154 286, 272 260, 360 316 S536 438, 660 328 S790 250, 920 354",
        ],
        trace: [
          "M120 180 L190 140 L260 168 L330 124 L398 154 L468 110 L544 136 L624 86",
          "M146 396 L214 348 L300 360 L388 310 L466 332 L548 286 L636 304 L720 250",
        ],
        extras: (
          <>
            <circle cx="260" cy="158" r="8" fill={project.accent} opacity="0.65" />
            <circle cx="544" cy="136" r="7" fill={project.accent} opacity="0.5" />
            <circle cx="720" cy="250" r="8" fill={project.accent} opacity="0.6" />
          </>
        ),
      },
      "activity-viewer": {
        contour: [
          "M52 390 C132 282, 200 272, 274 318 S424 430, 510 312 S694 146, 802 218 S900 342, 934 276",
          "M52 336 C150 228, 244 220, 320 262 S490 360, 582 246 S760 118, 858 188 S922 286, 952 224",
          "M66 254 C160 154, 258 148, 334 196 S486 300, 576 190 S732 66, 836 132 S930 230, 956 170",
        ],
        trace: [
          "M92 348 L150 322 L212 290 L284 262 L352 238 L422 196 L500 180 L586 142 L676 118 L762 98",
        ],
        extras: (
          <>
            <path
              d="M110 430 L168 392 L238 402 L296 358 L362 330 L436 264 L518 248 L598 210 L690 180 L778 126"
              fill="none"
              stroke={project.accent}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.72"
            />
            <circle cx="296" cy="358" r="10" fill={project.accent} opacity="0.55" />
            <circle cx="598" cy="210" r="10" fill={project.accent} opacity="0.5" />
            <circle cx="778" cy="126" r="10" fill={project.accent} opacity="0.45" />
          </>
        ),
      },
      "min-wx": {
        contour: [
          "M118 116 C208 72, 300 72, 386 118 S556 210, 650 156 S808 78, 894 138",
          "M110 202 C194 152, 286 152, 366 194 S544 280, 630 224 S780 150, 882 202",
          "M122 294 C218 246, 306 242, 392 282 S556 364, 642 306 S800 234, 900 282",
          "M136 390 C228 342, 324 332, 410 374 S576 458, 662 404 S804 338, 912 386",
        ],
        trace: [
          "M160 112 C248 152, 336 88, 422 130 S598 204, 688 160 S792 122, 860 144",
        ],
        extras: (
          <>
            <circle cx="256" cy="170" r="64" fill="none" stroke={project.accent} strokeWidth="3" opacity="0.5" />
            <circle cx="256" cy="170" r="36" fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="2" />
            <circle cx="256" cy="170" r="12" fill={project.accent} opacity="0.7" />
            <path
              d="M606 294 h54 a12 12 0 0 1 12 12 v34 a12 12 0 0 1 -12 12 h-90 a12 12 0 0 1 -12 -12 v-22 a24 24 0 0 1 24 -24 h10 z"
              fill={project.accent}
              opacity="0.55"
            />
            <g fill={project.accent} opacity="0.5">
              <rect x="726" y="184" width="16" height="78" rx="8" />
              <rect x="758" y="222" width="16" height="40" rx="8" />
              <rect x="790" y="164" width="16" height="98" rx="8" />
              <rect x="822" y="200" width="16" height="62" rx="8" />
            </g>
          </>
        ),
    },
  };

  const variant = variants[project.slug] ?? variants["planet-tools"];

  if (project.slug === "planet-tools") {
    return (
      <div className={`project-visual project-visual--image${compact ? " project-visual--compact" : ""}`}>
        <Image
          src="/planet_thumb.png"
          alt=""
          aria-hidden="true"
          fill
          sizes={compact ? "640px" : "960px"}
          className="project-visual__image"
          priority={compact}
        />
        <div className="project-visual__overlay" aria-hidden="true" />
        <div className="project-visual__label">
          <span>{project.category.toUpperCase()}</span>
          <strong>{project.title}</strong>
        </div>
      </div>
    );
  }

  return (
    <svg
      className={`project-visual${compact ? " project-visual--compact" : ""}`}
      viewBox={`0 0 ${width} ${height}`}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={project.tint} />
          <stop offset="100%" stopColor="#1d1d1d" />
        </linearGradient>
        <linearGradient id={`${uid}-stroke`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={project.accent} stopOpacity="0.18" />
          <stop offset="50%" stopColor="#f4f4f4" stopOpacity="0.72" />
          <stop offset="100%" stopColor={project.accent} stopOpacity="0.28" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${uid}-bg)`} rx="28" />
      <g fill="none" stroke={`url(#${uid}-stroke)`} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        {variant.contour.map((path) => (
          <path key={path} d={path} opacity="0.7" />
        ))}
        {variant.trace.map((path) => (
          <path key={path} d={path} stroke={project.accent} opacity="0.8" />
        ))}
      </g>
      {variant.extras}
      <g fill="rgba(255,255,255,0.72)" fontSize={compact ? "20" : "26"} fontFamily="inherit">
        <text x="42" y={compact ? "56" : "74"} letterSpacing="2">
          {project.category.toUpperCase()}
        </text>
        <text x="42" y={compact ? height - 28 : height - 40} opacity="0.75">
          {project.title}
        </text>
      </g>
    </svg>
  );
}
