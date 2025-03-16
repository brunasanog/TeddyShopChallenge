// Função para carregar o script de acordo com a largura da tela
function loadSlideScript() {
    const larguraTela = window.innerWidth;
    console.log('Largura da tela:', larguraTela); // Para debug

    // Limite de resolução
    if (larguraTela >= 768) {
        // Carregar o script de desktop
        const scriptDesktop = document.createElement('script');
        scriptDesktop.src = './scripts/slide/slide-desktop.js';
        document.body.appendChild(scriptDesktop);
        console.log('Carregando script: slide-desktop.js');
    } else {
        // Carregar o script de mobile
        const scriptMobile = document.createElement('script');
        scriptMobile.src = './scripts/slide/slide-mobile.js';
        document.body.appendChild(scriptMobile);
        console.log('Carregando script: slide-mobile.js');
    }
}

// Chamar a função quando o DOM estiver pronto
window.onload = loadSlideScript;

// Chamar a função sempre que a tela for redimensionada
window.onresize = loadSlideScript;