// Menu active button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#blue-button');

    button.addEventListener('click', function (e) {
        e.stopPropagation();

        this.classList.add('active');

        document.addEventListener('click', function () {
            button.classList.remove('active');
        });
    });
});

//Menu active nav
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.header-menu-list-link a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.stopPropagation();

            document.querySelectorAll('.header-menu-list-link a').forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');
        });
    });

    document.addEventListener('click', function () {
        document.querySelectorAll('.header-menu-list-link a').forEach(link => {
            link.classList.remove('active');
        });
    });
});

// Menu Drop
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

// Menu hover icons
const buttons = document.querySelectorAll("#search-btn, #user-btn, #favorite-btn, #bag-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

document.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
});

//Menu mobile
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-mobile');
    const nav = document.getElementById('nav');
    const categoryButton = document.getElementById('header-menu-list-categorie');
    const closeMenuButton = document.createElement('button');
    closeMenuButton.id = 'close-menu';
    closeMenuButton.innerHTML = '&times;';

    nav.appendChild(closeMenuButton);

    menuButton.addEventListener('click', function () {
        nav.classList.add('active');
    });

    closeMenuButton.addEventListener('click', function () {
        nav.classList.remove('active');
    });

    categoryButton.addEventListener('click', function () {
        const dropdown = document.getElementById('header-menu-list-drop');
        dropdown.classList.toggle('active'); // Alterna a visibilidade do dropdown
    });
});


//Menu search
const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');

searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active');
});
