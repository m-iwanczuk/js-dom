/* Wyszukiwanie po id */

let section = document.getElementById('about');

console.log(section);
console.dir(section);

section.style.backgroundColor = 'gray';


/* Wyszukiwanie po klasie */

let paragraphs = document.getElementsByClassName('content');

console.log(paragraphs);

for(let i = 0; i<paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = 'yellow';
}

// paragraphs[0].style.backgroundColor = 'yellow';
// paragraphs[2].style.backgroundColor = 'yellow';

/* Wyszukiwanie po znaczniku/tagu */

let heading = document.getElementsByTagName('h2'); // UWAGA! jednoelementowa kolekcja - to nie jest pojedynczy element!
console.log(heading);

heading[0].style.backgroundColor = 'orange';  // konieczne jest podanie indexu [0] bo to jednoelementowa kolekcja!


/* Wyszukiwanie po selektorach */

// tylko do prostych skryptów, szukanie po wszystkich selektorach


let firstPar = document.querySelector('.content'); // jak w css
console.log(firstPar);

let allPar = document.querySelectorAll('.content');
console.log(allPar);


