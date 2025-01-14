const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbarDefault = document.getElementById('navbar-default');

toggleButton.addEventListener('click', () => {
  navbarDefault.classList.toggle('hidden');
});


// slider part 
const carousel = document.getElementById("videoCarousel");
let currentIndex = 1; // Start at the middle two videos

const updateCarousel = () => {
  const offset = currentIndex * -25; // Slide by 25% for each step
  carousel.style.transform = `translateX(${offset}%)`;
};

// Add click listener to the container
carousel.parentElement.addEventListener("click", (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const clickX = event.clientX;

  if (clickX < rect.width / 2) {
    // Clicked on the left half
    currentIndex = Math.max(currentIndex - 1, 0); // Prevent going out of bounds
  } else {
    // Clicked on the right half
    const totalVideos = carousel.children.length;
    currentIndex = Math.min(currentIndex + 1, totalVideos - 4); // Ensure bounds
  }

  updateCarousel();
});

// Initialize carousel position
updateCarousel();



