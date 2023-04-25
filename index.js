const slides = document.querySelectorAll('.slide');
const delay = 5000; // Change image every 5 seconds

let currentSlide = 0;

function initSlider() {
  slides[currentSlide].classList.add('active');
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    if (currentSlide === slides.length) {
      currentSlide = 0;
    }
    slides[currentSlide].classList.add('active');
  }, delay);
}

initSlider();

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
