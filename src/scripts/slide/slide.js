function loadSlideScript() {
    const screenWidth = window.innerWidth;
    console.log('Largura da tela:', screenWidth);

    if (screenWidth >= 768) {
        const scriptDesktop = document.createElement('script');
        scriptDesktop.src = './scripts/slide/slide-desktop.js';
        document.body.appendChild(scriptDesktop);
    } else {
        const scriptMobile = document.createElement('script');
        scriptMobile.src = './scripts/slide/slide-mobile.js';
        document.body.appendChild(scriptMobile);
    }
}

window.onload = loadSlideScript;
window.onresize = loadSlideScript;