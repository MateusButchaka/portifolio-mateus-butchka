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






document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const carouselItems = carousel.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;

  function showItem(index) {
    // Esconde todos os itens do carrossel
    carouselItems.forEach(function(item) {
      item.style.display = "none";
    });

    // Mostra o item atual
    carouselItems[index].style.display = "block";
  }

  function prevItem() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = carouselItems.length - 1;
    }
    showItem(currentIndex);
  }

  function nextItem() {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
      currentIndex = 0;
    }
    showItem(currentIndex);
  }

  // Adiciona os ouvintes de eventos aos botões de navegação
  prevButton.addEventListener("click", prevItem);
  nextButton.addEventListener("click", nextItem);

  // Mostra o item inicial
  showItem(currentIndex);
});
