/* Węzel rodzica */

let heading = document.getElementsByClassName('main-title')[0];  // trzeba dodac [0], bo znowu odwołujemy sie do kolekcji
console.log(heading);

console.log(heading.parentElement); // zwraca rodzica jako obiekt

heading.parentElement.style.backgroundColor = '#ccc';


/* Węzły potomstwa */

let article = document.getElementById('about');

console.log(article.children); // tylko znaczniki html
console.log(article.childNodes); // wszystkie węzły, łącznie z białymi znakami, komentarzami etc.

console.log(article.firstElementChild);
console.log(article.lastElementChild);


/* Węzły rodzeństwa */

heading.nextElementSibling.style.fontSize = '1.5em';