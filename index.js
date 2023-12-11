document.addEventListener("DOMContentLoaded", function () {
  const barIcon = document.querySelector(".bar-icon");
  const navLinks = document.querySelector(".nav-links");

  // RESPONSIVE NAVIGATION BAR
  barIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from reaching the document body
    navLinks.classList.toggle("active");
  });

  // Click event listener for the document body
  document.body.addEventListener("click", function () {
    navLinks.classList.remove("active"); // Hide the navigation links when any part of the screen is clicked
  });

  const navigationLinks = document.querySelectorAll(".nav-links a");
  navigationLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from reaching the document body
      navLinks.classList.remove("active"); // Remove the 'active' class to hide the menu when a link is clicked
    });
  });
});

const projects = [
  {
    image: "./Photos/project1.png",
    text: "An E-Commerce website I built using HTML, CSS and JavaScript. The website's cart functionalities are working.The challenge of this project was adding the products through JavaScript, I am currently working on how to upload them from a database.",
    link: "https://kochiengfarms.netlify.app/",
  },
  {
    image: "./Photos/project1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sint sequi iste in quia quis natus delectus excepturi!",
    link: "https://kochiengfarms.netlify.app/",
  },
  {
    image: "./Photos/project2.png",
    text: "This is the cart of the E-Commerce I had built. The cart shows the products selected, their total prices, adding or reducing items feature and an option to delete the product fromthe cart",
    link: "https://vinta-resort.netlify.app/",
  },
  {
    image: "./Photos/project3.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sint sequi iste in quia quis natus delectus excepturi!",
    link: "https://vinta-resort.netlify.app/",
  },
];

function showSlides() {
  let slideIndex = 0;
  const slideContainer = document.querySelector(".slide-container");
  function updateSlide() {
    const currentSlide = projects[slideIndex];
    slideContainer.innerHTML = `
        <div class="slide">
                <div class="slide-img">
                    <img src="${currentSlide.image}" alt="">
                </div>
                <div class="slide-text">
                    <p>${currentSlide.text}</p>
                    <div class="slide-btn">
                        <button><a href=${currentSlide.link} target="_blank">Visit Site</a></button>
                    </div>
                </div>
            </div>
        `;
    slideIndex++;
    if (slideIndex >= projects.length) {
      slideIndex = 0;
    }
  }
  updateSlide();
  setInterval(updateSlide, 8000);
}
showSlides();
// Get the progress bar element
var progressBar = document.querySelector(".progress-bar");

// Function to update the progress bar
function updateProgressBar(progress) {
  progressBar.style.width = progress + "%";
  progressBar.setAttribute("aria-valuenow", progress);
}

// Example usage: update the progress bar to 50%
updateProgressBar(50);
