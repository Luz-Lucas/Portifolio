"use client";

import { memo } from "react";
import Image from "next/image";

function AboutComponent() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-md mx-auto aspect-[4/5]">
          <Image
            src="/aboutimg.png"
            alt="Lucas working"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain opacity-80"
            quality={100}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
        </div>
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">About me</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Balancing education with real-world impact</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a driven Software Engineering student from Santa Rita do Sapucaí, Minas Gerais, deeply passionate about front-end development. At CP2 Junior Company, I've worked as a Junior Developer, collaborating with cross-functional teams to build client-facing web applications using React, TypeScript, and modern web standards. My focus is on crafting responsive, performant interfaces that prioritize user experience.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My technical foundation spans HTML5, CSS3, JavaScript (ES6+), React, TypeScript, Tailwind CSS, and tools like Git, VS Code, and Figma. I'm actively exploring the full-stack landscape with Node.js, Express, REST APIs, and databases like MongoDB and PostgreSQL. Beyond code, I thrive in collaborative Agile environments, participating in code reviews and pair programming to elevate team quality. I'm eager to bring my front-end expertise and growth mindset to innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export const About = memo(AboutComponent);
