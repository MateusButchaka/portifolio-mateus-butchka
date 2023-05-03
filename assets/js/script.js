const imagens = document.querySelectorAll('.imgsobre, .imgprojetos, .imghabilidades');

function debounce(func, wait = 15, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function handleScroll() {
  const scrollPosicao = window.pageYOffset + window.innerHeight;
  
  imagens.forEach(imagem => {
    const imagemPosicao = imagem.dataset.posicao;
    
    if (scrollPosicao >= imagemPosicao) {
      imagem.classList.add("visivel");
    }
  });
}

function calcularPosicaoImagens() {
  imagens.forEach(imagem => {
    const imagemPosicao = imagem.offsetTop;
    imagem.dataset.posicao = imagemPosicao;
  });
}

const handleScrollDebounced = debounce(handleScroll);

window.addEventListener('scroll', handleScrollDebounced);
window.addEventListener('DOMContentLoaded', calcularPosicaoImagens);
