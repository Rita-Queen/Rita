import { ExperienceItem, ProjectItem } from './types';

// The full expanded list of 84 certificates/courses provided by the user
const ALL_CERTIFICATES = {
  pm: [
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 1", link: "https://drive.google.com/file/d/1MYkrQSMuMT2Rhrhlh_erPlRzjQCMLgOY/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 2", link: "https://drive.google.com/file/d/1BBJpWbZZa5fzMPMWyazMLOY1gRlLHRXe/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 3", link: "https://drive.google.com/file/d/1MkFMeYNiW9f_WJWJ1vgoqVVN3O5jD61L/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 4", link: "https://drive.google.com/file/d/1KhtbGlaJsLMI06eWwtpj_RdCCwqxX7Ua/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 5", link: "https://drive.google.com/file/d/11mdlRy9zBfQPMGbmwzkn41E_iFfFtO_3/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 6", link: "https://drive.google.com/file/d/1vyCRzJc4lhBz8VOiq1-n4UDlGVoibJcx/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 7", link: "https://drive.google.com/file/d/1Nr8X_3RjgrCLvsZYLhriWKFgmRE-RJ-d/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 8", link: "https://drive.google.com/file/d/1joaPnsLXsUBXaLnvKEc51VcS1Vk3YIBq/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Complete Certificate", link: "https://drive.google.com/file/d/19CXjRKB2nQ3LhJzdRZoX1N38LZiNLyQK/view", tag: "PMI" },
    { title: "Foundations of Project Management", link: "https://drive.google.com/file/d/1UBUqnhhZEubXFV3PNCyNnkWQTGtGe9Y2/view", tag: "Google" },
    { title: "Create a High-Performing Team", link: "https://drive.google.com/file/d/10T6R0G7L6RUqVd4ln00zJynU4moxPFcG/view", tag: "Leadership" },
    { title: "Grow as a Manager", link: "https://drive.google.com/file/d/1EvMznt6X9m0mm1t_UeTb32Zw5p-7p66J/view", tag: "Leadership" },
    { title: "Set and Achieve Team Goals", link: "https://drive.google.com/file/d/1DFmCyl8B9Mvgft4DMa8AQF61IVqsTrAe/view", tag: "Management" },
    { title: "Support Individual Growth and Development", link: "https://drive.google.com/file/d/1okso0e1U9i22qaPf1O6UpfnW0jREV0Uf/view", tag: "Leadership" },
    { title: "Startup Entrepreneurship (Specialization - 4 Courses)", link: "https://drive.google.com/file/d/1-IjEoMPMZT74S7-fUgXNrIQij_vWX8uk/view", tag: "Entrepreneurship" },
    { title: "Innovation Career Lessons from a Master", link: "https://drive.google.com/file/d/1x4YRIR33hpqOpi0SNGujkBN20ONbJZJI/view", tag: "Career" },
    { title: "From Idea to Startup", link: "https://drive.google.com/file/d/1PlAayUCEgysG-Ki9p126DF4sQgAKy20h/view", tag: "Startup" },
    { title: "Digital Transformation", link: "https://drive.google.com/file/d/1feCO4GpA71OX2vboi7nfJqimzTU6lFGG/view", tag: "Innovation" },
    { title: "Action-Driven Business Plan: From Classroom to World", link: "https://drive.google.com/file/d/16P_spkN5qIb3iZNYH3Dusa2K2wh5ug38/view", tag: "Business" },
    { title: "Google People Management Essentials (Professional Cert)", link: "https://drive.google.com/file/d/14owYJ2KCqRmCtxgmy9YbWBg-uGup2HHo/view", tag: "Management" }
  ],
  cloudAi: [
    { title: "Google Workspace Data Governance", link: "https://drive.google.com/file/d/1nrPoVtFJe84cJXaeEXjdAgcwOGh9oInO/view", tag: "Governance" },
    { title: "Digital Transformation with Google Cloud", link: "https://drive.google.com/file/d/19zGMDh72kDTegQ99hmB5X9z0R_SzDSwF/view", tag: "Cloud" },
    { title: "Exploring Data Transformation with Google Cloud", link: "https://drive.google.com/file/d/1yyETgMU10zjz9YNiXjSaxSozR_hYuhHc/view", tag: "GCP" },
    { title: "Google Cloud Fundamentals: Core Infrastructure", link: "https://drive.google.com/file/d/1BSY6mF51UimhN45sx7nWOROsTzQakxYX/view", tag: "Infrastructure" },
    { title: "Innovating with Google Cloud Artificial Intelligence", link: "https://drive.google.com/file/d/1bVnzRejF-9TKIpZNJoIQTZGVE7_6Ar2G/view", tag: "AI" },
    { title: "Google AI Essentials (Professional Certificate)", link: "https://drive.google.com/file/d/1tcry5Hb_0xz8SPPZG8b-xmS53oTtL1c8/view", tag: "AI" },
    { title: "Generative AI Content Creation", link: "https://drive.google.com/file/d/1tF3W-VqvHrScB1VYM5_XqzK3bFLe9YrM/view", tag: "GenAI" },
    { title: "Maximize Productivity With AI Tools", link: "https://drive.google.com/file/d/1RIKIjSsuVaRxGjMJwciU9zNH-UgzEnPU/view", tag: "Productivity" },
    { title: "Stay Ahead of the AI Curve", link: "https://drive.google.com/file/d/16aCDxSKtKxBOrKsc_S1jf_T9pko_klGf/view", tag: "AI" },
    { title: "Use AI Responsibly", link: "https://drive.google.com/file/d/1fwGSMkwvfPJ20YZmlbv4MPlmZ3WoO_Z0/view", tag: "Ethics" },
    { title: "Discover the Art of Prompting", link: "https://drive.google.com/file/d/18elUSZasbNNGVm0F514fVyJfjZyXclMJ/view", tag: "AI" },
    { title: "Introduction to AI", link: "https://drive.google.com/file/d/11dFx75mDDALbMbyaq_lkdnX59ks6tUty/view", tag: "AI" },
    { title: "A Tour of Google Cloud Hands-on Labs", link: "https://drive.google.com/file/d/1T7F08DuaoGXM2VYVYTPV2Iy4cPTFilia/view", tag: "Hands-on" }
  ],
  engineering: [
    { title: "Crash Course on Python", link: "https://drive.google.com/file/d/1GimB-2sd57N8gpt4oqMrkWKV3B2TaKbX/view", tag: "Python" },
    { title: "Introduction to Software Engineering", link: "https://drive.google.com/file/d/1dfbAr61CYeCKO9hcW2G_wW2bxmf5Al0z/view", tag: "Dev" },
    { title: "Technical Support Fundamentals", link: "https://drive.google.com/file/d/1ivZimpgpCSeFnfWsADXOWwJG4lihcXcd/view", tag: "Support" },
    { title: "Java SE 17 Developer (1Z0-829): Unit 1", link: "https://drive.google.com/file/d/1ieqXCILqjOWd6GDppbtyBIUW47gkcSjW/view", tag: "Java" },
    { title: "Java SE 17 Developer (1Z0-829): Unit 2", link: "https://drive.google.com/file/d/112RZ1-BQC41u5Uu2Qo2a1D6BNUVOPjp6/view", tag: "Java" },
    { title: "Java SE 17 Developer (1Z0-829): Unit 3", link: "https://drive.google.com/file/d/1-fCpvDqceB-ZvZQfRq1pUMJacJR6h2b4/view", tag: "Java" },
    { title: "Java SE 17 Developer (1Z0-829): Unit 4", link: "https://drive.google.com/file/d/1bXSfio3XImMsqLoDdyamRwjhfOpiJ1UL/view", tag: "Java" },
    { title: "Java SE 17 Developer (1Z0-829): Unit 5", link: "https://drive.google.com/file/d/1wvigcWkDTeBN6LJ-SjXo7ct0PKImXksX/view", tag: "Java" },
    { title: "Java SE 17 Developer (1Z0-829): Unit 6", link: "https://drive.google.com/file/d/1N4CKzAiy2iigO8nc9Ff5lC7AiM-ffulF/view", tag: "Java" },
    { title: "Java SE 17 Developer (1Z0-829): Unit 7", link: "https://drive.google.com/file/d/1lf7lnzQyBePj1ODHltkXiw_HyUVM9uBp/view", tag: "Java" },
    { title: "Java SE 17 Developer (1Z0-829): Unit 8", link: "https://drive.google.com/file/d/1RNQEN-LKRntLgnMAh9GYJxhq16uXuoxk/view", tag: "Java" },
    { title: "Java SE 17 Developer (1Z0-829): Unit 9", link: "https://drive.google.com/file/d/1tslElhpWGKDSdW1d5s8bP1XAhSagQGn9/view", tag: "Java" },
    { title: "Java SE 17 Developer (Professional Certificate)", link: "https://drive.google.com/file/d/1uTwlTnkXJJfLzbDmybqsW4nwOsIlHHf2/view", tag: "Java" },
    { title: "Create Serverless Applications", link: "https://drive.google.com/file/d/1DIdusnAN_dLGK8A3_OkwCOIREFxH4m12/view", tag: "Cloud" },
    { title: "Microsoft Azure Machine Learning for Data Scientists", link: "https://drive.google.com/file/d/1MMZpKi-Q2NXMJMIebktywCKTPqO5qC-A/view", tag: "ML" },
    { title: "Create Machine Learning Models in Microsoft Azure", link: "https://drive.google.com/file/d/1I6lx2fr9Ip0v240O4W7nt55WMzPZmYC5/view", tag: "Azure" },
    { title: "Data Storage in Microsoft Azure for Associate Developers", link: "https://drive.google.com/file/d/1FXa6KaRi6vH4rphROHuBiD1XrA6T1-z5/view", tag: "Azure" },
    { title: "Connect Your Services with Microsoft Azure Service Bus", link: "https://drive.google.com/file/d/1skJz0RmI9nxP34_CDzIM1hzj2hnwih89/view", tag: "Azure" }
  ],
  designMarketing: [
    { title: "Adobe Graphic Designer: Design that Demands Attention", link: "https://drive.google.com/file/d/1b3dxbWBJhCgRJF_fRqL8ArFoEY1W36Xv/view", tag: "Design" },
    { title: "Adobe Marketing Specialist", link: "https://drive.google.com/file/d/1NGloCegl_Iaew3ZPae2RH3if1wlUQvxZ/view", tag: "Marketing" },
    { title: "Design Fundamentals with AI", link: "https://drive.google.com/file/d/1ZKQ0ME9bVHL8_8Cq10y5kNlZ1sdTtEkE/view", tag: "AI" },
    { title: "Fundamentals of UI/UX Design", link: "https://drive.google.com/file/d/1H8hbxd0U3IGIWox7GhXmE0rQ7sMZOFd4/view", tag: "UI/UX" },
    { title: "Foundations of User Experience (UX) Design", link: "https://drive.google.com/file/d/16A1-C6ef-3D3t_5xoAqdXqJ6Ki00mv-J/view", tag: "UX" },
    { title: "Start the UX Design Process: Empathize, Define, and Ideate", link: "https://drive.google.com/file/d/10hUdJYUh_CqIZGvFwiJm_a3kGKcAXpMB/view", tag: "UX" },
    { title: "Digital Marketing", link: "https://drive.google.com/file/d/12slIpSTLSJutopdstvdKuAXIYO91Z329/view", tag: "Marketing" },
    { title: "Foundations of Digital Marketing and E-commerce", link: "https://drive.google.com/file/d/15gdOdPcuGUZ_dMjHzjN-NtKyF2U3XF0_/view", tag: "Ecomm" },
    { title: "Social Media Content and Strategy", link: "https://drive.google.com/file/d/1kb4Al0A6IpoGC4UaLtjxiTsFr2f8Dqz0/view", tag: "Social" },
    { title: "Multichannel Content Marketing", link: "https://drive.google.com/file/d/1u_PsswbT8gbNakmpAZTEJBjuy20hnnur/view", tag: "Marketing" },
    { title: "Graphic Design", link: "https://drive.google.com/file/d/1CLKHdkWDB3Uz0D-WxqqQqbLMAUGe7ScH/view", tag: "Design" },
    { title: "Image Editing", link: "https://drive.google.com/file/d/1PNst2iNTL4NXW3U56v6_gfVq3Iuw8Unn/view", tag: "Design" },
    { title: "Document Design", link: "https://drive.google.com/file/d/1-Ub-VFYo3bD7q2pn-8w0zaqf45Ivr9T2/view", tag: "Design" },
    { title: "Design Thinking for Innovation", link: "https://drive.google.com/file/d/1pDYyHiPZNKKNa7TuitJCSDH8LVfFDtWF/view", tag: "Innovation" },
    { title: "Cracking the Creativity Code: Discovering Ideas", link: "https://drive.google.com/file/d/1KHur02onthDJW6TojHDq8h1DR-3yBwGr/view", tag: "Creativity" }
  ],
  communication: [
    { title: "Build Your Professional ePortfolio in English", link: "https://drive.google.com/file/d/1MN6N8zgYh1dJRGLmnKNtrc6tcuIJrVKX/view", tag: "English" },
    { title: "English for Career Development", link: "https://drive.google.com/file/d/1g3duFx0yOhtTDPS2D2Heq3g28ATFXwlI/view", tag: "English" },
    { title: "Speak English Professionally: In Person, Online & On the Phone", link: "https://drive.google.com/file/d/1b-S5jCEAug-aYAp1SDRLfW7W_nQpsQpr/view", tag: "Communication" },
    { title: "Write Professional Emails in English", link: "https://drive.google.com/file/d/14uE2AqbOqlAChjbDEqcGY_GO39E88GRY/view", tag: "Writing" },
    { title: "Improve Your English Communication Skills (Specialization)", link: "https://drive.google.com/file/d/1e2qnpUS2VL5hIQM6CPv7O-jP4Ke5V4Wh/view", tag: "English" }
  ],
  securityLawOthers: [
    { title: "Foundations of Cybersecurity", link: "https://drive.google.com/file/d/1arYEZgbfCmMjQtRwNAxtbptbyaRYX0X7/view", tag: "Security" },
    { title: "Palo Alto Networks Cybersecurity Foundation", link: "https://drive.google.com/file/d/1WWAvdRs0YmnX4rv-PVPGz_0rEadc92G1/view", tag: "Security" },
    { title: "International Law In Action: Investigating Crimes", link: "https://drive.google.com/file/d/1nJalzDCeaD3Y_4d8EMa0-5boYAZNwt00/view", tag: "Law" },
    { title: "The Social and Technical Context of Health Informatics", link: "https://drive.google.com/file/d/1RnfxCC2gNBTuR_JvCn-JiFOLn4ucobZt/view", tag: "Health" },
    { title: "Preparing Data for Analysis with Microsoft Excel", link: "https://drive.google.com/file/d/1NHopt_EF9XMOvTOiZXZ4QSMJuugvk7oN/view", tag: "Data" },
    { title: "Supply Chain Management and Analytics", link: "https://drive.google.com/file/d/1s_bVUWfYzye48TG1_fcm5ytJdqq80Krs/view", tag: "Supply" },
    { title: "Ask Questions to Make Data-Driven Decisions", link: "https://drive.google.com/file/d/1x9VoVAc_yDcYTl13rZF08zlluFEJCKub/view", tag: "Data" },
    { title: "Foundations: Data, Data, Everywhere", link: "https://drive.google.com/file/d/10ciDs3o_i0srDQXRu_74wdVRhrBbW107/view", tag: "Data" },
    { title: "Google Workspace Administrator (Professional Cert - 5 Courses)", link: "https://drive.google.com/file/d/1D_JGsedSFJA-tANQ9f1KWQjCi0Sv2ubJ/view", tag: "Admin" },
    { title: "Google Workspace Core Services", link: "https://drive.google.com/file/d/1I0xwIA6boiw9P0ryCwJwx3CMMYmqtzQn/view", tag: "Admin" },
    { title: "Google Workspace Security", link: "https://drive.google.com/file/d/1cIXeZg0VHnJPJrS-nDIKqaHD_u4K7-bJ/view", tag: "Security" },
    { title: "Google Workspace Troubleshooting", link: "https://drive.google.com/file/d/15c6xYvZJAysr5GZhKcGLi6NWbBpaTFAx/view", tag: "Admin" },
    { title: "Google Workspace User and Resource Management", link: "https://drive.google.com/file/d/1jpLYSQqWmxXlbaF74ib4yh_8Rb5TIPmv/view", tag: "Admin" }
  ]
};

export const CONTENT = {
  zh: {
    nav: {
      about: '關於我',
      skills: '核心能力',
      experience: '工作經歷',
      projects: '專案亮點',
      education: '進修與證照',
      contact: '聯絡方式'
    },
    hero: {
      role: '行政與專案管理助理｜Education Admin & PM Assistant',
      tagline: '擅長建立可追蹤、可複製的行政與專案流程，支援專案進度追蹤、跨部門溝通與文件管理，讓團隊專心在教學與產品本身。',
      target: '目標職位：專案管理助理（PM Assistant）、教育行政人員（Education Administrator / Coordinator）',
      btn_exp: '查看工作經歷',
      btn_proj: '查看專案與證照'
    },
    section_summaries: {
      about: '超過 10 年行政歷練，專注於流程自動化與跨單位協作。',
      skills: '橫跨專案管理、教育行政與數位工具應用的綜合職能。',
      experience: '深耕高教與 NGO 領域，管理過千人規模之大型行政專案。',
      projects: '具備從零到一建立 SOP 與優化複雜流程的成功實績。',
      education: '完整展示 84 張國際證照，涵蓋專案管理、雲端科技、AI 與數位設計。',
      traits: '重視細節的可追蹤性，致力於降低團隊溝通與維護成本。'
    },
    section_titles: {
      about: '關於我',
      about_sub: 'About Me',
      skills: '核心能力',
      skills_sub: 'Skills',
      experience: '工作經歷',
      experience_sub: 'Experience',
      projects: '專案亮點',
      projects_sub: 'Projects',
      education: '進修與證照',
      education_sub: 'Full Certifications (84 Items)',
      traits: '特質與職業目標',
      traits_sub: 'Traits & Goals'
    },
    about_text: [
      "目前任職於明新科技大學雙語教育中心行政助理，負責畢業門檻審查、英語測驗規劃以及教育部計畫行政，累積超過 10 年行政與專案執行歷練。",
      "我擅長問題拆解、流程設計與跨單位協作，能從前期規劃、執行到結案報告完整掌握。我的核心競爭力在於：在高壓時程中維持穩定與精準，並將零散工作轉化為可持續運作的制度。希望成為穩定推動營運效率的核心行政人才。"
    ],
    skills: [
      "行政流程設計與 SOP 建置",
      "專案管理與跨單位協作",
      "大型測驗與活動規劃（千人規模）",
      "教育部計畫行政（經費、採購、結案與報告）",
      "資料治理與個資作業流程（蒐集、保存、稽核）",
      "文件系統化與資料整理（Excel／Google Workspace）",
      "利害關係人溝通與需求分析"
    ],
    experience: [
      {
        company: "明新科技大學｜雙語教育中心",
        role: "行政助理 (Education Admin)",
        period: "2023 – 至今",
        details: [
          "建立中心行政流程與 SOP，使審查、公告與協作更具系統性與可追溯性。",
          "每學期處理約 1,000 件外語能力畢業門檻審查，建立一致化自動審核標準。",
          "規劃千人大一英語前測，負責場地、動線、監考與資訊公告。",
          "支援教育部計畫行政，精準掌握數百萬預算經費、採購與公文流程。",
          "建立個資作業流程，通過校內外 100% 規格之個資稽核。"
        ]
      },
      {
        company: "財團法人台北市教會聚會所",
        role: "行政與活動企劃",
        period: "2021 – 2023",
        details: [
          "負責 10+ 項年度活動之文書、會議記錄與資料追蹤管理。",
          "零用金與帳務管理，確保每月財務報表 0 誤差可稽核。",
          "規劃兒童夏令營、品格課程（30–50 人），優化招生與執行流程。",
          "支援 100–250 人規模之全國性講座與研討會行政後勤。"
        ]
      },
      {
        company: "教會生命成長培訓計畫",
        role: "活動與社區計畫執行",
        period: "2019 – 2021",
        details: [
          "執行五週偏鄉長期服務計畫，服務對象累積超過 2,000 人次。",
          "撰寫高品質成果與結案報告，整合跨團隊執行數據。",
          "成果發表會企劃與跨團隊協作，確保專案目標達成率 100%。"
        ]
      }
    ],
    projects: [
      { id: "english-test", title: "千人級英語前測流程系統化", description: "將原本高風險的人工作業，轉化為模組化、可快速複製的標準 SOP。" },
      { id: "character-education", title: "品格教育與親子活動專案", description: "招生與執行流程全面優化，成功建立可持續運行的活動營運模式。" },
      { id: "moe-project", title: "教育部計畫行政全方位支援", description: "完整對接高教深耕計畫之課程、經費控管與結案合規性審查。" }
    ],
    education_intro: "為了精進行政與管理效能，我透過全球頂尖大學與企業之進修管道，累積 84 張專業證照。以下完整展示所有證照，按主題分類，每一項都是專業能力的實質證明。",
    cert_groups: [
      { id: "pm", title: "📊 Project / Management", items: ALL_CERTIFICATES.pm },
      { id: "cloud", title: "🤖 Data & Cloud / AI", items: ALL_CERTIFICATES.cloudAi },
      { id: "dev", title: "⚙️ Dev / Engineering", items: ALL_CERTIFICATES.engineering },
      { id: "design", title: "🎨 Design / UX / Marketing", items: ALL_CERTIFICATES.designMarketing },
      { id: "comm", title: "🌏 English & Communication", items: ALL_CERTIFICATES.communication },
      { id: "others", title: "🛡️ Security / Law / Others", items: ALL_CERTIFICATES.securityLawOthers }
    ],
    traits_points: [
      "在高壓與多專案並行下，維持精準的時程與文件管理，確保每個細節都有紀錄可追蹤。",
      "喜歡把零散的行政工作整理成 SOP、表單與範本，讓團隊可以快速複製、減少溝通成本。",
      "擅長與教師、學生、行政單位與外部廠商協作，主動補位、提前發現風險與缺漏。",
      "持續學習專案管理、雲端與自動化工具，希望成為能同時懂流程、懂數據、也懂現場需求的行政核心。"
    ],
    footer: {
      contact: '聯絡方式',
      profiles: '專業社群'
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact'
    },
    hero: {
      role: 'Education Admin & PM Assistant',
      tagline: 'Specializing in designing trackable, replicable administrative and project workflows to support cross-functional teams and operational efficiency.',
      target: 'Target Positions: Project Management Assistant, Education Administrator / Coordinator',
      btn_exp: 'View Experience',
      btn_proj: 'View Projects'
    },
    section_summaries: {
      about: '10+ years of administrative expertise focused on automation and collaboration.',
      skills: 'Comprehensive skillset spanning PM, education admin, and digital tools.',
      experience: 'Proven track record in higher-ed, managing projects for 1000+ stakeholders.',
      projects: 'Expertise in building SOPs and optimizing complex workflows from scratch.',
      education: 'A comprehensive gallery of 84 international certifications across Project Management, Cloud, AI, and Design.',
      traits: 'Dedicated to detail traceability and reducing team operational costs.'
    },
    section_titles: {
      about: 'About Me',
      about_sub: 'About Me',
      skills: 'Skills',
      skills_sub: 'Core Competencies',
      experience: 'Experience',
      experience_sub: 'Work History',
      projects: 'Projects',
      projects_sub: 'Highlights',
      education: 'Education',
      education_sub: '84 Professional Certifications',
      traits: 'Professional Goals',
      traits_sub: 'Professional Philosophy'
    },
    about_text: [
      "Currently serving as an Administrative Assistant at MUST Bilingual Education Center, I handle graduation reviews, test planning, and MOE project administration with over 10 years of experience.",
      "I excel at breaking down complex problems and designing efficient workflows. My core strength lies in maintaining precision under pressure and transforming scattered tasks into sustainable systems. I aim to be a key driver of operational efficiency in large-scale organizations."
    ],
    skills: [
      "Process Design & SOP Implementation",
      "Project Management & Cross-unit Collaboration",
      "Large-scale Event Planning (1000+ people)",
      "Educational Project Admin (Budget, Procurement, Reports)",
      "Data Governance & Privacy Auditing",
      "Systematic Document Management (Excel/Workspace)",
      "Stakeholder Communication & Analysis"
    ],
    experience: [
      {
        company: "MUST | Bilingual Education Center",
        role: "Administrative Assistant (Education Admin)",
        period: "2023 – Present",
        details: [
          "Established SOPs that made reviews and collaboration systematic and traceable.",
          "Processed ~1,000 graduation reviews per semester with standardized criteria.",
          "Organized freshman English pre-tests for 1,000+ students, managing logistics and proctoring.",
          "Managed millions in MOE project budgets and procurement processes with zero errors.",
          "Implemented data privacy procedures that passed 100% of audits."
        ]
      },
      {
        company: "Taipei Church Gathering (NGO)",
        role: "Admin & Event Planner",
        period: "2021 – 2023",
        details: [
          "Managed documentation and data tracking for 10+ annual major events.",
          "Handled petty cash and accounting with audited transparency.",
          "Planned children's camps (30-50 pax), optimizing recruitment and operation models.",
          "Provided logistics support for national seminars (100-250 pax)."
        ]
      },
      {
        company: "Church Training Program",
        role: "Event & Community Project Specialist",
        period: "2019 – 2021",
        details: [
          "Executed 5-week rural service programs, serving 2,000+ total cumulative participants.",
          "Drafted high-quality progress and final reports, synthesizing cross-team performance data.",
          "Planned project showcases and coordinated multi-team logistics, achieving 100% KPI completion."
        ]
      }
    ],
    projects: [
      { id: "english-test", title: "1,000+ Student Test Systematization", description: "Converted high-risk manual processes into modular, replicable standard SOPs." },
      { id: "character-education", title: "Character Education Event Model", description: "Optimized recruitment and execution to establish a stable, long-term operational model." },
      { id: "moe-project", title: "Full-cycle MOE Project Admin", description: "Seamlessly managed curriculum, budgeting, and compliance for STUST programs." }
    ],
    education_intro: "Committed to lifelong learning, I have obtained 84 international certifications from world-class universities and platforms. Every single record below reflects a milestone in my professional growth.",
    cert_groups: [
      { id: "pm", title: "📊 Project / Management", items: ALL_CERTIFICATES.pm },
      { id: "cloud", title: "🤖 Data & Cloud / AI", items: ALL_CERTIFICATES.cloudAi },
      { id: "dev", title: "⚙️ Dev / Engineering", items: ALL_CERTIFICATES.engineering },
      { id: "design", title: "🎨 Design / UX / Marketing", items: ALL_CERTIFICATES.designMarketing },
      { id: "comm", title: "🌏 English & Communication", items: ALL_CERTIFICATES.communication },
      { id: "others", title: "🛡️ Security / Law / Others", items: ALL_CERTIFICATES.securityLawOthers }
    ],
    traits_points: [
      "Maintain high precision across multiple projects with trackable documentation.",
      "Expert at transforming scattered tasks into SOPs and reusable templates.",
      "Skilled at collaborating with diverse stakeholders and pre-identifying risks.",
      "Committed to continuous learning in PM, Cloud, and automation tools."
    ],
    footer: {
      contact: 'Contact',
      profiles: 'Profiles'
    }
  }
};