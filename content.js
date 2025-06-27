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

function replaceNewImages(addedNodes) {
  addedNodes.forEach((node) => {
    // Se o nó adicionado é uma imagem
    if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "IMG") {
      node.src = imgs[numeroAleatorio(0, imgs.length - 1)];
    }
    // Verificar se o nó contém imagens
    if (node.nodeType === Node.ELEMENT_NODE) {
      const images = node.getElementsByTagName("img");
      for (let i = 0; i < images.length; i++) {
        images[i].src = imgs[numeroAleatorio(0, imgs.length - 1)];
      }
    }
  });
}

function psychicOctoBroccoliMode() {
  // Substituir imagens existentes
  replaceImages();

  // Configurar observer para monitorar mudanças no DOM
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        replaceNewImages(mutation.addedNodes);
      }
    });
  });

  // Iniciar observação
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Chamada da função principal
psychicOctoBroccoliMode();
