import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Activity, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 bg-slate-950 py-20 text-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-white">
              {t.footer.slogan}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-slate-400 font-medium leading-relaxed">
              {t.footer.subSlogan}
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
               <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold text-slate-300">
                  <Activity size={14} className="text-brand-blue" />
                  {t.footer.motionBadge}
               </div>
               <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold text-slate-300">
                  <Smartphone size={14} className="text-brand-cyan" />
                  {t.footer.iosBadge}
               </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-amber-400" />
              <div>
                <h4 className="font-black text-white uppercase tracking-widest text-xs mb-2">{t.footer.disclaimerTitle}</h4>
                <p className="text-sm leading-relaxed text-slate-400 font-medium">
                  {t.footer.disclaimerText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-white/10 pt-12 md:grid-cols-3">
          <div>
            <h5 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">{t.footer.productsTitle}</h5>
            <ul className="space-y-4">
              <li className="text-sm font-bold text-slate-400 hover:text-white transition cursor-pointer">ChironMotion IMU</li>
              <li className="text-sm font-bold text-slate-400 hover:text-white transition cursor-pointer">ChironMotion Vision</li>
              <li className="text-sm font-bold text-slate-400 hover:text-white transition cursor-pointer">{t.footer.developerApi}</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">{t.footer.supportTitle}</h5>
            <p className="text-sm font-bold text-slate-400 mb-2">impfactortw@gmail.com</p>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">
              {t.footer.supportText}
            </p>
          </div>
          <div className="md:text-right">
            <div className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">{t.footer.legalTitle}</div>
            <p className="text-sm font-bold text-slate-500 italic">{t.footer.quote}</p>
            <div className="mt-4 flex flex-col md:items-end gap-2">
              <Link to="/legal" className="text-sm font-black text-brand-cyan hover:text-brand-green transition underline underline-offset-4">
                {t.footer.legalLink}
              </Link>
              <p className="text-xs font-bold text-slate-600 mt-2">
                {t.footer.copyrightPrefix} {year} ChironMotion Studio. {t.footer.copyrightSuffix}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
