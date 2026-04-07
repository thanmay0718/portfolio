import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code2, FolderGit2, Mail } from 'lucide-react';

export default function Navbar() {
  const [active, setActive] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Tech', href: '#tech', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <motion.nav 
      initial={{ x: "-50%", opacity: 0, scale: 0.95 }}
      animate={{ x: "-50%", opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed bottom-8 md:bottom-auto md:top-6 left-1/2 z-[100] transition-all duration-300 w-max"
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2 bg-[#1c1c1e]/75 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/10 rounded-[50px] px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.name)}
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            className={`relative flex items-center justify-center px-4 md:px-5 py-2.5 text-[15px] font-medium tracking-wide transition-all duration-[250ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group rounded-full active:scale-[0.98] ${
              active === item.name 
                ? 'text-white/85' 
                : 'text-white/45 hover:text-white/85 hover:-translate-y-[2px]'
            }`}
          >
            {active === item.name && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/10 border-t border-white/20 rounded-[50px] -z-10 shadow-[inner_0_1px_4px_rgba(255,255,255,0.1)]"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
            <span className="hidden sm:block">
              {item.name}
            </span>
            <item.icon size={18} className="block sm:hidden" />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
