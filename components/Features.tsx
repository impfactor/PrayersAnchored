import React from 'react';
import { Camera, Zap, Brain, Activity, BarChart2, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex flex-col items-center gap-1">
            <span>{t.features.header.title}</span>
            <span className="text-brand-cyan">{t.features.header.subtitle}</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            {t.features.header.desc}
          </p>
        </div>

        {/* Tech Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="glass-card p-8 rounded-2xl relative group overflow-hidden hover:border-brand-blue/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Camera size={100} className="text-brand-blue" />
            </div>
            <div className="bg-brand-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Camera className="text-brand-blue" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.features.cards[0].title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.features.cards[0].desc}
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative group overflow-hidden hover:border-yellow-400/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Smartphone size={100} className="text-yellow-500" />
            </div>
            <div className="bg-yellow-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Zap className="text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.features.cards[1].title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.features.cards[1].desc}
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative group overflow-hidden hover:border-brand-green/30 transition-colors">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Brain size={100} className="text-brand-green" />
            </div>
            <div className="bg-brand-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Brain className="text-brand-green" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.features.cards[2].title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t.features.cards[2].desc}
            </p>
          </div>
        </div>

        {/* Protocols Section */}
        <div id="protocols" className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-slate-100 pb-4">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900">{t.features.protocols.title}</h3>
                    <p className="text-slate-500 mt-2">{t.features.protocols.subtitle}</p>
                </div>
                <div className="hidden md:block text-brand-blue text-sm font-medium">
                    {t.features.protocols.hint}
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.features.protocols.list.map((protocol) => (
                    <div key={protocol.code} className="bg-slate-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-slate-100 group">
                        <div className="text-4xl font-black text-slate-200 mb-4 group-hover:text-brand-blue/20 transition-colors">{protocol.code}</div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{protocol.name}</h4>
                        <p className="text-sm text-slate-600">{protocol.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Data Visualization Teaser */}
        <div className="glass-card rounded-3xl p-8 md:p-12 bg-slate-50 border-0">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-6">
                    <BarChart2 size={16} />
                    <span>{t.features.data.badge}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4" dangerouslySetInnerHTML={{__html: t.features.data.title}}></h3>
                <p className="text-slate-600 mb-6 text-lg">
                    {t.features.data.desc}
                </p>
                <ul className="space-y-3 mt-8">
                    {t.features.data.list.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-700">
                            <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                <Activity size={12} className="text-brand-blue" />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Features;