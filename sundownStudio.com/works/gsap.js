// Create a GSAP timeline
const tl = gsap.timeline({
    paused: true, // Animation starts paused
    defaults: { ease: "power2.out" } // Set default easing
});

// Define the animation
tl.from("#work-cont h2 span", { opacity: 0, y: 200, duration: 1 });

// Create a ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Trigger the animation when scrolling
ScrollTrigger.create({
  trigger: "#work-cont h2",
  start: "top 60%", // Trigger animation when the top of the trigger element hits the middle of the viewport
  animation: tl,
  once: true // Only trigger the animation once
});


// Define the animation
// const tl = gsap.timeline({
    
//   });
  

  
  document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" }
      });
      
      tl.from(".imgs-work", { stagger: 0.3, opacity: 0, y: 200, duration: 1 });
      
      // Create a ScrollTrigger for each element with the class "imgs-work"
      document.querySelectorAll(".imgs-work").forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 90%+=100", // Adjust the start position dynamically for each element
          animation: tl,
          once: true
        });
      });
  });
  