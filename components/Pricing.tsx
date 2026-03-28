import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">{t.pricing.title}</h2>
          <p className="text-slate-500 mt-4">{t.pricing.subtitle}</p>
        </div>

        {/* Scrollable Container */}
        <div className="flex flex-nowrap overflow-x-auto gap-4 pt-12 pb-12 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth items-stretch">
          {t.pricing.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                flex-none w-[85vw] sm:w-[300px] snap-center
                relative rounded-2xl p-6 flex flex-col border transition-all duration-300
                ${plan.highlight 
                  ? 'bg-brand-blue/5 border-brand-blue shadow-xl shadow-brand-blue/10 scale-105 z-10' 
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{plan.target}</p>
                <div className="mt-4 flex items-baseline">
                  <span className={`text-2xl font-bold ${plan.highlight ? 'text-brand-blue' : 'text-slate-900'}`}>{plan.price}</span>
                  {plan.price !== '免費' && plan.price !== 'Free' && <span className="text-sm text-slate-500 ml-1">{t.pricing.unit}</span>}
                </div>
                <p className={`text-xs mt-2 font-medium ${plan.highlight ? 'text-brand-blue' : 'text-slate-400'}`}>{plan.limit}</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-brand-green mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="https://forms.gle/WwWXFLNgctJmmeeLA"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full py-2 px-4 rounded-lg text-sm font-bold transition-colors block text-center ${
                  plan.highlight 
                  ? 'bg-brand-blue hover:bg-blue-800 text-white shadow-lg shadow-brand-blue/20' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}>
                {t.pricing.cta}
              </a>
            </div>
          ))}
          
          {/* Right padding spacer for easier scrolling to the last item */}
          <div className="w-2 sm:w-0 flex-none"></div>
        </div>
        
        {/* Mobile Scroll Hint */}
        <div className="flex justify-center -mt-4 mb-8 md:hidden">
             <p className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">← Swipe →</p>
        </div>
        
        <p className="text-center text-slate-400 text-sm mt-4">
            {t.pricing.note}
        </p>
      </div>
    </section>
  );
};

export default Pricing;