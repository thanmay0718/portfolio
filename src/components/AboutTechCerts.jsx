import React from 'react';
import { Database, Code2, Cloud, Wrench, ShieldCheck, GraduationCap } from 'lucide-react';

export default function AboutTechCerts() {
  const stack = [
    {
      category: "Languages",
      icon: <Code2 className="text-blue-400" size={24} />,
      items: ["Java", "Python", "JavaScript", "SQL", "C"]
    },
    {
      category: "Frameworks",
      icon: <Wrench className="text-emerald-400" size={24} />,
      items: ["Spring Boot", "React", "FastAPI", "Flask"]
    },
    {
      category: "Cloud & Infra",
      icon: <Cloud className="text-purple-400" size={24} />,
      items: ["AWS", "Azure", "OCI", "Docker"]
    },
    {
      category: "Databases",
      icon: <Database className="text-amber-400" size={24} />,
      items: ["PostgreSQL", "MySQL"]
    },
    {
      category: "Tools",
      icon: <ShieldCheck className="text-red-400" size={24} />,
      items: ["Git", "Postman", "IntelliJ", "VS Code"]
    }
  ];

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Architect Associate",
      issuer: "Oracle · Cloud Architecture",
      badge: "OCI"
    },
    {
      title: "Oracle Cloud Infrastructure Gen AI Professional",
      issuer: "Oracle · Generative AI",
      badge: "OCI"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft · AZ-900",
      badge: "Az"
    },
    {
      title: "HackerRank Software Engineer Certification",
      issuer: "HackerRank · Problem Solving",
      badge: "HR"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce · Artificial Intelligence",
      badge: "SF"
    },
    {
      title: "Aviatrix Certified Engineer - Multicloud Network Associate",
      issuer: "Aviatrix · Multicloud Networking",
      badge: "ACE"
    },
    {
      title: "AI-ML Virtual Internship (10 Weeks)",
      issuer: "Google for Developers + AICTE + EduSkills",
      badge: "ML"
    }
  ];

  return (
    <div className="bg-background w-full py-24 z-20 relative overflow-hidden">
      {/* Background orbs for glass visibility */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[140px] -z-10 mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32">
        
        {/* About Section */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-[#1c1c1e]/75 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/5 border-t-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] rounded-[24px] p-8 md:p-10 transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-[2px] hover:bg-[rgba(44,44,46,0.83)] group">
            <h3 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-3 flex items-center gap-2">
              <GraduationCap size={18} /> Professional Summary
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-white">Results-Driven Backend Engineer.</h2>
            
            <div className="space-y-6 text-gray-300 text-[15px] leading-relaxed">
              <p className="text-base text-gray-200">
                As a Computer Science Undergrad at KL University (Class of 2027), my mandate is bypassing academic norms to engineer production-grade, highly concurrent enterprise backend systems.
              </p>
              
              <div className="space-y-5 mt-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0"></div>
                  <div>
                    <strong className="text-white font-semibold">Architecture & APIs:</strong> Specializing in Java & Spring Boot microservices, high-throughput RESTful routing, and zero-trust JWT/RBAC security logic.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] shrink-0"></div>
                  <div>
                    <strong className="text-white font-semibold">Data & Optimization:</strong> Designing robust relational schemas (PostgreSQL/MySQL) with advanced JPA/Hibernate database tuning to crush query latency.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] shrink-0"></div>
                  <div>
                    <strong className="text-white font-semibold">Cloud Infrastructure:</strong> Orchestrating enterprise deployments and scalable architecture across AWS Elastic Beanstalk and Oracle Cloud Infrastructure.
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] shrink-0"></div>
                  <div>
                    <strong className="text-white font-semibold">Algorithmic Problem Solving:</strong> Rigorously applying Data Structures & Algorithms (DSA) to engineer highly optimized, computationally efficient workflows.
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-3 items-center">
                <span className="bg-[#ffffff08] inset-shadow text-emerald-300 border border-emerald-500/20 border-t-emerald-500/40 px-4 py-2 rounded-full text-[13px] font-medium shadow-[inset_0_1px_0_rgba(16,185,129,0.2)]">Oracle Cloud Architect</span>
                <span className="bg-[#ffffff08] inset-shadow text-white border border-white/10 border-t-white/30 px-4 py-2 rounded-full text-[13px] font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">Oracle Gen AI</span>
                <span className="bg-[#ffffff08] inset-shadow text-blue-300 border border-blue-500/20 border-t-blue-500/40 px-4 py-2 rounded-full text-[13px] font-medium shadow-[inset_0_1px_0_rgba(59,130,246,0.2)]">Azure Fundamentals</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center overflow-hidden">
               {/* Decorative Abstract Code/Server Graphic */}
               <div className="w-full h-full border border-white/5 bg-black/40 rounded-xl p-6 font-mono text-sm text-emerald-400 overflow-hidden opacity-70">
                 <p>{`@RestController`}</p>
                 <p>{`@RequestMapping("/api/v1/users")`}</p>
                 <p>{`public class UserController {`}</p>
                 <br/>
                 <p className="ml-4">{`@Autowired`}</p>
                 <p className="ml-4">{`private UserService service;`}</p>
                 <br/>
                 <p className="ml-4">{`@GetMapping("/{id}")`}</p>
                 <p className="ml-4">{`public ResponseEntity<User> get(@PathVariable Long id) {`}</p>
                 <p className="ml-8">{`return ResponseEntity.ok(service.findById(id));`}</p>
                 <p className="ml-4">{`}`}</p>
                 <p>{`}`}</p>
               </div>
               
               {/* Overlapping glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech">
          <h3 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-4 flex items-center gap-2">
            <Code2 size={18} /> Tech Arsenal
          </h3>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">Tools & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {stack.map((group, idx) => (
              <div key={idx} className="p-6 flex flex-col h-full hover:-translate-y-[2px] transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-[#1c1c1e]/75 hover:bg-[rgba(44,44,46,0.83)] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/5 border-t-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] rounded-[20px]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="p-3 bg-[#ffffff0a] rounded-[14px] border border-white/5 border-t-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    {group.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-100">{group.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {group.items.map(item => (
                    <span key={item} className="bg-[#ffffff08] hover:bg-[#ffffff15] transition-all duration-300 border border-white/5 border-t-white/20 px-3 py-1.5 rounded-full text-[13px] font-medium text-gray-300 w-full text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <h3 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck size={18} /> Credentials
          </h3>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <a 
                href="#" 
                key={idx} 
                className={`p-6 flex items-center gap-6 group cursor-pointer hover:-translate-y-[2px] transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-[#1c1c1e]/75 hover:bg-[rgba(44,44,46,0.83)] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/5 border-t-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] rounded-[20px] active:scale-[0.98] ${
                  idx === certifications.length - 1 && certifications.length % 2 !== 0 
                  ? 'md:col-span-2 md:w-[calc(50%-12px)] md:justify-self-center' 
                  : ''
                }`}
              >
                <div className="w-16 h-16 rounded-[18px] bg-[#ffffff08] flex items-center justify-center shrink-0 border border-white/5 border-t-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:scale-105 group-hover:bg-[#ffffff15] transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                  <span className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {cert.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-emerald-500/80 text-sm font-medium">{cert.issuer}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
