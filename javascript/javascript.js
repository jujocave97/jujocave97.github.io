'use strict'

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const totalSlides = slides.length;

    // Ensure the index is within bounds
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 / totalSlides; // Calculate the offset
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the slider
showSlide(currentIndex);