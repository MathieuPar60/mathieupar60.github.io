
let currentImageIndex = 0;
const images = ['assets/home.PNG', 'assets/tutorial.PNG', 'assets/tutorial1.PNG', 'assets/tutorial2.PNG', 'assets/tutorial3.PNG', 'assets/classic1.PNG', 'assets/classic2.PNG'];

function showImage(index) {
    const imageElement = document.getElementById('carousel-image');
    imageElement.src = images[index];
    updateButton();
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
    }
}

function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
    }
}

function updateButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    prevButton.disabled = currentImageIndex === 0;
    nextButton.disabled = currentImageIndex === images.length - 1;
}

updateButtons();