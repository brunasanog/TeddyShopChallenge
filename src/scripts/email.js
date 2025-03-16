const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const messageElement = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        showMessage("Il campo e-mail non può essere vuoto.", "error");
    } else if (!emailRegex.test(emailValue)) {
        showMessage("Per favore, inserisci un'e-mail valida.", "error");
    } else {
        showMessage("E-mail registrata con successo!", "success");
        form.reset();
    }
});

function showMessage(message, type) {
    messageElement.textContent = message;
    messageElement.classList.remove("hidden", "error", "success");
    messageElement.classList.add(type);
}
