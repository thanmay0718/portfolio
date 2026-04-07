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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300"
    >
      <div className="flex items-center gap-1 md:gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.name)}
            className={`relative flex items-center justify-center px-4 md:px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors group rounded-full ${
              active === item.name ? 'text-emerald-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            {active === item.name && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/10 border border-white/5 rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
