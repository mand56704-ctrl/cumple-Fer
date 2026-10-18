/* ==========================================
   RESPUESTAS CORRECTAS
========================================== */

/*
REEMPLAZA ESTOS VALORES
CON LOS REALES.
*/


const anniversary =
  "18/10/2026";


const firstDateKisses =
  "0";


const confessionDate =
  "DD/MM/AAAA";



/* ==========================================
   ELEMENTOS
========================================== */

const answer1 =
  document.getElementById(
    "answer1"
  );


const answer2 =
  document.getElementById(
    "answer2"
  );


const answer3 =
  document.getElementById(
    "answer3"
  );


const button =
  document.getElementById(
    "verifyButton"
  );


const resultMessage =
  document.getElementById(
    "resultMessage"
  );


const quizContainer =
  document.getElementById(
    "quizContainer"
  );


const letterSection =
  document.getElementById(
    "letterSection"
  );


const envelope =
  document.getElementById(
    "envelope"
  );


const fullLetter =
  document.getElementById(
    "fullLetter"
  );


const openMessage =
  document.getElementById(
    "openMessage"
  );



/* ==========================================
   NORMALIZAR TEXTO
========================================== */

function normalize(text){

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s/g,"")
    .replace(/-/g,"/");

}



/* ==========================================
   COMPROBAR RESPUESTAS
========================================== */

button.addEventListener(
  "click",
  verifyAnswers
);


function verifyAnswers(){

  const response1 =
    normalize(
      answer1.value
    );


  const response2 =
    normalize(
      answer2.value
    );


  const response3 =
    normalize(
      answer3.value
    );


  const correct1 =
    response1 ===
    normalize(
      anniversary
    );


  const correct2 =
    response2 ===
    normalize(
      firstDateKisses
    );


  const correct3 =
    response3 ===
    normalize(
      confessionDate
    );


  /*
  TODAS CORRECTAS
  */

  if(
    correct1 &&
    correct2 &&
    correct3
  ){

    resultMessage.style.color =
      "#2e8b57";


    resultMessage.textContent =
      "❤️ Sabía que eras tú, Fer...";


    setTimeout(() => {

      quizContainer
        .classList
        .add(
          "hidden"
        );


      letterSection
        .classList
        .remove(
          "hidden"
        );


      window.scrollTo({

        top:0,

        behavior:
          "smooth"

      });


    },1200);

  }


  /*
  ALGUNA INCORRECTA
  */

  else{

    resultMessage.style.color =
      "#d7265b";


    resultMessage.textContent =
      "Mmm... 🤨 Fer debería saber esto. Inténtalo otra vez ❤️";

  }

}



/* ==========================================
   ENTER PARA COMPROBAR
========================================== */

[
  answer1,
  answer2,
  answer3
]
.forEach(input => {

  input.addEventListener(
    "keydown",
    function(event){

      if(
        event.key ===
        "Enter"
      ){

        verifyAnswers();

      }

    }
  );

});



/* ==========================================
   ABRIR SOBRE
========================================== */

let opened =
  false;


envelope.addEventListener(
  "click",
  openEnvelope
);


function openEnvelope(){

  if(opened){

    return;

  }


  opened =
    true;


  envelope
    .classList
    .add(
      "open"
    );


  openMessage.textContent =
    "Para ti ❤️";


  /*
  ESPERAR A LA
  ANIMACIÓN
  */

  setTimeout(() => {

    fullLetter
      .classList
      .remove(
        "hidden"
      );


    setTimeout(() => {

      fullLetter
        .scrollIntoView({

          behavior:
            "smooth"

        });

    },100);


  },1800);

}



/* ==========================================
   CORAZONES DEL FONDO
========================================== */

const background =
  document.querySelector(
    ".background-hearts"
  );


setInterval(() => {

  const heart =
    document.createElement(
      "div"
    );


  heart.className =
    "bg-heart";


  heart.textContent =
    "❤";


  heart.style.left =
    Math.random() *
    100 +
    "vw";


  heart.style.fontSize =
    14 +
    Math.random() *
    25 +
    "px";


  heart.style.animationDuration =
    7 +
    Math.random() *
    6 +
    "s";


  background.appendChild(
    heart
  );


  setTimeout(() => {

    heart.remove();

  },13000);


},400);
