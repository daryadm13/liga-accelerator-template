const phone = document.querySelector('.phone');

function createNumber(s) {
  let cur = '+7 ';
  let len = s.length;
  if (len > 11) {
    len = 11;
  }
  for (let i = 1; i < len; i++) {
    if (i === 1) {
      cur += '(';
    }
    if (i === 4) {
      cur += ') ';
    }
    if (i === 7 || i === 9) {
      cur += ' ';
    }
    cur += s[i];
    if (i === 0) {
      cur += ' ';
    }
  }
  return cur;
}

function mask2(event) {
  let s = phone.value;
  if (s.length === 0) {
    phone.value = '+7 ';
  }
  s = s.replace(/\D/g, '');
  if (event.key >= '0' && event.key <= '9') {
    if (s.length >= 11) {
      event.preventDefault();
    }
  } else {
    if (event.keyCode !== 8 && event.keyCode !== 46 && event.keyCode !== 37 && event.keyCode !== 39 && event.keyCode !== 9 && event.keyCode !== 16) {
      event.preventDefault();
    } else {
      if (s.length <= 1) {
        event.preventDefault();
      }
    }
  }
}

function mask(event) {
  let s = phone.value;
  if (s.length === 0) {
    phone.value = '+7 ';
  }
  s = s.replace(/\D/g, '');
  if (event.key >= '0' && event.key <= '9') {
    event.preventDefault();
    phone.value = createNumber(s);
  } else {
    if (event.keyCode !== 8 && event.keyCode !== 46 && event.keyCode !== 37 && event.keyCode !== 39 && event.keyCode !== 9 && event.keyCode !== 16) {
      event.preventDefault();
    } else {
      phone.value = createNumber(s);
    }
  }
}

let inputs = document.querySelectorAll('.phone');
for (const input of inputs) {
  input.addEventListener('keydown', mask2, false);
  input.addEventListener('keyup', mask, false);
  input.addEventListener('focus', mask, false);
}
