(function () {
  const sliders = [...document.querySelectorAll('.portafolio-container')];
  const arrowNext = document.querySelector('#next');
  const arrowBefore = document.querySelector('#before');
  let value;

  arrowNext.addEventListener('click', () => changePosition(1));
  arrowBefore.addEventListener('click', () => changePosition(-1));

  function changePosition(change) {
    const currentElement = Number(document.querySelector('.show').dataset.id);
    sliders[currentElement-1].classList.toggle("show");
    value = currentElement;
    value += change;
    
    if (value === 0 || value == sliders.length + 1) {
      value = value === 0 ? sliders.length : 1;
    }
    sliders[value - 1].classList.toggle('show');
  }
})()