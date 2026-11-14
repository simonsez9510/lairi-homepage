export const navItems = [
  { label: "연구원 소개", href: "/about" },
  { label: "AI 의정시스템", href: "/ai" },
  { label: "연구 실적", href: "/track" },
  { label: "연구 분야", href: "/research" },
  { label: "혁신뉴스", href: "/news" },
  { label: "연구진", href: "/team" },
];

export const links = {
  home: "https://home.jachinews.kr",
  news: "https://jachinews.kr",
  ai: "https://jachiai.kr",
  introPdf: "/lairi-1pager.pdf",
  fciaApex: "/fcia-apex/",
};

export const proofItems = [
  { label: "포지션", title: "정책, 데이터, AI 파트너", copy: "지방의회와 지자체의 의사결정을 지원합니다." },
  { label: "실적", title: "2023-2026 연구 수행", copy: "법규 정비, 복지, 환경, 예산, 지역경제 과제." },
  { label: "제품", title: "AI 지방의정시스템", copy: "조례부터 행정감사 문서화까지 지원합니다." },
  { label: "미디어", title: "지방자치혁신뉴스", copy: "연구의 깊이와 뉴스의 속도를 결합합니다." },
];

export const homeMenuCards = [
  {
    number: "01",
    label: "연구원 소개",
    title: "정책연구, AI, 뉴스룸을 연결하는 연구기관",
    copy: "지방의회와 지자체가 확인해야 할 3대 협력 축을 정리했습니다.",
    href: "/about",
    icon: "solar:buildings-2-bold-duotone",
  },
  {
    number: "02",
    label: "AI 의정시스템",
    title: "조례, 질의서, 예산, 회의록을 하나의 업무 흐름으로",
    copy: "의정활동 문서화와 근거 탐색을 AI 워크플로로 지원합니다.",
    href: "/ai",
    icon: "solar:cpu-bolt-bold-duotone",
  },
  {
    number: "03",
    label: "연구 실적",
    title: "2023-2026 수행 과제로 검증된 연구 역량",
    copy: "법규 정비, 복지, 환경, 예산, 지역경제 과제를 연도별로 확인합니다.",
    href: "/track",
    icon: "solar:medal-ribbons-star-bold-duotone",
  },
  {
    number: "04",
    label: "연구 분야",
    title: "6개 정책 분야를 빠르게 찾는 매트릭스",
    copy: "생활정책, 자치제도, 지역경제, 재정과 데이터, 환경, 문화와 공간.",
    href: "/research",
    icon: "solar:map-point-search-bold-duotone",
  },
  {
    number: "05",
    label: "혁신뉴스",
    title: "연구의 깊이와 뉴스의 속도를 결합한 전문 미디어",
    copy: "정책 브리프, 원장 칼럼, 혁신 조례 분석, 오늘의 숫자를 발행합니다.",
    href: "/news",
    icon: "solar:notebook-bookmark-bold-duotone",
  },
  {
    number: "06",
    label: "연구진",
    title: "정책 현장, 사회복지, 행정, 데이터사이언스의 조합",
    copy: "의뢰기관이 협력 여부를 판단할 수 있도록 연구진 전문성을 정리했습니다.",
    href: "/team",
    icon: "solar:users-group-rounded-bold-duotone",
  },
];

export const pillars = [
  {
    number: "01",
    label: "POLICY RESEARCH",
    title: "정책연구",
    copy: "지역 현안의 원인을 분석하고 지속 가능한 정책 대안을 설계합니다.",
    points: ["지역 특성 분석", "법규 정비", "복지, 환경, 예산 연구"],
    icon: "solar:magnifer-zoom-in-bold-duotone",
  },
  {
    number: "02",
    label: "AI SYSTEM",
    title: "AI 의정시스템",
    copy: "의정활동 문서 작성과 근거 탐색을 업무 흐름에 맞춰 지원합니다.",
    points: ["조례와 질의서 생성", "예결산 분석", "회의록 검색과 요약"],
    icon: "solar:cpu-bolt-bold-duotone",
    featured: true,
  },
  {
    number: "03",
    label: "NEWSROOM",
    title: "지방자치혁신뉴스",
    copy: "연구 결과와 지역 혁신 사례를 정책 전문 미디어로 확산합니다.",
    points: ["3분 정책 브리프", "오늘의 숫자", "혁신 조례 분석"],
    icon: "solar:notebook-bold-duotone",
  },
];

export const aiSteps = [
  { number: "01", title: "조례 작성·관리", copy: "초안 생성과 기존 조례 충돌 검토" },
  { number: "02", title: "질의서 생성", copy: "행정질의서와 근거 자료 구성" },
  { number: "03", title: "예결산 분석·시각화", copy: "예산 데이터를 비교 가능한 형태로 정리" },
  { number: "04", title: "회의록 검색·분석", copy: "발언과 안건을 검색하고 요약" },
  { number: "05", title: "행정감사 위저드", copy: "4단계 가이드로 보고서 작성" },
  { number: "06", title: "문서 버전 관리", copy: "수정 이력과 PDF/Word 내보내기" },
];

export const researchTimeline = [
  {
    year: "2023",
    projects: [
      { title: "목포시의회 자치법규 일제정비 용역", meta: "목포시의회 / 지방자치, 법규 정비" },
      { title: "고령화 예산 실태분석 및 개선방안 연구", meta: "영양군의회 / 고령화 사회, 예산 분석" },
      { title: "예주 항일애국기념관 건립 타당성 연구", meta: "영덕군의회 / 타당성 조사, 문화 시설" },
    ],
  },
  {
    year: "2024",
    projects: [
      { title: "탄소중립 실현을 위한 1회용품 줄이기 실천방안 연구", meta: "울진군의회 / 환경 정책, 규제 방안" },
      { title: "고독사 실태파악 및 지원방안 연구", meta: "대구광역시 북구의회 / 사회 복지, 고독사 방지" },
      { title: "폐교 활용 방안 연구", meta: "대구광역시의회 / 지역 개발, 자산 활용" },
    ],
  },
  {
    year: "2025",
    projects: [
      { title: "전통시장 활성화 방안 연구", meta: "인천광역시 동구의회 / 지역경제발전" },
      { title: "지속 가능한 보육·교육 정책 연구", meta: "인천광역시 동구의회 / 사회복지, 보육·교육 정책" },
    ],
  },
  {
    year: "2026",
    projects: [
      { title: "제6기 지역사회보장계획수립 용역", meta: "인천광역시 남동구청 / 지역사회보장, 복지 계획" },
      { title: "제6기 지역사회보장계획 수립 연구용역", meta: "인천서해구복지재단(구 인천서구복지재단) / 지역사회보장, 복지 계획" },
    ],
  },
];

export const researchFields = [
  { label: "생활정책", title: "복지, 고독사, 보육, 교육", copy: "주민 생활 질과 사회적 고립 문제를 중심으로 연구합니다.", icon: "solar:heart-pulse-bold-duotone" },
  { label: "자치제도", title: "조례, 법규 정비, 의회 운영", copy: "지방자치 제도와 행정 절차를 정비합니다.", icon: "solar:document-text-bold-duotone" },
  { label: "지역경제", title: "전통시장, 자산 활용, 폐교 활용", copy: "공공 자산과 지역 특성을 활용한 경제 전략을 설계합니다.", icon: "solar:shop-2-bold-duotone" },
  { label: "재정과 데이터", title: "예산 분석, 지표, 정책 효과", copy: "예산과 데이터를 근거로 실행 가능한 대안을 찾습니다.", icon: "solar:chart-square-bold-duotone" },
  { label: "환경과 탄소", title: "탄소중립, 규제 개선", copy: "지역 환경 문제와 지속 가능한 제도 개선을 연구합니다.", icon: "solar:leaf-bold-duotone" },
  { label: "문화와 공간", title: "문화시설, 타당성 조사", copy: "문화 공간 조성과 개발 과제의 실행 가능성을 검토합니다.", icon: "solar:buildings-3-bold-duotone" },
];

export const newsCards = [
  { number: "01", title: "3분 정책 브리프", copy: "핵심 지방행정 정책을 짧고 명료하게 정리합니다." },
  { number: "02", title: "원장 칼럼", copy: "30년 정치컨설팅 경험의 통찰과 제언을 전합니다." },
  { number: "03", title: "혁신 조례 분석", copy: "전국 지자체 혁신 조례를 맥락과 함께 분석합니다." },
  { number: "04", title: "오늘의 숫자", copy: "데이터와 통계로 정책 인사이트를 제시합니다." },
  { number: "05", title: "실무자 인터뷰", copy: "현장 실무자들의 생생한 혁신 경험을 전합니다." },
  { number: "06", title: "지역 혁신 사례", copy: "전국 지자체 우수 사례를 발굴하고 확산합니다." },
];

export const teamMembers = [
  {
    name: "원성묵",
    role: "원장",
    expertise: "정책연구, 전략기획, 여론조사",
    profile: ["고려대 철학과 졸업", "스탠포드 경영대학원 IT전략과정 수료", "메타보이스(주) 수석컨설턴트"],
  },
  {
    name: "서희정",
    role: "수석연구위원",
    expertise: "사회복지, 지역정책",
    profile: ["성공회대학교 사회복지학박사", "성공회대 사회적기업연구센터 연구교수"],
  },
  {
    name: "김학영",
    role: "책임연구위원",
    expertise: "지방행정, 정책 현장",
    profile: ["전 시장군수구청장협의회 정책실장"],
  },
  {
    name: "이강년",
    role: "책임연구위원",
    expertise: "데이터사이언스, 분석",
    profile: ["성균관대학원 데이터사이언스박사"],
  },
];

export const contactDetails = [
  { label: "담당", value: "원성묵 원장" },
  { label: "전화", value: "010-6506-1389", href: "tel:010-6506-1389" },
  { label: "이메일", value: "seongmuk.won@gmail.com", href: "mailto:seongmuk.won@gmail.com" },
  { label: "주소", value: "서울특별시 마포구 어울마당로 130, 3층 3358호(서교동, 기린빌딩)" },
  { label: "뉴스", value: "jachinews.kr", href: links.news },
  { label: "소개서", value: "lairi-1pager.pdf", href: links.introPdf },
];

export const featuredResearch = {
  type: "지역사회보장계획",
  meta: "2026년 9월 준공 · 인천광역시 남동구청",
  title: "남동구 제6기 지역사회보장계획, 10대 전략과 55개 세부사업",
  summary:
    "「모두의 삶을 잇는 행복도시 남동」을 비전으로 2027~2030년 4년간의 지역사회보장 계획을 수립했습니다. 사회보장 전략 5개와 지역발전 전략 5개 아래 55개 세부사업과 10개 중점추진사업을 담았습니다.",
  findings: [
    { label: "사회보장", text: "함께 키우는 남동부터 혁신경제도시 남동까지 5대 전략" },
    { label: "지역발전", text: "급여·발굴, 인력, 거버넌스, 인프라, 열린 돌봄 5대 전략" },
    { label: "중점추진", text: "고독·고립 위험자 발굴, 수요자 중심 취업지원 등 10개 사업" },
  ],
  href: "/track",
};

export const recentItems = [
  {
    type: "정책연구",
    meta: "2025 · 인천광역시 동구의회",
    title: "인천 동구 전통시장 활성화 방안, 4대 전략과 15대 실천과제",
    copy: "지역경제 · 전통시장·상점가 9곳 현황 분석",
    href: "/track",
  },
  {
    type: "정책연구",
    meta: "2025 · 인천광역시 동구의회",
    title: "지속 가능한 보육·교육 정책 연구",
    copy: "생활정책 · 보육·교육",
    href: "/track",
  },
  {
    type: "교육",
    meta: "웹툰연수원",
    title: "상시학습, 이제 웹툰으로 — 공무원 교육 3개 과정",
    copy: "edu.jachinews.kr",
    href: "https://edu.jachinews.kr",
  },
];

export const services = [
  {
    key: "jachiai",
    type: "AI 의정시스템",
    name: "자치아이",
    tagline: "AI 의정시스템",
    domain: "jachiai.kr",
    href: "/ai",
    external: "https://jachiai.kr",
    image: "/home/service-jachiai.jpg",
    copy: "지방의회를 위한 AI 보좌관. 조례 검토부터 예결산 분석, 행정사무감사까지 의정 업무를 하나의 흐름으로 지원합니다.",
  },
  {
    key: "edu",
    type: "교육",
    name: "웹툰연수원",
    tagline: "공무원 상시학습",
    domain: "edu.jachinews.kr",
    href: "https://edu.jachinews.kr",
    external: "https://edu.jachinews.kr",
    image: "/home/service-edu.jpg",
    copy: "웹툰으로 배우는 공무원 상시학습. 퀴즈와 실천과제를 마치면 수료증을 받아 인사랑 개인학습으로 등록합니다.",
  },
  {
    key: "news",
    type: "미디어",
    name: "지방자치혁신뉴스",
    tagline: "지방자치 전문 매체",
    domain: "jachinews.kr",
    href: "https://www.jachinews.kr",
    external: "https://www.jachinews.kr",
    image: "/home/service-news.jpg",
    copy: "정책 브리프, 혁신 조례 분석, 데이터 분석, 원장 칼럼을 발행하는 지방자치 전문 매체입니다.",
  },
];

export const fieldIndex = [
  { title: "생활정책", scope: "복지, 고독사, 보육, 교육", projects: [["남동구 제6기 지역사회보장계획 수립", "2026"], ["서해구 제6기 지역사회보장계획 수립", "2026"], ["지속 가능한 보육·교육 정책", "2025"], ["고독사 실태파악 및 지원방안", "2024"]] },
  { title: "지역경제", scope: "전통시장, 자산 활용, 폐교 활용", projects: [["전통시장 활성화 방안", "2025"], ["폐교 활용 방안", "2024"]] },
  { title: "자치제도", scope: "조례, 법규 정비, 의회 운영", projects: [["목포시의회 자치법규 일제정비", "2023"]] },
  { title: "재정과 데이터", scope: "예산 분석, 지표, 정책 효과", projects: [["고령화 예산 실태분석 및 개선방안", "2023"]] },
  { title: "환경과 탄소", scope: "탄소중립, 규제 개선", projects: [["1회용품 줄이기 실천방안", "2024"]] },
  { title: "문화와 공간", scope: "문화시설, 타당성 조사", projects: [["예주 항일애국기념관 건립 타당성", "2023"]] },
];

export const director = {
  name: "원성묵",
  bio: "지방자치혁신연구원 원장 · 지방자치혁신뉴스 발행인. 『지방의정 AI로 혁신하라』 저자.",
  photo: "/won-seongmuk.jpg",
  site: "https://mook.jachiai.kr",
};

export const mainNav = [
  { label: "연구원 소개", href: "/about" },
  { label: "연구 실적", href: "/track" },
  { label: "연구 분야", href: "/research" },
  { label: "연구진", href: "/team" },
];
