const canUseWebp = () => {
  let elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

const setFormBlockBG = () => {
  const mediaQuery = window.matchMedia('(max-width: 1023px)');
  const formBlock = document.querySelector('.form-block');
  if (!mediaQuery.matches) {
    formBlock.style.backgroundImage = 'url("' + formBlock.getAttribute('data-bg-webp') + '")';
  } else {
    formBlock.style.backgroundImage = 'none';
  }
};


window.onload = function () {
  let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  let firefoxVer = isitFirefox ? parseInt(isitFirefox[1], 10) : 0;
  if (canUseWebp() || firefoxVer >= 65) {
    const products = document.querySelectorAll('.product');
    for (let i = 0; i < products.length; i++) {
      const webp = products[i].getAttribute('data-bg-webp');
      products[i].style.backgroundImage = 'linear-gradient(to top, rgba(4, 24, 39, 0.5), rgba(4, 24, 39, 0.5)), url("' + webp + '")';
    }
    const mainBlock = document.querySelector('.main-block');
    mainBlock.style.backgroundImage = 'linear-gradient(180deg, rgba(25, 32, 36, 0.7) 71.72%, rgba(25, 32, 36, 0) 100%), url("' + mainBlock.getAttribute('data-bg-webp') + '")';
    setFormBlockBG();

  }
};

window.addEventListener('resize', () => {
  let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  let firefoxVer = isitFirefox ? parseInt(isitFirefox[1], 10) : 0;
  if (canUseWebp() || firefoxVer >= 65) {
    setFormBlockBG();
  }
}, true);
