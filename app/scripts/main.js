import ColorHash from 'color-hash';

const colorHash = new ColorHash();

const homePage = 'http://mcdlr.com/h/';

const input = document.getElementById('window-input');
const main = document.querySelector('main');
const title = document.querySelector('head title');


const capitalize = string => string
  .replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, m => m.toUpperCase());

const hashToString = hash => decodeURIComponent(hash.replace(/^#/, ''));

const hashMod = ev => {
  const label = capitalize(hashToString(String(window.location.hash)));
  main.setAttribute('style', `background-color: ${colorHash.hex(label)}`);
  title.textContent = label;
  input.value = label;
}

const inputMod = ev => {
  const inputValue = capitalize(String(input.value));
  window.location.hash = inputValue;
  window.open(homePage);
}

hashMod();

input.addEventListener('change', inputMod);
window.addEventListener('hashchange', hashMod);
