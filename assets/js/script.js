const minhaImagem = document.getElementById("imgsobre");
const imagemPosicao = minhaImagem.offsetTop;

function debounce(func, wait = 20, immediate = true) {
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
  const scrollPosicao = window.pageYOffset;
  if (scrollPosicao >= imagemPosicao) {
    minhaImagem.classList.add("visivel");
    window.removeEventListener('scroll', handleScroll);
  }
}

const handleScrollDebounced = debounce(handleScroll);

window.addEventListener('scroll', handleScrollDebounced);







const imagens = document.getElementsByTagName("img");
function processarImagens() {
  while (i < imagens.length && count < 10) {
    const img = new Image();
    img.src = imagens[i].src;
    document.body.appendChild(img);
    i++;
    count++;
  }
 
  if (i < imagens.length) {
    setTimeout(processarImagens, 0);
  }
}

processarImagens();
