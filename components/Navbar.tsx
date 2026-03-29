import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

import imuLogo from '../assets/CMI.jpg';
import visionLogo from '../assets/CMV.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.navbar.features, href: '/#features' },
    { name: t.navbar.protocols, href: '/#measurements' },
    { name: t.navbar.process, href: '/#process' },
    { name: t.navbar.legal, href: '/legal' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const targetId = href.split('#')[1];
      
      // If we are already on the homepage, scroll
      if (window.location.pathname === '/') {
        e.preventDefault();
        setIsOpen(false);
        
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // If we are not on the homepage, let the Link component navigate
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-6 z-50 flex justify-center px-4 transition-all duration-300">
      <div className="glass-pro flex h-14 w-full max-w-4xl items-center justify-between rounded-full px-4 shadow-xl shadow-slate-900/5 sm:px-6">
        <Link to="/" className="flex flex-shrink-0 items-center gap-2">
          <div className="flex -space-x-2">
            <img src={imuLogo} alt="IMU" className="h-8 w-8 rounded-full border-2 border-white bg-white p-0.5 object-contain shadow-sm" />
            <img src={visionLogo} alt="Vision" className="h-8 w-8 rounded-full border-2 border-white bg-white p-0.5 object-contain shadow-sm" />
          </div>
          <span className="hidden text-sm font-black tracking-tight text-slate-950 sm:block">
            ChironMotion <span className="text-brand-blue">Studio</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e as any, link.href)}
                className="cursor-pointer rounded-full px-4 py-1.5 text-sm font-bold text-slate-600 transition-all hover:bg-white/50 hover:text-brand-blue"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setLanguage('zh')}
              className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] transition ${
                language === 'zh'
                  ? 'bg-slate-950 text-white'
                  : 'text-slate-500 hover:text-slate-950'
              }`}
              aria-label="切換至中文"
            >
              中
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] transition ${
                language === 'en'
                  ? 'bg-slate-950 text-white'
                  : 'text-slate-500 hover:text-slate-950'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-full p-2 text-slate-600 hover:bg-white/50 hover:text-brand-blue focus:outline-none md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-4 right-4 top-16 overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e as any, link.href)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-bold text-slate-700 transition hover:bg-slate-50 hover:text-brand-blue"
              >
                {link.name}
                <ChevronRight size={16} className="text-slate-300" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>

  );
};

export default Navbar;
