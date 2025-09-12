const initialSites = [
  /* ================== 온라인강의 💻 ================== */
  {name:"EBS 초등", url:"https://www.ebs.co.kr/course/home?courseType=ELMT", desc:"초등 전 과목 온라인 강의", category:"learning", ages:["elem"], subjects:["korean","math","science","social"]},
  {name:"EBS 중등", url:"https://www.ebs.co.kr/course/home?courseType=MIDD", desc:"중학생 대상 전 과목 온라인 강의", category:"learning", ages:["mid"], subjects:["korean","math","science","social"]},
  {name:"메가스터디", url:"https://www.megastudy.net/", desc:"중고등 학생 대상 강의", category:"learning", ages:["mid","high"], subjects:["korean","math","english","science"]},
  {name:"스터디파이", url:"https://www.studypie.co.kr/", desc:"온라인 맞춤 학습 서비스", category:"learning", ages:["elem","mid","high"], subjects:["korean","math","english"]},
  {name:"야나두", url:"https://yanadoo.com/", desc:"영어 및 중국어 학습", category:"learning", ages:["mid","high","adult"], subjects:["english","language"]},
  {name:"Coursera", url:"https://www.coursera.org/", desc:"전 세계 대학 및 기업의 온라인 강좌", category:"learning", ages:["high","adult"], subjects:["general","language"]},
  {name:"edX", url:"https://www.edx.org/", desc:"무료 및 유료 대학 온라인 강의 제공", category:"learning", ages:["high","adult"], subjects:["general"]},
  {name:"TED-Ed", url:"https://ed.ted.com/", desc:"짧은 영상 강의로 다양한 지식 학습", category:"learning", ages:["mid","high"], subjects:["general"]},
  {name:"MIT OpenCourseWare", url:"https://ocw.mit.edu/", desc:"MIT 공개 강의 자료", category:"learning", ages:["high","adult"], subjects:["science","tech"]},
  {name:"Skillshare", url:"https://www.skillshare.com/", desc:"디자인, 코딩, 영상 등 실무 학습", category:"learning", ages:["high","adult"], subjects:["art","tech"]},

  /* ================== 참고자료 🔍 ================== */
  {name:"위키백과", url:"https://ko.wikipedia.org/", desc:"자유 백과사전", category:"info", ages:["mid","high","adult"], subjects:["general"]},
  {name:"나무위키", url:"https://namu.wiki/", desc:"다양한 주제를 다루는 한국어 위키", category:"info", ages:["mid","high","adult"], subjects:["general"]},
  {name:"국립중앙과학관", url:"https://www.science.go.kr/", desc:"과학 체험 및 교육 정보", category:"info", ages:["elem","mid","high"], subjects:["science"]},
  {name:"RISS", url:"http://www.riss.kr/", desc:"학술 자료 및 논문 검색", category:"info", ages:["high","adult"], subjects:["general"]},
  {name:"국립중앙도서관", url:"https://www.nl.go.kr/", desc:"디지털 자료 및 자료 검색", category:"info", ages:["mid","high","adult"], subjects:["general"]},
  {name:"국가과학기술정보센터", url:"https://www.ntis.go.kr/", desc:"과학/기술 자료 검색", category:"info", ages:["mid","high","adult"], subjects:["science","tech"]},

  /* ================== 시험/기출 📝 ================== */
  {name:"토익 공식 사이트", url:"https://www.toeic.co.kr/", desc:"토익 시험 자료", category:"exam", ages:["high","adult"], subjects:["exam"]},
  {name:"컴퓨터 활용능력 기출", url:"https://www.q-net.or.kr", desc:"컴퓨터 활용능력 시험 기출 문제", category:"exam", ages:["high","adult"], subjects:["exam"]},
  {name:"한국사 능력검정시험", url:"https://www.historyexam.go.kr/", desc:"한국사 시험 대비 자료", category:"exam", ages:["mid","high"], subjects:["exam"]},
  {name:"수능 모의고사 자료", url:"https://www.kice.re.kr/", desc:"수능 기출 및 모의고사 자료", category:"exam", ages:["high"], subjects:["exam"]},
  {name:"SAT Practice", url:"https://collegereadiness.collegeboard.org/sat/practice", desc:"SAT 시험 연습 사이트", category:"exam", ages:["high","adult"], subjects:["exam","english"]},
  {name:"EBS 수능특강", url:"https://www.ebs.co.kr/special/suneung", desc:"수능 대비 온라인 강의", category:"exam", ages:["high"], subjects:["exam","korean","math","english"]},

  /* ================== 과제/리포트 📄 ================== */
  {name:"DBpia", url:"https://www.dbpia.co.kr/", desc:"학술 논문 및 자료 검색", category:"assignment", ages:["high","adult"], subjects:["general","science","social"]},
  {name:"에듀넷", url:"https://www.edunet.net/", desc:"학교 과제 자료 및 학습 자료", category:"assignment", ages:["elem","mid","high"], subjects:["general","korean","math"]},
  {name:"네이버 학술정보", url:"https://academic.naver.com/", desc:"논문 및 연구자료 검색", category:"assignment", ages:["high","adult"], subjects:["general"]},
  {name:"국립중앙도서관 학술정보", url:"https://www.nl.go.kr/", desc:"리포트 참고자료 제공", category:"assignment", ages:["mid","high","adult"], subjects:["general"]},
  {name:"RISS", url:"http://www.riss.kr/", desc:"논문 및 레포트 자료", category:"assignment", ages:["high","adult"], subjects:["general"]},

  // ================== GPT 활용 예시 사이트 ==================
  {name:"ChatGPT", url:"https://chat.com/", desc:"GPT 5가 호들갑 떤거 생각하면 성능이... 아무튼 현존 최강", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Gemini", url:"https://gemini.google.com/", desc:"잼미니", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Claude", url:"https://claude.ai/", desc:"GPT 보단 코딩 잘함", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Grok", url:"https://grok.com/", desc:"머스크 형의 챗지피티 이상의 GPT", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Perplexity", url:"https://www.perplexity.ai/", desc:"정보 찾는 GPT(이거 쓸바엔 다른거 쓰긴함)", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Gamma", url:"https://gamma.app/", desc:"PPT 제작 노예", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},

  /* ================== 코딩/IT 💻 ================== */
  {name:"Inflearn", url:"https://www.inflearn.com/", desc:"국내 온라인 IT/코딩 강의", category:"coding", ages:["mid","high","adult"], subjects:["coding","tech"]},
  {name:"CodeUp", url:"https://codeup.kr/", desc:"코딩 테스트 및 알고리즘 연습", category:"coding", ages:["mid","high","adult"], subjects:["coding"]},
  {name:"Programmers", url:"https://programmers.co.kr/", desc:"개발자 실습/스터디", category:"coding", ages:["high","adult"], subjects:["coding","tech"]},
  {name:"생활코딩", url:"https://opentutorials.org/", desc:"무료 코딩 학습", category:"coding", ages:["elem","mid","high","adult"], subjects:["coding"]},
  {name:"Fast Campus Coding", url:"https://fastcampus.co.kr/dev_online", desc:"실무 코딩 강의", category:"coding", ages:["high","adult"], subjects:["coding","tech"]},

  /* ================== 진로/대학 🎓 ================== */
  {name:"진로직업정보망", url:"https://www.career.go.kr/", desc:"진로 및 직업 정보 제공", category:"career", ages:["high","adult"], subjects:["career"]},
  {name:"대학알리미", url:"https://www.academyinfo.go.kr/", desc:"대학 입학 정보", category:"career", ages:["high","adult"], subjects:["career"]},
  {name:"커리어넷", url:"https://www.career.go.kr/", desc:"진로 상담 및 직업 정보", category:"career", ages:["high","adult"], subjects:["career"]},
  {name:"에듀윌 진로", url:"https://www.eduwill.net/", desc:"진로·자격증 정보", category:"career", ages:["high","adult"], subjects:["career"]},
  {name:"진학사", url:"https://www.jinhak.com/", desc:"대입 정보 및 상담", category:"career", ages:["high"], subjects:["career"]},

  /* ================== 생산성/도구 🛠️ ================== */
  {name:"Notion", url:"https://www.notion.so/", desc:"노트, 학습 계획 및 자료 정리", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Google Workspace", url:"https://workspace.google.com/", desc:"문서, 스프레드시트 등 학습 도구", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"카카오워크", url:"https://www.kakaowork.com/", desc:"협업 및 자료 공유 도구", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Todoist", url:"https://todoist.com/", desc:"할 일 관리 및 학습 계획", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"캘린더", url:"https://calendar.google.com/", desc:"시간 관리 및 일정 정리", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},

  /* ================== 학습 전략/스터디 📌 ================== */
  {name:"스터디코드", url:"https://www.studycod.com/", desc:"효율적인 공부법과 스터디 가이드 제공", category:"study", ages:["mid","high"], subjects:["general"]},
  {name:"공부의 신", url:"https://www.gongbune.co.kr/", desc:"공부 계획, 시험 대비 전략", category:"study", ages:["mid","high"], subjects:["general"]},
  {name:"에듀팡 학습전략", url:"https://www.edupang.com/", desc:"맞춤형 학습 전략과 팁 제공", category:"study", ages:["mid","high"], subjects:["general"]},
  {name:"학습법 연구소", url:"https://www.learninglab.kr/", desc:"과목별 공부법 및 시간관리", category:"study", ages:["mid","high"], subjects:["general"]},
  {name:"열공닷컴", url:"https://www.yeolgong.com/", desc:"시험 대비 및 학습 팁 공유", category:"study", ages:["mid","high"], subjects:["general"]},

  /* ================== 독서/문해력 📖 ================== */
  {name:"국립어린이청소년도서관", url:"https://www.kcyl.go.kr/", desc:"어린이·청소년 독서자료 제공", category:"reading", ages:["elem","mid"], subjects:["korean","general"]},
  {name:"리딩게이트", url:"https://www.readinggate.com/", desc:"온라인 영어 독서 프로그램", category:"reading", ages:["elem","mid"], subjects:["english","language"]},
  {name:"교보문고 eBook", url:"https://www.kyobobook.co.kr/ebook/", desc:"전자책 및 학습용 도서", category:"reading", ages:["elem","mid","high"], subjects:["korean","general"]},
  {name:"Yes24 독서교육", url:"https://www.yes24.com/Books/Edu", desc:"청소년 맞춤 독서 자료", category:"reading", ages:["mid","high"], subjects:["korean","general"]},
  {name:"다독다독", url:"https://www.dadokdadok.com/", desc:"청소년 독서 기록 및 추천", category:"reading", ages:["elem","mid"], subjects:["korean","general"]},

  /* ================== 창의/예술 🎨 ================== */
  {name:"서울시교육청 창의예술자료", url:"https://creative.sen.go.kr/", desc:"미술·음악·창의 활동 자료", category:"art", ages:["elem","mid","high"], subjects:["art","music"]},
  {name:"아트앤스터디", url:"https://www.artnstudy.com/", desc:"예술 강좌 및 자료", category:"art", ages:["mid","high","adult"], subjects:["art","music"]},
  {name:"두산백과 예술", url:"https://www.doopedia.co.kr/", desc:"예술 관련 참고자료", category:"art", ages:["mid","high"], subjects:["art","music"]},
  {name:"클래스101 학생용", url:"https://class101.net/", desc:"디자인·예술 온라인 클래스", category:"art", ages:["mid","high","adult"], subjects:["art","design"]},
  {name:"예술교육포털", url:"https://www.artedu.or.kr/", desc:"예술 교육 자료 및 체험", category:"art", ages:["elem","mid","high"], subjects:["art","music"]},

  /* ================== 체험/탐구 🔬 ================== */
  {name:"국립과학관", url:"https://www.science.go.kr/", desc:"과학 체험 및 교육 자료", category:"explore", ages:["elem","mid","high"], subjects:["science"]},
  {name:"어린이박물관", url:"https://www.kidsmuseum.or.kr/", desc:"청소년 체험 학습 자료", category:"explore", ages:["elem","mid"], subjects:["science","social"]},
  {name:"한국민속촌", url:"https://www.koreanfolk.co.kr/", desc:"역사·문화 체험", category:"explore", ages:["elem","mid","high"], subjects:["social","history"]},
  {name:"서울시립과학관", url:"https://www.ssc.or.kr/", desc:"과학 실험 및 전시 자료", category:"explore", ages:["elem","mid","high"], subjects:["science"]},
  {name:"창의체험넷", url:"https://www.culture.go.kr/creative/", desc:"청소년 창의 체험 프로그램", category:"explore", ages:["elem","mid","high"], subjects:["general","art","science"]}
];