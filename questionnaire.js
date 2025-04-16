class DelfinaQuestionnaire {
  constructor() {
    this.languages = {
      en: {
        questions: [
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
        ],
        tips: [
          "Get a preconception visit to review overall health and medical conditions.",
          "Review medications, including over-the-counter and herbal supplements.",
          "Family planning can give you extra time to get healthy before pregnancy.",
          "Go to all your prenatal and postpartum visits.",
          "In partnership with your medical provider, create a pregnancy plan for a healthy pregnancy and a healthy baby.",
          "Always remember to trust your body. If you do not feel right, seek care right away.",
        ],
        results: {
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
        },
        ui: {
          title: "Thinking About Having a Baby?",
          subtitle:
            "Your health and well-being are important. Let's make sure you are strong and ready, so when you do decide to get pregnant, you'll be set to feel your best.",
          quizTitle: "Take the PreMA (Preconception Medical Assessment) Quiz",
          tipsTitle: "Tips for Everyone",
          submit: "Submit Questionnaire",
          results: "Your Results",
          yes: "Yes",
          no: "No",
        },
      },
      es: {
        questions: [
          {
            id: 1,
            text: "¿Nació con un problema cardíaco o actualmente tiene un problema cardíaco que necesita atención médica?",
          },
          {
            id: 2,
            text: "¿Alguna vez le han dicho que su corazón no funciona bien, o tiene un problema cardíaco?",
          },
          {
            id: 3,
            text: "¿Ha sido informado por un médico que tiene presión arterial alta?",
          },
          {
            id: 4,
            text: "¿Ha sido informado por un médico que tiene diabetes?",
          },
          {
            id: 5,
            text: "¿Alguna vez ha sido diagnosticado con una enfermedad pulmonar, o tiene una historia de problemas respiratorios?",
          },
          {
            id: 6,
            text: "¿Toma alguna medicina que no le fue recetada por un médico? Esto incluye drogas ilegales o medicamentos recetados para otros motivos que no sean para su salud?",
          },
          {
            id: 7,
            text: "¿Alguna vez ha tenido cirugía en su estómago o intestinos, o tiene un problema con su sistema digestivo?",
          },
          {
            id: 8,
            text: "¿Alguna vez ha estado en el hospital o ha necesitado tratamiento porque bebió demasiado alcohol?",
          },
        ],
        tips: [
          "Programe una visita preconcepcional para revisar su salud general y condiciones médicas.",
          "Revise las medicinas, incluyendo suplementos de venta libre y suplementos de origen herbal.",
          "El planeamiento familiar puede darle más tiempo para estar saludable antes de quedar embarazada.",
          "Vaya a todas sus visitas prenatales y posnatales.",
          "En asociación con su proveedor médico, cree un plan de embarazo para un embarazo saludable y un bebé saludable.",
          "Siempre recuerde confiar en su cuerpo. Si no se siente bien, busque atención inmediatamente.",
        ],
        results: {
          high: {
            count: "4+ sí",
            message:
              "Para tener el bebé más saludable, su salud requiere más atención antes y durante el embarazo. Puede tener condiciones de salud crónicas que requieran atención extra en el embarazo. Consulte a su proveedor de atención médica al menos 6 meses antes de intentar quedar embarazada. Puede necesitar más pruebas, nuevos medicamentos o ver a un especialista antes y durante el embarazo.",
          },
          medium: {
            count: "1-3 sí",
            message:
              "Para tener el bebé más saludable, su salud probablemente requerirá más atención antes del embarazo. Consulte a su proveedor de atención médica al menos 3 meses antes de intentar quedar embarazada y cree un plan de embarazo. Puede necesitar más pruebas, nuevos medicamentos o ver a un especialista antes y durante el embarazo.",
          },
          low: {
            count: "0 sí",
            message:
              "Para tener el bebé más saludable, siga los Consejos para Todos sugeridos arriba.",
          },
        },
        ui: {
          title: "¿Está Pensando en Tener un Bebé?",
          subtitle:
            "Su salud y bienestar son importantes. Asegurémonos de que esté fuerte y lista para cuando decida quedar embarazada.",
          quizTitle:
            "Tome el Cuestionario PreMA (Evaluación Médica Preconcepcional)",
          tipsTitle: "Consejos para Todos",
          submit: "Enviar Cuestionario",
          results: "Sus Resultados",
          yes: "Sí",
          no: "No",
        },
      },
    };

    // Detect browser language and set default
    this.currentLang = navigator.language.startsWith("es") ? "es" : "en";

    // Move original questions, tips, and results to language config
    this.questions = this.languages[this.currentLang].questions;
    this.tips = this.languages[this.currentLang].tips;
    this.results = this.languages[this.currentLang].results;

    this.init();
  }

  init() {
    const container = document.getElementById("delfina-questionnaire");
    if (!container) return;

    const ui = this.languages[this.currentLang].ui;

    container.innerHTML = `
            <div class="delfina-container">
                <div class="delfina-header">
                    <div class="header-content">
                        <h1>${ui.title}</h1>
                        <div class="language-selector">
                            <button class="lang-dropdown-btn">
                                <span class="globe-icon">🌐</span>
                                <span class="current-lang">${this.currentLang.toUpperCase()}</span>
                                <span class="dropdown-arrow">▼</span>
                            </button>
                            <div class="lang-dropdown-content">
                                <a href="#" data-lang="en" class="${
                                  this.currentLang === "en" ? "active" : ""
                                }">English</a>
                                <a href="#" data-lang="es" class="${
                                  this.currentLang === "es" ? "active" : ""
                                }">Español</a>
                            </div>
                        </div>
                    </div>
                    <p>${ui.subtitle}</p>
                </div>
                <div class="delfina-content">
                    <div class="delfina-questions">
                        <h2>${ui.quizTitle}</h2>
                        <div class="questions-list"></div>
                        <button class="submit-button" onclick="window.delfinaQuestionnaire.handleSubmit()" disabled>${
                          ui.submit
                        }</button>
                    </div>
                    <div class="delfina-tips">
                        <h2>${ui.tipsTitle}</h2>
                        <ul class="tips-list"></ul>
                    </div>
                </div>
                <div class="result-section" style="display: none;">
                    <h2>${ui.results}</h2>
                    <div class="result-content"></div>
                </div>
            </div>
            <style>
                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                .language-selector {
                    position: relative;
                    display: inline-block;
                }
                .lang-dropdown-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px;
                    border: 1px solid #ddd;
                    background: white;
                    cursor: pointer;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                .lang-dropdown-btn:hover {
                    background: #f0f0f0;
                }
                .globe-icon {
                    font-size: 1.2em;
                }
                .dropdown-arrow {
                    font-size: 0.8em;
                    color: #666;
                }
                .lang-dropdown-content {
                    display: none;
                    position: absolute;
                    right: 0;
                    top: 100%;
                    background: white;
                    min-width: 120px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    border-radius: 4px;
                    z-index: 1000;
                }
                .language-selector.active .lang-dropdown-content {
                    display: block;
                }
                .lang-dropdown-content a {
                    display: block;
                    padding: 8px 12px;
                    text-decoration: none;
                    color: #333;
                }
                .lang-dropdown-content a:hover {
                    background: #f0f0f0;
                }
                .lang-dropdown-content a.active {
                    background: #007bff;
                    color: white;
                }
            </style>
        `;

    this.renderQuestions();
    this.renderTips();
    this.setupValidation();
    this.setupLanguageToggle();
  }

  setupLanguageToggle() {
    const langSelector = document.querySelector(".language-selector");
    const dropdownBtn = document.querySelector(".lang-dropdown-btn");
    const dropdownOptions = document.querySelectorAll(
      ".lang-dropdown-content a"
    );

    // Toggle dropdown
    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langSelector.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      langSelector.classList.remove("active");
    });

    // Handle language selection
    dropdownOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.preventDefault();
        const newLang = option.dataset.lang;
        if (newLang !== this.currentLang) {
          this.currentLang = newLang;
          this.questions = this.languages[this.currentLang].questions;
          this.tips = this.languages[this.currentLang].tips;
          this.results = this.languages[this.currentLang].results;
          this.init();
        }
        langSelector.classList.remove("active");
      });
    });
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
    const ui = this.languages[this.currentLang].ui;
    questionsList.innerHTML = ""; // Clear existing questions

    this.questions.forEach((question) => {
      const questionElement = document.createElement("div");
      questionElement.className = "question-item";
      questionElement.innerHTML = `
                <p>${question.id}. ${question.text}</p>
                <div class="question-options">
                    <label>
                        <input type="radio" name="question${question.id}" value="yes"> ${ui.yes}
                    </label>
                    <label>
                        <input type="radio" name="question${question.id}" value="no"> ${ui.no}
                    </label>
                </div>
            `;
      questionsList.appendChild(questionElement);
    });
  }

  renderTips() {
    const tipsList = document.querySelector(".tips-list");
    tipsList.innerHTML = ""; // Clear existing tips
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

  // Add default lang as browser lang
  const defaultLang = navigator.language.startsWith("es") ? "es" : "en";
  window.delfinaQuestionnaire.currentLang = defaultLang;
  window.delfinaQuestionnaire.init();
});
