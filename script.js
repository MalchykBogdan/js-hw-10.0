const newEl = document.createElement('li');
newEl.classList.add('site-nav_item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav_link');
navLinkEl.textContent = `Чотири(пробний)`;
navLinkEl.href = 'script_4.js';

newEl.appendChild(navLinkEl);

const navEl = document.querySelector('.site-nav');
navEl.appendChild(newEl);
