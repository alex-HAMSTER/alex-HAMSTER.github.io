const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const config = {
    particles: {
        number: {
            value: random(350, 400),
            density: {enable: true, value_area: 946.9771699587272}
        },
        color: {value: ["#0077ff", "#FF6300"]},
        shape: {
            type: "circle",
            stroke: {width: 0, color: "#000000"},
            polygon: {nb_sides: 3},
            image: {src: "img/github.svg", width: 100, height: 100}
        },
        opacity: {
            value: 0.8738595731717099,
            random: true,
            anim: {enable: true, speed: 1, opacity_min: 0, sync: false}
        },
        size: {
            value: 1.5,
            random: true,
            anim: {enable: false, speed: 0, size_min: 0, sync: false}
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.9,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {enable: false, rotateX: 600, rotateY: 600}
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {enable: true, mode: "repulse"},
            onclick: {enable: false, mode: "repulse"},
            resize: true
        },
        modes: {
            grab: {distance: 400, line_linked: {opacity: 1}},
            bubble: {distance: 250, size: 0, duration: 2, opacity: 0, speed: 3},
            repulse: {distance: 97.44372624809179, duration: 0.4},
            push: {particles_nb: 4},
            remove: {particles_nb: 2}
        }
    },
    retina_detect: true
};

window.onload = function () {
    for (let elementsByClassNameElement of document.getElementsByClassName("particles-div")) {
        particlesJS(elementsByClassNameElement.getAttribute("id"), config, function () {
        });
    }
}
