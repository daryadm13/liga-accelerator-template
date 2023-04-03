const canUseWebp = () => {
  let elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }
  return false;
}

window.onload = function () {
  let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;
  if (canUseWebp() || firefoxVer >= 65) {
    const products = document.querySelectorAll(".product");
    for (let i = 0; i<products.length; i++) {
      const webp = products[i].getAttribute('data-bg-webp');
      products[i].style.backgroundImage = "linear-gradient(to top, rgba(4, 24, 39, 0.5), rgba(4, 24, 39, 0.5)), url("+ webp +")";
    }
    const mainBlock = document.querySelector('.main-block');
    mainBlock.style.backgroundImage = "linear-gradient(180deg, rgba(25, 32, 36, 0.7) 71.72%, rgba(25, 32, 36, 0) 100%), url("+ mainBlock.getAttribute('data-bg-webp') +")";

    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    if (!mediaQuery.matches) {
      const formBlock = document.querySelector('.form-block');
      formBlock.style.backgroundImage = "url(" + formBlock.getAttribute('data-bg-webp') + ")";
    };
  };
};
