import React from 'react';
import { Users, Activity, GraduationCap, HeartPulse, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Audience: React.FC = () => {
  const { t } = useLanguage();

  const groupIcons = [
    <Activity className="w-8 h-8 text-brand-blue" />,
    <Shield className="w-8 h-8 text-rose-500" />,
    <HeartPulse className="w-8 h-8 text-brand-green" />,
    <GraduationCap className="w-8 h-8 text-yellow-500" />,
    <Users className="w-8 h-8 text-purple-500" />
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            {t.audience.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {t.audience.groups.map((g, i) => (
                <div key={i} className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                    <div className="mb-4">{groupIcons[i]}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{g.title}</h3>
                    <p className="text-sm text-slate-600">{g.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;