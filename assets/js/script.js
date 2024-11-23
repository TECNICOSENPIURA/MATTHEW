const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel img');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

// Create dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});// Función para mostrar/ocultar el contenido de la tarjeta
function toggleContent(cardElement) {
  const content = cardElement.querySelector('.card-content');
  
  // Alterna la visibilidad y animación de la tarjeta
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    setTimeout(() => {
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    }, 10);
  } else {
    content.style.opacity = '0';
    content.style.transform = 'translateY(100%)';
    setTimeout(() => {
      content.style.display = 'none';
    }, 300);
  }
}


const dots = document.querySelectorAll('.dot');

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
  currentIndex = index;
  carousel.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
}



  