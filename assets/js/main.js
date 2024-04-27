 $(document).ready(function() {
  
  $("#search_icon").click(function(event) {
    event.stopPropagation();
    $(".search-form").fadeToggle("1000");
  });
 
  $(document.body).click(function(event) {
    if (!$(event.target).closest('.search-form').length && !$(event.target).is('#search_icon')) {
      $(".search-form").fadeOut("1000");
    }
  });
});


let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}



AOS.init({
  duration: 2000,
});


//work-wrapper-section counter



document.addEventListener('DOMContentLoaded', function() {
  // Function to animate counter
  function animateCounter(counter) {
    var target = parseInt(counter.getAttribute('data-target'));
    var count = parseInt(counter.textContent);
    var speed = Math.ceil(target / 100); // Adjust the animation speed

    var updateCount = function() {
      count += speed;
      counter.textContent = count;

      if (count < target) {
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target;
      }
    };

    updateCount();
  }

  // Callback function for intersection observer
  function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }

  // Create a new Intersection Observer
  var observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });

  // Select all elements with the class "counter"
  var counters = document.querySelectorAll('.counter');

  // Observe each counter element
  counters.forEach(function(counter) {
    observer.observe(counter);
  });
});

//work-wrapper-section counter end


// Testimonial

$('.testimonial').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

// Get the buttons
const contactUsButton = document.getElementById('contactUsButton');
const whatsappButton = document.getElementById('whatsappButton');
const emailButton = document.getElementById('emailButton');

// Add event listeners to the second and third buttons
whatsappButton.addEventListener('mouseenter', () => {
    contactUsButton.style.backgroundColor = 'transparent';
    contactUsButton.style.border = '2.5px solid var(--secondary-color)';
});

whatsappButton.addEventListener('mouseleave', () => {
    contactUsButton.style.backgroundColor = 'var(--primary-color)';
    contactUsButton.style.border = '2.5px solid var(--primary-color)';
});

emailButton.addEventListener('mouseenter', () => {
    contactUsButton.style.backgroundColor = 'transparent';
    contactUsButton.style.border = '2.5px solid var(--secondary-color)';
});

emailButton.addEventListener('mouseleave', () => {
    contactUsButton.style.backgroundColor = 'var(--primary-color)';
    contactUsButton.style.border = '2.5px solid var(--primary-color)';
});

  



 /* gallery section start */
// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close",
  ],
  loop: false,
  protect: true,
  });




 

