const imagens = document.querySelectorAll('.imgsobre, .imgprojetos, .imghabilidades');
const debounce = function(func, wait = 10, immediate = true) {
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
  imagens.forEach(imagem => {
    const imagemPosicao = imagem.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosicao = window.pageYOffset + window.innerHeight - imagem.offsetHeight / 2;
    if (scrollPosicao >= imagemPosicao) {
      imagem.classList.add("visivel");
    }
  });
}

const handleScrollDebounced = debounce(handleScroll);

window.addEventListener('scroll', handleScrollDebounced);



