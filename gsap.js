var tl1 = gsap.timeline();

tl1.to(".navbar", {
    top: '100%',
    duration: .1,
})
tl1.from(".close-icon", {
    opacity: 0,
})

tl1.from(".navbar ul li", {
    // opacity: 0,
    x: 40,
    stagger: 0.3,
    marker: true,
})

tl1.pause();


const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const nav_header = document.querySelector("nav .link");

menuIcon.addEventListener("click", function () {
//   nav_header.classList.add("active");
  tl1.play();
});

closeIcon.addEventListener("click", function () {
//   nav_header.classList.remove("active");
  tl1.reverse();
});

gsap.from("#section-1 .left-container",{
    x: '-100%',
    duration: 1,
    scrollTrigger:{
        trigger:"#section-1 .left-container",
        marker: true,
    }
})