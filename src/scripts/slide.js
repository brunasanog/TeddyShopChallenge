const slider = document.querySelector(".about-us-slider");
const slides = document.querySelectorAll(".about-us-article-item");
const nextBtn = document.querySelector(".next-slide");
const prevBtn = document.querySelector(".prev-slide");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let isScrolling = false; // Flag para bloquear múltiplos cliques

// Atualiza a classe 'active' nos dots com base no índice do slide atual
function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

// Função para rolar até o slide específico
function scrollToIndex(index) {
    const cardWidth = slides[0].offsetWidth;

    if (isScrolling) return;  // Bloqueia novos cliques enquanto estiver rolando

    isScrolling = true;  // Ativa o bloqueio de cliques

    slider.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    updateDots(index);

    // Após 500ms (tempo suficiente para a animação), libera o clique novamente
    setTimeout(() => {
        isScrolling = false;
    }, 200);  // Ajuste o tempo conforme necessário (em milissegundos)
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % (slides.length - 1); // Avança de forma circular
    scrollToIndex(currentIndex);
}

// Função para voltar para o slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % (slides.length - 1); // Volta de forma circular
    scrollToIndex(currentIndex);
}

// Listener para detectar o clique nos dots
dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
        currentIndex = parseInt(e.target.dataset.index);
        scrollToIndex(currentIndex);
    }
});

// Adiciona os eventos de clique nos botões de navegação
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Inicializa os dots (para garantir que o primeiro seja 'active')
updateDots(currentIndex);
