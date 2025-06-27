function numeroAleatorio(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Caminhos relativos das imagens aqui:
const imgs = [
    'caminho/para/imagem1.jpg',
    'caminho/para/imagem2.jpg',
    'caminho/para/imagem3.jpg'
];

function replaceImages() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    image.src = imgs[numeroAleatorio(0, imgs.length - 1)];
  }
}

function psychicOctoBroccoliMode() {
  replaceImages();
}

// Chamada da função principal
psychicOctoBroccoliMode();
