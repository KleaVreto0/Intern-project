// Select the necessary DOM elements
const prevButton = document.querySelector(".carousel-button-prev");
const nextButton = document.querySelector(".carousel-button-next");
const carouselTrack = document.querySelector(".carousel-track");

// Get all the carousel items and calculate the visible group size (3 items)
const carouselItems = document.querySelectorAll(".carousel-item");
const visibleItemsCount = 3;
let currentIndex = 0; 

// Function to update the carousel's scroll position
function updateCarouselPosition() {
  const offset = -currentIndex * (100 / visibleItemsCount); 
  carouselTrack.style.transform = `translateX(${offset}%)`;
}

// Event listener for the Previous button
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--; 
    updateCarouselPosition(); 
  }
});

// Event listener for the Next button
nextButton.addEventListener("click", () => {
  if (currentIndex < carouselItems.length - visibleItemsCount) {
    currentIndex++; 
    updateCarouselPosition(); 
  }
});

document.addEventListener('DOMContentLoaded', function () {
    new Glide('.featured-products .glide', {
      type: 'carousel',
      perView: 3, 
      gap: 30,   
      breakpoints: {
        1024: { perView: 2 },
        600: { perView: 1 },
      },
    }).mount();
  });

  document.addEventListener('DOMContentLoaded', function () {
    new Glide('.testimonials-glide', {
      type: 'carousel',
      perView: 1,
      gap: 30,
      animationDuration: 500,
    }).mount();
  });