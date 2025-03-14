const categorieMenu = document.getElementById('header-menu-list-categorie');
const dropdownMenu = document.getElementById('header-menu-list-drop');

// Ao clicar, adiciona/remove a classe "active"
categorieMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que o clique fora feche instantaneamente
    categorieMenu.classList.toggle('active');
});

// Fecha o menu ao clicar fora
document.addEventListener('click', () => {
    categorieMenu.classList.remove('active');
});

// Fecha ao tirar o mouse de cima
categorieMenu.addEventListener('mouseleave', () => {
    categorieMenu.classList.remove('active');
});
