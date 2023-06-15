function numeroAleatorio(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Caminhos relativos das imagens aqui:
const imagesGiras = [
    'caminho/para/imagem1.jpg',
    'caminho/para/imagem2.jpg',
    'caminho/para/imagem3.jpg'
];

function replaceImages() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    image.src = imagesGiras[numeroAleatorio(0, imagesGiras.length - 1)];
  }
}

function activateGirasMode() {
  replaceImages();
}

// Chamada da função principal
activateGirasMode();