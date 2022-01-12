//Javascript of responsive navigation

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    navigation.classList.toggle("active");
});

//Javascript for video slider

const buttons = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual) {
    buttons.forEach((btn) => {
        btn.classList.remove("active")
    });

    slides.forEach((slide) => {
        slide.classList.remove("active")
    });

    contents.forEach((content) => {
        content.classList.remove("active")
    });

    buttons[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active")
};

buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});