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
        
        const elementsToUpdate = [
            "my_name",
            "my_from",
            "PromoBtnPortfolio",
            "promoBtnAboutMe",
            "socialMe",
            "sliderAboutMe",
            "sliderMyExperience",
            "sliderMySkill",
            "sliderMyWork",
            "sliderPrise",
            "sliderContact",
            "aboutMeDescr",
            "aboutMeName",
            "aboutMeText",
            "blockUnderAboutMeWeb",
            "blockUnderAboutMeTextWeb",
            "blockUnderAboutMeDev",
            "blockUnderAboutMeTextDev",
            "blockUnderAboutMeDesing",
            "blockUnderAboutMeTextDesing",
            "experienceTitle",
            "experienceDescr",
            "experienceBlockEducation",
            "experienceBlockEducationDescr",
            "experienceBlockEducationCourse",
            "experienceBlockEducationCourseDescr",
            "experienceWork",
            "experienceWorkDescr",
            "experiencePlaceWork",
            "experiencePlaceWorkDescr",
            "skillsTitle",
            "skillsWhat",
            "skillsHTML",
            "skillsCSS",
            "skillsJS",
            "skillsJquery",
            "skillsReact",
            "skillsNode",
            "skillsMongo",
            "progressCreatePage",
            "progressCreateApp",
            "progressWorkData",
            "progressCreat",
            "progressCreatDesing",
            "portfolioo",
            "myWorks",
            "priceLandingFrom",
            "priceLandingDescr",
            "priceApplicationTitle",
            "priceAppFrom",
            "priceAppDescr",
            "priceCoopTitle",
            "priceCoopFrom",
            "priceCoopDescr",
            "priceOSTitle",
            "priceOSFrom",
            "priceOSDescr",
            "priceShopTitle",
            "priceShop",
            "priceShopDesing",
            "priceDesingTitle",
            "priceDesing",
            "priceDesingDescr",
            "contactTitle",
            "contactMe",
            "contactAnyWay",
            "yourName",
            "yourPost",
            "yourMesage",
            "yourMesageSend",
            "policyYes",
            "contactLeaveData",
            "priceList"
        ];
        
        elementsToUpdate.forEach(i => {
            if (data[i]){
                document.getElementById(i).textContent = data[i];
            }
        })
        /* document.getElementById("my_name").textContent = data.my_name;
        document.getElementById("my_from").textContent = data.my_from; */
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

    currentLanguage = "en";
    loadLanguage(currentLanguage);

})
lenguageBtnRu.addEventListener('click', () => {
    allBtnLenguage.forEach(function(i){
        i.style.cssText = 'opacity: 0.6;';
    })
    lenguageBtnRu.style.cssText = 'opacity: 1;';
    location.reload();
})
/* функция или тут или на css сделать что бы у кнопок был background только если она активна */