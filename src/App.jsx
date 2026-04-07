import React from 'react';
import Navbar from './components/Navbar';
import ScrollyCanvas from './components/ScrollyCanvas';
import Overlay from './components/Overlay';
import Projects from './components/Projects';
import AboutTechCerts from './components/AboutTechCerts';
import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

function App() {
  const scrollContainerRef = React.useRef(null);

  return (
    <main className="w-full bg-background min-h-screen text-white">
      <Navbar />
      {/* 500vh container handles the scrollytelling phase */}
      <div ref={scrollContainerRef} className="relative h-[500vh] w-full">
        {/* The sticky canvas rendering the image sequence */}
        <ScrollyCanvas scrollContainerRef={scrollContainerRef} />

        {/* Text layers mapped to scroll progress */}
        <Overlay scrollContainerRef={scrollContainerRef} />
      </div>

      {/* Main Content Sections after scrolling completes */}
      <div className="bg-background relative z-20 shadow-[0_-50px_50px_rgba(18,18,18,1)]">
        <AboutTechCerts />
        <Projects />
      </div>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10 px-6 z-20 relative overflow-hidden">
        {/* Background Orbs for Glassmorphism */}
        <div className="absolute top-1/2 left-[20%] w-[300px] h-[300px] bg-emerald-500/15 rounded-full blur-[120px] -z-10 pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-[20%] w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[140px] -z-10 pointer-events-none -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Let's build something <span className="text-emerald-500">scalable.</span></h2>
            <p className="text-gray-400 max-w-md">
              Currently open for new opportunities. Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:thanmay0718@gmail.com" className="w-14 h-14 rounded-[50px] flex items-center justify-center bg-[#1c1c1e]/75 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/5 border-t-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] active:scale-[0.98] group hover:-translate-y-[2px] hover:bg-emerald-500/20 hover:border-emerald-400/50">
              <Mail className="text-gray-400 group-hover:text-emerald-300 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/thanmay0718/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-[50px] flex items-center justify-center bg-[#1c1c1e]/75 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/5 border-t-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] active:scale-[0.98] group hover:-translate-y-[2px] hover:bg-blue-500/20 hover:border-blue-400/50">
              <Linkedin className="text-gray-400 group-hover:text-blue-300 transition-colors" />
            </a>
            <a href="https://github.com/thanmay0718" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-[50px] flex items-center justify-center bg-[#1c1c1e]/75 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/5 border-t-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] active:scale-[0.98] group hover:-translate-y-[2px] hover:bg-white/10 hover:border-white/30">
              <Github className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a href="https://twitter.com/thanmay0718" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-[50px] flex items-center justify-center bg-[#1c1c1e]/75 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/5 border-t-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] active:scale-[0.98] group hover:-translate-y-[2px] hover:bg-sky-500/20 hover:border-sky-400/50">
              <Twitter className="text-gray-400 group-hover:text-sky-300 transition-colors" />
            </a>
            <a href="https://instagram.com/thanmay0718" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-[50px] flex items-center justify-center bg-[#1c1c1e]/75 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/5 border-t-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] active:scale-[0.98] group hover:-translate-y-[2px] hover:bg-pink-500/20 hover:border-pink-400/50">
              <Instagram className="text-gray-400 group-hover:text-pink-300 transition-colors" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tanmay Racha. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-emerald-400 transition-colors">Certifications</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
