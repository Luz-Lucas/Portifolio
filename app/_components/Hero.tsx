"use client";

import { memo } from "react";
import { FlipWords } from "../../_util/herotxt";

const WORDS = ["intuitive", "responsive", "performant"] as const;

function HeroComponent() {
  return (
    <section id="home" className="text-white min-h-screen flex items-center px-6">
      <div className="mx-auto w-full max-w-4xl space-y-10 text-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            M I N A S &nbsp; G E R A I S &nbsp; • &nbsp; B R A Z I L
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Junior Front-End Developer crafting <span className="text-blue-600"><FlipWords words={WORDS} /></span> experiences
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto">
            Software Engineering student passionate about building user-centric web experiences with React, TypeScript, and modern tooling. Balancing college coursework with real-world development at CP2 Junior Company, driven to evolve into a full-stack contributor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-700 text-white font-medium hover:border-blue-600 hover:text-blue-400 transition"
            >
              Contact me
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>Software Engineering Student</span>
            <span>Agile Enthusiast</span>
            <span>Portuguese • English</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Hero = memo(HeroComponent);
