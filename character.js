// 📅 오늘 날짜 (한국 기준, YYYY-MM-DD)
const today = new Date().toLocaleDateString('en-CA');

// 🎭 캐릭터 설정 객체 (어렵지 않음, 설정 묶음임)
const Character = {
  defaultImage: "images/default.png",

  imagesByDate: {
    "2026-02-09": "images/happy.png",
    "2026-02-14": "images/holiday.png"
  },

  messagesByDate: {
    "2026-02-09": "🌙 천천히 가도 괜찮아",
    "2026-02-14": "💝 오늘은 좀 특별한 날"
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
