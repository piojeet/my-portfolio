document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener to the "myLink" anchor element
    document.getElementById("myLink").addEventListener("click", function(event) {
      // Prevent the default behavior (page reload)
      event.preventDefault();
      document.querySelectorAll(".imgs-work").forEach(function(ex){
        ex.style.display = 'block'
      })

      // Uncheck all radio buttons
      document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
        radio.checked = false;
      });

      // Update label background color based on radio button checked state
      document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
        updateLabelBackgroundColor(radio);
      });
    });

    // Add event listener to radio buttons to update label background color
    document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
      radio.addEventListener("change", function() {
        updateLabelBackgroundColor(this);
      });
    });

    // Function to update label background color based on radio button checked state
    // function updateLabelBackgroundColor(radio) {
    //   const label = radio.nextElementSibling;
    //   label.style.color = radio.checked ? "green" : "";
    // }
  });

  document.querySelector("#experiential").addEventListener("click", function(){
    document.querySelectorAll(".experiential-box").forEach(function(exx){
      exx.style.display = 'block'
      document.querySelectorAll(".digital-box").forEach(function(d){
        d.style.display = 'none'
    document.querySelectorAll(".enviroment-box").forEach(function(n){
        n.style.display = 'none'
    })
    })
    })
  })

  
  document.querySelector("#environment").addEventListener("click", function(){
    document.querySelectorAll(".experiential-box").forEach(function(e){
        e.style.display = 'none'
    document.querySelectorAll(".digital-box").forEach(function(b){
        b.style.display = 'none'
    document.querySelectorAll(".enviroment-box").forEach(function(c){
        c.style.display = 'block'
    })
    })
    })
  })

  document.querySelector("#digital").addEventListener("click", function(){
    document.querySelectorAll(".experiential-box").forEach(function(e){
      e.style.display = 'none'
  document.querySelectorAll(".digital-box").forEach(function(b){
      b.style.display = 'block'
  document.querySelectorAll(".enviroment-box").forEach(function(c){
      c.style.display = 'none'
  })
  })
  })
  })