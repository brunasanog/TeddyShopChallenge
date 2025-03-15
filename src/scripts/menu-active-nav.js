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

