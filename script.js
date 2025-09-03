const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const overlay = document.getElementById("overlay");
const music = document.getElementById("bgMusic");

// Nhạc auto chạy sau click đầu tiên
document.addEventListener("click", () => {
  if (music.paused) music.play();
}, { once: true });

// Nút No chạy trốn
function moveNoBtn() {
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  // random vị trí trong khoảng an toàn
  const x = Math.random() * (screenW - btnW - 40) + 20;
  const y = Math.random() * (screenH - btnH - 40) + 20;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Hover (PC) + Click (Mobile) đều làm No chạy
noBtn.addEventListener("mouseenter", moveNoBtn);
noBtn.addEventListener("click", moveNoBtn);

// Nút Yes -> hiện popup
yesBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

// Trái tim bay
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);
