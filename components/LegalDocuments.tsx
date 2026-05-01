import React, { useEffect } from 'react';
import { Download, Printer, ShieldCheck, ChevronRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { legalData } from '../constants/legalData';

const imuLogo = 'https://raw.githubusercontent.com/impfactor/intro-chironmotion/main/assets/CMI.jpg';
const visionLogo = 'https://raw.githubusercontent.com/impfactor/intro-chironmotion/main/assets/CMV.png';

type AppKey = 'imu' | 'vision';

const LegalDocuments: React.FC = () => {
  const navigate = useNavigate();
  const { appKey: appParam, sectionId: sectionParam } = useParams();
  const { language } = useLanguage();
  const activeApp: AppKey = appParam === 'vision' ? 'vision' : 'imu';

  const legalCopyMap = {
    zh: {
      badge: 'Legal Resource Center',
      title: 'ChironMotion 法律中心',
      desc: '我們堅持「隱私優先」的核心價值。以下為 ChironMotion 系列 App 的正式法律條款，包含您的權益保障、數據保護政策與 AI 倫理指南。',
      print: '列印檔案',
      secure: '所有協議受法律管轄且即時生效',
      contactBadge: 'Support Center',
      contactTitle: '聯繫數據安全團隊',
      contactDesc: '對條款或隱私有任何疑問？我們的法務與安全團隊隨時為您解答。',
      email: '電子郵件聯絡',
    },
    en: {
      badge: 'Legal Resource Center',
      title: 'ChironMotion Legal Center',
      desc: 'We keep privacy first. Below are the official legal terms for the ChironMotion apps, including user rights, data protection policy, and AI ethics guidance.',
      print: 'Print File',
      secure: 'All agreements are governed by law and effective immediately',
      contactBadge: 'Support Center',
      contactTitle: 'Contact the Data Security Team',
      contactDesc: 'Have questions about the terms or privacy policy? Our legal and security team is ready to help.',
      email: 'Email Us',
    },
    ko: {
      badge: 'Legal Resource Center',
      title: 'ChironMotion 법적 고지 센터',
      desc: '저희는 "프라이버시 우선"이라는 핵심 가치를 지킵니다. 아래는 ChironMotion 시리즈 앱의 공식 법적 약관이며, 사용자의 권리, 데이터 보호 정책, AI 윤리 가이드를 포함합니다.',
      print: '파일 인쇄',
      secure: '모든 약관은 법률에 따라 즉시 효력을 발생합니다',
      contactBadge: 'Support Center',
      contactTitle: '데이터 보안팀에 문의',
      contactDesc: '약관이나 프라이버시에 관해 궁금한 점이 있으신가요? 법무 및 보안팀이 언제든지 답변드립니다.',
      email: '이메일로 문의',
    },
    ja: {
      badge: 'Legal Resource Center',
      title: 'ChironMotion 法的情報センター',
      desc: '私たちは「プライバシー第一」を信条としています。以下は ChironMotion シリーズアプリの正式な法的条項で、ユーザーの権利、データ保護方針、AI 倫理ガイドラインを含みます。',
      print: 'ファイルを印刷',
      secure: 'すべての規約は法律に準拠し即時有効です',
      contactBadge: 'Support Center',
      contactTitle: 'データセキュリティチームへ連絡',
      contactDesc: '規約やプライバシーについてご不明な点がございましたら、法務・セキュリティチームまでお問い合わせください。',
      email: 'メールで問い合わせ',
    },
  } as const;

  const copy = legalCopyMap[language] ?? legalCopyMap.zh;

  const appTitleMap: Record<typeof language, { imu: string; vision: string }> = {
    zh: { imu: 'IMU 分析儀', vision: 'Vision 視覺分析' },
    en: { imu: 'IMU Analysis', vision: 'Vision Analysis' },
    ko: { imu: 'IMU 분석기', vision: 'Vision 시각 분석' },
    ja: { imu: 'IMU アナライザー', vision: 'Vision ビジョン分析' },
  };

  const current = legalData[activeApp];
  const activeSectionId = sectionParam && current.sections.some((section) => section.id === sectionParam)
    ? sectionParam
    : null;
  const visibleSections = activeSectionId
    ? current.sections.filter((section) => section.id === activeSectionId)
    : current.sections;

  useEffect(() => {
    if (appParam && appParam !== 'imu' && appParam !== 'vision') {
      navigate('/legal/imu/terms', { replace: true });
      return;
    }

    if (sectionParam && !current.sections.some((section) => section.id === sectionParam)) {
      navigate(`/legal/${activeApp}/terms`, { replace: true });
    }
  }, [activeApp, appParam, current.sections, navigate, sectionParam]);

  // Legal sections only have zh / en copy. For ko / ja, show English as the
  // primary heading (with the Chinese subtitle below) so non-Chinese readers
  // still get a heading they can read.
  const getSectionTitle = (section: { title: string; titleEn: string }) =>
    language === 'zh' ? section.title : section.titleEn;
  const getSectionSubtitle = (section: { title: string; titleEn: string }) =>
    language === 'zh' ? section.titleEn : section.title;

  const selectApp = (app: AppKey) => {
    navigate(`/legal/${app}/${activeSectionId ?? 'terms'}`);
  };

  const jumpToSection = (sectionId: string) => {
    navigate(`/legal/${activeApp}/${sectionId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="overflow-hidden rounded-[48px] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 transition-all hover:shadow-2xl">
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
                  const appTitle = appTitleMap[language][appKey];
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
        <section className="mt-10 overflow-hidden rounded-full border border-slate-200 bg-white/70 p-1.5 shadow-sm backdrop-blur-md">
          <div className="flex gap-1 overflow-x-auto p-1 scrollbar-hide">
            {current.sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => jumpToSection(section.id)}
                className={`shrink-0 rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-widest transition ${
                  activeSectionId === section.id || (!activeSectionId && section.id === 'terms')
                    ? 'bg-brand-blue text-white'
                    : 'text-slate-600 hover:bg-brand-blue hover:text-white'
                }`}
              >
                {getSectionTitle(section)}
              </button>
            ))}
          </div>
        </section>

        {/* Main Content Areas */}
        <main className="mt-16 space-y-20">
          <div id={activeApp} className="scroll-mt-24" aria-hidden="true" />
          {visibleSections.map((section) => (
            <section
              key={section.id}
              id={`${activeApp}-${section.id}`}
              className="scroll-mt-24 space-y-8"
            >
              <div className="flex flex-col border-b-2 border-slate-100 pb-2">
                <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  {getSectionTitle(section)}
                </h2>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.3em] text-brand-blue/40 italic">
                  {getSectionSubtitle(section)}
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
          <section className="rounded-[48px] bg-slate-950 p-10 text-center text-white shadow-2xl sm:p-20">
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
