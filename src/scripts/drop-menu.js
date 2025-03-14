const categorieMenu = document.getElementById('header-menu-list-categorie');
const dropdownMenu = document.getElementById('header-menu-list-drop');

categorieMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    categorieMenu.classList.toggle('active');
});

document.addEventListener('click', () => {
    categorieMenu.classList.remove('active');
});

categorieMenu.addEventListener('mouseleave', () => {
    categorieMenu.classList.remove('active');
});
