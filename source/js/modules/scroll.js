const button = document.querySelector('.main-block__button');

button.addEventListener('click', function (e) {
  e.preventDefault();
  const id = button.getAttribute('where');

  document.querySelector(id).scrollIntoView({behavior: 'smooth', block: 'center'});
});
