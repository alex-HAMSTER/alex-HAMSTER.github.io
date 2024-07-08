const mailReg = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const phoneReg = /\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})/;
const nameReg = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;
const urlReg = /(http|https):\/\/([\w.]+\/?)\S*/;
const sliderNumb = document.getElementById("sliderNumb");
const formId = document.getElementById("formId");
const inputPhone = document.getElementById("formPhone");
const inputMail = document.getElementById("formEmail");
const inputCompanyName = document.getElementById("formCompany");
const inputName = document.getElementById("formName");
const formRadio = document.getElementsByName("service");
const inputUrl = document.getElementById("formUrl");
const formTask = document.getElementById("textarea");
const nextBtn = document.getElementById("nextBtn");
let slides = 1;
let validNumb;
let validEmail;
let validName;
let reviewName = document.getElementById("reviewName");
let reviewPhone = document.getElementById("reviewPhone");
let reviewEmail = document.getElementById("reviewEmail");
let reviewCompany = document.getElementById("reviewCompany");
let reviewService = document.getElementById("reviewService");
let reviewLink = document.getElementById("reviewLink");
let reviewTask = document.getElementById("reviewTask");
let clientInfo = {
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    url: "",
    task: "",
};
sliderNumb.innerHTML = slides;

/**
 Тут проводим проверку на заполненость полей(заполнены-ли они вообще) при поддержке атрибута
 required в input в теге form и кастомизируем информацию при ошибке/вводе
 (необходимо в этой ситуации, иначе будет простое "Заполните это поле")
 */
inputPhone.oninvalid = function (event) {
    event.target.setCustomValidity(
        "Будь ласка, заповніть це поле. Oбов'язковий формат: +380501234567, або 0501234567"
    );
};
inputMail.oninvalid = function (event) {
    event.target.setCustomValidity(
        "Будь ласка, заповніть це поле. Обов'язковий формат: usermail@gmail.com"
    );
};
inputName.oninvalid = function (event) {
    event.target.setCustomValidity("Будь ласка, заповніть це поле. Тільки букви");
};
inputUrl.oninvalid = function (event) {
    event.target.setCustomValidity(
        "Будь ласка, заповніть це поле. Oбов'язковий формат: http/https://..."
    );
};

/**
 * @param {string} input - получаемое значение в результате ввода пользователем;
 В этом месте получаем введенное пользователем значение по каждому из инпутов, проводим test с регуляркой, где:
 ---если значение true - полю с подсказкой даем значение "", убираем класс invalidVal, вкладываем валидное значение в переменную validName,
 после чего вызываем reviewDataForm для оценки заполнености и валидности ВСЕХ полей(необходимо для динамического ВКЛЮЧЕНИЯ кнопки next);
 ---если значение false - полю с подсказкой даем значение возникшей проблемы, даем класс invalidVal, вкладываем НЕвалидное значение в переменную validName,
 после чего вызываем reviewDataForm для оценки заполнености и валидности ВСЕХ полей(необходимо для динамического ВЫКЛЮЧЕНИЯ кнопки next);
 */
function validateName(input) {
    if (nameReg.test(input.value)) {
        input.setCustomValidity("");
        inputName.classList.remove("invalidVal");
        validName = input.value;
        reviewDataForm()
    } else {
        input.setCustomValidity("Тільки букви");
        inputName.classList.add("invalidVal");
        validName = input.value;
        reviewDataForm()
    }
}

function validatePhone(input) {
    if (phoneReg.test(input.value)) {
        input.setCustomValidity("");
        inputPhone.classList.remove("invalidVal");
        validNumb = input.value;
        reviewDataForm()
    } else {
        validNumb = input.value;
        input.setCustomValidity(
            "Номер телефону не відповідає вимогам, обов'язковий формат: +380501234567, або 0501234567"
        );
        inputPhone.classList.add("invalidVal");
        reviewDataForm()
    }
}

function validateEmail(input) {
    if (mailReg.test(input.value)) {
        input.setCustomValidity("");
        inputMail.classList.remove("invalidVal");
        validEmail = input.value;
        reviewDataForm()
    } else {
        input.setCustomValidity("Обов'язковий формат: usermail@gmail.com");
        inputMail.classList.add("invalidVal");
        validEmail = input.value;
        reviewDataForm()
    }
}

/**
 * @param {string} input - получаемое значение в результате ввода пользователем;
 дополнительная функция для url, не запрещающая переход на след слайд(сайт может быть, а может его и нет),
 но имеющая проверку валидности в первую очередь для поиска
 */
function validateUrl(input) {
    if (urlReg.test(input.value)) {
        input.setCustomValidity("");
        inputUrl.classList.remove("invalidVal");
    } else {
        input.setCustomValidity(
            "Будь ласка, заповніть це поле. Oбов'язковий формат: http/https://..."
        );
        inputUrl.classList.add("invalidVal");
    }
}

/**
 * Проверка валидности введенных значений и добавление/снятие класса disabled с кнопки "Наступний"
 */
function reviewDataForm() {
    if (nameReg.test(validName) && phoneReg.test(validNumb) && mailReg.test(validEmail)) {
        nextBtn.classList.remove("disabled");
    } else {
        nextBtn.classList.add("disabled");
    }
}

/**
 * Блокируем процесс отправки формы
 */
formId.addEventListener("submit", function (event) {
    event.preventDefault();
});

/**
 * Настраиваем кнопку-обманку. Для перехода на след слайд по нажатию кнопки enter.
 */
document.getElementById('bait').addEventListener('click', function (event) {
        if (nextBtn.matches('.disabled')) {
            console.log('nothing')
        } else {
            nextBtn.click()
        }
    }
)

/**
 * Использование подключенного swiper. allowTouchMove - функция перелистывания свайпом(держать false)
 */
var swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    allowTouchMove: false,
    navigation: {
        nextEl: ".next__btn",
        prevEl: ".prev__btn",
    },
});

/**
 * Кастомная пагинация. Функция для нумерации слайдов. Swiper.js не дает возможности использовать как нумерацию слайдов, так и прогрессбар,
 потому в переменную slides при нажатии кнопки "Наступний" добавляем единицу и вписываем значение в DOM
 при нажатии "Назад" отнимаем
 Также на 5м слайде формируется данные clientInfo с помощью вызова CreateForm()
 */
function slidesChange() {
    slides += 1;
    sliderNumb.innerHTML = slides;
    if (slides === 5) {
        CreateForm()
    }
}

function submitForm() {
    SendForm();
    slidesChange();
    window.location.href = 'complete.html';
}

function slidesChangeMin() {
    slides -= 1;
    sliderNumb.innerHTML = slides;
}

/**
 * Слайд "задачи сайта"(4). Для динамического роста блока до определенного уровня(input сам-по-себе такого не позволяет, как и textarea)
 */
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = element.scrollHeight + "px";
}

/**
 * Кастомный кроссбраузерный скролл для слайда "задачи сайта"(4).
 */
$(document).ready(function () {
    $(".scrollarea").niceScroll({
        cursorcolor: "#0077FF",
        cursorwidth: "2px",
        autohidemode: true,
        cursormaxheight: 10,
    });
});

/**
 * Сбор общей информации из введенных значений.
 * 1). В обьект clientInfo записываем данные полей для передачи на сервер(отправку формы внутри слайдера я сделать не могу, не дается)
 * 2). Перебор formRadio нужен для поиска checked-значения.
 * 3). В переменные с приставкой review присваем значение соответствующих полей и выводим в span слайда№5
 (можно напрямую, конечно, но какая разница)
 */
function CreateForm() {
    for (var i = 0, length = formRadio.length; i < length; i++) {
        if (formRadio[i].checked) {
            clientInfo.service = formRadio[i].value;
        }
    }
    clientInfo.name = inputName.value;
    clientInfo.company = inputCompanyName.value;
    clientInfo.phone = inputPhone.value;
    clientInfo.email = inputMail.value;
    clientInfo.url = inputUrl.value;
    clientInfo.task = formTask.value;
    reviewService.innerHTML = clientInfo.service;
    reviewName.innerHTML = clientInfo.name;
    reviewPhone.innerHTML = clientInfo.phone;
    reviewEmail.innerHTML = clientInfo.email;
    reviewCompany.innerHTML = clientInfo.company;
    reviewLink.innerHTML = clientInfo.url;
    reviewTask.innerHTML = clientInfo.task;
}

function SendForm() {
    console.log(clientInfo);
    $.ajax({
        type: "POST",
        url: '...',
        data: clientInfo,
        error: function (response) {
            //if request if made successfully then the response represent the data
            console.log(response);
            console.log('error');
        },
        success: function (response) {
            //if request if made successfully then the response represent the data
            console.log(response);
            console.log('success');
        }
    });
}