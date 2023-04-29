const sobretxt = document.querySelector('.sobretxt');
const sobretxtLines = sobretxt.innerHTML.split('<br>');
let newSobretxt = '';

for (let i = 0; i < sobretxtLines.length; i++) {
  let line = sobretxtLines[i].trim();
  let letters = line.split('');

  for (let j = 0; j < letters.length; j++) {
    let letter = letters[j].trim();
    newSobretxt += `<span>${letter}</span>`;
  }

  newSobretxt += '<br>';
}

sobretxt.innerHTML = newSobretxt;

const sobretxtSpans = document.querySelectorAll('.sobretxt span');

window.addEventListener('scroll', () => {
  const top = sobretxt.getBoundingClientRect().top;

  if (top < window.innerHeight) {
    sobretxt.classList.add('show');
  }
});

for (let i = 0; i < sobretxtSpans.length; i++) {
  sobretxtSpans[i].addEventListener('transitionend', () => {
    if (sobretxtSpans[i].classList.contains('visible')) {
      sobretxtSpans[i].classList.remove('visible');
      sobretxtSpans[i + 1].classList.add('visible');
    } else {
      sobretxtSpans[i].classList.add('visible');
    }
  });
}
