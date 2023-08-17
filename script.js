let currentQuestionIndex = 0;
const questions = [
  {
    question: "Awan, awan apa yang bikin aku senang ?",
    answer: "Awanna be with you",
  },
  {
    question: "Kenapa sepeda selalu bisa diandalkan?",
    answer: "Karena dia tidak pernah mogok hati!",
  },
  {
    question: "Kenapa pohon mangga yang ada di depan rumah harus ditebang?",
    answer: "Karena Kalau dicabut berat, xixixi!!!",
  },
];

function showAnswer() {
  const answerElem = document.getElementById("answer");
  answerElem.innerText = questions[currentQuestionIndex].answer;
  answerElem.style.display = "block";
  answerElem.classList.add("fade-in");

  setTimeout(() => {
    answerElem.classList.remove("fade-in");

    // Mainkan backsound setelah jawaban ditampilkan sepenuhnya
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play();
  }, 1000);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = 0; // Kembali ke pertanyaan pertama
  }
  document.getElementById("question").innerText =
    questions[currentQuestionIndex].question;
  document.getElementById("answer").style.display = "none"; // Sembunyikan jawaban
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("question").innerText =
    questions[currentQuestionIndex].question;
});
