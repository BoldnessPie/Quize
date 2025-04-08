export default class Quiz {
  constructor(container, button, questionsArr) {
    this.container = container;
    this.button = button;
    this.questions = questionsArr;

    this.counter = 0;

    this.addEventListeners();
  }

  destructQuestion() {
    let { question, variants } = this.questions[this.counter];

    question = `<h3 class="quize__question">${question}</h3>`;
    let answers = variants
      .map((variant) =>
        variant.img
          ? `<div class="quize__answer-container"><img class="quize__picture" src="${variant.img}" /><div class="quize__answer">${variant.answer}</div></div>`
          : `<div class="quize__answer">${variant.answer}</div>`
      )
      .join("");

    return [question, answers];
  }

  render() {
    const [question, answers] = this.destructQuestion();

    this.container.insertAdjacentHTML(
      "beforeend",
      `
            <div class="quize">
                ${question}
                <div class="quize__answers">${answers}</div>
            </div>
        `
    );
  }

  addEventListeners() {
    this.button.onclick = this.startGame.bind(this);
  }

  startGame() {
    this.container.innerHTML = "";
    this.render();
  }
}
