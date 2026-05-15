import React from "react";
import Project from "./Project";
import ProjectData, { PORTFOLIO_CATEGORIES } from "./ProjectData";

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <h1 className="page-title">Portfolio</h1>
      <p className="portfolio-intro text-muted">
        Each card may link to a public demo, a public repository, both, or neither when work is
        confidential or proprietary.
      </p>
      {PORTFOLIO_CATEGORIES.map((category) => {
        const projects = ProjectData.filter((p) => p.category === category);
        if (!projects.length) return null;
        return (
          <section key={category} className="portfolio-category-section mb-5">
            <h2 className="portfolio-category-heading h3 mb-3">{category}</h2>
            <Project projects={projects} />
          </section>
        );
      })}
    </div>
  );
}
