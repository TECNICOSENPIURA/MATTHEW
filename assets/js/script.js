let currentIndex = [0, 0, 0, 0];
const intervalTime = 9000; // 5 segundos

function showSlide(carouselIndex, slideIndex) {
    const carousel = document.getElementById(`carousel${carouselIndex}`);
    const slides = carousel.querySelectorAll(".carousel-images .carousel-slide");
    if (slideIndex >= slides.length) {
        currentIndex[carouselIndex - 1] = 0;
    }
    if (slideIndex < 0) {
        currentIndex[carouselIndex - 1] = slides.length - 1;
    }
    const offset = -currentIndex[carouselIndex - 1] * 100;
    carousel.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}

function nextSlide(carouselIndex) {
    currentIndex[carouselIndex - 1]++;
    showSlide(carouselIndex, currentIndex[carouselIndex - 1]);
}

function prevSlide(carouselIndex) {
    currentIndex[carouselIndex - 1]--;
    showSlide(carouselIndex, currentIndex[carouselIndex - 1]);
}

// Mover los carruseles automáticamente
function autoMoveCarousels() {
    for (let i = 1; i <= 4; i++) {
        nextSlide(i);
    }
}

// Configurar el intervalo para que se muevan cada 5 segundos
setInterval(autoMoveCarousels, intervalTime);
