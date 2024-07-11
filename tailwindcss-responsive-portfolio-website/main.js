/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav_menu");
const closeMenu = document.getElementById("nav_close")
const navLinks = document.querySelectorAll(".nav_link")

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
    });
});

hamburger.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
    navMenu.classList.add("hidden");
});


/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") === "dark") {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener("click", (e) => {
    if (localStorage.getItem("mode") === "light") {
        darkMode();
    } else {
        lightMode();
    }
})

function darkMode() {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
const all = document.querySelectorAll(".work_card");
const uiux = document.querySelectorAll(".uiux");
const apps = document.querySelectorAll(".app");
const branding = document.querySelectorAll(".branding");

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";

        tabs.forEach(t => t.classList.remove("text-whiteColor"));
        tab.classList.add("text-whiteColor");

        const tabval = tab.getAttribute("data-tabs");

        all.forEach(item => {
            item.style.display = "none"
        });

        if (tabval === "uiux") {
            uiux.forEach(item => {
                item.style.display = "block"
            });
        } else if (tabval === "branding") {
            branding.forEach(item => {
                item.style.display = "block"
            });
        } else if (tabval === "app") {
            apps.forEach(item => {
                item.style.display = "block"
            });
        } else {
            all.forEach(item => {
                item.style.display = "block"
            });
        }
    })
})

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
    const navbar = document.getElementById("navbar");
    const aTag = document.querySelectorAll("nav ul li a");
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.getElementById("hamburger");
    const lgo = document.getElementById("logo");
    const whiteLogo = document.getElementById("logo-white");
    if (!navbar) return; // Ensure the element exists

    if (window.scrollY >= 100) {
        navbar.classList.add("bg-primaryColor");
        aTag.forEach((item) => {
            item.classList.add("text-whiteColor");
        });
        themeToggle.classList.add("text-whiteColor");
        hamburger.classList.add("text-whiteColor");
    } else {
        navbar.classList.remove("bg-primaryColor");
        aTag.forEach((item) => {
            item.classList.remove("text-whiteColor");
        });
        themeToggle.classList.remove("text-whiteColor");
        hamburger.classList.remove("text-whiteColor");
    }
};

window.addEventListener('scroll', scrollHeader);

   

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUpBtn = document.getElementById("scroll_top");
let headers = document.getElementById("navbar");

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.remove("bottom-4");
        scrollUpBtn.classList.add("-bottom-1/2");
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*~~~~~~~~~~~~~~~ SCROLL SECTION ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav_link");

    let current = "hero";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");
        if (item.href.includes(current)) {
            item.classList.add("active");
        }
    });
};

window.addEventListener('scroll', activeLink);


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(".hero__img");
sr.reveal(".hero__text", {origin: "bottom"});
sr.reveal(".hero__footer", {origin: "bottom"});

sr.reveal(".services__top", {origin: "bottom"});
sr.reveal(".service_item", {origin: "bottom", reveal: 300});

sr.reveal(".recent_works_top", {origin: "bottom"});
sr.reveal(".recent_works_tabs", {origin: "bottom"});
sr.reveal(".work_card", {origin: "bottom"});

sr.reveal(".exp_top", {origin: "top"});
sr.reveal(".exp_card", {origin: "left", reveal: 300});

sr.reveal(".edu_top", {origin: "top"});
sr.reveal(".edu_card", {origin: "right", reveal: 300});

sr.reveal(".skills_top", {origin: "bottom"});
sr.reveal(".skills_card", {origin: "bottom", reveal: 300});

sr.reveal(".blog_top", {origin: "top"});
sr.reveal(".blog_card", {origin: "top", reveal: 300});

sr.reveal(".contact_form", {origin: "left"});
sr.reveal(".contact_item", {origin: "right", reveal: 300});
