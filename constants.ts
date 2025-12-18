import { ExperienceItem, ProjectItem } from './types';

// The full expanded list of 84 certificates/courses provided by the user
const ALL_CERTIFICATES = {
  pm: [
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 1", link: "https://drive.google.com/file/d/1MYkrQSMuMT2Rhrhlh_erPlRzjQCMLgOY/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 2", link: "https://drive.google.com/file/d/1BBJpWbZZa5fzMPMWyazMLOY1gRlLHRXe/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 3", link: "https://drive.google.com/file/d/1MkFMeYNiW9f_WJWJ1vgoqVVN3O5jD61L/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 4", link: "https://drive.google.com/file/d/1KhtbGlaJsLMI06eWwtpj_RdCCwqxX7Ua/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 5", link: "https://drive.google.com/file/d/11mdlRy9zBfQPMGbmzkn41E_iFfFtO_3/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 6", link: "https://drive.google.com/file/d/1vyCRzJc4lhBz8VOiq1-n4UDlGVoibJcx/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 7", link: "https://drive.google.com/file/d/1Nr8X_3RjgrCLvsZYLhriWKFgmRE-RJ-d/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Exam: Unit 8", link: "https://drive.google.com/file/d/1joaPnsLXsUBXaLnvKEc51VcS1Vk3YIBq/view", tag: "PMI" },
    { title: "Certified Associate in Project Management (CAPM)® Complete Professional Certificate", link: "https://drive.google.com/file/d/19CXjRKB2nQ3LhJzdRZoX1N38LZiNLyQK/view", tag: "PMI" },
    { title: "Foundations of Project Management", link: "https://drive.google.com/file/d/1UBUqnhhZEubXFV3PNCyNnkWQTGtGe9Y2/view", tag: "Google" },
    { title: "Create a High-Performing Team", link: "https://drive.google.com/file/d/10T6R0G7L6RUqVd4ln00zJynU4moxPFcG/view", tag: "Leadership" },
    { title: "Grow as a Manager", link: "https://drive.google.com/file/d/1EvMznt6X9m0mm1t_UeTb32Zw5p-7p66J/view", tag: "Leadership" },
    { title: "Set and Achieve Team Goals", link: "https://drive.google.com/file/d/1DFmCyl8B9Mvgft4DMa8AQF61IVqsTrAe/view", tag: "Management" },
    { title: "Support Individual Growth and Development", link: "https://drive.google.com/file/d/1okso0e1U9i22qaPf1O6UpfnW0jREV0Uf/view", tag: "Leadership" },
    { title: "Startup Entrepreneurship (Specialization - 4 Courses)", link: "https://drive.google.com/file/d/1-IjEoMPMZT74S7-fUgXNrIQij_vWX8uk/view", tag: "Startup" },
    { title: "Innovation Career Lessons from a Master", link: "https://drive.google.com/file/d/1x4YRIR33hpqOpi0SNGujkBN20ONbJZJI/view", tag: "Career" },
    { title: "From Idea to Startup", link: "https://drive.google.com/file/d/1PlAayUCEgysG-Ki9p126DF4sQgAKy20h/view", tag: "Entrepreneur" },
    { title: "Digital Transformation", link: "https://drive.google.com/file/d/1feCO4GpA71OX2vboi7nfJqimzTU6lFGG/view", tag: "Strategy" },
    { title: "Action-Driven Business Plan: From Classroom to World", link: "https://drive.google.com/file/d/16P_spkN5qIb3iZNYH3Dusa2K2wh5ug38/view", tag: "Business" },
    { title: "Google People Management Essentials (Professional Cert)", link: "https://drive.google.com/file/d/14owYJ2KCqRmCtxgmy9YbWBg-uGup2HHo/view", tag: "Management" }
  ],
  cloudAi: [
    { title: "Google Workspace Data Governance", link: "https://drive.google.com/file/d/1nrPoVtFJe84cJXaeEXjdAgcwOGh9oInO/view", tag: "Cloud" },
    { title: "Digital Transformation with Google Cloud", link: "https://drive.google.com/file/d/19zGMDh72kDTegQ99hmB5X9z0R_SzDSwF/view", tag: "GCP" },
    { title: "Exploring Data Transformation with Google Cloud", link: "https://drive.google.com/file/d/1yyETgMU10zjz9YNiXjSaxSozR_hYuhHc/view", tag: "GCP" },
    { title: "Google Cloud Fundamentals: Core Infrastructure", link: "https://drive.google.com/file/d/1BSY6mF51UimhN45sx7nWOROsTzQakxYX/view", tag: "Cloud" },
    { title: "Innovating with Google Cloud Artificial Intelligence", link: "https://drive.google.com/file/d/1bVnzRejF-9TKIpZNJoIQTZGVE7_6Ar2G/view", tag: "AI" },
    { title: "Google AI Essentials (Professional Certificate)", link: "https://drive.google.com/file/d/1tcry5Hb_0xz8SPPZG8b-xmS53oTtL1c8/view", tag: "AI" },
    { title: "Generative AI Content Creation", link: "https://drive.google.com/file/d/1tF3W-VqvHrScB1VYM5_XqzK3bFLe9YrM/view", tag: "GenAI" },
    { title: "Maximize Productivity With AI Tools", link: "https://drive.google.com/file/d/1RIKIjSsuVaRxGjMJwciU9zNH-UgzEnPU/view", tag: "AI" },
    { title: "Stay Ahead of the AI Curve", link: "https://drive.google.com/file/d/16aCDxSKtKxBOrKsc_S1jf_T9pko_klGf/view", tag: "AI" },
    { title: "Use AI Responsibly", link: "https://drive.google.com/file/d/1fwGSMkwvfPJ20YZmlbv4MPlmZ3WoO_Z0/view", tag: "Ethics" },
    { title: "Discover the Art of Prompting", link: "https://drive.google.com/file/d/18elUSZasbNNGVm0F514fVyJfjZyXclMJ/view", tag: "Prompt" },
    { title: "Introduction to AI", link: "https://drive.google.com/file/d/11dFx75mDDALbMbyaq_lkdnX59ks6tUty/view", tag: "AI" },
    { title: "A Tour of Google Cloud Hands-on Labs", link: "https://drive.google.com/file/d/1T7F08DuaoGXM2VYVYTPV2Iy4cPTFilia/view", tag: "GCP" }
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
    { title: "Java SE 17 Developer Professional Certificate", link: "https://drive.google.com/file/d/1uTwlTnkXJJfLzbDmybqsW4nwOsIlHHf2/view", tag: "Java" },
    { title: "Create Serverless Applications", link: "https://drive.google.com/file/d/1DIdusnAN_dLGK8A3_OkwCOIREFxH4m12/view", tag: "Azure" },
    { title: "Microsoft Azure Machine Learning for Data Scientists", link: "https://drive.google.com/file/d/1MMZpKi-Q2NXMJMIebktywCKTPqO5qC-A/view", tag: "Azure" },
    { title: "Create Machine Learning Models in Microsoft Azure", link: "https://drive.google.com/file/d/1I6lx2fr9Ip0v240O4W7nt55WMzPZmYC5/view", tag: "Azure" },
    { title: "Data Storage in Microsoft Azure for Associate Developers", link: "https://drive.google.com/file/d/1FXa6KaRi6vH4rphROHuBiD1XrA6T1-z5/view", tag: "Azure" },
    { title: "Connect Your Services with Microsoft Azure Service Bus", link: "https://drive.google.com/file/d/1skJz0RmI9nxP34_CDzIM1hzj2hnwih89/view", tag: "Azure" }
  ],
  designMarketing: [
    { title: "Adobe Graphic Designer: Attention Demanding Design", link: "https://drive.google.com/file/d/1b3dxbWBJhCgRJF_fRqL8ArFoEY1W36Xv/view", tag: "Adobe" },
    { title: "Adobe Marketing Specialist", link: "https://drive.google.com/file/d/1NGloCegl_Iaew3ZPae2RH3if1wlUQvxZ/view", tag: "Adobe" },
    { title: "Design Fundamentals with AI", link: "https://drive.google.com/file/d/1ZKQ0ME9bVHL8_8Cq10y5kNlZ1sdTtEkE/view", tag: "Design" },
    { title: "Fundamentals of UI/UX Design", link: "https://drive.google.com/file/d/1H8hbxd0U3IGIWox7GhXmE0rQ7sMZOFd4/view", tag: "UI/UX" },
    { title: "Foundations of User Experience (UX) Design", link: "https://drive.google.com/file/d/16A1-C6ef-3D3t_5xoAqdXqJ6Ki00mv-J/view", tag: "UX" },
    { title: "Start the UX Design Process: Empathize & Define", link: "https://drive.google.com/file/d/10hUdJYUh_CqIZGvFwiJm_a3kGKcAXpMB/view", tag: "UX" },
    { title: "Digital Marketing", link: "https://drive.google.com/file/d/12slIpSTLSJutopdstvdKuAXIYO91Z329/view", tag: "Marketing" },
    { title: "Foundations of Digital Marketing & E-commerce", link: "https://drive.google.com/file/d/15gdOdPcuGUZ_dMjHzjN-NtKyF2U3XF0_/view", tag: "Ecomm" },
    { title: "Social Media Content and Strategy", link: "https://drive.google.com/file/d/1kb4Al0A6IpoGC4UaLtjxiTsFr2f8Dqz0/view", tag: "Social" },
    { title: "Multichannel Content Marketing", link: "https://drive.google.com/file/d/1u_PsswbT8gbNakmpAZTEJBjuy20hnnur/view", tag: "Marketing" },
    { title: "Graphic Design", link: "https://drive.google.com/file/d/1CLKHdkWDB3Uz0D-WxqqQqbLMAUGe7ScH/view", tag: "Design" },
    { title: "Image Editing", link: "https://drive.google.com/file/d/1PNst2iNTL4NXW3U56v6_gfVq3Iuw8Unn/view", tag: "Design" },
    { title: "Document Design", link: "https://drive.google.com/file/d/1-Ub-VFYo3bD7q2pn-8w0zaqf45Ivr9T2/view", tag: "Design" },
    { title: "Design Thinking for Innovation", link: "https://drive.google.com/file/d/1pDYyHiPZNKKNa7TuitJCSDH8LVfFDtWF/view", tag: "Innovation" },
    { title: "Cracking the Creativity Code", link: "https://drive.google.com/file/d/1KHur02onthDJW6TojHDq8h1DR-3yBwGr/view", tag: "Creativity" }
  ],
  communication: [
    { title: "Build Your Professional ePortfolio in English", link: "https://drive.google.com/file/d/1MN6N8zgYh1dJRGLmnKNtrc6tcuIJrVKX/view", tag: "English" },
    { title: "English for Career Development", link: "https://drive.google.com/file/d/1g3duFx0yOhtTDPS2D2Heq3g28ATFXwlI/view", tag: "English" },
    { title: "Speak English Professionally", link: "https://drive.google.com/file/d/1b-S5jCEAug-aYAp1SDRLfW7W_nQpsQpr/view", tag: "Communication" },
    { title: "Write Professional Emails in English", link: "https://drive.google.com/file/d/14uE2AqbOqlAChjbDEqcGY_GO39E88GRY/view", tag: "English" },
    { title: "Improve Your English Communication Skills", link: "https://drive.google.com/file/d/1e2qnpUS2VL5hIQM6CPv7O-jP4Ke5V4Wh/view", tag: "English" }
  ],
  securityLawOthers: [
    { title: "Foundations of Cybersecurity", link: "https://drive.google.com/file/d/1arYEZgbfCmMjQtRwNAxtbptbyaRYX0X7/view", tag: "Cyber" },
    { title: "Palo Alto Networks Cybersecurity Foundation", link: "https://drive.google.com/file/d/1WWAvdRs0YmnX4rv-PVPGz_0rEadc92G1/view", tag: "Cyber" },
    { title: "International Law In Action: Crimes Investigation", link: "https://drive.google.com/file/d/1nJalzDCeaD3Y_4d8EMa0-5boYAZNwt00/view", tag: "Law" },
    { title: "The Social and Technical Context of Health Informatics", link: "https://drive.google.com/file/d/1RnfxCC2gNBTuR_JvCn-JiFOLn4ucobZt/view", tag: "Health" },
    { title: "Preparing Data for Analysis with Microsoft Excel", link: "https://drive.google.com/file/d/1NHopt_EF9XMOvTOiZXZ4QSMJuugvk7oN/view", tag: "Data" },
    { title: "Supply Chain Management and Analytics", link: "https://drive.google.com/file/d/1s_bVUWfYzye48TG1_fcm5ytJdqq80Krs/view", tag: "Supply" },
    { title: "Ask Questions to Make Data-Driven Decisions", link: "https://drive.google.com/file/d/1x9VoVAc_yDcYTl13rZF08zlluFEJCKub/view", tag: "Data" },
    { title: "Foundations: Data, Data, Everywhere", link: "https://drive.google.com/file/d/10ciDs3o_i0srDQXRu_74wdVRhrBbW107/view", tag: "Data" },
    { title: "Google Workspace Administrator Professional Cert", link: "https://drive.google.com/file/d/1D_JGsedSFJA-tANQ9f1KWQjCi0Sv2ubJ/view", tag: "Admin" },
    { title: "Google Workspace Core Services", link: "https://drive.google.com/file/d/1I0xwIA6boiw9P0ryCwJwx3CMMYmqtzQn/view", tag: "Admin" },
    { title: "Google Workspace Security", link: "https://drive.google.com/file/d/1cIXeZg0VHnJPJrS-nDIKqaHD_u4K7-bJ/view", tag: "Admin" },
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
      traits: '特質與職業目標',
      education: '進修與證照',
      contact: '聯絡方式'
    },
    hero: {
      role: '鍾旻庭｜教育行政與專案管理',
      tagline: '擅長把複雜的行政工作整理成清楚、好操作的流程，且有雙語教育與學校行政的具體經驗（如:千人測驗、教育部計畫、畢業審查與文書處理）。確保每個步驟都有紀錄可查。',
      target: '專案管理助理、教育行政專員',
      btn_exp: '關於我的背景',
      btn_proj: '查看經歷與專案'
    },
    section_summaries: {
      about: '我專注於將教育現場的繁雜需求，轉化為更有效率的標準作業流程。',
      skills: '具備專案管理、行政流程設計與數位工具應用三方面的實務能力。',
      experience: '累積高教行政、教育部計畫與社區服務專案的實務經驗，熟悉從前期規劃到結案報告的完整流程。',
      projects: '透過流程設計與簡單自動化工具，我解決了許多長期存在的行政痛點。',
      education: '為了在行政與專案工作上更穩定地支援團隊，我持續透過線上課程與國際證照學習。主要集中在專案管理、雲端與資料、設計與溝通等面向，以下依主題分類列出。',
      traits: '重視細節與可追蹤性，希望成為讓團隊放心依靠的行政與專案夥伴。'
    },
    section_titles: {
      about: '關於我',
      about_sub: 'About Me',
      skills: '核心能力',
      skills_sub: 'Core Competencies',
      experience: '工作經歷',
      experience_sub: 'Work History',
      projects: '專案亮點',
      projects_sub: 'Highlights',
      education: '進修與證照',
      education_sub: '84 Professional Certifications',
      traits: '特質與職業目標',
      traits_sub: 'Professional Philosophy'
    },
    about_sections: [
      {
        title: "深耕教育行政與實務現場",
        content: "過去十年長期在教育與 NGO 場域工作，接觸學校行政、教育部計畫與社區方案。這些經驗讓我熟悉「現場需求」與「制度規定」之間的落差，也訓練出穩定處理細節與急件的能力。"
      },
      {
        title: "現職與工作內容",
        content: "目前在明新科技大學雙語教育中心擔任行政助理，負責畢業門檻審查、英語測驗規劃與教育部計畫行政。每學期處理上千名學生的資料與流程，包含名單確認、資格審查、場地與時間安排，以及相關文件彙整。"
      },
      {
        title: "工作風格與核心能力",
        content: "面對很多零散的任務時，我會先理出步驟，寫成大家都看得懂的 SOP、表單和範本。習慣使用雲端試算表、共用文件與簡單自動化工具追蹤進度，減少口頭溝通的誤差，讓團隊可以快速接手。"
      },
      {
        title: "為什麼走向科技教育行政",
        content: "在日常行政工作中，看見很多重複但重要的流程，如果只靠人工記憶，很容易出錯或難以交接。因此開始學習專案管理、雲端服務與資料處理，希望把這些工具帶回教育現場，設計出更穩定、透明、可長期運作的行政系統。"
      }
    ],
    skills: [
      { title: "行政流程設計與 SOP 建置", description: "將重複性高的工作整理成標準流程 and 表單，降低遺漏與人為差錯。" },
      { title: "專案管理與跨單位協作", description: "能拆解專案時程、追蹤進度，並在教師、行政與外部單位之間協調需求。" },
      { title: "大型測驗與活動規劃（千人規模）", description: "規劃考場、動線與人力分配，確保流程順暢、資訊明確。" },
      { title: "教育部計畫行政（經費與報告）", description: "處理預算編列、核銷文件與成果報告，確保符合規定且通過審查。" },
      { title: "資料整理與個資作業流程", description: "使用雲端工具整理學生成績、名單與問卷，並依規範處理個資與權限。" },
      { title: "文件系統化與資料整理", description: "建立清楚的檔案架構與命名方式，讓團隊成員快速找到需要的資訊。" },
      { title: "利害關係人溝通與需求分析", description: "了解教師、學生與行政單位的不同立場，協助對齊目標與可行作法。" }
    ],
    experience: [
      {
        company: "明新科技大學｜雙語教育中心",
        role: "教育行政與專案助理",
        period: "2023 – 至今",
        summary: "負責雙語教育相關行政與教育部計畫執行，建立可複製的行政流程，減少錯誤與溝通成本。",
        details: [
          "畢業門檻審查與資料核對：建立自動化核對機制，處理每學期約 1,000 件畢業門檻案件，減少大量重複比對與人工計算。",
          "千人英語測驗規劃：協助規劃並執行 1,000+ 人規模的英語測驗，負責場地分配、動線設計與監考人力安排。",
          "教育部計畫行政與經費管理：管理計畫預算、核銷與採購文件，整理所需證明與報表，通過校內外相關審查與稽核。"
        ]
      },
      {
        company: "財團法人台北市教會聚會所",
        role: "行政與活動企劃",
        period: "2021 – 2023",
        summary: "支援品格教育與親子活動，從招生、行政到現場執行，累積大型活動規劃與財務管理經驗。",
        details: [
          "活動行政與流程優化：主導多場年度活動與營隊行政作業，建立統一的報名表單、通知與流程文件。",
          "招生與課程運作：協助優化品格課程與夏令營的招生流程，整理常用文案與模板，讓後續梯次可以快速複製。",
          "財務與稽核：製作每月財務報表與管理零用金，維持長期帳目清楚、可供查核。"
        ]
      },
      {
        company: "教會生命成長培訓計畫",
        role: "社區計畫執行員",
        period: "2019 – 2021",
        summary: "參與偏鄉與社區服務專案，負責執行、資料紀錄與結案報告編寫。",
        details: [
          "現場執行與服務設計：配合不同社區需求設計活動內容，服務對象累積超過 2,000 人次。",
          "數據與成果整理：收集參與人數、回饋與成果，整理成清楚的表格與報告，對應原訂目標檢視達成度。",
          "跨地區協調：安排物資配送與人力支援，面對突發狀況時調整計畫，保持服務不中斷。"
        ]
      }
    ],
    projects: [
      { id: "english-test", title: "千人英語前測系統化", description: "將原本高度依賴人工記憶的流程拆解為標準 SOP，搭配雲端自動化追蹤，讓不同學期都能穩定執行並減少場地或名單的出錯率。" },
      { id: "character-education", title: "招生與通知流程優化", description: "整合報名表單與通知範本，讓新活動能快速更新並使用。這縮短了 30% 的準備時間，也讓家長對活動細節一目了然。" },
      { id: "moe-project", title: "教育部計畫檔案數位化", description: "建立一套清楚的檔案架構與核銷清單，讓老師和同事能快速找到需要的文件，解決了面對審查時「找無檔案」的壓力。" }
    ],
    education_intro: "",
    cert_groups: [
      { id: "pm", title: "📊 專案與管理 (PM & Leadership)", items: ALL_CERTIFICATES.pm },
      { id: "cloud", title: "🤖 資料、雲端與 AI (Data & Cloud / AI)", items: ALL_CERTIFICATES.cloudAi },
      { id: "dev", title: "⚙️ 工程與技術基礎 (Dev & Tech)", items: ALL_CERTIFICATES.engineering },
      { id: "design", title: "🎨 設計、行銷與 UX (Design & Marketing)", items: ALL_CERTIFICATES.designMarketing },
      { id: "comm", title: "🌏 教育與語言溝通 (Communication)", items: ALL_CERTIFICATES.communication },
      { id: "others", title: "🛡️ 資訊安全與其他專業 (Security & Others)", items: ALL_CERTIFICATES.securityLawOthers }
    ],
    traits_points: [
      "在多專案並行的情況下，會把每一件事情寫進清單與時程表，確保不遺漏、不延誤。",
      "喜歡把零散的行政工作整理成 SOP 和範本，讓之後加入的人也能快速上手。",
      "面對老師、學生與主管等不同角色，願意多聽需求、主動說明限制，協助找到折衷方案。",
      "持續學習專案管理與自動化工具，希望未來能在學校或教育機構中，推動更有效率又友善的行政流程。"
    ],
    footer: {
      contact: '聯絡方式',
      profiles: '專業社群',
      intro: '如果您想了解更多我的經歷或能力，歡迎隨時與我聯繫。'
    },
    about_stats: "10+ 年",
    about_stats_label: "行政與專案相關經驗",
    about_quote: "「我不只是處理當下的行政事務，而是希望把流程設計好，讓之後進來的人也能輕鬆接手。」"
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      traits: 'Traits',
      education: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      role: 'Rita Zhong | Ed Admin & Project Management',
      tagline: 'I specialize in turning complex administrative tasks into clear, easy-to-follow steps. With hands-on experience in school admin (large-scale exams, MOE projects, graduation reviews), I ensure every step is traceable and well-documented.',
      target: 'Project Management Assistant | Educational Admin Specialist',
      btn_exp: 'About My Background',
      btn_proj: 'View Experience & Projects'
    },
    section_summaries: {
      about: 'I bridge educational needs with streamlined operational systems for better efficiency.',
      skills: 'Possess practical competencies in project management, administrative process design, and digital tool integration.',
      experience: 'Gained practical experience in higher education admin, MOE projects, and community services from planning to final reporting.',
      projects: 'Solving administrative pain points with workflow design and simple automation tools.',
      education: 'To support administration and projects with stability, I continuously learn through online courses and international certifications. My focus includes PM, Cloud & Data, Design, and Communication, categorized below.',
      traits: 'Focusing on detail and traceability, I aim to be a reliable administrative and project partner that teams can rely on.'
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
      traits: 'Traits & Career Goals',
      traits_sub: 'Professional Philosophy'
    },
    about_sections: [
      {
        title: "Deeply Rooted in Educational Practice",
        content: "Over the past decade, I have worked extensively in education and NGO sectors, handling school admin, MOE projects, and community programs. This experience allows me to bridge the gap between field needs and institutional regulations while maintaining precision under pressure."
      },
      {
        title: "Current Role & Responsibilities",
        content: "At MUST Bilingual Education Center, I manage graduation reviews, English testing, and MOE project paperwork. I process data for over 1,000 students per semester, ensuring all documents, schedules, and venues are accurate and on time."
      },
      {
        title: "Work Style & Core Competencies",
        content: "When facing scattered tasks, I break them down into clear SOPs, forms, and templates. I use cloud spreadsheets and simple automation to track progress, minimizing verbal communication gaps so teams can pick up workflows instantly."
      },
      {
        title: "Why Tech-Driven Ed Admin",
        content: "I've seen how relying on memory for repetitive manual processes leads to errors. By mastering PM and cloud tools, I aim to design stable, transparent, and long-term administrative systems for smoother educational operations."
      }
    ],
    skills: [
      { title: "Process Design & SOP Implementation", description: "Systematizing repetitive tasks into workflows to minimize human error." },
      { title: "PM & Cross-department Collaboration", description: "Breaking down project timelines and coordinating across faculty and administration." },
      { title: "Large-scale Event Planning (1,000+ pax)", description: "Managing logistics and personnel for high-volume testing environments." },
      { title: "MOE Project Administration", description: "Handling budgets, reimbursements, and reporting for government-funded projects." },
      { title: "Data Governance & Privacy", description: "Utilizing cloud tools to securely organize records and manage access rights." },
      { title: "Systematic Documentation", description: "Establishing clear folder structures and naming rules for team-wide efficiency." },
      { title: "Stakeholder Communication", description: "Aligning objectives between teachers, students, and administration." }
    ],
    experience: [
      {
        company: "Minghsin University | Bilingual Center",
        role: "Ed Admin & Project Assistant",
        period: "2023 – Present",
        summary: "Responsible for bilingual education admin and MOE project execution, reducing errors through repeatable processes.",
        details: [
          "Graduation Review & Verification: Developed automated checking mechanisms for ~1,000 checks per semester, reducing manual calculation.",
          "1,000+ Pax Exam Planning: Planned and executed exams for 1,000+ students, managing venues, logistics, and proctors.",
          "MOE Project Admin & Finance: Managed project budgets and procurement, ensuring all audits passed smoothly."
        ]
      },
      {
        company: "NGO / Church Organizations",
        role: "Admin & Event Planner",
        period: "2021 – 2023",
        summary: "Supported character education and parenting events, optimizing recruitment and admin workflows.",
        details: [
          "Admin Process Optimization: Led administrative operations for annual events, establishing standardized registration and notification formats.",
          "Enrollment & Operations: Optimized enrollment workflows and templates, shortening preparation time for subsequent sessions.",
          "Finance & Audit: Maintained monthly financial reports and petty cash for two years with zero discrepancies."
        ]
      },
      {
        company: "Training Program Execution",
        role: "Community Project Specialist",
        period: "2019 – 2021",
        summary: "Executed rural and community service programs with a focus on data recording and reporting.",
        details: [
          "Field Execution & Service Design: Tailored activity content to community needs, serving over 2,000 participants.",
          "Data & Outcome Reporting: Collected feedback and outcomes into structured reports to track goal achievement.",
          "Cross-region Coordination: Managed logistics and manpower across regions, adapting plans quickly to maintain service continuity."
        ]
      }
    ],
    projects: [
      { id: "english-test", title: "1,000+ Student Test Systematization", description: "Converted manual-heavy testing logistics into clear cloud SOP steps, ensuring stable execution and fewer data errors across semesters." },
      { id: "character-education", title: "Enrollment Workflow Optimization", description: "Standardized enrollment forms and notification templates. This shortened prep time by 30% and helped parents see activity details clearly." },
      { id: "moe-project", title: "MOE Project File Management", description: "Established a clear folder structure and naming rules so teachers can find needed data instantly, reducing audit-related pressure." }
    ],
    education_intro: "",
    cert_groups: [
      { id: "pm", title: "📊 Project & Management", items: ALL_CERTIFICATES.pm },
      { id: "cloud", title: "🤖 Data, Cloud & AI", items: ALL_CERTIFICATES.cloudAi },
      { id: "dev", title: "⚙️ Dev & Engineering Foundations", items: ALL_CERTIFICATES.engineering },
      { id: "design", title: "🎨 Design, Marketing & UX", items: ALL_CERTIFICATES.designMarketing },
      { id: "comm", title: "🌏 Education & Communication", items: ALL_CERTIFICATES.communication },
      { id: "others", title: "🛡️ Security & Other Specialist", items: ALL_CERTIFICATES.securityLawOthers }
    ],
    traits_points: [
      "In multi-project environments, I document every task in lists and schedules to ensure nothing is missed or delayed.",
      "I enjoy organizing scattered administrative tasks into SOPs and templates, enabling successors to ramp up quickly.",
      "When working with faculty, students, and supervisors, I listen actively to needs and clarify constraints to find viable compromises.",
      "I continuously learn PM and automation tools to drive more efficient and user-friendly administrative workflows in educational settings."
    ],
    footer: {
      contact: 'Contact',
      profiles: 'Profiles',
      intro: 'If you would like to know more about my experience or qualifications, please feel free to contact me.'
    },
    about_stats: "10+ Years",
    about_stats_label: "Experience in Admin & PM",
    about_quote: "“I don't just handle immediate tasks; I design processes so successors can pick up the work with ease.”"
  }
};