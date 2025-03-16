// Slider Section Four
const slider = document.querySelector(".about-us-slider");
const slides = document.querySelectorAll(".about-us-article-item");
const nextBtn = document.querySelector(".next-slide");
const prevBtn = document.querySelector(".prev-slide");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let isScrolling = false;
let isDragging = false;
let startX;
let scrollLeft;

function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

function scrollToIndex(index) {
    const cardWidth = slides[0].offsetWidth;

    if (isScrolling) return;

    isScrolling = true;

    slider.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    updateDots(index);

    setTimeout(() => {
        isScrolling = false;
    }, 100);
}

// Navegação
function nextSlide() {
    currentIndex = (currentIndex + 1) % (slides.length - 2);
    scrollToIndex(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    scrollToIndex(currentIndex);
}

// Drag
slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseleave", () => {
    isDragging = false;
    slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
    isDragging = false;
    slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;

    const cardWidth = slides[0].offsetWidth;
    const newIndex = Math.round(slider.scrollLeft / cardWidth);
    if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateDots(currentIndex);
    }
});

// Dots
dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
        currentIndex = parseInt(e.target.dataset.index);
        scrollToIndex(currentIndex);
    }
});

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

updateDots(currentIndex);

// Não seleciona texto
document.addEventListener('mousedown', () => {
    document.body.style.userSelect = 'none';
});

document.addEventListener('mouseup', () => {
    document.body.style.userSelect = '';
});


// Slider Section Seven
const reviewSlider = document.querySelector(".review-slider");
const reviewSlides = document.querySelectorAll(".review-article-item");
const reviewNextBtn = document.querySelector(".review-next-slide");
const reviewPrevBtn = document.querySelector(".review-prev-slide");
const reviewDotsContainer = document.querySelector(".review-dots");

let reviewCurrentIndex = 0;
let isReviewScrolling = false;
let isReviewDragging = false;
let reviewStartX;
let reviewScrollLeft;

function updateReviewDots(index) {
    const dots = document.querySelectorAll(".review-dot");
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

function scrollToReviewIndex(index) {
    const cardWidth = reviewSlides[0].offsetWidth;

    if (isReviewScrolling) return;

    isReviewScrolling = true;

    reviewSlider.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    updateReviewDots(index);

    setTimeout(() => {
        isReviewScrolling = false;
    }, 100);
}

// Navegação Review
function nextReviewSlide() {
    reviewCurrentIndex = (reviewCurrentIndex + 1) % (reviewSlides.length - 2);
    scrollToReviewIndex(reviewCurrentIndex);
}

function prevReviewSlide() {
    reviewCurrentIndex = (reviewCurrentIndex - 1 + reviewSlides.length) % reviewSlides.length;
    scrollToReviewIndex(reviewCurrentIndex);
}

// Drag Review
reviewSlider.addEventListener("mousedown", (e) => {
    isReviewDragging = true;
    reviewStartX = e.pageX - reviewSlider.offsetLeft;
    reviewScrollLeft = reviewSlider.scrollLeft;
    reviewSlider.style.cursor = "grabbing";
});

reviewSlider.addEventListener("mouseleave", () => {
    isReviewDragging = false;
    reviewSlider.style.cursor = "grab";
});

reviewSlider.addEventListener("mouseup", () => {
    isReviewDragging = false;
    reviewSlider.style.cursor = "grab";
});

reviewSlider.addEventListener("mousemove", (e) => {
    if (!isReviewDragging) return;
    e.preventDefault();
    const x = e.pageX - reviewSlider.offsetLeft;
    const walk = (x - reviewStartX) * 2;
    reviewSlider.scrollLeft = reviewScrollLeft - walk;

    const cardWidth = reviewSlides[0].offsetWidth;
    const newIndex = Math.round(reviewSlider.scrollLeft / cardWidth);
    if (newIndex !== reviewCurrentIndex) {
        reviewCurrentIndex = newIndex;
        updateReviewDots(reviewCurrentIndex);
    }
});

// Dots Review
reviewDotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("review-dots")) {
        reviewCurrentIndex = parseInt(e.target.dataset.index);
        scrollToReviewIndex(reviewCurrentIndex);
    }
});

reviewNextBtn.addEventListener("click", nextReviewSlide);
reviewPrevBtn.addEventListener("click", prevReviewSlide);

updateReviewDots(reviewCurrentIndex);

// Não seleciona texto
document.addEventListener('mousedown', () => {
    document.body.style.userSelect = 'none';
});

document.addEventListener('mouseup', () => {
    document.body.style.userSelect = '';
});