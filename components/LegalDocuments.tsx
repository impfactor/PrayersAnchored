import React, { useEffect, useState } from 'react';
import { Download, Printer, ShieldCheck, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import imuLogo from '../assets/CMI.jpg';
import visionLogo from '../assets/CMV.png';
import { legalData } from '../constants/legalData';

type AppKey = 'imu' | 'vision';

const LegalDocuments: React.FC = () => {
  const [activeApp, setActiveApp] = useState<AppKey>('imu');
  const { language } = useLanguage();
  const copy = language === 'en'
    ? {
        badge: 'Legal Resource Center',
        title: 'ChironMotion Legal Center',
        desc: 'We keep privacy first. Below are the official legal terms for the ChironMotion apps, including user rights, data protection policy, and AI ethics guidance.',
        print: 'Print File',
        secure: 'All agreements are governed by law and effective immediately',
        contactBadge: 'Support Center',
        contactTitle: 'Contact the Data Security Team',
        contactDesc: 'Have questions about the terms or privacy policy? Our legal and security team is ready to help.',
        email: 'Email Us',
      }
    : {
        badge: 'Legal Resource Center',
        title: 'ChironMotion 法律中心',
        desc: '我們堅持「隱私優先」的核心價值。以下為 ChironMotion 系列 App 的正式法律條款，包含您的權益保障、數據保護政策與 AI 倫理指南。',
        print: '列印檔案',
        secure: '所有協議受法律管轄且即時生效',
        contactBadge: 'Support Center',
        contactTitle: '聯繫數據安全團隊',
        contactDesc: '對條款或隱私有任何疑問？我們的法務與安全團隊隨時為您解答。',
        email: '電子郵件聯絡',
      };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'vision') setActiveApp('vision');
    else if (hash === 'imu') setActiveApp('imu');

    // Reveal logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeApp]); // Re-run when app changes to observe new sections

  const current = activeApp === 'imu' ? legalData.imu : legalData.vision;
  const logo = activeApp === 'imu' ? imuLogo : visionLogo;

  const selectApp = (app: AppKey) => {
    setActiveApp(app);
    window.history.replaceState(null, '', `/legal#${app}`);
  };

  const jumpToSection = (sectionId: string) => {
    const target = document.getElementById(activeApp + '-' + sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="reveal overflow-hidden rounded-[48px] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 transition-all hover:shadow-2xl">
          <div className="p-8 sm:p-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue">
                  {copy.badge}
                </div>
                <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  {copy.title}
                </h1>
                <p className="mt-8 text-lg font-medium leading-relaxed text-slate-600">
                  {copy.desc}
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
                {Object.keys(legalData).map((key) => {
                  const appKey = key as AppKey;
                  const isActive = activeApp === appKey;
                  const appTitle = language === 'en'
                    ? (appKey === 'imu' ? 'IMU Analysis' : 'Vision Analysis')
                    : (appKey === 'imu' ? 'IMU 分析儀' : 'Vision 視覺分析');
                  return (
                    <button
                      key={appKey}
                      type="button"
                      onClick={() => selectApp(appKey)}
                      className={`group flex items-center gap-5 rounded-3xl border p-5 text-left transition-all duration-300 ${
                        isActive
                          ? 'border-brand-blue bg-slate-950 text-white shadow-2xl shadow-brand-blue/20'
                          : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-brand-blue/30 hover:bg-white'
                      }`}
                    >
                      <img
                        src={appKey === 'imu' ? imuLogo : visionLogo}
                        alt={appTitle}
                        className={`h-14 w-14 rounded-2xl object-contain ring-4 ring-white shadow-sm ${isActive ? 'ring-brand-blue/20' : ''}`}
                      />
                      <div className="min-w-0 pr-4">
                        <p className={`text-base font-black ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-brand-blue'}`}>
                          {appTitle}
                        </p>
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                          {legalData[appKey].updated} UPDATED
                        </p>
                      </div>
                      <ChevronRight className={`ml-auto h-5 w-5 transition-transform ${isActive ? 'translate-x-1 text-brand-blue' : 'text-slate-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-10">
              <button
                type="button"
                onClick={() => window.print()}
                className="btn-gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black shadow-lg"
              >
                <Printer className="h-4 w-4" />
                {copy.print}
              </button>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                <ShieldCheck className="h-5 w-5 text-brand-green" />
                <span>{copy.secure}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation - Pill style */}
        <section className="reveal mt-10 overflow-hidden rounded-full border border-slate-200 bg-white/70 p-1.5 shadow-sm backdrop-blur-md" style={{ animationDelay: '0.1s' }}>
          <div className="flex gap-1 overflow-x-auto p-1 scrollbar-hide">
            {current.sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => jumpToSection(section.id)}
                className="shrink-0 rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-widest text-slate-600 transition hover:bg-brand-blue hover:text-white"
              >
                {section.title}
              </button>
            ))}
          </div>
        </section>

        {/* Main Content Areas */}
        <main className="mt-16 space-y-20">
          {current.sections.map((section, sIdx) => (
            <section
              key={section.id}
              id={`${activeApp}-${section.id}`}
              className="reveal scroll-mt-24 space-y-8"
              style={{ animationDelay: `${sIdx * 0.1}s` }}
            >
              <div className="flex flex-col border-b-2 border-slate-100 pb-2">
                <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.3em] text-brand-blue/40 italic">
                  {section.titleEn}
                </p>
              </div>

              <div className="grid gap-8">
                {section.items.map((item, idx) => (
                  <div
                    key={`${section.id}-${idx}`}
                    className="group glass-card-premium relative overflow-hidden rounded-[40px] bg-white p-8 sm:p-12"
                  >
                    <div className="relative">
                      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
                        {/* Chinese Content */}
                        <div className="space-y-6">
                           <div className="inline-flex rounded-lg bg-slate-900 px-2 py-1 text-[10px] font-black text-white">ZH</div>
                           <h3 className="text-xl font-black text-slate-950 leading-tight">
                            {item.title}
                          </h3>
                          <div className="text-[15px] leading-8 text-slate-600 font-medium whitespace-pre-wrap">
                            {item.content}
                          </div>
                        </div>

                        {/* English Content */}
                        <div className="space-y-6 border-t border-slate-100 pt-10 lg:border-l lg:border-t-0 lg:pl-20 lg:pt-0">
                           <div className="inline-flex rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-black text-slate-400">EN</div>
                           <h3 className="text-xl font-black text-slate-400 leading-tight italic">
                            {item.titleEn}
                          </h3>
                          <div className="text-[14px] leading-7 text-slate-500 font-medium whitespace-pre-wrap italic">
                            {item.contentEn}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Contact Section */}
          <section className="reveal rounded-[48px] bg-slate-950 p-10 text-center text-white shadow-2xl sm:p-20" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex rounded-full bg-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-8 font-black">
                {copy.contactBadge}
              </div>
            <h3 className="text-3xl font-black sm:text-5xl">{copy.contactTitle}</h3>
            <p className="mx-auto mt-8 max-w-xl text-lg font-medium text-slate-400 leading-relaxed">
              {copy.contactDesc}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="mailto:impfactortw@gmail.com"
                className="btn-gradient-brand inline-flex w-full items-center justify-center gap-3 rounded-2xl px-10 py-5 text-sm font-black shadow-lg sm:w-auto"
              >
                {copy.email}
              </a>
              <div className="text-xs font-black uppercase tracking-widest text-slate-600">
                ChironMotion Studio &copy; 2026
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};


export { LegalDocuments };
export default LegalDocuments;
