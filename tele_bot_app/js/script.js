const startWinodw = document.querySelectorAll('start_window');
const generalWindow = document.querySelector('general_window');
setTimeout(() => {
    console.log('1 compited')
    startWinodw[0].classList.add("dn");
    console.log('2 compited')
}, 2500);
