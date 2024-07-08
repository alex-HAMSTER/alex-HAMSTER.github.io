const up = document.getElementById('up');

document.addEventListener('scroll', function () {
    if (window.pageYOffset > 400) {
        up.classList.add('show')
    } else {
        up.classList.remove('show')
    }
});


