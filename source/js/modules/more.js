const more = document.querySelector('.button__text--shown');
const less = document.querySelector('.button__text--hidden');
const text = document.querySelector('.about__text--additional');

more.addEventListener('click', () => addText());
less.addEventListener('click', () => closeText());

const addText = () => {
    more.classList.add('visually-hidden');    
    less.classList.remove('visually-hidden');
    text.classList.remove('visually-hidden');
};


const closeText = () => {
    more.classList.remove('visually-hidden');    
    less.classList.add('visually-hidden');
    text.classList.add('visually-hidden');
};