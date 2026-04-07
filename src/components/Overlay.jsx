import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, FileText, ArrowDown } from 'lucide-react';

export default function Overlay({ scrollContainerRef }) {
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: Introduction (0% to 25%)
  const y1 = useTransform(scrollYProgress, [0, 0.25], ["0vh", "-100vh"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [1, 1, 0]);

  // Section 2: Main value prop (25% to 50%)
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], ["20vh", "-50vh"]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);

  // Section 3: Sub-tagline & CTAs (55% to 80%)
  const y3 = useTransform(scrollYProgress, [0.45, 0.8], ["20vh", "-50vh"]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.7, 0.8], [0, 1, 1, 0]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 flex flex-col justify-start">

      {/* Section 1 */}
      <div className="h-screen w-full sticky top-0 flex items-center justify-center">
        <motion.div style={{ y: y1, opacity: opacity1 }} className="text-center px-4 w-full">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 select-none drop-shadow-2xl text-white">
            Hi, I'm Tanmay Sri Vardhan
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide select-none drop-shadow-xl mt-4">
            Backend Engineer & Cloud Certified
          </p>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="h-screen w-full absolute top-[150vh] flex items-center justify-start px-[5%] md:px-[10%]">
        <motion.div style={{ y: y2, opacity: opacity2 }} className="text-left w-full max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight select-none drop-shadow-2xl text-white">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-none">scalable systems</span><br />
            with Spring Boot · AWS · APIs.
          </h2>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="h-screen w-full absolute top-[300vh] flex items-center justify-center md:justify-end px-[5%] md:px-[10%]">
        <motion.div style={{ y: y3, opacity: opacity3 }} className="text-center md:text-right w-full max-w-2xl pointer-events-auto">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-relaxed drop-shadow-xl text-white mb-6">
            CS undergrad at KL University (2027) · <span className="text-emerald-400">8.89 CGPA</span><br />
            Oracle Cloud & Azure certified.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-10 drop-shadow-lg">
            I build production-grade backend systems — currently working on a full-stack e-commerce platform and an AI-powered insurance platform for gig workers.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <a href="#projects" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              View Projects <ArrowDown size={18} />
            </a>
            <a href="https://github.com/thanmay0718" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-medium transition-all">
              GitHub <Github size={18} />
            </a>
            <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-medium transition-all">
              Resume <FileText size={18} />
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
