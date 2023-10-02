const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});



const languageBtn = document.querySelectorAll('.promo__lenguage_btn');
const lenguageBtnUa = document.getElementById('lenguage_ua');
const lenguageBtnRu = document.getElementById('lenguage_ru');
const lenguageBtnEn = document.getElementById('lenguage_en');
const allBtnLenguage = document.querySelectorAll('.promo__lenguage_btn');


function loadTranslations(callback) {
    fetch('js/ua.json') 
    .then((response) => response.json())
    .then((translations) => {
        callback(translations);
    })
    .catch((error) => {
        console.error('Помилка завантаження перекладу:', error);
    });
}

// Функция для переключения языка
function changeLanguage(language) {
    loadTranslations((translations) => {

    /* let fileName = '';

    if (language === 'ua') {
        fileName = 'ua.json';
    } else if (language === 'en') {
        fileName = 'en.json';
    } */
    // Пройдитесь по всем элементам с атрибутом data-translation-key
    const elementsToTranslate = document.querySelectorAll('[data-translation-key]');
    elementsToTranslate.forEach((element) => {
        const translationKey = element.getAttribute('data-translation-key');
        if (translations.hasOwnProperty(translationKey)) {
            element.textContent = translations[translationKey];
        }
        });
    });
}


lenguageBtnUa.addEventListener('click', () => {
    allBtnLenguage.forEach(function(i){
        i.style.cssText = 'opacity: 0.6;';
    })
    lenguageBtnUa.style.cssText = 'opacity: 1;';
    
    changeLanguage('ua');
    loadTranslations((translations) => {
    changeLanguage('ua'); // Изначально установите українську мову, или яку бажаєте
    });
});

lenguageBtnEn.addEventListener('click', () => {
    allBtnLenguage.forEach(function(i){
        i.style.cssText = 'opacity: 0.6;';
    })
    lenguageBtnEn.style.cssText = 'opacity: 1;';
    changeLanguage('en');
    loadTranslations((translations) => {
    changeLanguage('en'); // Изначально установите українську мову, или яку бажаєте
    });
})
lenguageBtnRu.addEventListener('click', () => {
    allBtnLenguage.forEach(function(i){
        i.style.cssText = 'opacity: 0.6;';
    })
    lenguageBtnRu.style.cssText = 'opacity: 1;';
    
})
/* функция или тут или на css сделать что бы у кнопок был background только если она активна */