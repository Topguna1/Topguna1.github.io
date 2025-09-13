
//  info: {name:"참고자료", icon:"🔍"},
//  exam: {name:"시험/기출", icon:"📝"},
//  assignment: {name:"과제/리포트", icon:"📄"},
//  gpt: {name:"GPT 활용", icon:"🤖"},
//  coding: {name:"코딩/IT", icon:"💻"},
//  career: {name:"진로/대학", icon:"🎓"},
//  productivity: {name:"생산성/도구", icon:"🛠️"},
//  study: {name:"학습 전략/스터디", icon:"📌"},
//  reading: {name:"독서/문해력", icon:"📖"},
//  art {name:"창의/예술", icon:"🎨"},
//  explore {name:"체험/탐구" icon:"🔬"

//  <option value="korean">국어</option>
//  <option value="math">수학</option>
//  <option value="english">영어</option>
//  <option value="science">과학</option>
//  <option value="social">사회</option>
//  <option value="history">역사</option>
//  <option value="art">예술</option>
//  <option value="music">음악</option>
//  <option value="pe">체육</option>
//  <option value="tech">기술</option>
//  <option value="coding">코딩</option>
//  <option value="language">외국어</option>
//  <option value="general">종합</option>
//  <option value="exam">시험대비</option>
//  <option value="career">진로</option>

// 초등 elem 중등 mid 고등 high 성인 adult



const initialSites = [
  /* ================== 온라인강의 💻 ================== */
  {name:"EBS", url:"https://www.ebs.co.kr/", desc:"전 국민의 평생학교 EBS", category:"learning", ages:["elem"], subjects:["korean","math","science","social"]},
  {name:"EBS 중학프리미엄", url:"https://mid.ebs.co.kr/", desc:"중학생 대상 전 과목 온라인 강의", category:"learning", ages:["mid"], subjects:["korean","math","science","social"]},
  {name:"EBSi", url:"https://www.ebsi.co.kr/", desc:"EBS 고등 온라인 강의", category:"learning", ages:["high"], subjects:["korean","math","english","science"]},
  {name:"메가스터디", url:"https://www.megastudy.net/", desc:"중고등 학생 대상 강의", category:"learning", ages:["mid","high"], subjects:["korean","math","english","science"]},
  {name:"스터디파이", url:"https://www.studypie.co.kr/", desc:"온라인 맞춤 학습 서비스", category:"learning", ages:["elem","mid","high"], subjects:["korean","math","english"]},
  {name:"야나두", url:"https://yanadoo.com/", desc:"영어 및 중국어 학습", category:"learning", ages:["mid","high","adult"], subjects:["english","language"]},
  {name:"Coursera", url:"https://www.coursera.org/", desc:"전 세계 대학 및 기업의 온라인 강좌", category:"learning", ages:["high","adult"], subjects:["general","language"]},
  {name:"edX", url:"https://www.edx.org/", desc:"무료 및 유료 대학 온라인 강의 제공", category:"learning", ages:["high","adult"], subjects:["general"]},
  {name:"TED-Ed", url:"https://ed.ted.com/", desc:"짧은 영상 강의로 다양한 지식 학습", category:"learning", ages:["mid","high"], subjects:["general"]},
  {name:"MIT OpenCourseWare", url:"https://ocw.mit.edu/", desc:"MIT 공개 강의 자료", category:"learning", ages:["high","adult"], subjects:["science","tech"]},
  {name:"Skillshare", url:"https://www.skillshare.com/", desc:"디자인, 코딩, 영상 등 실무 학습", category:"learning", ages:["high","adult"], subjects:["art","tech"]},
  {name:"K-MOOC", url:"https://www.kmooc.kr/", desc:"한국형 온라인 공개강좌", category:"learning", ages:["high","adult"], subjects:["general"]},
  {name:"스터디채널", url:"https://www.studychannel.co.kr/", desc:"수능 및 내신 강의 플랫폼", category:"learning", ages:["mid","high"], subjects:["korean","math","english"]},

  /* ================== 참고자료 🔍 ================== */
  {name:"위키백과", url:"https://ko.wikipedia.org/", desc:"자유 백과사전", category:"info", ages:["mid","high","adult"], subjects:["general"]},
  {name:"나무위키", url:"https://namu.wiki/", desc:"다양한 주제를 다루는 한국어 위키", category:"info", ages:["mid","high","adult"], subjects:["general"]},
  {name:"국립중앙과학관", url:"https://www.science.go.kr/", desc:"과학 체험 및 교육 정보", category:"info", ages:["elem","mid","high"], subjects:["science"]},
  {name:"RISS", url:"http://www.riss.kr/", desc:"학술 자료 및 논문 검색", category:"info", ages:["high","adult"], subjects:["general"]},
  {name:"국립중앙도서관", url:"https://www.nl.go.kr/", desc:"디지털 자료 및 자료 검색", category:"info", ages:["mid","high","adult"], subjects:["general"]},
  {name:"국가과학기술정보센터", url:"https://www.ntis.go.kr/", desc:"과학/기술 자료 검색", category:"info", ages:["mid","high","adult"], subjects:["science","tech"]},
  {name:"국사편찬위원회", url:"https://www.history.go.kr/", desc:"한국사 관련 사료와 자료 제공", category:"info", ages:["mid","high","adult"], subjects:["history"]},
  {name:"한국교육학술정보원(KERIS)", url:"https://www.keris.or.kr/", desc:"교육 연구 및 정보 제공", category:"info", ages:["mid","high","adult"], subjects:["general"]},
  {name:"에듀넷 티-클리어", url:"https://www.edunet.net/", desc:"교사·학생용 참고자료", category:"info", ages:["elem","mid","high"], subjects:["general"]},

  /* ================== 시험/기출 📝 ================== */
  {name:"토익 공식 사이트", url:"https://www.toeic.co.kr/", desc:"토익 시험 자료", category:"exam", ages:["high","adult"], subjects:["exam"]},
  {name:"컴퓨터 활용능력 기출", url:"https://www.q-net.or.kr", desc:"컴퓨터 활용능력 시험 기출 문제", category:"exam", ages:["high","adult"], subjects:["exam"]},
  {name:"한국사 능력검정시험", url:"https://www.historyexam.go.kr/", desc:"한국사 시험 대비 자료", category:"exam", ages:["mid","high"], subjects:["exam"]},
  {name:"수능 모의고사 자료", url:"https://www.kice.re.kr/", desc:"수능 기출 및 모의고사 자료", category:"exam", ages:["high"], subjects:["exam"]},
  {name:"SAT Practice", url:"https://collegereadiness.collegeboard.org/sat/practice", desc:"SAT 시험 연습 사이트", category:"exam", ages:["high","adult"], subjects:["exam","english"]},
  {name:"EBS 수능특강", url:"https://www.ebs.co.kr/special/suneung", desc:"수능 대비 온라인 강의", category:"exam", ages:["high"], subjects:["exam","korean","math","english"]},
  {name:"NEIS 교육청 시험자료", url:"https://neis.go.kr/", desc:"학교 시험 관련 자료", category:"exam", ages:["mid","high"], subjects:["exam"]},
  {name:"쎈닷컴", url:"https://www.ssen.com/", desc:"수학 문제 및 기출문제", category:"exam", ages:["mid","high"], subjects:["math","exam"]},
  {name:"마더텅", url:"https://www.mometa.co.kr/", desc:"교재 기반 기출문제 제공", category:"exam", ages:["mid","high"], subjects:["exam"]},

  /* ================== 과제/리포트 📄 ================== */
  {name:"DBpia", url:"https://www.dbpia.co.kr/", desc:"학술 논문 및 자료 검색", category:"assignment", ages:["high","adult"], subjects:["general","science","social"]},
  {name:"에듀넷", url:"https://www.edunet.net/", desc:"학교 과제 자료 및 학습 자료", category:"assignment", ages:["elem","mid","high"], subjects:["general","korean","math"]},
  {name:"네이버 학술정보", url:"https://academic.naver.com/", desc:"논문 및 연구자료 검색", category:"assignment", ages:["high","adult"], subjects:["general"]},
  {name:"국립중앙도서관 학술정보", url:"https://www.nl.go.kr/", desc:"리포트 참고자료 제공", category:"assignment", ages:["mid","high","adult"], subjects:["general"]},
  {name:"RISS", url:"http://www.riss.kr/", desc:"논문 및 레포트 자료", category:"assignment", ages:["high","adult"], subjects:["general"]},
  {name:"KISS 학술정보", url:"https://kiss.kstudy.com/", desc:"국내 학술 논문 자료", category:"assignment", ages:["high","adult"], subjects:["general","social"]},
  {name:"법제처 국가법령정보센터", url:"https://www.law.go.kr/", desc:"법률 및 과제 참고자료", category:"assignment", ages:["high","adult"], subjects:["social"]},
  {name:"국토연구원", url:"https://www.krihs.re.kr/", desc:"도시·환경 관련 연구자료", category:"assignment", ages:["high","adult"], subjects:["social","science"]},

  /* ================== GPT 활용 🤖 ================== */
  {name:"ChatGPT", url:"https://chat.com/", desc:"아무튼 현존 최강", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Gemini", url:"https://gemini.google.com/", desc:"잼미니", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Claude", url:"https://claude.ai/", desc:"코딩 잘함", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Grok", url:"https://grok.com/", desc:"요즘뜨고 있는거거", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Perplexity", url:"https://www.perplexity.ai/", desc:"정보 찾는 GPT(이거 쓸바엔 다른거 쓰긴함)", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Gamma", url:"https://gamma.app/", desc:"PPT 제작 노예", category:"gpt", ages:["mid","high","adult"], subjects:["general"]},

  /* ================== 코딩/IT 💻 ================== */
  {name:"Inflearn", url:"https://www.inflearn.com/", desc:"국내 온라인 IT/코딩 강의", category:"coding", ages:["mid","high","adult"], subjects:["coding","tech"]},
  {name:"CodeUp", url:"https://codeup.kr/", desc:"코딩 테스트 및 알고리즘 연습", category:"coding", ages:["mid","high","adult"], subjects:["coding"]},
  {name:"Programmers", url:"https://programmers.co.kr/", desc:"개발자 실습/스터디", category:"coding", ages:["high","adult"], subjects:["coding","tech"]},
  {name:"생활코딩", url:"https://opentutorials.org/", desc:"무료 코딩 학습", category:"coding", ages:["elem","mid","high","adult"], subjects:["coding"]},
  {name:"Fast Campus Coding", url:"https://fastcampus.co.kr/dev_online", desc:"실무 코딩 강의", category:"coding", ages:["high","adult"], subjects:["coding","tech"]},
  {name:"코드잇", url:"https://www.codeit.kr/", desc:"실무형 온라인 코딩 강의", category:"coding", ages:["mid","high","adult"], subjects:["coding"]},
  {name:"엘리스 AI 트랙", url:"https://elice.io/", desc:"AI/코딩 온라인 학습", category:"coding", ages:["high","adult"], subjects:["coding","tech"]},

  /* ================== 진로/대학 🎓 ================== */
  {name:"진로직업정보망", url:"https://www.career.go.kr/", desc:"진로 및 직업 정보 제공", category:"career", ages:["high","adult"], subjects:["career"]},
  {name:"대학알리미", url:"https://www.academyinfo.go.kr/", desc:"대학 입학 정보", category:"career", ages:["high","adult"], subjects:["career"]},
  {name:"커리어넷", url:"https://www.career.go.kr/", desc:"진로 상담 및 직업 정보", category:"career", ages:["high","adult"], subjects:["career"]},
  {name:"에듀윌 진로", url:"https://www.eduwill.net/", desc:"진로·자격증 정보", category:"career", ages:["high","adult"], subjects:["career"]},
  {name:"진학사", url:"https://www.jinhak.com/", desc:"대입 정보 및 상담", category:"career", ages:["high"], subjects:["career"]},
  {name:"유웨이", url:"https://www.uway.com/", desc:"대입 원서접수 및 진학 정보", category:"career", ages:["high"], subjects:["career"]},
  {name:"종로학원", url:"https://www.jongro.co.kr/", desc:"입시 분석 및 진학 상담", category:"career", ages:["high"], subjects:["career"]},
  {name:"커리어넷 진로심리검사", url:"https://www.career.go.kr/cnet/front/eu/euJob/euJobUserSelfMain.do", desc:"진로 적성 검사 제공", category:"career", ages:["mid","high"], subjects:["career"]},

  /* ================== 생산성/도구 🛠️ ================== */
  {name:"Notion", url:"https://www.notion.so/", desc:"노트, 학습 계획 및 자료 정리", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Google Workspace", url:"https://workspace.google.com/", desc:"문서, 스프레드시트 등 학습 도구", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"카카오워크", url:"https://www.kakaowork.com/", desc:"협업 및 자료 공유 도구", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Todoist", url:"https://todoist.com/", desc:"할 일 관리 및 학습 계획", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"캘린더", url:"https://calendar.google.com/", desc:"시간 관리 및 일정 정리", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"에버노트", url:"https://evernote.com/intl/ko", desc:"학습 노트 및 정리 도구", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"한컴스페이스", url:"https://space.hancom.com/", desc:"한글 기반 클라우드 협업 툴", category:"productivity", ages:["mid","high","adult"], subjects:["general"]},
  {name:"Trello", url:"https://trello.com/", desc:"칸반 방식 일정 관리", category:"productivity", ages:["high","adult"], subjects:["general"]},

  /* ================== 학습 전략/스터디 📌 ================== */
  {name:"스터디코드", url:"https://www.studycod.com/", desc:"효율적인 공부법과 스터디 가이드 제공", category:"study", ages:["mid","high"], subjects:["general"]},
  {name:"공부의 신", url:"https://www.gongbune.co.kr/", desc:"공부 계획, 시험 대비 전략", category:"study", ages:["mid","high"], subjects:["general"]},
  {name:"에듀팡 학습전략", url:"https://www.edupang.com/", desc:"맞춤형 학습 전략과 팁 제공", category:"study", ages:["mid","high"], subjects:["general"]},
  {name:"학습법 연구소", url:"https://www.learninglab.kr/", desc:"과목별 공부법 및 시간관리", category:"study", ages:["mid","high"], subjects:["general"]},
  {name:"열공닷컴", url:"https://www.yeolgong.com/", desc:"시험 대비 및 학습 팁 공유", category:"study", ages:["mid","high"], subjects:["general"]},
  {name:"공신닷컴", url:"https://gong-shin.com/", desc:"자기주도 학습 전략 공유", category:"study", ages:["mid","high"], subjects:["general"]},
  {name:"스터디서클", url:"https://www.study-circle.com/", desc:"스터디 그룹 매칭 및 팁", category:"study", ages:["high"], subjects:["general"]},

  /* ================== 독서/문해력 📖 ================== */
  {name:"국립어린이청소년도서관", url:"https://www.kcyl.go.kr/", desc:"어린이·청소년 독서자료 제공", category:"reading", ages:["elem","mid"], subjects:["korean","general"]},
  {name:"리딩게이트", url:"https://www.readinggate.com/", desc:"온라인 영어 독서 프로그램", category:"reading", ages:["elem","mid"], subjects:["english","language"]},
  {name:"교보문고 eBook", url:"https://www.kyobobook.co.kr/ebook/", desc:"전자책 및 학습용 도서", category:"reading", ages:["elem","mid","high"], subjects:["korean","general"]},
  {name:"Yes24 독서교육", url:"https://www.yes24.com/Books/Edu", desc:"청소년 맞춤 독서 자료", category:"reading", ages:["mid","high"], subjects:["korean","general"]},
  {name:"다독다독", url:"https://www.dadokdadok.com/", desc:"청소년 독서 기록 및 추천", category:"reading", ages:["elem","mid"], subjects:["korean","general"]},
  {name:"서울도서관", url:"https://lib.seoul.go.kr/", desc:"전자책 및 자료 대출 서비스", category:"reading", ages:["mid","high","adult"], subjects:["general","korean"]},
  {name:"웅진북클럽", url:"https://bookclub.wjthinkbig.com/", desc:"어린이·청소년 독서 프로그램", category:"reading", ages:["elem","mid"], subjects:["general"]},
  {name:"교보스콜라", url:"https://scholar.kyobobook.co.kr/", desc:"학술 도서 및 논문 검색", category:"reading", ages:["high","adult"], subjects:["general"]},

  /* ================== 창의/예술 🎨 ================== */
  {name:"구글 아트 앤 컬처", url:"https://artsandculture.google.com/", desc:"전 세계 예술 작품 탐험", category:"art", ages:["mid","high","adult"], subjects:["art","history"]},
  {name:"국립현대미술관", url:"https://www.mmca.go.kr/", desc:"현대미술 전시 및 교육 자료", category:"art", ages:["mid","high","adult"], subjects:["art"]},
  {name:"서울문화재단", url:"https://www.sfac.or.kr/", desc:"문화예술 교육 및 체험", category:"art", ages:["mid","high"], subjects:["art","music"]},
  {name:"예술경영지원센터", url:"https://www.gokams.or.kr/", desc:"예술 관련 연구 및 자료", category:"art", ages:["high","adult"], subjects:["art","music"]},
  {name:"서울예술교육센터", url:"https://artedu.seoul.go.kr/", desc:"학생 대상 예술 교육", category:"art", ages:["elem","mid","high"], subjects:["art","music"]},
  {name:"K-Arts 한국예술종합학교", url:"https://www.karts.ac.kr/", desc:"예술 전문 교육 자료", category:"art", ages:["high","adult"], subjects:["art","design","music"]},

  /* ================== 체험/탐구 🔬 ================== */
  {name:"NASA Kids Club", url:"https://www.nasa.gov/kidsclub/index.html", desc:"우주 과학 체험 학습", category:"explore", ages:["elem","mid"], subjects:["science"]},
  {name:"국립과천과학관", url:"https://www.sciencecenter.go.kr/", desc:"과학 실험·전시·탐구 활동", category:"explore", ages:["elem","mid","high"], subjects:["science"]},
  {name:"서울대공원 동물원", url:"https://grandpark.seoul.go.kr/", desc:"생물학 및 환경학 학습 체험", category:"explore", ages:["elem","mid"], subjects:["science","social"]},
  {name:"국립민속박물관", url:"https://www.nfm.go.kr/", desc:"한국 전통 문화 체험", category:"explore", ages:["elem","mid","high"], subjects:["history","social"]},
  {name:"국립중앙박물관", url:"https://www.museum.go.kr/", desc:"역사·문화 체험 자료", category:"explore", ages:["elem","mid","high"], subjects:["history","social"]},
  {name:"국립생태원", url:"https://www.nie.re.kr/", desc:"생태 체험 학습 자료", category:"explore", ages:["elem","mid","high"], subjects:["science"]}
];
