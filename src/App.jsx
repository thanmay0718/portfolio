import React from 'react';
import Navbar from './components/Navbar';
import ScrollyCanvas from './components/ScrollyCanvas';
import Overlay from './components/Overlay';
import Projects from './components/Projects';
import AboutTechCerts from './components/AboutTechCerts';
import { Mail, Linkedin, Github } from 'lucide-react';

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
      <footer id="contact" className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10 px-6 z-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Let's build something <span className="text-emerald-500">scalable.</span></h2>
            <p className="text-gray-400 max-w-md">
              Currently open for new opportunities. Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="mailto:thanmay0718@gmail.com" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-400 transition-all group">
              <Mail className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/thanmay0718/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all group">
              <Linkedin className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a href="https://github.com/thanmay0718" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
              <Github className="text-gray-400 group-hover:text-black transition-colors" />
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
