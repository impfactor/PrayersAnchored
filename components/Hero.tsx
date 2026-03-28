import React from 'react';
import { ArrowRight } from 'lucide-react';
import { APP_URL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-brand-blue mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-blue"></span>
          </span>
          <span className="text-sm font-medium">{t.hero.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900 leading-tight">
          {t.hero.title}
          <span 
            className="inline ml-2 text-transparent bg-clip-text animate-gradient-text pb-2"
            style={{
              backgroundImage: 'linear-gradient(to right, #020079, #0033CC, #00AEEF, #84E1BC, #00CC88, #020079)',
              backgroundSize: '200% auto'
            }}
          >
            {t.hero.titleSuffix}
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-3xl font-bold text-slate-600 mb-8 tracking-tight">
          {t.hero.subtitle} <span className="text-brand-blue">{t.hero.subtitleHighlight}</span>
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            disabled
            className="flex items-center gap-2 bg-slate-200 text-slate-500 px-8 py-3 rounded-full text-base font-bold cursor-not-allowed"
          >
            {t.hero.ctaVision}
            <span className="ml-2 text-xs bg-slate-300 text-slate-700 px-2 py-1 rounded">{t.hero.comingSoon}</span>
          </button>
          <a
            href="https://apps.apple.com/tw/app/chironmotion-imu/id6758951844"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white px-8 py-3 rounded-full text-base font-bold transition-all shadow-lg hover:opacity-90 animate-gradient-text"
            style={{
              backgroundImage: 'linear-gradient(to right, #020079, #0033CC, #00AEEF, #84E1BC, #00CC88, #020079)',
              backgroundSize: '200% auto'
            }}
          >
            {t.hero.ctaIMU} <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;