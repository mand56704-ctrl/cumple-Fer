
/ Cambia esta fecha por el cumpleaños de tu pareja
// Formato: AÑO, MES-1, DÍA, HORA, MINUTO, SEGUNDO
const birthday = new Date(2026, 10, 16, 0, 0, 0);

function updateCountdown() {
  const now = new Date();
  let target = new Date(
    now.getFullYear(),
    birthday.getMonth(),
    birthday.getDate(),
    birthday.getHours(),
    birthday.getMinutes(),
    birthday.getSeconds()
  );

  if (target < now) {
    target.setFullYear(now.getFullYear() + 1);
  }

  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").textContent =
    `${days} días ${hours} horas ${minutes} min ${seconds} seg`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const tree = document.getElementById("heartTree");

// Crear un árbol con forma de corazón
for (let i = 0; i < 180; i++) {
  const t = Math.random() * Math.PI * 2;
  const r = Math.random();

  const x =
    16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);

  const heart = document.createElement("div");
  heart.className = "heart";

  const px = 140 + x * 9 * (0.55 + r * 0.45);
  const py = 140 - y * 9 * (0.55 + r * 0.45);

  heart.style.left = `${px}px`;
  heart.style.top = `${py}px`;
  heart.style.animationDelay = `${Math.random() * 3}s`;

  const colors = ["#ff4d6d", "#ff6b81", "#ff1744", "#ff8fa3", "#e63973"];
  heart.style.background = colors[Math.floor(Math.random() * colors.length)];

  tree.appendChild(heart);
}

// Corazones flotando por el fondo
const bg = document.querySelector(".hearts-bg");

setInterval(() => {
  const h = document.createElement("div");
  h.className = "floating";
  h.textContent = "❤";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 16 + Math.random() * 18 + "px";
  h.style.animationDuration = 6 + Math.random() * 6 + "s";
  bg.appendChild(h);

  setTimeout(() => h.remove(), 12000);
}, 250);

}, 250);
