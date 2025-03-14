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

