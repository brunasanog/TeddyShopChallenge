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

// Cria os dots
function createDots() {
    dotsContainer.innerHTML = "";

    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);

        if (index === 0) {
            dot.classList.add("active");
        }
    });
}

// Atualiza dots
function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}


// Navegação
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    scrollToIndex(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    scrollToIndex(currentIndex);
}

// Slide
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

// Clicar nos dots
dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
        currentIndex = parseInt(e.target.dataset.index);
        scrollToIndex(currentIndex);
    }
});

createDots();

// Não seleciona texto
document.addEventListener('mousedown', () => {
    document.body.style.userSelect = 'none';
});

document.addEventListener('mouseup', () => {
    document.body.style.userSelect = '';
});

// Navegação com setas
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);



// Slider Section Seven
const mobileReviewSlider = document.querySelector(".review-slider");
const mobileReviewSlides = document.querySelectorAll(".review-article-item");
const mobileReviewNextBtn = document.querySelector(".review-next-slide");
const mobileReviewPrevBtn = document.querySelector(".review-prev-slide");
const mobileReviewDotsContainer = document.querySelector(".review-dots");

let mobileReviewCurrentIndex = 0;
let isMobileReviewScrolling = false;
let isMobileReviewDragging = false;
let mobileReviewStartX;
let mobileReviewScrollLeft;

// Cria os dots
function createMobileReviewDots() {
    mobileReviewDotsContainer.innerHTML = "";

    mobileReviewSlides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("review-dot");
        dot.dataset.index = index;
        mobileReviewDotsContainer.appendChild(dot);

        if (index === 0) {
            dot.classList.add("active");
        }
    });
}

// Atualiza os dots
function updateMobileReviewDots(index) {
    const dots = document.querySelectorAll(".review-dot");
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

// Navegação
function nextMobileReviewSlide() {
    mobileReviewCurrentIndex = (mobileReviewCurrentIndex + 1) % mobileReviewSlides.length;
    scrollToMobileReviewIndex(mobileReviewCurrentIndex);
}

function prevMobileReviewSlide() {
    mobileReviewCurrentIndex = (mobileReviewCurrentIndex - 1 + mobileReviewSlides.length) % mobileReviewSlides.length;
    scrollToMobileReviewIndex(mobileReviewCurrentIndex);
}

// Slide
function scrollToMobileReviewIndex(index) {
    const cardWidth = mobileReviewSlides[0].offsetWidth;

    if (isMobileReviewScrolling) return;

    isMobileReviewScrolling = true;

    mobileReviewSlider.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    updateMobileReviewDots(index);

    setTimeout(() => {
        isMobileReviewScrolling = false;
    }, 100);
}

// Drag functionality
mobileReviewSlider.addEventListener("mousedown", (e) => {
    isMobileReviewDragging = true;
    mobileReviewStartX = e.pageX - mobileReviewSlider.offsetLeft;
    mobileReviewScrollLeft = mobileReviewSlider.scrollLeft;
    mobileReviewSlider.style.cursor = "grabbing";
});

mobileReviewSlider.addEventListener("mouseleave", () => {
    isMobileReviewDragging = false;
    mobileReviewSlider.style.cursor = "grab";
});

mobileReviewSlider.addEventListener("mouseup", () => {
    isMobileReviewDragging = false;
    mobileReviewSlider.style.cursor = "grab";
});

mobileReviewSlider.addEventListener("mousemove", (e) => {
    if (!isMobileReviewDragging) return;
    e.preventDefault();
    const x = e.pageX - mobileReviewSlider.offsetLeft;
    const walk = (x - mobileReviewStartX) * 2;
    mobileReviewSlider.scrollLeft = mobileReviewScrollLeft - walk;

    const cardWidth = mobileReviewSlides[0].offsetWidth;
    const newIndex = Math.round(mobileReviewSlider.scrollLeft / cardWidth);
    if (newIndex !== mobileReviewCurrentIndex) {
        mobileReviewCurrentIndex = newIndex;
        updateMobileReviewDots(mobileReviewCurrentIndex);
    }
});

// Dots mobile
mobileReviewDotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("review-dot")) {
        mobileReviewCurrentIndex = parseInt(e.target.dataset.index);
        scrollToMobileReviewIndex(mobileReviewCurrentIndex);
    }
});

createMobileReviewDots();

// Não seleciona texto
document.addEventListener('mousedown', () => {
    document.body.style.userSelect = 'none';
});

document.addEventListener('mouseup', () => {
    document.body.style.userSelect = '';
});

// Navegação com setas
mobileReviewNextBtn.addEventListener("click", nextMobileReviewSlide);
mobileReviewPrevBtn.addEventListener("click", prevMobileReviewSlide);

updateMobileReviewDots(mobileReviewCurrentIndex);
