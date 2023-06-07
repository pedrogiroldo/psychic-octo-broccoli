function numeroAleatorio (a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}


// link das imagens aqui:
const imagesGiras = [
    'https://c.files.bbci.co.uk/13FD/production/_99171150_peppapigpa.jpg'
]


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

