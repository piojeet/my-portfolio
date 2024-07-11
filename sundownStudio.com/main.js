const fixedElements = Array.from({ length: 7 }, (_, i) =>
  document.querySelector(`.fixed-box.fixed${i + 1}`)
);
const videoElements = Array.from({ length: 3 }, (_, i) =>
  document.querySelector(`.fixed-box.fixed${i + 4} video`)
);
const elemSelectors = Array.from({ length: 7 }, (_, i) =>
  document.querySelector(`#page5 .elem${i + 1}`)
);

const handleMouseEvents = (elemIndex) => {
  elemSelectors[elemIndex].addEventListener("mouseenter", function () {
    fixedElements[elemIndex].style.display = "block";
    if (elemIndex >= 3) {
      videoElements[elemIndex - 3].play();
    }
  });

  elemSelectors[elemIndex].addEventListener("mouseleave", function () {
    fixedElements[elemIndex].style.display = "none";
    if (elemIndex >= 3) {
      videoElements[elemIndex - 3].pause();
      // videoElements[elemIndex - 3].currentTime = 0;
    }
  });
};

for (let i = 0; i < 7; i++) {
  handleMouseEvents(i);
}




document.addEventListener("DOMContentLoaded", function() {
    const h3Elements = document.querySelectorAll('.toggle-box');
    const changeContElements = document.querySelectorAll('.change-cont');

    h3Elements.forEach(function(element) {
      element.addEventListener("click", function() {
        // Remove active class from all h3 elements
        h3Elements.forEach(function(h3) {
          h3.classList.remove("active");
        });

        // Add active class to the clicked h3 element
        element.classList.add("active");

        // Hide all change-cont elements
        changeContElements.forEach(function(changeCont) {
          changeCont.classList.remove("active");
        });

        // Show the corresponding change-cont element
        const targetId = element.dataset.target;
        const targetChangeCont = document.getElementById(targetId);

        if (targetChangeCont) {
          targetChangeCont.classList.add("active");
          gsap.to(".img-change img", {
            transform: "translateY(15%) scale(1.5)",
            scrollTrigger: {
              trigger: "#page6",
              scroller: "body",
              start: "top 0",
              end: "bottom -10%",
              scrub: 2,
            },
          });
        }
      });
    });
  });
  gsap.to(".img-change img", {
    transform: "translateY(15%) scale(1.5)",
    scrollTrigger: {
      trigger: "#page6",
      scroller: "body",
      start: "top 0",
      end: "bottom -10%",
      scrub: 2,
    },
  });





  
  
  
  
  let loader = document.getElementById("loader");
  let body = document.body;
  
  // Show the loader
  loader.style.top = '0';
  
  // Hide the body's overflow
  body.style.overflow = 'hidden';
  
  // Set a timeout to hide the loader and restore the body's overflow after 3800 milliseconds
  setTimeout(function() {
    loader.style.top = '-100%';
    body.style.overflow = 'auto';
  }, 3800);
  
  

  window.addEventListener('resize', function() {
    if (window.innerWidth === 996) {
        location.reload(); // Page reload hoga
    }
});


function navbar() {
  const openMenu = document.querySelector(".nav-manu");
  const navList =document.querySelector(".mob-navList");
  const navLogo =document.querySelector("nav .logo");

  openMenu.addEventListener("click", function() {
      navList.classList.toggle("openmenu");
      openMenu .classList.toggle("openmenu");
      navLogo.classList.toggle("openmenu");
      // alert()
      // Toggle body scroll lock class on the body
  document.body.classList.toggle("noscroll", openMenu.classList.contains("openmenu"));
  });
}
navbar();




