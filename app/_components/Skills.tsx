"use client";

import { memo } from "react";

const SKILL_GROUPS = [
  {
    title: "Front-End Development",
    description:
      "Building responsive, accessible interfaces with modern React patterns and TypeScript for type safety.",
    items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "JSX"],
  },
  {
    title: "Styling & UI Frameworks",
    description:
      "Crafting beautiful designs with utility-first CSS and popular component frameworks.",
    items: ["TailwindCSS", "Bootstrap", "Styled Components", "CSS Grid", "Flexbox", "Responsive Design"],
  },
  {
    title: "State Management & Hooks",
    description:
      "Managing complex application state and side effects with modern React paradigms.",
    items: ["Redux", "Context API", "React Hooks", "Custom Hooks", "useEffect", "useReducer"],
  },
  {
    title: "Full-Stack Foundations",
    description:
      "Building beyond the frontend with Node.js, Express, and database fundamentals.",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "Socket.io"],
  },
  {
    title: "Developer Tools & Workflow",
    description:
      "Leveraging modern tooling for efficient development, testing, and deployment.",
    items: ["Git", "VS Code", "Figma", "npm/yarn", "Vite", "Webpack"],
  },
  {
    title: "Performance & Quality",
    description:
      "Ensuring fast, reliable applications through optimization and testing practices.",
    items: ["React Testing Library", "Jest", "Lighthouse", "Web Vitals", "Accessibility (a11y)", "Performance Optimization"],
  },
];

function SkillsComponent() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">My skills</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Front-end expertise with full-stack foundations</h2>
          <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Proficient in React, TypeScript, and modern tooling with growing full-stack capabilities through Node.js and databases.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Skills = memo(SkillsComponent);
