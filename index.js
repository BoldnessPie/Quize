import Quiz from "./components/quiz/quiz.js";
import arr from "./components/quiz/quiz-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".quiz");
  const quiz = new Quiz(container, arr);
});
