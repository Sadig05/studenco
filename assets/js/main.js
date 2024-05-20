
document.getElementById('enquiryForm').addEventListener('submit', function(event){
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(this);

  // Convert formData to a plain object
  let object = {};
  formData.forEach(function(value, key){
    object[key] = value;
  });
  let json = JSON.stringify(object);

  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: json,
  })
  .then(response => response.text())
  .then(data => {
    // Display the success toast message here
    displaySuccessToast('Message sent successfully');
    document.getElementById("enquiryForm").reset();
  })
  .catch((error) => {
    console.error('Error:', error);
    // Optionally handle the error case by showing an error message
  });
});

function displaySuccessToast(message) {
    var toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(function() {
      toast.style.display = 'none';
    }, 10000); // Display for 10 seconds
  }
function smoothScroll(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = event.target.getAttribute("href").substring(1); // Get target element id
    const targetElement = document.getElementById(targetId); // Find the target element
    targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target element
}

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.querySelector("header").classList.add("hidden");
    } else {
        // Scroll up
        document.querySelector("header").classList.remove("hidden");
    }

    lastScrollTop = currentScroll;
});
  
  
  
  
  // Function to toggle the navigation menu
  // Function to toggle the navigation menu
  function toggleMenu() {
      var navMenu = document.getElementById('nav-bar');
      var hamburgerBtn = document.getElementById('hamburger-btn');
      
      if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        hamburgerBtn.classList.remove('active');
      } else {
        navMenu.style.display = 'block';
        hamburgerBtn.classList.add('active');
      }
    }
  
    // JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    var roomsSection = document.querySelector('#rooms');
    var roomsOffset = roomsSection.offsetTop;
  
    window.addEventListener('scroll', function() {
        if (window.scrollY > roomsOffset - window.innerHeight / 2) {
            var roomContainers = document.querySelectorAll('.single-room-container');
            roomContainers.forEach(function(room) {
                room.classList.add('show');
            });
        }
    });
  });

  function closeMenu() {
    var navMenu = document.getElementById('nav-bar');
    if (navMenu.style.display === 'block') {
      navMenu.style.display = 'none'; // Hide the menu
      var hamburgerBtn = document.getElementById('hamburger-btn');
      hamburgerBtn.classList.remove('active'); // Update the button appearance if necessary
    }
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }  
  
  