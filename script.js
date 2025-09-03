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

  const yesRect = yesBtn.getBoundingClientRect(); // lấy vùng của nút Yes

  let x, y;
  do {
    x = Math.random() * (screenW - btnW - 40) + 20;
    y = Math.random() * (screenH - btnH - 40) + 20;

    // kiểm tra có đụng vùng Yes không
  } while (
    x + btnW > yesRect.left - 20 &&     // cạnh phải No > cạnh trái Yes
    x < yesRect.right + 20 &&           // cạnh trái No < cạnh phải Yes
    y + btnH > yesRect.top - 20 &&      // cạnh dưới No > cạnh trên Yes
    y < yesRect.bottom + 20             // cạnh trên No < cạnh dưới Yes
  );

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
// Đặt vị trí ban đầu cho nút No né xa nút Yes
function setInitialNoBtn() {
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  const yesRect = yesBtn.getBoundingClientRect();

  let x, y;
  do {
    x = Math.random() * (screenW - btnW - 40) + 20;
    y = Math.random() * (screenH - btnH - 40) + 20;
  } while (
    x + btnW > yesRect.left - 40 &&   // tránh trùng ngang
    x < yesRect.right + 40 &&
    y + btnH > yesRect.top - 40 &&    // tránh trùng dọc
    y < yesRect.bottom + 40
  );

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Gọi khi load trang
window.onload = setInitialNoBtn;

