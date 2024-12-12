const header = document.querySelector("header");
const links = document.querySelectorAll(".links");
const sections = document.querySelectorAll(".sections");

window.onscroll = function () {
    if (window.pageYOffset > header.offsetHeight) {
        header.style.background = "rgba(0, 0, 0, 0.8)";
    } else {
        header.style.background = "transparent";
    }

    let current = "home";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach((link) => {
        link.classList.remove("active");
        if (link.href.includes(current)) {
            link.classList.add("active");
        }
    });
};
