document.addEventListener("DOMContentLoaded", function () {
    const firstGroup = document.getElementById("first");
    const secondGroup = document.getElementById("second");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");

    let currentIndex = 0; // 0 = first, 1 = second

    function updateSlider() {
        if (currentIndex === 0) {
            firstGroup.style.display = "flex"; // Mostra o primeiro grupo
            secondGroup.style.display = "none"; // Esconde o segundo grupo
        } else {
            firstGroup.style.display = "none"; // Esconde o primeiro grupo
            secondGroup.style.display = "flex"; // Mostra o segundo grupo
        }

        // Atualiza os dots
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 2; // Alterna entre 0 e 1
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 2) % 2; // Alterna entre 0 e 1
        updateSlider();
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateSlider();
        });
    });

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    updateSlider(); // Inicia com o primeiro grupo visível
});
