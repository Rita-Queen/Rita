import { CertificateCategory, ExperienceItem, ProjectItem } from './types';

// Shared Data (Links and shared attributes)
const CERT_ITEMS = {
  cloud: [
    { title: "Google Workspace Data Governance", link: "https://drive.google.com/file/d/1nrPoVtFJe84cJXaeEXjdAgcwOGh9oInO/view", tag: "Governance" },
    { title: "A Tour of Google Cloud Hands-on Labs", link: "https://drive.google.com/file/d/1T7F08DuaoGXM2VYVYTPV2Iy4cPTFilia/view", tag: "GCP" },
    { title: "Digital Transformation with Google Cloud", link: "https://drive.google.com/file/d/19zGMDh72kDTegQ99hmB5X9z0R_SzDSwF/view", tag: "Cloud" },
    { title: "Exploring Data Transformation with Google Cloud", link: "https://drive.google.com/file/d/1yyETgMU10zjz9YNiXjSaxSozR_hYuhHc/view", tag: "Data" },
    { title: "Google Cloud Fundamentals: Core Infrastructure", link: "https://drive.google.com/file/d/1BSY6mF51UimhN45sx7nWOROsTzQakxYX/view", tag: "GCP" },
    { title: "Foundations of Cybersecurity", link: "https://drive.google.com/file/d/1arYEZgbfCmMjQtRwNAxtbptbyaRYX0X7/view", tag: "Security" },
    { title: "Palo Alto Networks Cybersecurity Foundation", link: "https://drive.google.com/file/d/1WWAvdRs0YmnX4rv-PVPGz_0rEadc92G1/view", tag: "Security" },
    { title: "Create Machine Learning Models in Microsoft Azure", link: "https://drive.google.com/file/d/1I6lx2fr9Ip0v240O4W7nt55WMzPZmYC5/view", tag: "Azure" },
    { title: "Data Storage in Microsoft Azure", link: "https://drive.google.com/file/d/1FXa6KaRi6vH4rphROHuBiD1XrA6T1-z5/view", tag: "Azure" },
    { title: "Connect Your Services with Microsoft Azure Service Bus", link: "https://drive.google.com/file/d/1skJz0RmI9nxP34_CDzIM1hzj2hnwih89/view", tag: "Integration" }
  ],
  pm: [
    { title: "Certified Associate in Project Management (CAPM®) – Unit 1", link: "https://drive.google.com/file/d/1MYkrQSMuMT2Rhrhlh_erPlRzjQCMLgOY/view", tag: "PMI" },
    { title: "CAPM® – Unit 2", link: "https://drive.google.com/file/d/1BBJpWbZZa5fzMPMWyazMLOY1gRlLHRXe/view", tag: "PMI" },
    { title: "CAPM® – Unit 3", link: "https://drive.google.com/file/d/1MkFMeYNiW9f_WJWJ1vgoqVVN3O5jD61L/view", tag: "PMI" },
    { title: "CAPM® – Unit 4", link: "https://drive.google.com/file/d/1KhtbGlaJsLMI06eWwtpj_RdCCwqxX7Ua/view", tag: "PMI" },
    { title: "CAPM® – Unit 5", link: "https://drive.google.com/file/d/11mdlRy9zBfQPMGbmwzkn41E_iFfFtO_3/view", tag: "PMI" },
    { title: "CAPM® – Unit 6", link: "https://drive.google.com/file/d/1vyCRzJc4lhBz8VOiq1-n4UDlGVoibJcx/view", tag: "PMI" },
    { title: "CAPM® – Unit 7", link: "https://drive.google.com/file/d/1Nr8X_3RjgrCLvsZYLhriWKFgmRE-RJ-d/view", tag: "PMI" },
    { title: "CAPM® – Unit 8", link: "https://drive.google.com/file/d/1joaPnsLXsUBXaLnvKEc51VcS1Vk3YIBq/view", tag: "PMI" },
    { title: "CAPM® Complete Professional Certificate", link: "https://drive.google.com/file/d/19CXjRKB2nQ3LhJzdRZoX1N38LZiNLyQK/view", tag: "PMI" },
    { title: "Foundations of Project Management", link: "https://drive.google.com/file/d/1UBUqnhhZEubXFV3PNCyNnkWQTGtGe9Y2/view", tag: "PM" },
    { title: "Create a High-Performing Team", link: "https://drive.google.com/file/d/10T6R0G7L6RUqVd4ln00zJynU4moxPFcG/view", tag: "Leadership" },
    { title: "Google People Management Essentials", link: "https://drive.google.com/file/d/14owYJ2KCqRmCtxgmy9YbWBg-uGup2HHo/view", tag: "Management" },
    { title: "Grow as a Manager", link: "https://drive.google.com/file/d/1EvMznt6X9m0mm1t_UeTb32Zw5p-7p66J/view", tag: "Management" }
  ],
  ai: [
    { title: "Google AI Essentials（Professional Certificate）", link: "https://drive.google.com/file/d/1tcry5Hb_0xz8SPPZG8b-xmS53oTtL1c8/view", tag: "AI" },
    { title: "Generative AI Content Creation", link: "https://drive.google.com/file/d/1tF3W-VqvHrScB1VYM5_XqzK3bFLe9YrM/view", tag: "GenAI" },
    { title: "Discover the Art of Prompting", link: "https://drive.google.com/file/d/18elUSZasbNNGVm0F514fVyJfjZyXclMJ/view", tag: "Prompt" },
    { title: "Use AI Responsibly", link: "https://drive.google.com/file/d/1fwGSMkwvfPJ20YZmlbv4MPlmZ3WoO_Z0/view", tag: "Ethics" },
    { title: "Microsoft Azure Machine Learning for Data Scientists", link: "https://drive.google.com/file/d/1MMZpKi-Q2NXMJMIebktywCKTPqO5qC-A/view", tag: "ML" },
    { title: "Crash Course on Python", link: "https://drive.google.com/file/d/1GimB-2sd57N8gpt4oqMrkWKV3B2TaKbX/view", tag: "Python" },
    { title: "Introduction to AI", link: "https://drive.google.com/file/d/11dFx75mDDALbMbyaq_lkdnX59ks6tUty/view", tag: "AI" }
  ],
  design: [
    { title: "Adobe Graphic Designer", link: "https://drive.google.com/file/d/1b3dxbWBJhCgRJF_fRqL8ArFoEY1W36Xv/view", tag: "Design" },
    { title: "Adobe Marketing Specialist", link: "https://drive.google.com/file/d/1NGloCegl_Iaew3ZPae2RH3if1wlUQvxZ/view", tag: "Marketing" },
    { title: "Design Fundamentals with AI", link: "https://drive.google.com/file/d/1ZKQ0ME9bVHL8_8Cq10y5kNlZ1sdTtEkE/view", tag: "AI Design" },
    { title: "Design Thinking for Innovation", link: "https://drive.google.com/file/d/1pDYyHiPZNKKNa7TuitJCSDH8LVfFDtWF/view", tag: "Design Thinking" },
    { title: "Foundations of User Experience (UX) Design", link: "https://drive.google.com/file/d/16A1-C6ef-3D3t_5xoAqdXqJ6Ki00mv-J/view", tag: "UX" },
    { title: "Fundamentals of UI/UX Design", link: "https://drive.google.com/file/d/1H8hbxd0U3IGIWox7GhXmE0rQ7sMZOFd4/view", tag: "UI/UX" },
    { title: "Graphic Design", link: "https://drive.google.com/file/d/1CLKHdkWDB3Uz0D-WxqqQqbLMAUGe7ScH/view", tag: "Design" }
  ],
  english: [
    { title: "English for Career Development", link: "https://drive.google.com/file/d/1g3duFx0yOhtTDPS2D2Heq3g28ATFXwlI/view", tag: "English" },
    { title: "Improve Your English Communication Skills", link: "https://drive.google.com/file/d/1e2qnpUS2VL5hIQM6CPv7O-jP4Ke5V4Wh/view", tag: "English" },
    { title: "Speak English Professionally", link: "https://drive.google.com/file/d/1b-S5jCEAug-aYAp1SDRLfW7W_nQpsQpr/view", tag: "English" },
    { title: "Build Your Professional ePortfolio in English", link: "https://drive.google.com/file/d/1MN6N8zgYh1dJRGLmnKNtrc6tcuIJrVKX/view", tag: "Writing" },
    { title: "Write Professional Emails in English", link: "https://drive.google.com/file/d/14uE2AqbOqlAChjbDEqcGY_GO39E88GRY/view", tag: "Writing" }
  ],
  marketing: [
    { title: "Get to Know Advertising with Google", link: "https://skillshop.credential.net/e03fb50a-28a8-43ff-b8d8-4befacba7e48", tag: "Google Ads" },
    { title: "認識 Google 廣告服務", link: "https://skillshop.credential.net/f240e1b2-15b9-4dfc-a662-829c85a9ccad", tag: "Google Ads" },
    { title: "Google Ads 影片廣告認證", link: "https://skillshop.credential.net/a5389007-b989-4f59-b6b4-94f80ac65762", tag: "Video Ads" },
    { title: "Google Ads 搜尋廣告認證", link: "https://skillshop.credential.net/0383afdf-3195-4707-976d-c56836c87dc5", tag: "Search Ads" },
    { title: "Google Ads 多媒體廣告認證", link: "https://skillshop.credential.net/b8a7a2c9-3554-416e-9d91-43b42bf72169", tag: "Display" },
    { title: "Google Ads 應用程式廣告認證", link: "https://skillshop.credential.net/5de0d9b3-e407-47e9-a4a5-c6523009abb2", tag: "App Ads" },
    { title: "Google Ads 廣告素材認證", link: "https://skillshop.credential.net/53fd4978-6bfb-42f3-933d-744938a461ac", tag: "Creative" },
    { title: "Google Analytics Certification", link: "https://skillshop.credential.net/363517fb-ae23-4c1d-9dc0-bd883500aa2b", tag: "GA" },
    { title: "Google Analytics（分析）認證", link: "https://skillshop.credential.net/3f538351-a735-4731-8cc4-f1bf346bc8eb", tag: "GA" },
    { title: "開始使用 Google Analytics (GA4)", link: "https://skillshop.credential.net/9732a67f-6799-409c-b673-5f6f118b9afc", tag: "GA4" },
    { title: "管理 GA4 資料並瞭解如何閱讀報表", link: "https://skillshop.credential.net/f400e958-0c0c-41b3-9b68-f5f0f545bfb0", tag: "GA4" },
    { title: "Manage GA4 Data and Learn to Read Reports", link: "https://skillshop.credential.net/a0915667-141f-4f94-9b62-8ce988e363bc", tag: "GA4" },
    { title: "Dive Deeper into GA4 Data and Reports", link: "https://skillshop.credential.net/abd3263b-8ee6-46b2-a5e5-40869fb5251c", tag: "GA4" },
    { title: "Use GA4 with other Tools and Data Sources", link: "https://skillshop.credential.net/56709aa3-0e38-4a47-bd4c-2a15e8f8cb5f", tag: "GA4" },
    { title: "Search Ads 360 認證測驗", link: "https://skillshop.credential.net/62b0c0d5-f74f-4440-89ea-5fa8a70aff4e", tag: "SA360" },
    { title: "Display & Video 360 認證測驗", link: "https://skillshop.credential.net/45f93ef8-7a8b-49d9-8f12-afa1278bb5d9", tag: "DV360" },
    { title: "開始使用 Google AdMob", link: "https://skillshop.credential.net/0ed98d1c-5ae5-4d08-be0e-40831a14828c", tag: "AdMob" },
    { title: "透過 Google Ad Manager 提高廣告收益", link: "https://skillshop.credential.net/feecd984-6533-4266-9594-f908b733b9f7", tag: "Ad Manager" }
  ],
  workflow: [
    { title: "Workflow Specialist Certificate", link: "https://certifications.asana.com/a1d3e2d2-4732-4b20-894a-25c35a380f9c", tag: "Asana" },
    { title: "Asana Administrator Certificate", link: "https://certifications.asana.com/ff1dbf12-a9c8-44bd-8d7f-796dc51bb452", tag: "Asana" }
  ],
  edu_cert: [
    { title: "Google Certified Educator Level 2", link: "https://edu.google.accredible.com/9ed90aba-c0d9-44dd-ab98-702fb481f2d8", tag: "Education" },
    { title: "Gemini Certified Educator", link: "https://edu.google.accredible.com/9ca9a83e-9119-4e21-8d3f-9bf3e40de1d2", tag: "AI" },
    { title: "AI in the Classroom – Badge", link: "https://drive.google.com/file/d/18Gcav-eP9G5dpCIcUido5aBSkqaJ_hEI/view", tag: "AI" },
    { title: "AI in the Classroom", link: "https://drive.google.com/file/d/1-uMVrvzDbZv_sLP4xMVsMPV1xCafE3Bl/view", tag: "AI" }
  ],
  iso: [
    { title: "ISO 9001:2015 品質管理系統－內部稽核員訓練", link: "https://drive.google.com/file/d/14VzwCy2nSKSMmL2CzNQRk9OC6pGr_sVz/view", tag: "ISO" },
    { title: "ISO 45001:2018 職業安全衛生管理系統－內部稽核員訓練", link: "https://drive.google.com/file/d/1sCm1KZnVlATgyM-OVJ_7F4B-1GDvwgqd/view", tag: "ISO" }
  ],
  lang: [
    { title: "母語認證（太魯閣族）高中級", link: "https://drive.google.com/file/d/1XqroQiTYzfMFSMpdBzDmgKNdmuQoTg6x/view", tag: "Language" }
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
      role: 'Administrative Operations & Project Management',
      tagline: '我專注於設計穩定、可追蹤、可複製的行政與專案系統，讓組織在高複雜度與高負荷下仍能順暢運作。',
      btn_exp: '查看經歷',
      btn_proj: '查看專案'
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
      education_sub: 'Continuing Education & Certifications',
      traits: '個人特質與自我期許',
      traits_sub: 'Traits & Goals'
    },
    about_text: [
      "目前任職於明新科技大學雙語教育中心行政助理，負責畢業門檻審查、英語測驗規劃以及教育部計畫行政，實務經驗橫跨大學行政、非營利組織、飯店服務與社區計畫，累積超過 10 年行政與專案執行歷練。",
      "擅長問題拆解、流程設計與跨單位協作，能從前期規劃、執行到結案報告完整掌握，並在高壓時程中維持穩定與精準。希望在更大型或制度完善的組織中，承接跨部門專案與流程優化任務，成為穩定推動營運效率的核心行政人才。"
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
        role: "行政助理",
        period: "2023 – 至今",
        details: [
          "建立中心行政流程與 SOP，使審查、公告與協作更具系統性與可追溯性。",
          "每學期處理約 600–1000 件外語能力畢業門檻審查，建立一致審查標準。",
          "規劃千人大一英語前測，負責場地、動線、監考與資訊公告。",
          "支援教育部計畫行政（經費、採購、公文、結案）。",
          "建立個資作業流程，通過校內外個資稽核。"
        ]
      },
      {
        company: "財團法人台北市教會聚會所",
        role: "行政與活動企劃",
        period: "2021 – 2023",
        details: [
          "文書、會議記錄與資料管理。",
          "零用金與帳務管理，確保財務可稽核。",
          "規劃兒童夏令營、品格課程（30–50 人）。",
          "支援 100–250 人講座與研討會。"
        ]
      },
      {
        company: "教會生命成長培訓計畫",
        role: "活動與社區計畫執行",
        period: "2019 – 2021",
        details: [
          "執行五週偏鄉服務計畫，服務超過 2,000 人。",
          "撰寫成果與結案報告。",
          "成果發表會企劃與跨團隊協作。"
        ]
      },
      {
        company: "金府大飯店股份有限公司",
        role: "服務與住宿管理",
        period: "2018",
        details: [
          "入住流程與房務協調。",
          "旅客需求與客訴處理。"
        ]
      },
      {
        company: "南臺科技大學｜應用英語系",
        role: "計畫助理",
        period: "2016 – 2017",
        details: [
          "行政表單、公文與活動支援。",
          "研討會與英語競賽協作。"
        ]
      },
      {
        company: "南臺科技大學",
        role: "教育部專案計畫助理",
        period: "2015 – 2016",
        details: [
          "英語六學分加註班行政與結案。",
          "專案網站內容管理。"
        ]
      }
    ],
    projects: [
      {
        id: "english-test",
        title: "千人級英語前測流程系統化",
        description: "從高風險人工作業，轉為可複製的標準流程"
      },
      {
        id: "character-education",
        title: "品格教育與親子活動專案",
        description: "招生與執行流程全面優化，建立穩定運作模式"
      },
      {
        id: "rural-service",
        title: "偏鄉五週服務計畫（嘉義溪口）",
        description: "跨團隊協作的長期服務專案與成果整合"
      },
      {
        id: "moe-project",
        title: "教育部計畫行政（南臺科大應英系）",
        description: "完整支援課程、資格、經費與結案流程"
      }
    ],
    education_intro: "我持續透過國際線上平台與專業機構進修，進修主軸聚焦於教育行政、專案管理、雲端工具、資料治理、AI 應用與英語專業溝通，以強化在高教與行政場域中的實務能力。",
    cert_categories: [
      { id: "ce-cloud", title: "☁️ Cloud / Data / Security", subtitle: "（雲端・資料治理・資訊安全）", type: "course", items: CERT_ITEMS.cloud },
      { id: "ce-pm", title: "📊 Project Management / Leadership", subtitle: "（專案管理・組織與領導）", type: "course", items: CERT_ITEMS.pm },
      { id: "ce-ai", title: "🤖 AI / Data / Automation", subtitle: "（人工智慧・資料分析・流程自動化）", type: "course", items: CERT_ITEMS.ai },
      { id: "ce-design", title: "🎨 Design / UX / Digital Tools", subtitle: "（設計思維・使用者體驗・數位工具）", type: "course", items: CERT_ITEMS.design },
      { id: "ce-english", title: "🌏 English / Communication", subtitle: "（專業英語・職場溝通與寫作）", type: "course", items: CERT_ITEMS.english },
      { id: "ce-marketing", title: "🧾 Digital Marketing / Ads / Analytics", subtitle: "（數位行銷・廣告・成效分析）", type: "cert", items: CERT_ITEMS.marketing },
      { id: "ce-workflow", title: "⚙️ Workflow / Productivity Tools", subtitle: "（流程管理・工作效率工具）", type: "cert", items: CERT_ITEMS.workflow },
      { id: "ce-education", title: "🎓 Education / AI / Classroom", subtitle: "（教育認證・AI 教學應用）", type: "cert", items: CERT_ITEMS.edu_cert },
      { id: "ce-iso", title: "🛡 ISO / Quality & Safety Systems", subtitle: "（品質・職安管理系統）", type: "cert", items: CERT_ITEMS.iso },
      { id: "ce-language", title: "🌱 Language / Cultural Certification", subtitle: "（語言與文化認證）", type: "cert", items: CERT_ITEMS.lang }
    ],
    cert_ui: {
      all: '全部顯示',
      course: '只看課程',
      cert: '只看證書',
      search_placeholder: '搜尋課程或證照...',
      no_results: '沒有找到符合的項目',
      credly_link: '🔗 查看完整證書與數位徽章：Credly 個人頁面'
    },
    traits_quote: "在高負荷情境中仍能維持高品質與精準度，擅長拆解問題、優化流程與建立制度，重視細節與可追蹤性。具備換位思考與高度協作能力，喜歡讓團隊的工作更有效率、更有秩序。",
    footer: {
      contact: '聯絡方式',
      profiles: '社群平台'
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
      role: 'Administrative Operations & Project Management',
      tagline: 'I specialize in designing stable, trackable, and replicable administrative and project systems, ensuring smooth operations for organizations under high complexity and high load.',
      btn_exp: 'View Experience',
      btn_proj: 'View Projects'
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
      education_sub: 'Continuing Education & Certifications',
      traits: 'Traits & Goals',
      traits_sub: 'Professional Philosophy'
    },
    about_text: [
      "Currently serving as an Administrative Assistant at the Bilingual Education Center of Minghsin University of Science and Technology. I manage graduation requirement reviews, English proficiency test planning, and MOE project administration. My experience spans university administration, non-profit organizations, hospitality, and community projects, with over 10 years of expertise in administration and project execution.",
      "I specialize in problem decomposition, process design, and cross-department collaboration, handling everything from initial planning and execution to final reporting. I excel at maintaining stability and precision under high-pressure timelines. I aim to take on cross-functional projects and process optimization roles in larger or well-established organizations, becoming a key administrator who drives operational efficiency."
    ],
    skills: [
      "Administrative Process Design & SOP Implementation",
      "Project Management & Cross-functional Collaboration",
      "Large-scale Event & Test Planning (1000+ attendees)",
      "Government Project Administration (Budgeting, Procurement, Reporting)",
      "Data Governance & Privacy Compliance (Collection, Storage, Auditing)",
      "Document Systematization (Excel / Google Workspace)",
      "Stakeholder Communication & Needs Analysis"
    ],
    experience: [
      {
        company: "Minghsin University of Science and Technology | Bilingual Education Center",
        role: "Administrative Assistant",
        period: "2023 – Present",
        details: [
          "Established administrative processes & SOPs, making reviews, announcements, and collaboration systematic and traceable.",
          "Handled approximately 600–1000 English graduation requirement reviews per semester, establishing consistent review standards.",
          "Planned large-scale freshman English pre-tests (1000+ students), managing venues, flow, proctoring, and announcements.",
          "Supported MOE project administration (budget, procurement, official documents, closing reports).",
          "Established personal data protection procedures, passing internal and external audits."
        ]
      },
      {
        company: "Taipei Church Gathering (Non-profit)",
        role: "Administrative & Event Planner",
        period: "2021 – 2023",
        details: [
          "Managed documentation, meeting minutes, and data records.",
          "Managed petty cash and accounting to ensure financial auditability.",
          "Planned children's summer camps and character courses (30–50 participants).",
          "Supported seminars and conferences (100–250 participants)."
        ]
      },
      {
        company: "Life Growth Training Program",
        role: "Event & Community Project Executive",
        period: "2019 – 2021",
        details: [
          "Executed a 5-week rural service project serving over 2,000 people.",
          "Authored outcome and closing reports.",
          "Planned outcome presentations and facilitated cross-team collaboration."
        ]
      },
      {
        company: "Golden Garden Hotel",
        role: "Service & Accommodation Management",
        period: "2018",
        details: [
          "Coordinated check-in processes and housekeeping.",
          "Handled guest requests and complaints."
        ]
      },
      {
        company: "Southern Taiwan University of Science and Technology | Dept. of Applied English",
        role: "Project Assistant",
        period: "2016 – 2017",
        details: [
          "Handled administrative forms, official documents, and event support.",
          "Collaborated on seminars and English competitions."
        ]
      },
      {
        company: "Southern Taiwan University of Science and Technology",
        role: "MOE Project Assistant",
        period: "2015 – 2016",
        details: [
          "Administered the English 6-credit endorsement program and closing reports.",
          "Managed project website content."
        ]
      }
    ],
    projects: [
      {
        id: "english-test",
        title: "Systematization of 1000+ Student English Pre-test",
        description: "Transformed high-risk manual operations into replicable standard procedures."
      },
      {
        id: "character-education",
        title: "Character Education & Parent-Child Event Project",
        description: "Fully optimized recruitment and execution processes to establish a stable operational model."
      },
      {
        id: "rural-service",
        title: "5-Week Rural Service Project (Chiayi)",
        description: "A long-term service project requiring extensive cross-team collaboration and result integration."
      },
      {
        id: "moe-project",
        title: "MOE Project Administration (STUST Applied English)",
        description: "Full support for curriculum, qualifications, budget, and project closing processes."
      }
    ],
    education_intro: "I continuously pursue professional development through international online platforms and institutions. My focus is on Educational Administration, Project Management, Cloud Tools, Data Governance, AI Applications, and Professional English Communication to enhance practical capabilities in higher education and administrative fields.",
    cert_categories: [
      { id: "ce-cloud", title: "☁️ Cloud / Data / Security", subtitle: "(Governance, Security, Cloud)", type: "course", items: CERT_ITEMS.cloud },
      { id: "ce-pm", title: "📊 Project Management / Leadership", subtitle: "(PMI, Leadership, Mgmt)", type: "course", items: CERT_ITEMS.pm },
      { id: "ce-ai", title: "🤖 AI / Data / Automation", subtitle: "(AI, Analytics, Automation)", type: "course", items: CERT_ITEMS.ai },
      { id: "ce-design", title: "🎨 Design / UX / Digital Tools", subtitle: "(Design Thinking, UX)", type: "course", items: CERT_ITEMS.design },
      { id: "ce-english", title: "🌏 English / Communication", subtitle: "(Professional Comm)", type: "course", items: CERT_ITEMS.english },
      { id: "ce-marketing", title: "🧾 Digital Marketing / Ads / Analytics", subtitle: "(Ads, GA4, Analytics)", type: "cert", items: CERT_ITEMS.marketing },
      { id: "ce-workflow", title: "⚙️ Workflow / Productivity Tools", subtitle: "(Asana, Workflow)", type: "cert", items: CERT_ITEMS.workflow },
      { id: "ce-education", title: "🎓 Education / AI / Classroom", subtitle: "(EdTech, AI for Edu)", type: "cert", items: CERT_ITEMS.edu_cert },
      { id: "ce-iso", title: "🛡 ISO / Quality & Safety Systems", subtitle: "(ISO 9001/45001)", type: "cert", items: CERT_ITEMS.iso },
      { id: "ce-language", title: "🌱 Language / Cultural Certification", subtitle: "(Indigenous Language)", type: "cert", items: CERT_ITEMS.lang }
    ],
    cert_ui: {
      all: 'Show All',
      course: 'Courses',
      cert: 'Certificates',
      search_placeholder: 'Search courses or certificates...',
      no_results: 'No matching items found',
      credly_link: '🔗 View full badges on Credly'
    },
    traits_quote: "I maintain high quality and precision even under high workloads. I excel at breaking down problems, optimizing processes, and building systems, with a strong focus on details and traceability. I possess empathy and strong collaboration skills, and I enjoy bringing efficiency and order to team operations.",
    footer: {
      contact: 'Contact',
      profiles: 'Social Profiles'
    }
  }
};