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
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-4 flex items-center gap-2">
              <GraduationCap size={18} /> About Me
            </h3>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Building Real Backend Systems.</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a results-driven <strong className="text-white">Backend Engineer</strong> specializing in Java, Spring Boot, and Cloud Infrastructure. As a Computer Science undergrad at KL University (Class of 2027), I prioritize architecting highly scalable, production-ready systems over standard academic assignments.
              </p>
              <p>
                My engineering expertise lies in designing robust <strong className="text-white">RESTful APIs</strong>, securing architectures with zero-trust <strong className="text-white">JWT and RBAC</strong>, optimizing high-throughput PostgreSQL databases, and orchestrating enterprise deployments across AWS and Oracle Cloud Infrastructure.
              </p>
              <p>
                I hold dual Oracle Cloud certifications (Architect Associate + Gen AI) alongside Microsoft Azure credentials. Whether I am architecting AI-powered microservices that trigger real-time insurance payouts, or reducing monolithic load times on an e-commerce platform, my focus is delivering <strong className="text-emerald-400">measurable business impact, security, and uncompromising performance.</strong>
              </p>
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
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    {group.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-100">{group.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {group.items.map(item => (
                    <span key={item} className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 px-3 py-1.5 rounded-md text-sm text-gray-300 w-full text-center">
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
              <a href="#" key={idx} className="p-6 flex items-center gap-6 group cursor-pointer hover:-translate-y-[2px] transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-[#1c1c1e]/75 hover:bg-[rgba(44,44,46,0.83)] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/5 border-t-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] rounded-[20px] active:scale-[0.98]">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-110 transition-transform">
                  <span className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500">
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
