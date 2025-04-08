import questions from "/components/quize/quize-data.js";
import Quiz from "/components/quize/quize.js";

const container = document.querySelector(".main_container");
const startBtn = document.querySelector(".main__button-start");

const quiz = new Quiz(container, startBtn, questions);
