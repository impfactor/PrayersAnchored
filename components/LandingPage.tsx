import React, { useEffect } from 'react';
import { ArrowRight, Download, Play, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

import imuLogo from '../assets/CMI.jpg';
import imuResultImage from '../assets/imu-result.jpg';
import imuSymmetryImage from '../assets/imu-symmetry.jpg';

import visionLogo from '../assets/CMV.png';
import visionResultImage from '../assets/vision-result.jpg';
import visionSkeletonImage from '../assets/vision-skeleton.jpg';
import imuVideo from '../assets/ChironMotionIMU.mp4';

const downloadIMU = 'https://apps.apple.com/us/app/chironmotion-imu/id6758951844';

const LandingPage: React.FC = () => {
  const { t } = useLanguage();
  const copy = t.landing;

  useEffect(() => {
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

    // Initial check
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Handle dynamically added content if any
    return () => observer.disconnect();
  }, []);

  const measurementCards = [
    {
      app: 'IMU',
      title: copy.measurements.imu.title,
      desc: copy.measurements.imu.desc,
      items: copy.measurements.imu.items,
      notes: copy.measurements.imu.notes,
      image: imuSymmetryImage,
    },
    {
      app: 'Vision',
      title: copy.measurements.vision.title,
      desc: copy.measurements.vision.desc,
      items: copy.measurements.vision.items,
      notes: copy.measurements.vision.notes,
      image: visionSkeletonImage,
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative min-h-[80vh] overflow-hidden bg-white pt-20 lg:pt-32">
        {/* Background blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[120px] animate-pulse-slow" />
          <div className="absolute top-1/2 -right-20 h-[600px] w-[600px] rounded-full bg-brand-cyan/5 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="reveal relative z-10 mx-auto max-w-[480px] overflow-hidden">
             <video 
               src={imuVideo} 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover"
             />
             {/* 遮罩白邊：覆蓋影片邊緣可能產生的黑線 */}
             <div className="absolute inset-0 border-[2px] border-white pointer-events-none" />
          </div>

            <h1 className="relative z-20 -mt-10 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
            {copy.hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {copy.hero.description}
          </p>


          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href={downloadIMU}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-brand flex w-full items-center justify-center gap-2 rounded-full px-8 py-5 text-base font-black shadow-2xl sm:w-auto"
            >
              {copy.hero.ctaIMU}
              <ArrowRight className="h-5 w-5" />
            </a>
            <button
              type="button"
              disabled
              className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-5 text-base font-black text-slate-950 transition sm:w-auto"
            >
              {copy.hero.ctaVision}
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-500">
                {copy.hero.comingSoon}
              </span>
              <Play className="h-5 w-5 text-slate-400" />
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-6 overflow-hidden py-2 grayscale opacity-40">
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-sm font-black tracking-tighter">{copy.hero.stats[0]}</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-400"></div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-sm font-black tracking-tighter">{copy.hero.stats[1]}</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-400"></div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-sm font-black tracking-tighter">{copy.hero.stats[2]}</span>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col items-center text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">{copy.core.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            {copy.core.title}
          </h2>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-brand-blue/20"></div>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            {copy.core.desc}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* IMU Card */}
          <article className="reveal glass-card-premium group relative flex flex-col overflow-hidden rounded-[40px] p-8 lg:p-10">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-blue/5 blur-3xl transition-all group-hover:bg-brand-blue/10" />
            
            <div className="relative flex flex-col h-full">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
                  <img src={imuLogo} alt="IMU" className="h-14 w-14 object-contain" />
                </div>
                <div>
                  <div className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                    {copy.core.imuLabel}
                  </div>
                  <h3 className="mt-1 text-3xl font-black text-slate-950">{copy.core.imuTitle}</h3>
                </div>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                {copy.core.imuDesc}
              </p>

              <div className="mt-auto pt-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                   <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      {copy.core.imuBullets[0]}
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      {copy.core.imuBullets[1]}
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      {copy.core.imuBullets[2]}
                    </li>
                  </ul>
                  
                  <div className="hidden sm:block">
                    <img
                      src={imuResultImage}
                      alt="IMU Result"
                      className="h-60 w-auto rounded-3xl border border-slate-200 shadow-2xl transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </div>
          </article>

          {/* Vision Card */}
          <article className="reveal glass-card-premium group relative flex flex-col overflow-hidden rounded-[40px] p-8 lg:p-10" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-cyan/5 blur-3xl transition-all group-hover:bg-brand-cyan/10" />
            
            <div className="relative flex flex-col h-full">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
                  <img src={visionLogo} alt="Vision" className="h-14 w-14 object-contain" />
                </div>
                <div>
                  <div className="inline-flex rounded-full bg-brand-cyan/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-cyan">
                    {copy.core.visionLabel}
                  </div>
                  <h3 className="mt-1 text-3xl font-black text-slate-950">{copy.core.visionTitle}</h3>
                </div>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                {copy.core.visionDesc}
              </p>

              <div className="mt-auto pt-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                   <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      {copy.core.visionBullets[0]}
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      {copy.core.visionBullets[1]}
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      {copy.core.visionBullets[2]}
                    </li>
                  </ul>
                  
                  <div className="hidden sm:block">
                    <img
                      src={visionResultImage}
                      alt="Vision Result"
                      className="h-60 w-auto rounded-3xl border border-slate-200 shadow-2xl transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </div>
          </article>
        </div>
      </section>


      <section id="measurements" className="relative overflow-hidden bg-slate-50 py-24">
        <div className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">{copy.measurements.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {copy.measurements.title}
            </h2>
            <div className="mt-4 h-1.5 w-20 rounded-full bg-brand-blue/20"></div>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
              {copy.measurements.desc}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {measurementCards.map((group, idx) => (
              <article key={group.app} className="reveal glass-card-premium rounded-[32px] bg-white p-8 sm:p-10" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-blue">{group.app} {copy.measurements.appMeasurement}</div>
                    <h3 className="mt-1 text-2xl font-black text-slate-950">{group.title}</h3>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-500">
                    {copy.measurements.version}
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-relaxed font-medium">
                  {group.desc}
                </p>

                <div className="mt-8 flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(([abbr, full]) => (
                        <span
                          key={abbr}
                          className="rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-brand-blue/30 hover:bg-white"
                        >
                          <span className="text-brand-blue">{abbr}</span> · {full}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-8 space-y-3">
                      {group.notes.map((note) => (
                        <li key={note} className="flex items-start gap-3 text-sm font-bold text-slate-500">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {group.image && (
                    <div className="shrink-0">
                       <img 
                         src={group.image} 
                         alt={`${group.app} Screenshot`} 
                         className="h-64 w-auto rounded-3xl border border-slate-200 shadow-xl transition-transform hover:scale-105"
                       />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col items-center text-center mb-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">{copy.process.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {copy.process.title}
            </h2>
            <div className="mt-4 h-1.5 w-20 rounded-full bg-brand-blue/20"></div>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
              {copy.process.desc}
            </p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 right-0 hidden h-0.5 -translate-y-12 bg-slate-100 md:block"></div>
            
            {copy.process.steps.map((step, idx) => (
              <article key={step.id} className="reveal group relative text-center" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[32px] bg-slate-950 text-2xl font-black text-white shadow-2xl transition-all group-hover:bg-brand-blue group-hover:scale-110">
                  {step.id}
                  <div className="absolute -inset-2 rounded-[38px] border-2 border-brand-blue/0 transition-all group-hover:border-brand-blue/20"></div>
                </div>
                <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section id="legal" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col items-center text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">{copy.privacy.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            {copy.privacy.title}
          </h2>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-brand-blue/20"></div>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed font-medium">
            {copy.privacy.desc}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* IMU Legal */}
          <article className="reveal glass-card-premium flex flex-col rounded-[32px] bg-white p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100">
                <img src={imuLogo} alt="IMU" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-blue">{copy.privacy.imuBadge}</div>
                <h3 className="text-xl font-black text-slate-950">{copy.privacy.imuTitle}</h3>
              </div>
            </div>
            <p className="mt-6 text-sm font-medium leading-relaxed text-slate-600">
               {copy.privacy.imuUpdated}
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-brand-blue" />
                {copy.privacy.imuBullets[0]}
              </li>
              <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-brand-blue" />
                {copy.privacy.imuBullets[1]}
              </li>
            </ul>
            <Link to="/legal#imu" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-brand-blue transition hover:gap-3">
              {copy.privacy.imuLink}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          {/* Vision Legal */}
          <article className="reveal glass-card-premium flex flex-col rounded-[32px] bg-white p-8" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100">
                <img src={visionLogo} alt="Vision" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">{copy.privacy.visionBadge}</div>
                <h3 className="text-xl font-black text-slate-950">{copy.privacy.visionTitle}</h3>
              </div>
            </div>
            <p className="mt-6 text-sm font-medium leading-relaxed text-slate-600">
               {copy.privacy.visionUpdated}
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-brand-cyan" />
                {copy.privacy.visionBullets[0]}
              </li>
              <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-brand-cyan" />
                {copy.privacy.visionBullets[1]}
              </li>
            </ul>
            <Link to="/legal#vision" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-brand-cyan transition hover:gap-3">
              {copy.privacy.visionLink}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      <section id="download" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="reveal glass-pro relative overflow-hidden rounded-[56px] bg-slate-950 p-8 text-center sm:p-20">
          {/* Decorative background for the CTA box */}
          <div className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] bg-[radial-gradient(circle_at_center,rgba(0,68,255,0.15)_0%,transparent_60%)] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex rounded-full bg-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              {copy.cta.badge}
            </div>
            <h2 className="mt-8 text-5xl font-black tracking-tight text-white sm:text-7xl">
              {copy.cta.titleTop} <br /> <span className="text-brand-cyan">{copy.cta.titleHighlight}</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed text-white/60">
              {copy.cta.description}
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={downloadIMU}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient-brand flex w-full items-center justify-center gap-3 rounded-2xl px-10 py-5 text-base font-black sm:w-auto"
              >
                <Download className="h-5 w-5" />
                {copy.cta.downloadIMU}
              </a>
              <button
                type="button"
                disabled
                className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-10 py-5 text-base font-black text-white sm:w-auto"
              >
                <span>{copy.cta.downloadVision}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white/70">
                  {copy.cta.comingSoon}
                </span>
                <Play className="h-5 w-5 text-white/40" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
