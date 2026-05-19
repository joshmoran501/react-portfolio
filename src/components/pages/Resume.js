import React from "react";
import { Link } from "react-router-dom";
import ResumePDF from "../../assets/documents/Joshua-Moran.pdf";
import DownloadIcon from "../../assets/images/download-solid-full.svg";

const SKILL_GROUPS = [
  {
    id: "languages",
    title: "Languages",
    icon: "code",
    items: ["Java", "JavaScript", "TypeScript", "PHP", "Python", "R", "SQL"],
  },
  {
    id: "frameworks",
    title: "Frameworks & libraries",
    icon: "layers",
    items: ["Laravel", "React"],
  },
  {
    id: "tools",
    title: "Tools & IDEs",
    icon: "wrench",
    items: ["IntelliJ IDEA", "Android Studio", "VS Code"],
  },
  {
    id: "version-control",
    title: "Version control",
    icon: "branch",
    items: ["Git", "GitHub"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    items: ["MySQL", "Relational design"],
  },
  {
    id: "practices",
    title: "Development practices",
    icon: "workflow",
    items: ["Agile", "Scrum", "SDLC", "Test-driven development"],
  },
  {
    id: "delivery",
    title: "Technologies & delivery",
    icon: "rocket",
    items: ["REST APIs", "SaaS applications", "CI/CD concepts", "AI-assisted development"],
  },
];

function SkillIcon({ name }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: 20,
    height: 20,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };
  switch (name) {
    case "code":
      return (
        <svg {...common}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "branch":
      return (
        <svg {...common}>
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M6 9v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Resume() {
  return (
    <div className="resume-page">
      <section className="resume-hero" aria-labelledby="resume-hero-title">
        <div className="resume-hero-content">
          <p className="hero-eyebrow">Resume · Technical snapshot</p>
          <h1 id="resume-hero-title" className="resume-hero-title">
            Technical skills
          </h1>
          <p className="resume-hero-tagline">
            A scannable overview of the stacks, tools, and practices I work with.
            Want the long version? Grab the PDF for full experience and education.
          </p>
        </div>
        <div className="resume-hero-actions">
          <a
            className="download-btn"
            href={ResumePDF}
            download="Joshua-Moran.pdf"
            role="button"
          >
            <img
              src={DownloadIcon}
              alt=""
              aria-hidden="true"
              className="download-btn-icon"
            />
            Download Resume (PDF)
          </a>
        </div>
      </section>

      <section className="skills-grid" aria-label="Technical skills">
        {SKILL_GROUPS.map((group) => (
          <article key={group.id} className="skill-card">
            <header className="skill-card-head">
              <span className="skill-card-icon" aria-hidden="true">
                <SkillIcon name={group.icon} />
              </span>
              <h2 className="skill-card-title">{group.title}</h2>
            </header>
            <ul className="skill-chips">
              {group.items.map((item) => (
                <li key={item} className="skill-chip">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <aside className="resume-cta" aria-label="More about Joshua">
        <p className="resume-cta-text">
          Want to discuss a role or project?
        </p>
        <Link to="/contact" className="hero-btn hero-btn-secondary">
          Get in touch
        </Link>
      </aside>
    </div>
  );
}
