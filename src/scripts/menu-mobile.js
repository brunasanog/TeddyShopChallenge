document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-mobile');
    const nav = document.getElementById('nav');
    const categoryButton = document.getElementById('header-menu-list-categorie');
    const closeMenuButton = document.createElement('button');
    closeMenuButton.id = 'close-menu';
    closeMenuButton.innerHTML = '&times;'; // Ícone de fechar

    // Adicionar o botão de fechar
    nav.appendChild(closeMenuButton);

    // Abrir o menu ao clicar no ícone do menu
    menuButton.addEventListener('click', function () {
        nav.classList.add('active');
    });

    // Fechar o menu ao clicar no botão de fechar
    closeMenuButton.addEventListener('click', function () {
        nav.classList.remove('active');
    });

    // Controlar o dropdown da categoria
    categoryButton.addEventListener('click', function () {
        const dropdown = document.getElementById('header-menu-list-drop');
        dropdown.classList.toggle('active'); // Alterna a visibilidade do dropdown
    });
});
