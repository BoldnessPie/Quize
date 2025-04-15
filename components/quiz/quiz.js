export default class QuizGame {
  constructor(container, array) {
    this.container = container;
    this.questionsArr = array;

    this.addEventListeners();
  }

  addEventListeners() {
    this.container.onclick = this.startGame.bind(this);
  }

  cleanContainer() {
    this.container.innerHTML = "";
  }

  startGame(e) {
    const start = e.target.closest(".button_quiz-run");
    if (!start) return;

    this.cleanContainer();
    this.container.innerHTML = "DONE!";
  }
}
