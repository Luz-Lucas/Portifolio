"use client";

import { memo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@/components/animate-ui/components/headless/accordion";

function ProjectsComponent() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Projects</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Featured work & learning journey</h2>
        </div>
        <Accordion className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white space-y-4">
          <AccordionItem>
            <AccordionButton>Personal Site - 100/100 Lighthouse</AccordionButton>
            <AccordionPanel>
              <div className="text-gray-300 space-y-2">
                <p>High-performance personal portfolio with Framer Motion animations and optimized performance.</p>
                <p className="text-sm"><strong>Tech Stack:</strong> React, TypeScript, Framer Motion, TailwindCSS, Vite</p>
                <p className="text-sm"><strong>Highlights:</strong> Perfect Lighthouse score, smooth animations, responsive design</p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>E-Commerce Dashboard</AccordionButton>
            <AccordionPanel>
              <div className="text-gray-300 space-y-2">
                <p>Data-rich dashboard with real-time analytics and interactive visualizations.</p>
                <p className="text-sm"><strong>Tech Stack:</strong> React, TypeScript, Chart.js, Redux, TailwindCSS</p>
                <p className="text-sm"><strong>Highlights:</strong> State management, chart integrations, responsive tables</p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>Full-Stack Task Manager</AccordionButton>
            <AccordionPanel>
              <div className="text-gray-300 space-y-2">
                <p>Complete task management app with drag-and-drop functionality and backend integration.</p>
                <p className="text-sm"><strong>Tech Stack:</strong> React, Node.js/Express, MongoDB, React DnD, REST APIs</p>
                <p className="text-sm"><strong>Highlights:</strong> Drag-and-drop UI, full-stack integration, database persistence</p>
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export const Projects = memo(ProjectsComponent);
