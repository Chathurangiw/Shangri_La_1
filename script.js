document.addEventListener('click', function(e) {
    if (e.target.classList.contains('dropdown-content')) {
      // Placeholder for actions, like updating the page content based on the selected language
      console.log('Language change clicked');
    }
  });
  
  document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
      element.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    })
}); 

document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".home-slider", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 5000, // Autoplay delay in milliseconds
  },
  // If you want to add navigation buttons
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });
});