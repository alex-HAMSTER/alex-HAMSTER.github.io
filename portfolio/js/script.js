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


let currentLanguage = "ru";

function loadLanguage(language) {
    fetch(`js/${language}.json`)
        .then(response => response.json())
        .then(data => {
        // Здесь обновляем текст на странице, используя данные из JSON
        document.getElementById("my_name").textContent = data.my_name;
        document.getElementById("my_from").textContent = data.my_from;

        document.getElementById("sliderAboutMe").textContent = data.sliderAboutMe;
        document.getElementById("sliderMyExperience").textContent = data.sliderMyExperience;
        document.getElementById("sliderMySkill").textContent = data.sliderMySkill;
        document.getElementById("sliderMyWork").textContent = data.sliderMyWork;
        document.getElementById("sliderPrise").textContent = data.sliderPrise;
        document.getElementById("sliderContact").textContent = data.sliderContact;
    });
}

lenguageBtnUa.addEventListener('click', () => {
    allBtnLenguage.forEach(function(i){
        i.style.cssText = 'opacity: 0.6;';
    })
    lenguageBtnUa.style.cssText = 'opacity: 1;';
    currentLanguage = "ua";
    loadLanguage(currentLanguage);

});

lenguageBtnEn.addEventListener('click', () => {
    allBtnLenguage.forEach(function(i){
        i.style.cssText = 'opacity: 0.6;';
    })
    lenguageBtnEn.style.cssText = 'opacity: 1;';



})
lenguageBtnRu.addEventListener('click', () => {
    allBtnLenguage.forEach(function(i){
        i.style.cssText = 'opacity: 0.6;';
    })
    lenguageBtnRu.style.cssText = 'opacity: 1;';
    
})
/* функция или тут или на css сделать что бы у кнопок был background только если она активна */