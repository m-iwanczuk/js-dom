/* Manipulacja treścią */

let heading = document.querySelector('.main-title');

let headingContent = heading.innerHTML;
console.log(headingContent);

heading.innerHTML = 'Całkiem nowy <span>tytuł</span>'; // podmienia zawartosc znacznika

// heading.innerText = 'Całkiem nowy <span>tytuł</span>, który jest tekstem';

heading.outerHTML = '<h3>Całkiem nowy <span>tytuł</span></h3>'; 



/* Manipulacja atrybutami */
console.dir(heading);

heading.id = 'main-heading';

heading.className = 'new-class second-new-class'; // nadpisanie klasy
heading.className += ' new-class second-new-class'; // dodanie do klasy

heading.classList.add('new-class'); // dodaje nową klasę
heading.classList.remove('main-title'); //  usuwa zadaną klasę (jeśli nie znajdzie przechodzi po prostu dalej)

heading.style.backgroundColor = 'red';  // coś nie działa - sprawdzić!!!