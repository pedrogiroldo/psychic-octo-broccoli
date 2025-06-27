function numeroAleatorio(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Caminhos das imagens usando chrome.runtime.getURL()
const imgs = [chrome.runtime.getURL("images/imagem1.jpg")];

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
