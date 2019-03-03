/* Tworzenie węzłów */

let newFooter = document.createElement('footer');

console.log(newFooter);

// newFooter.appendChild(footerContent); //dodawanie jednego elementu do drugiego

document.getElementById('about').appendChild(newFooter); // wrzucanie nowego wezla jako ostatnie dziecko

let footerClass = document.createAttribute('class');

newFooter.setAttributeNode(footerClass);

footerClass.value = 'article-footer';

let countParagraphs = document.querySelectorAll('#about p').length;
console.log(countParagraphs);  //policz wszystkie paragrafy w sekcji about

let footerContent = document.createTextNode(`Artykuł ma ${countParagraphs} paragrafy`);

document.getElementById('about').appendChild(newFooter);

console.log(footerContent);


/* dodawanie elementu przed innym elementem */

let newHeading = document.createElement('h3');
let headingText = document.createTextNode('nowy nagłówek');

newHeading.appendChild(headingText);

document.querySelector('.main-title').parentElement.insertBefore(newHeading, document.querySelector('.main-title')); //dodaj przed

document.querySelector('.main-title').parentElement.insertBefore(newHeading, document.querySelector('.main-title').nextSibling); //dodaj po



/* Usuwanie elementów */

//jak się pozbyc pierwzego paragrafu

document.getElementById('about').removeChild(document.getElementsByTagName('p')[0]);