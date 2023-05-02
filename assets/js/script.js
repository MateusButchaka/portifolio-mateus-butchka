// seleciona a imagem
const minhaImagem = document.getElementById("imgsobre");

// detecta a posição da imagem em relação ao topo da página
const imagemPosicao = minhaImagem.offsetTop;

// adiciona um listener para o evento de scroll
window.addEventListener('scroll', function handler() {
  // detecta a posição atual do scroll da página
  const scrollPosicao = window.pageYOffset;

  // verifica se a posição do scroll é maior ou igual à posição da imagem
  if (scrollPosicao >= imagemPosicao) {
    // adiciona a classe "visivel" à imagem
    minhaImagem.classList.add("visivel");

    // remove o listener de scroll
    window.removeEventListener('scroll', handler);
  }
});
