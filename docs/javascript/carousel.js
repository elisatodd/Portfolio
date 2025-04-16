let currentIndex = 1; // Starting index of the carousel

// Function to move between slides
function moveSlide(step) {
    const images = document.querySelectorAll('.carousel-image'); // Get all images in the carousel
    const totalImages = images.length;

    // Remove the "active" class from all images
    images.forEach(image => {
        image.classList.remove('active');
    });

    // Update the current index based on the step
    currentIndex += step;

    // Loop through the images if we go past the first or last one
    if (currentIndex < 1) {
        currentIndex = totalImages - 1; // Go to last image if at the beginning
    } else if (currentIndex >= totalImages) {
        currentIndex = 1; // Go to first image if at the end
    }

    // Add the "active" class to the current image
    images[currentIndex].classList.add('active');
}

// Initialize the first image when the page loads
window.addEventListener('load', () => {
    moveSlide(0); // Initialize the first image
});

// Function to select an image based on the thumbnail click
function selectImage(index) {
    currentIndex = index; // Update the current index
    moveSlide(0); // Show the selected image
}
