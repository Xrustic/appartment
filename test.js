const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = track.querySelectorAll('img');
let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateCarousel();
});

const enlarged_photo = document.getElementById('enlarged-photo');
const enlarged_photo_Img = document.getElementById('enlarged-photo-img');
const images = document.querySelectorAll('.zoom');
const prevBtnLarge = document.getElementById('prevBtnLarge');
const nextBtnLarge = document.getElementById('nextBtnLarge');
let currentIndexPhoto = 0;

function showImage(index) {
  if (index < 0) {
    currentIndexPhoto = images.length - 1;
  } else if (index >= images.length) {
    currentIndexPhoto = 0;
  } else {
    currentIndexPhoto = index;
  }
  enlarged_photo_Img.src = images[currentIndexPhoto].src;
}

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    showImage(index);
    enlarged_photo.classList.add('active');
  });
});

prevBtnLarge.addEventListener('click', (e) => {
  e.stopPropagation();
  showImage(currentIndexPhoto - 1);
});

nextBtnLarge.addEventListener('click', (e) => {
  e.stopPropagation();
  showImage(currentIndexPhoto + 1);
});

enlarged_photo.addEventListener('click', (e) => {
  if (e.target !== enlarged_photo_Img && e.target !== prevBtnLarge && e.target !== nextBtnLarge) {
    enlarged_photo.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (!enlarged_photo.classList.contains('active')) return;
  
  if (e.key === 'ArrowLeft') showImage(currentIndexPhoto - 1);
  if (e.key === 'ArrowRight') showImage(currentIndexPhoto + 1);
  if (e.key === 'Escape') enlarged_photo.classList.remove('active');
});

const phoneBtn = document.getElementById('number');
const tgBtn = document.getElementById('telegram');

phoneBtn.addEventListener('click', () => {
  phoneBtn.outerHTML = '<a href="tel:+79531630528" class="contact">+7 (953) 163-05-28</a>';
});

tgBtn.addEventListener('click', () => {
  tgBtn.outerHTML = '<a href="https://t.me/Xrustic_72"  class="contact">Telegram</a>';
});