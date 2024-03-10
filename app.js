// Definir las preguntas y respuestas
const questions = [
  { question: 'La Tierra es plana.', answer: false },
  { question: 'El agua hierve a 100 grados Celsius.', answer: true },
  { question: 'El sol gira alrededor de la Tierra.', answer: false },
  { question: 'El código HTML significa "Lenguaje de Marcado de Hipertexto".', answer: true },
  { question: 'El ser humano tiene tres pulmones.', answer: false }
];

let currentQuestionIndex = 0;
let points = 0;

// Función para cargar una nueva pregunta
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').innerText = currentQuestion.question;
}

// Función para responder a la pregunta
function answerQuestion(userAnswer) {
  const currentQuestion = questions[currentQuestionIndex];

  if (userAnswer === currentQuestion.answer) {
      points += 1000;
      document.getElementById('points').innerText = points;

      // Pasar a la siguiente pregunta si hay más, de lo contrario, mostrar un mensaje de éxito.
      if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex++;
          loadQuestion();
      } else {
          alert('¡Felicidades! ¡Eres millonario!');
      }
  } else {
      alert('Respuesta incorrecta. Fin del juego.');
  }
}

// Funciones para las ayudas
function llamarAmigo() {
  alert('Tu amigo dice: "Creo que la respuesta es...".');
}

function cincuentaCincuenta() {
  const currentQuestion = questions[currentQuestionIndex];
  const wrongAnswer = currentQuestion.answer ? false : true;
  alert(`Las opciones ${currentQuestion.answer} y ${wrongAnswer} son incorrectas.`);
}

function ayudaPublico() {
  alert('El público piensa que la respuesta correcta es...');
}

// Inicializar el juego
loadQuestion();
