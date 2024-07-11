gsap.from(".turing-cont h2", {
    y:200,
    opacity:1,
    delay:0.5,
    duration:0.9,
    stagger:0.3
  });

// Create a GSAP timeline
const tl = gsap.timeline();

// Define the animation
tl.from(".experience-cont", { opacity: 0, y: 70, duration: 1 });

// Create a ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Trigger the animation when scrolling
ScrollTrigger.create({
  trigger: ".experience-cont",
  start: "top 60%", // Trigger animation when the top of the trigger element hits the middle of the viewport
  animation: tl,
  once: true // Only trigger the animation once
});





  // Define the animation
tl.from("#createsec1 .container-lg h2", { y: 400, duration: 1 });

// Create a ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Trigger the animation when scrolling
ScrollTrigger.create({
  trigger: "#createsec1",
  start: "top 20%", // Trigger animation when the top of the trigger element hits the middle of the viewport
  animation: tl,
  once: true // Only trigger the animation once
});



 
  // Define the animation
tl.from(".second-style .container-lg h2", { y: 400, duration: 1 });

// Create a ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Trigger the animation when scrolling
ScrollTrigger.create({
  trigger: ".second-style",
  start: "top 20%", // Trigger animation when the top of the trigger element hits the middle of the viewport
  animation: tl,
  once: true // Only trigger the animation once
});



 
  // Define the animation
tl.from(".create-sec-last .container-lg h2", { y: 400, duration: 1 });

// Create a ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Trigger the animation when scrolling
ScrollTrigger.create({
  trigger: ".create-sec-last",
  start: "top 20%", // Trigger animation when the top of the trigger element hits the middle of the viewport
  animation: tl,
  once: true // Only trigger the animation once
});


  // Define the animation
tl.from(".concept-content", { opacity: 0, y: 400, duration: 1 });

// Create a ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Trigger the animation when scrolling
ScrollTrigger.create({
  trigger: ".concept-cont",
  start: "top 20%", // Trigger animation when the top of the trigger element hits the middle of the viewport
  animation: tl,
  once: true // Only trigger the animation once
});




gsap.from(".concept-flex > div", {
  y:200,
  opacity:1,
  delay:0.3,
  duration:0.9,
  stagger:0.3
});



gsap.from(".right-content h2 span", {
  y: 200,
  opacity: 1,
  delay: 0.3,
  duration: 0.9,
  stagger: 0.3
});



gsap.from(".bottom-head h3 span", {
  y: 200,
  opacity: 1,
  delay: 0.3,
  duration: 0.9,
  stagger: 0.3
});



gsap.from(".right-content a", {
  y: 100,
  opacity: 0,
  delay: 0.3,
  duration: 0.9,
});




gsap.from(".left-contact", {
  y: 500,
  opacity: 1,
  delay: 0.3,
  duration: 0.9,
});





  // Define the animation
  tl.from("#page5 .elem h2", { stagger: 0.3, delay: 0.3, opacity: 0, y: 400, duration: 1 });

  // Create a ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Trigger the animation when scrolling
  ScrollTrigger.create({
    trigger: "#page5",
    start: "top 20%", // Trigger animation when the top of the trigger element hits the middle of the viewport
    animation: tl,
    once: true // Only trigger the animation once
  });
