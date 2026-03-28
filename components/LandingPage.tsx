import React, { useEffect } from 'react';
import { ArrowRight, Download, Play, ShieldCheck, Smartphone, Sparkles, Activity, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import imuLogo from '../../素材/ChironmotionIMU/CMI.jpg';
import imuResultImage from '../assets/imu-result.jpg';
import imuSymmetryImage from '../assets/imu-symmetry.jpg';

import visionLogo from '../../素材/ChironmotionVosion/CMV.png';
import visionResultImage from '../assets/vision-result.jpg';
import visionSkeletonImage from '../assets/vision-skeleton.jpg';
import imuVideo from '../../素材/ChironmotionIMU/ChironMotionIMU.mp4';

const downloadIMU = 'https://apps.apple.com/us/app/chironmotion-imu/id6758951844';

const featureItems = [
  {
    icon: <Activity className="h-5 w-5" />,
    title: '聚焦跳躍分析',
    desc: '以 CMJ、SLS、起跳與落地等情境為核心，讓使用者快速理解動作表現。',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: '數據與畫面並行',
    desc: 'IMU 讀數據，Vision 看姿勢，兩種視角合在一起更容易做判讀。',
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: 'iPhone 直接操作',
    desc: '從測試、檢視到下載報告，都是手機上就能完成的流程。',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: '隱私與本機優先',
    desc: '以本機處理與最小化資料為原則，保留使用者對資料的掌控感。',
  },
];

interface MeasurementGroup {
  app: string;
  title: string;
  desc: string;
  items: string[][];
  notes: string[];
  image?: any;
}

const measurementGroups: MeasurementGroup[] = [
  {
    app: 'IMU',
    title: 'ChironMotion IMU',
    desc: '以 200 Hz 感測資料整理跳躍表現，從起跳到落地都能快速比對。',
    items: [
      ['CMJ', 'Countermovement Jump'],
      ['SJ', 'Squat Jump'],
      ['DJ', 'Drop Jump'],
      ['SLS', 'Single Leg Stance'],
    ],
    notes: [
      '跳躍高度、飛行時間、RSI、RFD，直接整理。',
      'DJ 看反應力與落地控制，SLS 看單腳穩定。',
      '可輸出 PDF / CSV，方便追蹤訓練變化。',
    ],
    image: imuSymmetryImage,
  },
  {
    app: 'Vision',
    title: 'ChironMotion Vision',
    desc: '以影像、骨架與關鍵幀整理動作過程，讓姿態差異更容易看懂。',
    items: [
      ['CMJ', 'Countermovement Jump'],
      ['SJ', 'Squat Jump'],
      ['DS', 'DS'],
    ],
    notes: [
      '33 個關鍵點、信心分數與手動修正。',
      'CMJ、SJ、DS 的畫面比對更直觀。',
      '可匯入影片並輸出 PDF / CSV。',
    ],
    image: visionSkeletonImage,
  },
];

const LandingPage: React.FC = () => {
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
            量化真正重要的動作細節
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            IMU 以 200 Hz 感測資料量化跳躍，Vision 以影像、骨架與關鍵幀讀懂動作。
            兩款 App 分別對應不同的跳躍測試，讓訓練現場更快看出差異、進步與下一步。
          </p>


          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href={downloadIMU}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-brand flex w-full items-center justify-center gap-2 rounded-full px-8 py-5 text-base font-black shadow-2xl sm:w-auto"
            >
              下載 IMU 版
              <ArrowRight className="h-5 w-5" />
            </a>
            <button
              type="button"
              disabled
              className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-5 text-base font-black text-slate-950 transition sm:w-auto"
            >
              Vision 版
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-500">
                即將推出
              </span>
              <Play className="h-5 w-5 text-slate-400" />
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-6 overflow-hidden py-2 grayscale opacity-40">
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-sm font-black tracking-tighter">200 HZ IMU</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-400"></div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-sm font-black tracking-tighter">骨架追蹤</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-400"></div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-sm font-black tracking-tighter">AI 建議</span>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col items-center text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">產品核心</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            兩款 App，對應不同的跳躍測試
          </h2>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-brand-blue/20"></div>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            IMU 讀數據，Vision 看動作。每一款都專注一種測試方式，讓教練與運動員更快找到該看的重點。
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
                    IMU Test Set
                  </div>
                  <h3 className="mt-1 text-3xl font-black text-slate-950">ChironMotion IMU</h3>
                </div>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                用 iPhone 的感測資料，把 CMJ、SJ、DJ、SLS 變成可以比較的結果。
                跳躍高度、飛行時間、RSI、RFD 與落地衝擊，都能在同一個流程中看懂。
              </p>

              <div className="mt-auto pt-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                   <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      200 Hz 採樣，細看起跳與落地
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      CMJ / SJ / DJ / SLS 對應現場測試
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      PDF 報告、CSV 匯出與歷史紀錄
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
                    Vision Test Set
                  </div>
                  <h3 className="mt-1 text-3xl font-black text-slate-950">ChironMotion Vision</h3>
                </div>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                以影像、骨架與關鍵幀看懂 CMJ、SJ、DS。
                需要時也能手動修正關鍵點，讓分析更貼近現場。
              </p>

              <div className="mt-auto pt-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                   <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      33 個關鍵點，姿態變化更好比
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      骨架、關鍵幀與信心分數一起看
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <CheckCircle2 size={14} />
                      </div>
                      影片匯入、比較與 PDF / CSV 匯出
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">檢測詳情</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              每個指標，都對應現場判讀
            </h2>
            <div className="mt-4 h-1.5 w-20 rounded-full bg-brand-blue/20"></div>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
              IMU 看數據，Vision 看畫面。每個測試都會整理成清楚的結果，讓你快速知道表現在哪裡、差異在哪裡。
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {measurementGroups.map((group, idx) => (
              <article key={group.app} className="reveal glass-card-premium rounded-[32px] bg-white p-8 sm:p-10" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-blue">{group.app} Measurement</div>
                    <h3 className="mt-1 text-2xl font-black text-slate-950">{group.title}</h3>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-500">
                    VERSION 1.0 Ready
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">使用流程</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              四步，完成一次跳躍測試
            </h2>
            <div className="mt-4 h-1.5 w-20 rounded-full bg-brand-blue/20"></div>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
              選好 App，完成測試，結果會直接整理成你看得懂的內容。
            </p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 right-0 hidden h-0.5 -translate-y-12 bg-slate-100 md:block"></div>
            
            {[
              ['01', '選擇 App', 'IMU 或 Vision，對應不同測試。'],
              ['02', '完成設定', '依提示開啟感測器或攝影機。'],
              ['03', '開始跳躍', '完成 CMJ、SJ、DJ、SLS 或 DS。'],
              ['04', '查看結果', '立即看到分析、AI 建議與報告。'],
            ].map(([step, title, desc], idx) => (
              <article key={step} className="reveal group relative text-center" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[32px] bg-slate-950 text-2xl font-black text-white shadow-2xl transition-all group-hover:bg-brand-blue group-hover:scale-110">
                  {step}
                  <div className="absolute -inset-2 rounded-[38px] border-2 border-brand-blue/0 transition-all group-hover:border-brand-blue/20"></div>
                </div>
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section id="legal" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col items-center text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">透明度</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            隱私與數據處理
          </h2>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-brand-blue/20"></div>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed font-medium">
            我們相信數據主權。ChironMotion 系列 App 的每一行代碼，都以保護您的運動隱私為最高原則。
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
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-blue">IMU Legal Info</div>
                <h3 className="text-xl font-black text-slate-950">ChironMotion IMU</h3>
              </div>
            </div>
            <p className="mt-6 text-sm font-medium leading-relaxed text-slate-600">
               更新日期：2026/02/11。針對感測器數據、裝置信息與使用紀錄進行透明化說明，確保您的訓練隱私無虞。
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-brand-blue" />
                本地端即時運算，數據歸屬使用者
              </li>
              <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-brand-blue" />
                非醫療用途聲明，僅供運動表現參考
              </li>
            </ul>
            <Link to="/legal#imu" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-brand-blue transition hover:gap-3">
              查看 IMU 完整條款
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
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">Vision Legal Info</div>
                <h3 className="text-xl font-black text-slate-950">ChironMotion Vision</h3>
              </div>
            </div>
            <p className="mt-6 text-sm font-medium leading-relaxed text-slate-600">
               更新日期：2026/03/17。針對影像辨識與 AI 骨架追蹤的數據流與倫理原則進行詳細說明。
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-brand-cyan" />
                強調影像隱私：裝置端處理即刪，不留底片
              </li>
              <li className="flex items-center gap-3 text-xs font-bold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-brand-cyan" />
                AI 倫理聲明，明確區分訓練建議與醫療指示
              </li>
            </ul>
            <Link to="/legal#vision" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-brand-cyan transition hover:gap-3">
              查看 Vision 完整條款
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
              Ready to test
            </div>
            <h2 className="mt-8 text-5xl font-black tracking-tight text-white sm:text-7xl">
              現在就開始 <br /> <span className="text-brand-cyan">看懂你的跳躍</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed text-white/60">
              IMU 看數據，Vision 看畫面。選擇適合你的測試方式，從今天開始把每次跳躍看得更清楚。
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={downloadIMU}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient-brand flex w-full items-center justify-center gap-3 rounded-2xl px-10 py-5 text-base font-black sm:w-auto"
              >
                <Download className="h-5 w-5" />
                下載 IMU
              </a>
              <button
                type="button"
                disabled
                className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-10 py-5 text-base font-black text-white sm:w-auto"
              >
                <span>Vision</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white/70">
                  即將推出
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
