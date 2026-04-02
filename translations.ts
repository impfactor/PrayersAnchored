import React from 'react';
import { 
  Camera, Zap, Brain, Activity, 
  UserCog, Video, Cpu, FileText,
  Users, Shield, HeartPulse, GraduationCap
} from 'lucide-react';

export type Language = 'zh' | 'en';

export const translations = {
  zh: {
    navbar: {
      features: '特色',
      protocols: '檢測項目',
      process: '使用流程',
      cta: '立即試用',
      legal: '法律文件'
    },
    hero: {
      badge: 'iOS App v1.0 正式上架',
      title: 'ChironMotion',
      titleSuffix: 'AI',
      subtitle: '您的口袋',
      subtitleHighlight: '生物力學實驗室',
      description: '結合電腦視覺與生成式 AI，無需昂貴設備。一支手機即可進行職業級的運動表現評估與傷害預防分析。',
      ctaVision: '視覺分析 (Vision)',
      ctaIMU: '動作感測器 (IMU)',
      comingSoon: '即將上架',
    },
    features: {
      header: {
        title: '雙模式檢測技術',
        subtitle: 'Hybrid Analysis',
        desc: '融合電腦視覺與感測器數據，提供全方位的運動科學分析。',
      },
      cards: [
        {
          title: 'AI 視覺分析',
          desc: '核心採用 Google MediaPipe 先進電腦視覺架構，提供高幀率的 33 點 3D 骨架追蹤。並結合 iPhone LiDAR 深度感測使數據更精確，不需手動抓跳躍關鍵點，系統自動幫你抓，無需任何穿戴式標記 (Markerless)。',
        },
        {
          title: '動作感測器 (IMU)',
          desc: '讀取手機內建加速度計，使用算法快速判斷跳躍關鍵點，不需手動輸入，精確計算發力率 (RFD)、著地衝擊 (G-Force) 與功率輸出。',
        },
        {
          title: 'AI 教練',
          desc: 'Apple Intelligence 驅動。不需上傳資料，數據在您的設備中運算。自動生成專業報告，針對動作缺失提供具體的修正建議與訓練指引。',
        }
      ],
      protocols: {
        title: '四大檢測模組',
        subtitle: '標準化運動科學測試流程',
        hint: '科學化數據與圖表支援',
        list: [
          {
            code: "CMJ",
            name: "下蹲跳",
            description: "評估下肢爆發力與垂直跳躍能力，檢測神經肌肉疲勞。",
          },
          {
            code: "SJ",
            name: "蹲踞跳",
            description: "檢測純向心收縮力量，排除伸展收縮循環 (SSC) 影響。",
          },
          {
            code: "DJ",
            name: "著地反彈跳",
            description: "分析反應肌力指數 (RSI) 與著地緩衝機制。",
          },
          {
            code: "SLS",
            name: "單腳站立",
            description: "評估平衡穩定度與評估本體感覺的能力，預防受傷。",
          },
        ]
      },
      data: {
        badge: '專業級數據',
        title: '看不見的力量，<br/>數據化呈現',
        desc: '提供完整的動力學曲線 (Kinetics) 與運動學角度 (Kinematics) 圖表。支援 CSV 原始數據匯出與 PDF 報告下載，滿足學術研究與專業訓練需求。',
        list: ['CSV 原始數據導出', 'PDF 專業分析報告', '動力學曲線圖表']
      }
    },
    workflow: {
      title: '簡單四步驟，專業上手',
      subtitle: '流暢的使用者體驗',
      steps: [
        {
          id: '01',
          title: '設定 (Setup)',
          desc: '建立受測者檔案，輸入身高體重與傷病史，選擇檢測項目。',
        },
        {
          id: '02',
          title: '拍攝 (Capture)',
          desc: '固定手機，跟隨語音導引 (TTS) 與倒數計時進行動作。系統自動捕捉關鍵幀。',
        },
        {
          id: '03',
          title: '即時分析 (Analysis)',
          desc: '檢測結束後立即運算。AI 智能教練針對動作缺失提供具體的修正建議與訓練指引。',
        },
        {
          id: '04',
          title: '匯出 (Export)',
          desc: '檢視對稱性分數與 RSI，下載 PDF 報告，或匯出 CSV 供研究使用。',
        }
      ]
    },
    audience: {
      title: '目標受眾與應用場景',
      groups: [
        {
          title: "體能教練",
          desc: "監測運動員疲勞程度 (RSI) 與爆發力發展曲線。",
        },
        {
          title: "運動防護員",
          desc: "場邊傷害篩檢、預防監測與重返賽場決策。",
        },
        {
          title: "物理治療師",
          desc: "評估重返運動 (RTS) 機制，特別是單腳站立不對稱性。",
        },
        {
          title: "運動研究員",
          desc: "以低成本獲取大規模生物力學數據 (CSV)，無需測力板。",
        },
        {
          title: "一般運動員",
          desc: "自我評估動作風險 (如：膝外翻)，預防 ACL 損傷。",
        }
      ]
    },
    landing: {
      hero: {
        badge: 'iOS App v1.0 正式上架',
        title: '量化真正重要的動作細節',
        description: 'IMU 以 200 Hz 感測資料量化跳躍，Vision 以影像、骨架與關鍵幀讀懂動作。兩款 App 分別對應不同的跳躍測試，讓訓練現場更快看出差異、進步與下一步。',
        ctaIMU: '下載 IMU 版',
        ctaVision: '下載 Vision 版',
        comingSoon: '即將推出',
        stats: [
          '200 Hz 採樣',
          '骨架追蹤',
          'AI 建議',
        ],
      },
      core: {
        eyebrow: '產品核心',
        title: '兩款 App，對應不同的跳躍測試',
        desc: 'IMU 讀數據，Vision 看動作。每一款都專注一種測試方式，讓教練與運動員更快找到該看的重點。',
        imuLabel: 'IMU 測試組',
        visionLabel: 'Vision 測試組',
        imuTitle: 'ChironMotion IMU',
        visionTitle: 'ChironMotion Vision',
        imuDesc: '用 iPhone 的感測資料，把 CMJ、SJ、DJ、SLS 變成可以比較的結果。跳躍高度、飛行時間、RSI、RFD 與落地衝擊，都能在同一個流程中看懂。',
        visionDesc: '以影像、骨架與關鍵幀看懂 CMJ、SJ、DS。需要時也能手動修正關鍵點，讓分析更貼近現場。',
        imuBullets: [
          '200 Hz 採樣，細看起跳與落地',
          'CMJ / SJ / DJ / SLS 對應現場測試',
          'PDF 報告、CSV 匯出與歷史紀錄',
        ],
        visionBullets: [
          '33 個關鍵點，姿態變化更好比',
          '骨架、關鍵幀與信心分數一起看',
          '影片匯入、比較與 PDF / CSV 匯出',
        ],
      },
      measurements: {
        eyebrow: '檢測詳情',
        title: '每個指標，都對應現場判讀',
        desc: 'IMU 看數據，Vision 看畫面。每個測試都會整理成清楚的結果，讓你快速知道表現在哪裡、差異在哪裡。',
        version: '版本 1.0 就緒',
        appMeasurement: '檢測',
        imu: {
          title: 'ChironMotion IMU',
          desc: '以 200 Hz 感測資料整理跳躍表現，從起跳到落地都能快速比對。',
          items: [
            ['CMJ', '下蹲跳'],
            ['SJ', '蹲踞跳'],
            ['DJ', '著地反彈跳'],
            ['SLS', '單腳站立'],
          ],
          notes: [
            '跳躍高度、飛行時間、RSI、RFD，直接整理。',
            'DJ 看反應力與落地控制，SLS 看單腳穩定。',
            '可輸出 PDF / CSV，方便追蹤訓練變化。',
          ],
        },
        vision: {
          title: 'ChironMotion Vision',
          desc: '以影像、骨架與關鍵幀看懂動作過程，讓姿態差異更容易看懂。',
          items: [
            ['CMJ', '下蹲跳'],
            ['SJ', '蹲踞跳'],
            ['DS', '動作序列'],
          ],
          notes: [
            '33 個關鍵點、信心分數與手動修正。',
            'CMJ、SJ、DS 的畫面比對更直觀。',
            '可匯入影片並輸出 PDF / CSV。',
          ],
        },
      },
      process: {
        eyebrow: '使用流程',
        title: '四步，完成一次跳躍測試',
        desc: '選好 App，完成測試，結果會直接整理成你看得懂的內容。',
        steps: [
          { id: '01', title: '選擇 App', desc: 'IMU 或 Vision，對應不同測試。' },
          { id: '02', title: '完成設定', desc: '依提示開啟感測器或攝影機。' },
          { id: '03', title: '開始跳躍', desc: '完成 CMJ、SJ、DJ、SLS 或 DS。' },
          { id: '04', title: '查看結果', desc: '立即看到分析、AI 建議與報告。' },
        ],
      },
      privacy: {
        eyebrow: '透明度',
        title: '隱私與數據處理',
        desc: '我們相信數據主權。ChironMotion 系列 App 的每一行代碼，都以保護您的運動隱私為最高原則。',
        imuBadge: 'IMU Legal Info',
        imuTitle: 'ChironMotion IMU',
        imuUpdated: '更新日期：2026/02/11。針對感測器數據、裝置信息與使用紀錄進行透明化說明，確保您的訓練隱私無虞。',
        imuBullets: [
          '本地端即時運算，數據歸屬使用者',
          '非醫療用途聲明，僅供運動表現參考',
        ],
        visionBadge: 'Vision Legal Info',
        visionTitle: 'ChironMotion Vision',
        visionUpdated: '更新日期：2026/03/29。針對影像、匯入影片、本地 AI 建議、權限用途與 AI 標示方式進行透明說明。',
        visionBullets: [
          '影像與匯入影片都在本地處理，原始影片不會上傳',
          'AI 建議在裝置上生成，並在報告中清楚標示',
        ],
        imuLink: '查看 IMU 完整條款',
        visionLink: '查看 Vision 完整條款',
      },
      cta: {
        badge: 'Ready to test',
        titleTop: '現在就開始',
        titleHighlight: '看懂你的跳躍',
        description: 'IMU 看數據，Vision 看畫面。選擇適合你的測試方式，從今天開始把每次跳躍看得更清楚。',
        downloadIMU: '下載 IMU',
        downloadVision: '下載 Vision',
        comingSoon: '即將推出',
      },
    },
    footer: {
      slogan: '"別再憑感覺，用數據說話。"',
      subSlogan: '從傷害預防到突破極限，ChironMotion AI 是您最佳的訓練夥伴。',
      disclaimerTitle: '免責聲明',
      disclaimerText: '本系統 (ChironMotion AI) 僅供運動表現分析、訓練監測與學術參考使用。結果不應作為醫療診斷、治療或疾病預防的唯一依據。若受測者有急性疼痛或嚴重肌肉骨骼損傷，請諮詢醫師或物理治療師。',
      motionBadge: '動作分析',
      iosBadge: 'iOS 原生體驗',
      techSpecs: '技術規格',
      specsList: ['iOS App', '邊緣運算 AI 隱私', 'LiDAR 深度感測'],
      productsTitle: '產品生態',
      developerApi: 'Developer API',
      supportTitle: '聯絡與支持',
      supportText: '需要定制化方案或技術支持？請直接來信，我們將儘速回覆。',
      legalTitle: 'Legal & Copyright',
      quote: '"Measure it, improve it."',
      legalLink: '法律文件中心',
      copyrightPrefix: '©',
      copyrightSuffix: '版權所有。',
      contact: '聯絡我們',
      copyright: '版權所有。',
      designedBy: '為表現而生。',
      legal: '法律文件'
    }
  },
  en: {
    navbar: {
      features: 'Features',
      protocols: 'Protocols',
      process: 'Workflow',
      cta: 'Try Now',
      legal: 'Legal'
    },
    hero: {
      badge: 'iOS App v1.0 Official Launch',
      title: 'ChironMotion',
      titleSuffix: 'AI',
      subtitle: 'Your Pocket',
      subtitleHighlight: 'Biomechanics Lab',
      description: 'Combining computer vision and Generative AI, without expensive equipment. Perform professional-grade athletic assessment and injury prevention analysis with just a smartphone.',
      ctaVision: 'Vision Analysis',
      ctaIMU: 'IMU Sensor',
      comingSoon: 'Coming Soon',
    },
    features: {
      header: {
        title: 'Dual-Mode Technology',
        subtitle: 'Hybrid Analysis',
        desc: 'Fusing computer vision and sensor data to provide comprehensive sports science analysis.',
      },
      cards: [
        {
          title: 'AI Vision Analysis',
          desc: 'Core technology powered by Google MediaPipe\'s advanced computer vision framework, delivering high-framerate 33-point 3D skeleton tracking. Combined with iPhone LiDAR depth sensing for more precise data, no manual jump key point capture required, the system automatically captures for you—completely markerless.',
        },
        {
          title: 'Motion Sensors (IMU)',
          desc: 'Reads built-in accelerometers, uses algorithms to quickly determine jump key points without manual input, and precisely calculates Rate of Force Development (RFD), landing impact (G-Force), and power output.',
        },
        {
          title: 'AI Coach',
          desc: 'Powered by Apple Intelligence. No data upload required, data is processed on your device. Automatically generates professional reports with specific correction suggestions and training guidelines for movement deficits.',
        }
      ],
      protocols: {
        title: '4 Core Protocols',
        subtitle: 'Standardized Sports Science Testing',
        hint: 'Scientific Data & Charts',
        list: [
          {
            code: "CMJ",
            name: "Countermovement Jump",
            description: "Assess lower limb explosive power and vertical jump ability; detect neuromuscular fatigue.",
          },
          {
            code: "SJ",
            name: "Squat Jump",
            description: "Measure pure concentric strength, eliminating the Stretch-Shortening Cycle (SSC) effect.",
          },
          {
            code: "DJ",
            name: "Drop Jump",
            description: "Analyze Reactive Strength Index (RSI) and landing mechanics.",
          },
          {
            code: "SLS",
            name: "Single Leg Stance",
            description: "Evaluate balance stability and proprioception to prevent injuries.",
          },
        ]
      },
      data: {
        badge: 'Professional Data',
        title: 'Invisible Forces,<br/>Visualized',
        desc: 'Provides complete Kinetics curves and Kinematics angle charts. Supports raw CSV export and PDF report downloads for academic research and professional training.',
        list: ['CSV Raw Data Export', 'PDF Professional Report', 'Kinetics Charts']
      }
    },
    workflow: {
      title: '4 Steps to Mastery',
      subtitle: 'Seamless User Journey',
      steps: [
        {
          id: '01',
          title: 'Setup',
          desc: 'Create athlete profile, input anthropometrics and injury history, select protocol.',
        },
        {
          id: '02',
          title: 'Capture',
          desc: 'Secure phone, follow TTS voice guidance and countdown. System auto-captures key frames.',
        },
        {
          id: '03',
          title: 'Analysis',
          desc: 'Instant computation post-test. AI coach provides correction suggestions for deficits.',
        },
        {
          id: '04',
          title: 'Export',
          desc: 'Review symmetry scores and RSI, download PDF reports, or export CSV for research.',
        }
      ]
    },
    audience: {
      title: 'Target Audience & Scenarios',
      groups: [
        {
          title: "S&C Coaches",
          desc: "Monitor athlete fatigue (RSI) and explosive power development curves.",
        },
        {
          title: "Athletic Trainers",
          desc: "On-field injury screening, prevention monitoring, and return-to-play decisions.",
        },
        {
          title: "Physical Therapists",
          desc: "Evaluate Return to Sport (RTS) mechanisms, specifically SLS asymmetry.",
        },
        {
          title: "Sports Researchers",
          desc: "Acquire large-scale biomechanical data (CSV) at low cost without force plates.",
        },
        {
          title: "General Athletes",
          desc: "Self-assess movement risks (e.g., Knee Valgus) to prevent ACL injuries.",
        }
      ]
    },
    landing: {
      hero: {
        badge: 'iOS App v1.0 Official Release',
        title: 'Measure What Matters in Movement',
        description: 'IMU turns 200 Hz sensor data into jump metrics. Vision reads movement through video, skeleton tracking, and key frames. Two apps, two testing workflows, one clearer training view.',
        ctaIMU: 'Download IMU',
        ctaVision: 'Download Vision',
        comingSoon: 'Coming Soon',
        stats: [
          '200 Hz Sampling',
          'Skeleton Tracking',
          'AI Suggestions',
        ],
      },
      core: {
        eyebrow: 'Product Core',
        title: 'Two apps, two jump-test workflows',
        desc: 'IMU reads data, Vision reads movement. Each app focuses on one test style so coaches and athletes can see what matters faster.',
        imuLabel: 'IMU Test Set',
        visionLabel: 'Vision Test Set',
        imuTitle: 'ChironMotion IMU',
        visionTitle: 'ChironMotion Vision',
        imuDesc: 'Use iPhone sensor data to turn CMJ, SJ, DJ, and SLS into comparable results. Jump height, flight time, RSI, RFD, and landing impact are all easy to read in one flow.',
        visionDesc: 'Use video, skeleton tracking, and key frames to understand CMJ, SJ, and DS. Manual key-point correction is available when needed, so the analysis stays close to real-world movement.',
        imuBullets: [
          '200 Hz sampling for takeoff and landing details',
          'CMJ / SJ / DJ / SLS for field testing',
          'PDF reports, CSV export, and history tracking',
        ],
        visionBullets: [
          '33 key points make posture changes easier to compare',
          'Skeleton, key frames, and confidence scores in one view',
          'Video import with PDF / CSV export',
        ],
      },
      measurements: {
        eyebrow: 'Measurement Details',
        title: 'Every metric maps to real-world interpretation',
        desc: 'IMU reads data, Vision reads frames. Every test is organized into clear results so you can see what changed and where.',
        version: 'Version 1.0 Ready',
        appMeasurement: 'Measurement',
        imu: {
          title: 'ChironMotion IMU',
          desc: 'Organize jump performance with 200 Hz sensor data, from takeoff to landing.',
          items: [
            ['CMJ', 'Countermovement Jump'],
            ['SJ', 'Squat Jump'],
            ['DJ', 'Drop Jump'],
            ['SLS', 'Single Leg Stance'],
          ],
          notes: [
            'Jump height, flight time, RSI, and RFD are organized automatically.',
            'DJ highlights reactive power and landing control, while SLS shows single-leg stability.',
            'Export PDF / CSV to track training changes over time.',
          ],
        },
        vision: {
          title: 'ChironMotion Vision',
          desc: 'Use video, skeleton tracking, and key frames to understand the motion process and make posture differences easier to see.',
          items: [
            ['CMJ', 'Countermovement Jump'],
            ['SJ', 'Squat Jump'],
            ['DS', 'Motion Sequence'],
          ],
          notes: [
            '33 key points, confidence scores, and manual correction.',
            'Side-by-side comparison of CMJ, SJ, and DS becomes more intuitive.',
            'Import video and export PDF / CSV.',
          ],
        },
      },
      process: {
        eyebrow: 'Workflow',
        title: '4 steps to complete a jump test',
        desc: 'Choose the app, complete the test, and get results that are easy to understand.',
        steps: [
          { id: '01', title: 'Choose the App', desc: 'IMU or Vision, depending on the test.' },
          { id: '02', title: 'Complete Setup', desc: 'Follow the prompts to enable sensors or the camera.' },
          { id: '03', title: 'Start Jumping', desc: 'Complete CMJ, SJ, DJ, SLS, or DS.' },
          { id: '04', title: 'Review Results', desc: 'See analysis, AI suggestions, and reports immediately.' },
        ],
      },
      privacy: {
        eyebrow: 'Transparency',
        title: 'Privacy and Data Handling',
        desc: 'We believe in data sovereignty. Every line of code in the ChironMotion apps is built to protect your movement privacy first.',
        imuBadge: 'IMU Legal Info',
        imuTitle: 'ChironMotion IMU',
        imuUpdated: 'Updated: 2026/02/11. We explain sensor data, device information, and usage records transparently so your training privacy stays protected.',
        imuBullets: [
          'On-device real-time computation, data stays with the user',
          'Not for medical use, for performance reference only',
        ],
        visionBadge: 'Vision Legal Info',
        visionTitle: 'ChironMotion Vision',
        visionUpdated: 'Updated: 2026/03/29. Transparent explanation of image data, imported videos, on-device AI advice, permission usage, and AI labeling.',
        visionBullets: [
          'Images and imported videos are processed locally, and raw video is never uploaded',
          'AI advice is generated on-device and clearly labeled in reports',
        ],
        imuLink: 'View Full IMU Terms',
        visionLink: 'View Full Vision Terms',
      },
      cta: {
        badge: 'Ready to test',
        titleTop: 'Start now',
        titleHighlight: 'See your jumps clearly',
        description: 'IMU reads data, Vision reads frames. Choose the testing style that fits you and make every jump easier to understand from today onward.',
        downloadIMU: 'Download IMU',
        downloadVision: 'Download Vision',
        comingSoon: 'Coming Soon',
      },
    },
    footer: {
      slogan: "\"Don't just guess, Measure it.\"",
      subSlogan: 'From injury prevention to breaking limits, ChironMotion AI is your best training partner.',
      disclaimerTitle: 'Disclaimer',
      disclaimerText: 'This system (ChironMotion AI) is for athletic performance analysis, training monitoring, and academic reference only. Results should not be used as the sole basis for medical diagnosis, treatment, or disease prevention. If the subject has acute pain or severe musculoskeletal injury, please consult a physician or physical therapist.',
      motionBadge: 'Motion Analysis',
      iosBadge: 'iOS Native Experience',
      techSpecs: 'Tech Specs',
      specsList: ['iOS App', 'Edge AI Privacy', 'LiDAR Depth Sensing'],
      productsTitle: 'Product Ecosystem',
      developerApi: 'Developer API',
      supportTitle: 'Contact & Support',
      supportText: 'Need a custom solution or technical support? Email us and we will reply as soon as possible.',
      legalTitle: 'Legal & Copyright',
      quote: '"Measure it, improve it."',
      legalLink: 'Legal Center',
      copyrightPrefix: '©',
      copyrightSuffix: 'All rights reserved.',
      contact: 'Contact Us',
      copyright: 'All rights reserved.',
      designedBy: 'Designed for Performance.',
      legal: 'Legal'
    }
  }
};
