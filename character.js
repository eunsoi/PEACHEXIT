// 📅 오늘 날짜 (무조건 YYYY-MM-DD)
const today = new Date().toISOString().split('T')[0];

// 🎭 캐릭터 설정 객체 (어렵지 않음, 설정 묶음임)
const Character = {
  defaultImage: "images/default.png",

  imagesByDate: {
    "2027-02-09": "images/happy.png",
    "2027-02-14": "images/holiday.png"
  },

  messagesByDate: {
    "2026-07-01": "이제 슬슬 여름인가.",
    "2026-07-15": "묻지 말고 삼계탕 먹어라.",
    "2026-07-25": "묻지 말고 삼계탕 먹어라.",
    "2026-08-14": "묻지 말고 삼계탕 먹어라.",
    "2026-08-08": "그래 생일축하한다. 오늘은 좀 일찍 들어와라.",
    "2026-10-01": "이제 슬슬 여름 옷은 집어 넣자. ...아직 덥다고?",
    "2026-12-25": "메리크리스마스.",
    "2026-11-11": "뭐.",
    "2026-12-31": "해피뉴이어. 올 한 해도 잘 버텼다.",
    "2027-01-01": "또 한 살 먹었네.",
    "2027-01-06": "축하한다.",
    "2027-02-09": ".",
    "2027-02-14": ".",
    "2027-03-14": "화이트데이? 네가 애냐?",
    "2027-04-01": "...뭔진 모르겠지만 선생님 바보 아니다. 안 속아.",
  }
};

// 🖼 캐릭터 이미지 적용
const characterEl = document.getElementById("character");
if (characterEl) {
  characterEl.src =
    Character.imagesByDate[today] || Character.defaultImage;
}

// 💬 날짜 전용 멘트 (페이지 멘트로 덮어쓸 수 있음)
const bubbleEl = document.getElementById("bubbleText");
if (bubbleEl && Character.messagesByDate[today]) {
  bubbleEl.innerText = Character.messagesByDate[today];
}
function setPageMessage(message) {
  const bubble = document.getElementById("bubbleText");
  if (!bubble.innerText) {
    bubble.innerText = message;
  }
}
