import React from 'react';
import { ExternalLink, Github, Server, Database, Cloud } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Featured · Live",
    problem: "Building a highly concurrent backend capable of managing complex product catalogs and secure order processing.",
    solution: "Developed a production-grade REST API utilizing Spring Boot and React, implementing zero-trust JWT authentication and Role-Based Access Control (RBAC).",
    tech: ["Spring Boot", "React", "JWT", "AWS", "PostgreSQL", "Docker"],
    impact: [
      "Reduced query execution latency by 35% via optimized JPA/Hibernate relational mapping.",
      "Architected to horizontally scale and reliably handle 1000+ concurrent user sessions.",
      "Deployed on fully managed AWS Elastic Beanstalk + RDS infrastructure, ensuring 99.9% uptime."
    ],
    github: "https://github.com/thanmay0718/E-Commerce-Project.git",
    live: "#"
  },
  {
    title: "GigShield AI",
    category: "AI · Microservices",
    problem: "Gig workers face severe income instability during extreme weather, lacking access to rapid, automated micro-insurance payouts.",
    solution: "Engineered an end-to-end parametric insurance platform with a Spring Boot core orchestrating a Python FastAPI risk model.",
    tech: ["Spring Boot", "FastAPI", "React", "MySQL", "External APIs"],
    impact: [
      "Eliminated manual claims processing via 100% automated API-driven claim triggers.",
      "Processed live multi-node weather and air quality data feeds with <200ms latency.",
      "Secured intra-service communication across dual microservices using authenticated tokens."
    ],
    github: "https://github.com/thanmay0718/Gig-Sheild-AI.git",
    live: "#"
  },
  {
    title: "AI-ML Analytics Engine",
    category: "Internship · AICTE",
    problem: "Organizations lack deep visibility into open-source contribution patterns and internal learning management data.",
    solution: "Developed high-throughput REST APIs and data visualization dashboards tracking repository activity flags and developer networks.",
    tech: ["FastAPI", "Flask", "React", "Docker", "PostgreSQL"],
    impact: [
      "Ingested and processed 10,000+ developer commit logs for real-time visual analysis.",
      "Improved extraction speeds by 40% through structured PostgreSQL indexing.",
      "Successfully delivered as the capstone release for an AICTE-approved internship sprint."
    ],
    github: "https://github.com/thanmay0718",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full min-h-screen bg-background py-32 px-6 md:px-12 z-20 overflow-hidden">
      
      {/* Decorative Background Orbs for Glassmorphism */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col">
          <h3 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-4 flex items-center gap-2">
            <Server size={18} /> Architecture & Engineering
          </h3>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Production-Grade Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="bg-[#1c1c1e]/75 hover:bg-[rgba(44,44,46,0.83)] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/5 border-t-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] rounded-[22px] group p-8 flex flex-col justify-between items-start h-auto transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-[2px]">
              <div className="w-full">
                <p className="text-sm font-mono text-emerald-400 mb-3 block">{p.category}</p>
                <h4 className="text-2xl font-semibold mb-6 group-hover:text-emerald-300 transition-colors">{p.title}</h4>

                <div className="space-y-4 text-[15px] leading-relaxed mb-8 text-gray-300">
                  <div>
                    <strong className="text-white">Problem: </strong> {p.problem}
                  </div>
                  <div>
                    <strong className="text-white">Solution: </strong> {p.solution}
                  </div>
                  <div>
                    <strong className="text-white">Tech Used: </strong> {p.tech.join(', ')}
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 mt-6 shadow-inner">
                    <strong className="text-emerald-400 block mb-2 font-semibold">Impact (Measurable):</strong>
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-emerald-100/90 marker:text-emerald-500">
                      {p.impact.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex w-full items-center justify-between mt-8 border-t border-white/10 pt-6">
                <a href={p.live} className="flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 active:scale-95">
                  Live Demo <ExternalLink size={16} />
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 active:scale-95">
                  GitHub Code <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
