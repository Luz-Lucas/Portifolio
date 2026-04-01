"use client";

import { memo } from "react";

const FAQS = [
  {
    question: "How do you balance college with development work at CP2?",
    answer:
      "I thrive in collaborative environments and use Agile methodologies to manage coursework and real-world projects simultaneously. My experience at CP2 Junior Company taught me sprint planning and time management, which directly support my academic schedule.",
  },
  {
    question: "What's your experience with React and state management?",
    answer:
      "I'm proficient with React hooks, Context API, and Redux for complex state management. My e-commerce dashboard and task manager projects showcase practical applications of these patterns in production-like environments.",
  },
  {
    question: "How do you approach building full-stack applications?",
    answer:
      "While my primary focus is front-end, I've built foundational full-stack skills through projects integrating React frontends with Node.js/Express backends and MongoDB/PostgreSQL databases. I'm actively expanding these capabilities as part of my learning journey.",
  },
  {
    question: "What makes your portfolio site achieve a 100/100 Lighthouse score?",
    answer:
      "I prioritized performance optimization through code splitting, lazy loading, image optimization, and efficient CSS. Using Vite for faster builds and Framer Motion for smooth, GPU-accelerated animations while maintaining accessibility and Web Vitals standards.",
  },
];

function FaqComponent() {
  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Questions about my work & approach</h2>
          <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0">
            A quick overview of my experience, technical skills, and development philosophy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Faq = memo(FaqComponent);
