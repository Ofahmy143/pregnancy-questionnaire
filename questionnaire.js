class DelfinaQuestionnaire {
  constructor() {
    this.questions = [
      {
        id: 1,
        text: "Were you born with a heart problem or do you currently have a heart problem that needs medical attention?",
      },
      {
        id: 2,
        text: "Have you ever been told that your heart is not working well, or do you have a heart problem?",
      },
      {
        id: 3,
        text: "Has a doctor told you that you have high blood pressure?",
      },
      {
        id: 4,
        text: "Has a doctor told you that you have diabetes?",
      },
      {
        id: 5,
        text: "Have you ever been diagnosed with a lung disease, or do you have a history of breathing problems?",
      },
      {
        id: 6,
        text: "Do you take any medicine that was not prescribed to you by a doctor? This includes illegal drugs or prescription medicine for reasons other than your health?",
      },
      {
        id: 7,
        text: "Have you ever had surgery on your stomach or intestines, or do you have a problem with your digestive system?",
      },
      {
        id: 8,
        text: "Have you ever been in the hospital or needed treatment because you drank too much alcohol?",
      },
    ];

    this.tips = [
      "Get a preconception visit to review overall health and medical conditions.",
      "Review medications, including over-the-counter and herbal supplements.",
      "Family planning can give you extra time to get healthy before pregnancy.",
      "Go to all your prenatal and postpartum visits.",
      "In partnership with your medical provider, create a pregnancy plan for a healthy pregnancy and a healthy baby.",
      "Always remember to trust your body. If you do not feel right, seek care right away.",
    ];

    this.results = {
      high: {
        count: "4+ yes",
        message:
          "For the healthiest baby, your health requires closer and more attention before and during pregnancy. You may have chronic health conditions that require extra attention in pregnancy. See a health care provider at least 6 months prior to trying to become pregnant. You may need more tests, new medications or to see a specialist before and during pregnancy. During delivery you may need extra medical attention.",
      },
      medium: {
        count: "1-3 yes",
        message:
          "For the healthiest baby, your health will probably require more attention before pregnancy. See a health care provider at least 3 months before trying to become pregnant and create a pregnancy plan. You may need more tests, new medications or see a specialist before and during pregnancy.",
      },
      low: {
        count: "0 yes",
        message:
          "For the healthiest baby, follow the Tips for Everyone suggested above.",
      },
    };

    this.init();
  }

  init() {
    const container = document.getElementById("delfina-questionnaire");
    if (!container) return;

    container.innerHTML = `
            <div class="delfina-container">
                <div class="delfina-header">
                    <h1>Thinking About Having a Baby?</h1>
                    <p>Your health and well-being are important. Let's make sure you are strong and ready, so when you do decide to get pregnant, you'll be set to feel your best.</p>
                </div>
                <div class="delfina-content">
                    <div class="delfina-questions">
                        <h2>Take the PreMA (Preconception Medical Assessment) Quiz</h2>
                        <div class="questions-list"></div>
                        <button class="submit-button" onclick="window.delfinaQuestionnaire.handleSubmit()" disabled>Submit Questionnaire</button>
                    </div>
                    <div class="delfina-tips">
                        <h2>Tips for Everyone</h2>
                        <ul class="tips-list"></ul>
                    </div>
                </div>
                <div class="result-section" style="display: none;">
                    <h2>Your Results</h2>
                    <div class="result-content"></div>
                </div>
            </div>
        `;

    this.renderQuestions();
    this.renderTips();
    this.setupValidation();
  }

  setupValidation() {
    const radios = document.querySelectorAll('input[type="radio"]');
    const submitButton = document.querySelector(".submit-button");

    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        const allQuestionsAnswered = this.questions.every((question) => {
          const questionRadios = document.getElementsByName(
            `question${question.id}`
          );
          return Array.from(questionRadios).some((r) => r.checked);
        });

        submitButton.disabled = !allQuestionsAnswered;
        submitButton.classList.toggle(
          "submit-button-active",
          allQuestionsAnswered
        );
      });
    });
  }

  renderQuestions() {
    const questionsList = document.querySelector(".questions-list");
    this.questions.forEach((question) => {
      const questionElement = document.createElement("div");
      questionElement.className = "question-item";
      questionElement.innerHTML = `
                <p>${question.id}. ${question.text}</p>
                <div class="question-options">
                    <label>
                        <input type="radio" name="question${question.id}" value="yes"> Yes
                    </label>
                    <label>
                        <input type="radio" name="question${question.id}" value="no"> No
                    </label>
                </div>
            `;
      questionsList.appendChild(questionElement);
    });
  }

  renderTips() {
    const tipsList = document.querySelector(".tips-list");
    this.tips.forEach((tip) => {
      const tipElement = document.createElement("li");
      tipElement.textContent = tip;
      tipsList.appendChild(tipElement);
    });
  }

  handleSubmit() {
    let yesCount = 0;

    this.questions.forEach((question) => {
      const radios = document.getElementsByName(`question${question.id}`);
      radios.forEach((radio) => {
        if (radio.checked && radio.value === "yes") {
          yesCount++;
        }
      });
    });

    let result;
    if (yesCount >= 4) {
      result = this.results.high;
    } else if (yesCount >= 1) {
      result = this.results.medium;
    } else {
      result = this.results.low;
    }

    const resultSection = document.querySelector(".result-section");
    const resultContent = document.querySelector(".result-content");
    resultContent.innerHTML = `
            <div class="result-box ${
              yesCount >= 4
                ? "high-risk"
                : yesCount >= 1
                ? "medium-risk"
                : "low-risk"
            }">
                <div class="result-header">
                    <span class="result-count">${result.count}</span>
                    <span class="result-icon">${
                      yesCount >= 4 ? "⚠️" : yesCount >= 1 ? "⚡" : "✅"
                    }</span>
                </div>
                <p class="result-message">${result.message}</p>
            </div>
        `;
    resultSection.style.display = "block";
    resultSection.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// Initialize the questionnaire when the script loads
document.addEventListener("DOMContentLoaded", () => {
  window.delfinaQuestionnaire = new DelfinaQuestionnaire();
});
