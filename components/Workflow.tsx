import React from 'react';
import { UserCog, Video, Cpu, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Workflow: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    { icon: <UserCog className="w-6 h-6 text-white" />, color: 'bg-blue-600' },
    { icon: <Video className="w-6 h-6 text-white" />, color: 'bg-brand-cyan' },
    { icon: <Cpu className="w-6 h-6 text-white" />, color: 'bg-brand-green' },
    { icon: <FileText className="w-6 h-6 text-white" />, color: 'bg-purple-600' }
  ];

  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">{t.workflow.title}</h2>
          <p className="text-slate-500 mt-4">{t.workflow.subtitle}</p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {t.workflow.steps.map((step, index) => (
                    <div key={step.id} className="group">
                        <div className="flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-2xl ${stepIcons[index].color} shadow-lg shadow-slate-200 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                {stepIcons[index].icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                <span className="text-slate-400 text-sm block mb-1">{step.id}</span>
                                {step.title}
                            </h3>
                            <p className="text-slate-600 text-sm px-4">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;