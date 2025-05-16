const translations = {
    en: {
        pageTitle: "Survey",
        headerTitle: "Welcome to Our Survey",
        surveyTitle: "Please fill out the survey",
        nameLabel: "Name:",
        emailLabel: "Email:",
        feedbackLabel: "Feedback:",
        submitButton: "Submit",
        contactLink: "Contact",
        aboutLink: "About Us",
        contactTitle: "Contact Us",
        contactInfo: "You can reach us at contact@example.com.",
        aboutTitle: "About Us",
        aboutInfo: "We are dedicated to providing the best service possible.",
        footerText: "&copy; 2023 Your Company. All rights reserved."
    },
    ru: {
        pageTitle: "Опрос",
        headerTitle: "Добро пожаловать в наш опрос",
        surveyTitle: "Пожалуйста, заполните опрос",
        nameLabel: "Имя:",
        emailLabel: "Электронная почта:",
        feedbackLabel: "Отзыв:",
        submitButton: "Отправить",
        contactLink: "Контакт",
        aboutLink: "О нас",
        contactTitle: "Свяжитесь с нами",
        contactInfo: "Вы можете связаться с нами по адресу contact@example.com.",
        aboutTitle: "О нас",
        aboutInfo: "Мы стремимся предоставить лучший сервис.",
        footerText: "&copy; 2023 Ваша Компания. Все права защищены."
    }
};

const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});
function updateLanguage(lang) {
    document.getElementById('page-title').textContent = translations[lang].pageTitle;
    document.getElementById('header-title').textContent = translations[lang].headerTitle;
    document.getElementById('survey-title').textContent = translations[lang].surveyTitle;
    document.getElementById('name-label').textContent = translations[lang].nameLabel;
    document.getElementById('email-label').textContent = translations[lang].emailLabel;
    document.getElementById('feedback-label').textContent = translations[lang].feedbackLabel;
    document.getElementById('submit-button').textContent = translations[lang].submitButton;
    document.getElementById('contact-link').textContent = translations[lang].contactLink;
    document.getElementById('about-link').textContent = translations[lang].aboutLink;

    document.getElementById('contact-title').textContent = translations[lang].contactTitle;
    document.getElementById('contact-info').textContent = translations[lang].contactInfo;

    document.getElementById('about-title').textContent = translations[lang].aboutTitle;
    document.getElementById('about-info').textContent = translations[lang].aboutInfo;

    document.querySelector('footer p').innerHTML = translations[lang].footerText; // Обновляем текст в подвале
}

// Установка начального языка
updateLanguage(languageSelect.value);
