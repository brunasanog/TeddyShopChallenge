document.addEventListener("DOMContentLoaded", function () {
    const articlesContainer = document.querySelector(".about-us-article");
    const articles = document.querySelectorAll(".about-us-article-item");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");

    const articlesPerPage = 1; // Quantidade de artigos visíveis por vez
    let currentIndex = 0;
    const totalArticles = articles.length;

    // Função para atualizar o slider
    function updateSlider() {
        let offset = -(currentIndex * (articles[0].offsetWidth + 30)); // 30px de margem
        articlesContainer.style.transform = `translateX(${offset}px)`;

        // Atualiza os dots
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    // Função para avançar para o próximo conjunto de artigos
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= totalArticles) {
            currentIndex = 0;
        }
        updateSlider();
    }

    // Função para voltar para o conjunto anterior de artigos
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalArticles - 1;
        }
        updateSlider();
    }

    // Adiciona os eventos aos botões
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Adiciona os eventos às bolinhas (dots)
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateSlider();
        });
    });

    // Inicia o slider corretamente
    updateSlider();
});
