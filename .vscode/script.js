function toggleMode() {
 const html = document.documentElement;

html.classList.toggle('light');

const img = document.querySelector("#profile img");

// Verifica se o HTML tem a classe 'light'
// substituir a imagem
if (html.classList.contains('light')) {
    // se tiver light, mudar a imagem
    img.setAttribute('src', './assets/avatar-light.png');
} else {
    // se tiver sem light, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png');
}

// se tiver light, mudar a imagem light
// se tiver sem light, manter a imagem normal

}
