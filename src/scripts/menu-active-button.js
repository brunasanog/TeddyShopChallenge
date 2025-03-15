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
