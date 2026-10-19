// ==========================================
// FECHA DEL CUMPLEAÑOS
// ==========================================

// Formato:
// new Date(AÑO, MES-1, DÍA, HORA, MINUTO, SEGUNDO)
//
// Octubre = 9
const birthday = new Date(2026, 9, 19, 2, 20, 0);

let birthdayOpened = false;


// ==========================================
// CUENTA REGRESIVA
// ==========================================

function updateCountdown() {

  const now = new Date();

  const diff = birthday - now;

  const timer = document.getElementById("timer");


  // Cuando llegue el cumpleaños
  if (diff <= 0) {

    timer.textContent = "❤️ ¡Llegó el momento! ❤️";

    if (!birthdayOpened) {

      birthdayOpened = true;

      // Intentar abrir la página sorpresa
      const surprise = window.open(
        "birthday.html",
        "_blank"
      );

      // Si el navegador bloquea el popup,
      // redirigir la página actual
      if (!surprise) {
        window.location.href = "birthday.html";
      }

    }

    return;
  }


  // Calcular tiempo restante
  const days = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (diff / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (diff / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (diff / 1000) % 60
  );


  timer.textContent =
    `${days} días ${hours} horas ${minutes} min ${seconds} seg`;
}


// Ejecutar inmediatamente
updateCountdown();

// Actualizar cada segundo
setInterval(updateCountdown, 1000);


// ==========================================
// ÁRBOL DE CORAZONES
// ==========================================

const tree = document.getElementById("heartTree");


// Crear 180 corazones
for (let i = 0; i < 180; i++) {

  const t =
    Math.random() * Math.PI * 2;

  const r =
    Math.random();


  // Fórmula matemática del corazón
  const x =
    16 * Math.pow(Math.sin(t), 3);


  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);


  // Crear corazón
  const heart =
    document.createElement("div");

  heart.className = "heart";


  // Posición
  const px =
    140 +
    x * 9 * (0.55 + r * 0.45);


  const py =
    140 -
    y * 9 * (0.55 + r * 0.45);


  heart.style.left =
    `${px}px`;

  heart.style.top =
    `${py}px`;


  // Animación aleatoria
  heart.style.animationDelay =
    `${Math.random() * 3}s`;


  // Colores aleatorios
  const colors = [
    "#ff4d6d",
    "#ff6b81",
    "#ff1744",
    "#ff8fa3",
    "#e63973"
  ];


  heart.style.background =
    colors[
      Math.floor(
        Math.random() *
        colors.length
      )
    ];


  tree.appendChild(heart);
}


// ==========================================
// CORAZONES FLOTANDO POR EL FONDO
// ==========================================

const bg =
  document.querySelector(".hearts-bg");


setInterval(() => {

  const h =
    document.createElement("div");


  h.className =
    "floating";


  h.textContent =
    "❤";


  // Posición horizontal aleatoria
  h.style.left =
    Math.random() * 100 + "vw";


  // Tamaño aleatorio
  h.style.fontSize =
    16 +
    Math.random() * 18 +
    "px";


  // Duración aleatoria
  h.style.animationDuration =
    6 +
    Math.random() * 6 +
    "s";


  bg.appendChild(h);


  // Eliminar el corazón después
  // para no llenar la memoria
  setTimeout(() => {

    h.remove();

  }, 12000);


}, 250);
