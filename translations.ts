import React from 'react';
import { 
  Camera, Zap, Brain, Activity, 
  UserCog, Video, Cpu, FileText,
  Users, Shield, HeartPulse, GraduationCap
} from 'lucide-react';

export type Language = 'zh' | 'en' | 'ko' | 'ja';

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
        titleTop: '看不見的力量，',
        titleBottom: '數據化呈現',
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
        titleTop: 'Invisible Forces,',
        titleBottom: 'Visualized',
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
  },
  ko: {
    navbar: {
      features: '특징',
      protocols: '검사 항목',
      process: '사용 절차',
      cta: '지금 시작하기',
      legal: '법적 고지'
    },
    hero: {
      badge: 'iOS App v1.0 정식 출시',
      title: 'ChironMotion',
      titleSuffix: 'AI',
      subtitle: '주머니 속',
      subtitleHighlight: '생체역학 연구실',
      description: '컴퓨터 비전과 생성형 AI를 결합하여, 고가의 장비 없이 스마트폰 한 대로 프로 수준의 운동 능력 평가와 부상 예방 분석을 수행합니다.',
      ctaVision: '비전 분석 (Vision)',
      ctaIMU: '동작 센서 (IMU)',
      comingSoon: '출시 예정',
    },
    features: {
      header: {
        title: '듀얼 모드 검사 기술',
        subtitle: 'Hybrid Analysis',
        desc: '컴퓨터 비전과 센서 데이터를 융합하여 종합적인 스포츠 과학 분석을 제공합니다.',
      },
      cards: [
        {
          title: 'AI 비전 분석',
          desc: 'Google MediaPipe의 첨단 컴퓨터 비전 프레임워크를 기반으로 고프레임의 33포인트 3D 골격 추적을 제공합니다. iPhone LiDAR 깊이 센싱과 결합하여 보다 정밀한 데이터를 얻으며, 점프의 키 포인트를 수동으로 지정할 필요 없이 시스템이 자동으로 인식하는 완전한 마커리스(Markerless) 방식입니다.',
        },
        {
          title: '동작 센서 (IMU)',
          desc: '스마트폰 내장 가속도계를 읽어 알고리즘으로 점프의 핵심 시점을 빠르게 판별합니다. 수동 입력 없이도 발력률(RFD), 착지 충격(G-Force), 파워 출력을 정밀하게 계산합니다.',
        },
        {
          title: 'AI 코치',
          desc: 'Apple Intelligence가 구동합니다. 데이터를 업로드할 필요 없이 기기 내에서 연산이 이루어집니다. 전문가용 리포트를 자동 생성하여 동작 결함에 대한 구체적인 교정 제안과 훈련 가이드를 제공합니다.',
        }
      ],
      protocols: {
        title: '4가지 검사 모듈',
        subtitle: '표준화된 스포츠 과학 테스트 프로세스',
        hint: '과학적 데이터와 차트 지원',
        list: [
          {
            code: "CMJ",
            name: "카운터무브먼트 점프",
            description: "하지의 폭발적 파워와 수직 점프 능력을 평가하고 신경근 피로를 검사합니다.",
          },
          {
            code: "SJ",
            name: "스쿼트 점프",
            description: "신장-단축 주기(SSC)의 영향을 배제하고 순수 단축성 수축 근력을 측정합니다.",
          },
          {
            code: "DJ",
            name: "드롭 점프",
            description: "반응근력지수(RSI)와 착지 완충 메커니즘을 분석합니다.",
          },
          {
            code: "SLS",
            name: "외다리 서기",
            description: "균형 안정성과 고유수용감각 능력을 평가하여 부상을 예방합니다.",
          },
        ]
      },
      data: {
        badge: '프로페셔널 데이터',
        titleTop: '보이지 않는 힘을',
        titleBottom: '데이터로 시각화',
        desc: '완전한 운동역학(Kinetics) 곡선과 운동학(Kinematics) 각도 차트를 제공합니다. CSV 원시 데이터 내보내기와 PDF 리포트 다운로드를 지원하여 학술 연구와 전문 트레이닝 요구를 충족합니다.',
        list: ['CSV 원시 데이터 내보내기', 'PDF 전문 분석 리포트', '운동역학 곡선 차트']
      }
    },
    workflow: {
      title: '간단한 4단계, 전문가처럼',
      subtitle: '매끄러운 사용자 경험',
      steps: [
        {
          id: '01',
          title: '설정 (Setup)',
          desc: '피검자 프로필을 만들고 키, 체중, 부상 이력을 입력한 뒤 검사 항목을 선택합니다.',
        },
        {
          id: '02',
          title: '촬영 (Capture)',
          desc: '스마트폰을 고정하고 음성 안내(TTS)와 카운트다운에 따라 동작을 수행합니다. 시스템이 핵심 프레임을 자동으로 캡처합니다.',
        },
        {
          id: '03',
          title: '실시간 분석 (Analysis)',
          desc: '검사 종료 즉시 연산이 이루어집니다. AI 코치가 동작 결함에 대한 구체적인 교정 제안과 훈련 가이드를 제공합니다.',
        },
        {
          id: '04',
          title: '내보내기 (Export)',
          desc: '대칭성 점수와 RSI를 확인하고 PDF 리포트를 다운로드하거나 연구용 CSV로 내보냅니다.',
        }
      ]
    },
    audience: {
      title: '대상 사용자 및 활용 시나리오',
      groups: [
        {
          title: "체력 코치",
          desc: "선수의 피로도(RSI)와 폭발력 발달 곡선을 모니터링합니다.",
        },
        {
          title: "선수 트레이너",
          desc: "현장 부상 스크리닝, 예방 모니터링, 복귀 결정을 지원합니다.",
        },
        {
          title: "물리치료사",
          desc: "스포츠 복귀(RTS) 메커니즘, 특히 외다리 서기 비대칭을 평가합니다.",
        },
        {
          title: "스포츠 연구자",
          desc: "포스플레이트 없이 저비용으로 대규모 생체역학 데이터(CSV)를 수집합니다.",
        },
        {
          title: "일반 운동인",
          desc: "동작 위험(예: 무릎 외반)을 스스로 평가하여 ACL 손상을 예방합니다.",
        }
      ]
    },
    landing: {
      hero: {
        badge: 'iOS App v1.0 정식 출시',
        title: '진짜 중요한 동작의 디테일을 정량화',
        description: 'IMU는 200Hz 센서 데이터로 점프를 정량화하고, Vision은 영상, 골격, 키 프레임으로 동작을 읽어냅니다. 두 가지 앱이 서로 다른 점프 테스트에 대응하여 훈련 현장에서 차이와 개선, 다음 단계를 더 빠르게 확인할 수 있게 합니다.',
        ctaIMU: 'IMU 다운로드',
        ctaVision: 'Vision 다운로드',
        comingSoon: '출시 예정',
        stats: [
          '200Hz 샘플링',
          '골격 추적',
          'AI 제안',
        ],
      },
      core: {
        eyebrow: '제품 핵심',
        title: '두 개의 앱, 서로 다른 점프 테스트',
        desc: 'IMU는 데이터를 읽고, Vision은 동작을 봅니다. 각 앱이 한 가지 테스트 방식에 집중하여 코치와 선수가 핵심을 더 빠르게 파악할 수 있도록 돕습니다.',
        imuLabel: 'IMU 테스트 세트',
        visionLabel: 'Vision 테스트 세트',
        imuTitle: 'ChironMotion IMU',
        visionTitle: 'ChironMotion Vision',
        imuDesc: 'iPhone 센서 데이터로 CMJ, SJ, DJ, SLS를 비교 가능한 결과로 변환합니다. 점프 높이, 체공 시간, RSI, RFD, 착지 충격을 한 흐름에서 모두 확인할 수 있습니다.',
        visionDesc: '영상, 골격, 키 프레임으로 CMJ, SJ, DS를 이해합니다. 필요할 때는 키 포인트를 수동으로 보정할 수 있어 분석을 현장 동작에 더 가깝게 맞출 수 있습니다.',
        imuBullets: [
          '200Hz 샘플링으로 도약과 착지를 세밀하게 확인',
          'CMJ / SJ / DJ / SLS로 현장 테스트 대응',
          'PDF 리포트, CSV 내보내기, 기록 추적',
        ],
        visionBullets: [
          '33개 키 포인트로 자세 변화를 더 쉽게 비교',
          '골격, 키 프레임, 신뢰도 점수를 함께 확인',
          '영상 가져오기 및 PDF / CSV 내보내기',
        ],
      },
      measurements: {
        eyebrow: '검사 상세',
        title: '모든 지표가 현장 해석으로 이어집니다',
        desc: 'IMU는 데이터를, Vision은 화면을 봅니다. 모든 테스트가 명확한 결과로 정리되어 어떤 부분이 어떻게 변했는지 빠르게 파악할 수 있습니다.',
        version: '버전 1.0 준비 완료',
        appMeasurement: '검사',
        imu: {
          title: 'ChironMotion IMU',
          desc: '200Hz 센서 데이터로 점프 퍼포먼스를 정리하여 도약부터 착지까지 빠르게 비교합니다.',
          items: [
            ['CMJ', '카운터무브먼트 점프'],
            ['SJ', '스쿼트 점프'],
            ['DJ', '드롭 점프'],
            ['SLS', '외다리 서기'],
          ],
          notes: [
            '점프 높이, 체공 시간, RSI, RFD를 자동으로 정리.',
            'DJ는 반응근력과 착지 컨트롤을, SLS는 외다리 안정성을 보여줍니다.',
            'PDF / CSV로 내보내 훈련 변화를 추적하기 편리합니다.',
          ],
        },
        vision: {
          title: 'ChironMotion Vision',
          desc: '영상, 골격, 키 프레임으로 동작 과정을 이해하여 자세 차이를 더 쉽게 파악할 수 있습니다.',
          items: [
            ['CMJ', '카운터무브먼트 점프'],
            ['SJ', '스쿼트 점프'],
            ['DS', '동작 시퀀스'],
          ],
          notes: [
            '33개 키 포인트, 신뢰도 점수, 수동 보정 제공.',
            'CMJ, SJ, DS의 화면 비교가 더 직관적입니다.',
            '영상을 가져와 PDF / CSV로 내보낼 수 있습니다.',
          ],
        },
      },
      process: {
        eyebrow: '사용 절차',
        title: '4단계로 한 번의 점프 테스트 완료',
        desc: '앱을 선택하고 테스트를 마치면 결과가 이해하기 쉬운 형태로 정리됩니다.',
        steps: [
          { id: '01', title: '앱 선택', desc: 'IMU 또는 Vision, 테스트에 따라 선택합니다.' },
          { id: '02', title: '설정 완료', desc: '안내에 따라 센서 또는 카메라를 활성화합니다.' },
          { id: '03', title: '점프 시작', desc: 'CMJ, SJ, DJ, SLS 또는 DS를 수행합니다.' },
          { id: '04', title: '결과 확인', desc: '분석, AI 제안, 리포트를 즉시 확인할 수 있습니다.' },
        ],
      },
      privacy: {
        eyebrow: '투명성',
        title: '프라이버시 및 데이터 처리',
        desc: '저희는 데이터 주권을 믿습니다. ChironMotion 시리즈 앱의 모든 코드는 사용자의 운동 프라이버시 보호를 최우선으로 두고 작성되었습니다.',
        imuBadge: 'IMU Legal Info',
        imuTitle: 'ChironMotion IMU',
        imuUpdated: '업데이트: 2026/02/11. 센서 데이터, 기기 정보, 사용 기록을 투명하게 설명하여 훈련 프라이버시를 안전하게 보호합니다.',
        imuBullets: [
          '온디바이스 실시간 연산, 데이터는 사용자에게 귀속',
          '의료 용도가 아닌 운동 퍼포먼스 참고용임을 명시',
        ],
        visionBadge: 'Vision Legal Info',
        visionTitle: 'ChironMotion Vision',
        visionUpdated: '업데이트: 2026/03/29. 영상, 가져온 영상, 온디바이스 AI 제안, 권한 사용, AI 표기 방식을 투명하게 설명합니다.',
        visionBullets: [
          '영상과 가져온 영상은 모두 로컬에서 처리되며 원본은 업로드되지 않음',
          'AI 제안은 기기에서 생성되며 리포트에 명확히 표시',
        ],
        imuLink: 'IMU 전체 약관 보기',
        visionLink: 'Vision 전체 약관 보기',
      },
      cta: {
        badge: 'Ready to test',
        titleTop: '지금 시작하여',
        titleHighlight: '나의 점프를 명확하게',
        description: 'IMU는 데이터를, Vision은 화면을 봅니다. 자신에게 맞는 테스트 방식을 선택하고 오늘부터 모든 점프를 더 분명하게 살펴보세요.',
        downloadIMU: 'IMU 다운로드',
        downloadVision: 'Vision 다운로드',
        comingSoon: '출시 예정',
      },
    },
    footer: {
      slogan: '"감으로 판단하지 말고, 데이터로 말하세요."',
      subSlogan: '부상 예방에서 한계 돌파까지, ChironMotion AI가 당신의 최고의 훈련 파트너입니다.',
      disclaimerTitle: '면책 조항',
      disclaimerText: '본 시스템(ChironMotion AI)은 운동 퍼포먼스 분석, 훈련 모니터링, 학술 참고용으로만 제공됩니다. 결과는 의학적 진단, 치료, 질병 예방의 유일한 근거로 사용되어서는 안 됩니다. 급성 통증이나 심각한 근골격 손상이 있는 경우 의사 또는 물리치료사와 상담하시기 바랍니다.',
      motionBadge: '동작 분석',
      iosBadge: 'iOS 네이티브 경험',
      techSpecs: '기술 사양',
      specsList: ['iOS App', '엣지 컴퓨팅 AI 프라이버시', 'LiDAR 깊이 센싱'],
      productsTitle: '제품 생태계',
      developerApi: 'Developer API',
      supportTitle: '문의 및 지원',
      supportText: '맞춤형 솔루션이나 기술 지원이 필요하신가요? 이메일로 보내 주시면 신속히 답변드리겠습니다.',
      legalTitle: 'Legal & Copyright',
      quote: '"Measure it, improve it."',
      legalLink: '법적 고지 센터',
      copyrightPrefix: '©',
      copyrightSuffix: 'All rights reserved.',
      contact: '문의하기',
      copyright: 'All rights reserved.',
      designedBy: '퍼포먼스를 위해 설계됨.',
      legal: '법적 고지'
    }
  },
  ja: {
    navbar: {
      features: '特徴',
      protocols: '検査項目',
      process: '使用フロー',
      cta: '今すぐ試す',
      legal: '法的情報'
    },
    hero: {
      badge: 'iOS App v1.0 正式リリース',
      title: 'ChironMotion',
      titleSuffix: 'AI',
      subtitle: 'ポケットの中の',
      subtitleHighlight: 'バイオメカニクス・ラボ',
      description: 'コンピュータビジョンと生成 AI を組み合わせ、高価な機材を必要とせず、スマートフォン 1 台でプロレベルの運動パフォーマンス評価と傷害予防分析を実現します。',
      ctaVision: 'ビジョン分析 (Vision)',
      ctaIMU: 'モーションセンサー (IMU)',
      comingSoon: '近日公開',
    },
    features: {
      header: {
        title: 'デュアルモード検査技術',
        subtitle: 'Hybrid Analysis',
        desc: 'コンピュータビジョンとセンサーデータを融合し、包括的なスポーツサイエンス分析を提供します。',
      },
      cards: [
        {
          title: 'AI ビジョン分析',
          desc: 'Google MediaPipe の先進的なコンピュータビジョンフレームワークをコアに、高フレームレートの 33 ポイント 3D スケルトントラッキングを実現。iPhone の LiDAR 深度センサーと組み合わせて精度を高め、ジャンプのキー ポイントを手動で指定する必要はありません。システムが自動的に検出する完全マーカーレス方式です。',
        },
        {
          title: 'モーションセンサー (IMU)',
          desc: '内蔵加速度センサーを読み取り、アルゴリズムでジャンプの重要なポイントを高速に判定。手動入力なしで発揮率 (RFD)、着地衝撃 (G-Force)、パワー出力を正確に算出します。',
        },
        {
          title: 'AI コーチ',
          desc: 'Apple Intelligence によって駆動。データのアップロードは不要で、すべて端末上で処理されます。プロフェッショナル仕様のレポートを自動生成し、動作の不備に対して具体的な修正提案とトレーニングガイドを提示します。',
        }
      ],
      protocols: {
        title: '4 つの検査モジュール',
        subtitle: '標準化されたスポーツサイエンステストフロー',
        hint: '科学的データとチャートをサポート',
        list: [
          {
            code: "CMJ",
            name: "カウンタームーブメントジャンプ",
            description: "下肢の爆発力と垂直跳躍能力を評価し、神経筋疲労を検出します。",
          },
          {
            code: "SJ",
            name: "スクワットジャンプ",
            description: "純粋な短縮性収縮の筋力を測定し、伸張-短縮サイクル (SSC) の影響を排除します。",
          },
          {
            code: "DJ",
            name: "ドロップジャンプ",
            description: "反応筋力指数 (RSI) と着地時の緩衝メカニズムを分析します。",
          },
          {
            code: "SLS",
            name: "片脚立ち",
            description: "バランスの安定性と固有受容感覚を評価し、傷害を予防します。",
          },
        ]
      },
      data: {
        badge: 'プロ仕様データ',
        titleTop: '見えない力を、',
        titleBottom: 'データで可視化',
        desc: '完全な運動力学 (Kinetics) カーブと運動学 (Kinematics) 角度チャートを提供します。CSV 生データの書き出しと PDF レポートのダウンロードに対応し、学術研究と専門的なトレーニング双方のニーズを満たします。',
        list: ['CSV 生データ書き出し', 'PDF プロフェッショナル分析レポート', '運動力学カーブチャート']
      }
    },
    workflow: {
      title: 'シンプルな 4 ステップでプロのように',
      subtitle: 'スムーズなユーザー体験',
      steps: [
        {
          id: '01',
          title: 'セットアップ (Setup)',
          desc: '被検者プロファイルを作成し、身長・体重・傷害履歴を入力して検査項目を選択します。',
        },
        {
          id: '02',
          title: '撮影 (Capture)',
          desc: 'スマートフォンを固定し、音声ガイド (TTS) とカウントダウンに従って動作を行います。システムが自動でキーフレームをキャプチャします。',
        },
        {
          id: '03',
          title: 'リアルタイム分析 (Analysis)',
          desc: 'テスト終了直後に演算を実行。AI コーチが動作の不備に対して具体的な修正提案とトレーニングガイドを提示します。',
        },
        {
          id: '04',
          title: '書き出し (Export)',
          desc: '対称性スコアと RSI を確認し、PDF レポートをダウンロード、または研究用に CSV を書き出します。',
        }
      ]
    },
    audience: {
      title: 'ターゲットユーザーと活用シーン',
      groups: [
        {
          title: "ストレングス & コンディショニングコーチ",
          desc: "選手の疲労度 (RSI) と爆発力の発達カーブをモニタリングします。",
        },
        {
          title: "アスレティックトレーナー",
          desc: "現場での傷害スクリーニング、予防モニタリング、競技復帰の判断を支援します。",
        },
        {
          title: "理学療法士",
          desc: "スポーツ復帰 (RTS) のメカニズム、特に片脚立ちの非対称性を評価します。",
        },
        {
          title: "スポーツ研究者",
          desc: "フォースプレートを使わずに、低コストで大規模な生体力学データ (CSV) を取得できます。",
        },
        {
          title: "一般アスリート",
          desc: "動作リスク (例: 膝の外反) をセルフチェックし、ACL 損傷を予防します。",
        }
      ]
    },
    landing: {
      hero: {
        badge: 'iOS App v1.0 正式リリース',
        title: '本当に重要な動作のディテールを定量化',
        description: 'IMU は 200 Hz のセンサーデータでジャンプを定量化し、Vision は映像・スケルトン・キーフレームから動作を読み解きます。2 つのアプリがそれぞれ異なるジャンプテストに対応し、トレーニング現場で違い・進化・次の一手をより素早く把握できます。',
        ctaIMU: 'IMU をダウンロード',
        ctaVision: 'Vision をダウンロード',
        comingSoon: '近日公開',
        stats: [
          '200 Hz サンプリング',
          'スケルトン追跡',
          'AI 提案',
        ],
      },
      core: {
        eyebrow: 'プロダクトコア',
        title: '2 つのアプリ、2 つのジャンプテストフロー',
        desc: 'IMU はデータを読み、Vision は動作を見ます。各アプリがひとつのテスト方式に集中することで、コーチと選手が見るべきポイントをより速く見つけられます。',
        imuLabel: 'IMU テストセット',
        visionLabel: 'Vision テストセット',
        imuTitle: 'ChironMotion IMU',
        visionTitle: 'ChironMotion Vision',
        imuDesc: 'iPhone のセンサーデータで CMJ・SJ・DJ・SLS を比較可能な結果にします。ジャンプ高度、滞空時間、RSI、RFD、着地衝撃をひとつの流れで把握できます。',
        visionDesc: '映像・スケルトン・キーフレームを使って CMJ・SJ・DS を理解。必要に応じてキーポイントを手動で補正でき、現場の動きに寄り添った分析が可能です。',
        imuBullets: [
          '200 Hz サンプリングで離地と着地のディテールまで確認',
          'CMJ / SJ / DJ / SLS で現場テストに対応',
          'PDF レポート、CSV 書き出し、履歴管理',
        ],
        visionBullets: [
          '33 個のキーポイントで姿勢の変化を比較しやすく',
          'スケルトン、キーフレーム、信頼度スコアをまとめて表示',
          '映像インポートと PDF / CSV 書き出しに対応',
        ],
      },
      measurements: {
        eyebrow: '検査の詳細',
        title: 'すべての指標が現場での読み取りに直結',
        desc: 'IMU はデータを、Vision は映像を見ます。すべてのテストが明確な結果に整理され、何がどう変わったかを素早く把握できます。',
        version: 'バージョン 1.0 リリース',
        appMeasurement: '検査',
        imu: {
          title: 'ChironMotion IMU',
          desc: '200 Hz のセンサーデータでジャンプパフォーマンスを整理し、離地から着地まで素早く比較できます。',
          items: [
            ['CMJ', 'カウンタームーブメントジャンプ'],
            ['SJ', 'スクワットジャンプ'],
            ['DJ', 'ドロップジャンプ'],
            ['SLS', '片脚立ち'],
          ],
          notes: [
            'ジャンプ高度・滞空時間・RSI・RFD を自動で整理。',
            'DJ では反応筋力と着地コントロールを、SLS では片脚の安定性を確認できます。',
            'PDF / CSV を書き出してトレーニングの変化を追跡しやすくなります。',
          ],
        },
        vision: {
          title: 'ChironMotion Vision',
          desc: '映像・スケルトン・キーフレームで動作の流れを把握し、姿勢の違いを見つけやすくします。',
          items: [
            ['CMJ', 'カウンタームーブメントジャンプ'],
            ['SJ', 'スクワットジャンプ'],
            ['DS', '動作シーケンス'],
          ],
          notes: [
            '33 個のキーポイント、信頼度スコア、手動補正に対応。',
            'CMJ・SJ・DS の映像比較がより直感的に。',
            '映像をインポートし、PDF / CSV に書き出せます。',
          ],
        },
      },
      process: {
        eyebrow: '使用フロー',
        title: '4 ステップで 1 回のジャンプテストが完了',
        desc: 'アプリを選んでテストを完了するだけで、結果が分かりやすく整理されます。',
        steps: [
          { id: '01', title: 'アプリを選ぶ', desc: 'IMU か Vision、テストに合わせて選択します。' },
          { id: '02', title: 'セットアップを完了', desc: 'ガイドに従ってセンサーまたはカメラを起動します。' },
          { id: '03', title: 'ジャンプ開始', desc: 'CMJ、SJ、DJ、SLS、または DS を行います。' },
          { id: '04', title: '結果を確認', desc: '分析、AI 提案、レポートをすぐに確認できます。' },
        ],
      },
      privacy: {
        eyebrow: '透明性',
        title: 'プライバシーとデータの取り扱い',
        desc: '私たちはデータの主権を信じています。ChironMotion シリーズの一行一行のコードは、あなたの運動プライバシー保護を最優先に書かれています。',
        imuBadge: 'IMU Legal Info',
        imuTitle: 'ChironMotion IMU',
        imuUpdated: '更新日: 2026/02/11。センサーデータ、デバイス情報、利用記録について透明に説明し、トレーニングのプライバシーを確保します。',
        imuBullets: [
          'オンデバイスでリアルタイムに演算し、データは利用者に帰属',
          '医療用途ではなく、運動パフォーマンス参考用であることを明記',
        ],
        visionBadge: 'Vision Legal Info',
        visionTitle: 'ChironMotion Vision',
        visionUpdated: '更新日: 2026/03/29。映像、インポート動画、オンデバイス AI 提案、権限の用途、AI 表記について透明に説明します。',
        visionBullets: [
          '映像とインポート動画はすべてローカルで処理され、オリジナルはアップロードされません',
          'AI 提案は端末上で生成され、レポート内に明確に表示されます',
        ],
        imuLink: 'IMU の全条項を見る',
        visionLink: 'Vision の全条項を見る',
      },
      cta: {
        badge: 'Ready to test',
        titleTop: '今すぐはじめて',
        titleHighlight: 'ジャンプを明確に',
        description: 'IMU はデータを、Vision は映像を見ます。あなたに合ったテスト方式を選び、今日からひとつひとつのジャンプをよりはっきりと捉えていきましょう。',
        downloadIMU: 'IMU をダウンロード',
        downloadVision: 'Vision をダウンロード',
        comingSoon: '近日公開',
      },
    },
    footer: {
      slogan: '"感覚に頼らず、データで語ろう。"',
      subSlogan: '傷害予防から限界突破まで、ChironMotion AI はあなたの最高のトレーニングパートナーです。',
      disclaimerTitle: '免責事項',
      disclaimerText: '本システム (ChironMotion AI) は、運動パフォーマンス分析、トレーニングモニタリング、学術参考のみを目的としています。結果を医療診断、治療、疾病予防の唯一の根拠として使用しないでください。急性の痛みや重度の筋骨格損傷がある場合は、医師または理学療法士に相談してください。',
      motionBadge: 'モーション分析',
      iosBadge: 'iOS ネイティブ体験',
      techSpecs: '技術仕様',
      specsList: ['iOS App', 'エッジ AI プライバシー', 'LiDAR 深度センシング'],
      productsTitle: 'プロダクトエコシステム',
      developerApi: 'Developer API',
      supportTitle: 'お問い合わせ・サポート',
      supportText: 'カスタムソリューションや技術サポートが必要な方は、メールでご連絡ください。できるだけ早く返信いたします。',
      legalTitle: 'Legal & Copyright',
      quote: '"Measure it, improve it."',
      legalLink: '法的情報センター',
      copyrightPrefix: '©',
      copyrightSuffix: 'All rights reserved.',
      contact: 'お問い合わせ',
      copyright: 'All rights reserved.',
      designedBy: 'パフォーマンスのために設計。',
      legal: '法的情報'
    }
  }
};
