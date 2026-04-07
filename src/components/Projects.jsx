import React from 'react';
import { ExternalLink, Github, Server, Database, Cloud } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Featured · Live",
    description: "Scalable Spring Boot + React app with JWT auth and RBAC. REST APIs for user mgmt, product catalog, and order processing. PostgreSQL / MySQL schema with JPA/Hibernate optimized queries. Deployed on AWS Elastic Beanstalk + RDS.",
    tags: ["Spring Boot", "React", "JWT", "AWS", "PostgreSQL", "Docker"],
    github: "https://github.com/thanmay0718/E-Commerce-Project.git",
    live: "#"
  },
  {
    title: "GigShield AI",
    category: "AI · Microservices",
    description: "Parametric insurance platform for gig workers — income protection against weather disruptions. Microservices: Spring Boot (core) + Python FastAPI (AI risk model). Integrates live weather & air quality APIs for automated claim triggers. JWT auth · role-based admin/worker access · end-to-end claim flow.",
    tags: ["Spring Boot", "Python", "Microservices", "React", "MySQL", "External APIs"],
    github: "https://github.com/thanmay0718/Gig-Sheild-AI.git",
    live: "#"
  },
  {
    title: "AI-ML Internship Projects",
    category: "Internship · AICTE",
    description: "FastAPI + PostgreSQL REST APIs for learning system data. Full-stack Flask + React + Docker app analyzing GitHub collaboration patterns. Data visualization for repository activity and contributor networks.",
    tags: ["FastAPI", "Flask", "React", "Docker", "PostgreSQL"],
    github: "https://github.com/thanmay0718",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full min-h-screen bg-background py-32 px-6 md:px-12 z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col">
          <h3 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-4 flex items-center gap-2">
            <Server size={18} /> Architecture & Engineering
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Production-Grade Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="glass-card group p-8 flex flex-col justify-between items-start h-auto min-h-[450px]">
              <div className="w-full">
                <p className="text-sm font-mono text-emerald-400 mb-3 block">{p.category}</p>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs bg-emerald-900/30 border border-emerald-500/20 px-3 py-1.5 rounded-md text-emerald-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex w-full items-center justify-between mt-auto border-t border-white/10 pt-6">
                <a href={p.live} className="flex items-center gap-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span>Code</span>
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
