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
    footer: {
      slogan: "\"別再憑感覺，用數據說話。\"",
      subSlogan: '從傷害預防到突破極限，ChironMotion AI 是您最佳的訓練夥伴。',
      disclaimerTitle: '免責聲明',
      disclaimerText: '本系統 (ChironMotion AI) 僅供運動表現分析、訓練監測與學術參考使用。結果不應作為醫療診斷、治療或疾病預防的唯一依據。若受測者有急性疼痛或嚴重肌肉骨骼損傷，請諮詢醫師或物理治療師。',
      techSpecs: '技術規格',
      specsList: ['iOS App', '邊緣運算 AI 隱私', 'LiDAR 深度感測'],
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
    footer: {
      slogan: "\"Don't just guess, Measure it.\"",
      subSlogan: 'From injury prevention to breaking limits, ChironMotion AI is your best training partner.',
      disclaimerTitle: 'Disclaimer',
      disclaimerText: 'This system (ChironMotion AI) is for athletic performance analysis, training monitoring, and academic reference only. Results should not be used as the sole basis for medical diagnosis, treatment, or disease prevention. If the subject has acute pain or severe musculoskeletal injury, please consult a physician or physical therapist.',
      techSpecs: 'Tech Specs',
      specsList: ['iOS App', 'Edge AI Privacy', 'LiDAR Depth Sensing'],
      contact: 'Contact Us',
      copyright: 'All rights reserved.',
      designedBy: 'Designed for Performance.',
      legal: 'Legal'
    }
  }
};
