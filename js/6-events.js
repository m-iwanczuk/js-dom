/* Zdarzenia jako metody obiektów DOM */

let heading = document.querySelector('.main-title');

function changeColor() {
    this.style.backgroundColor = 'yellow';
}

function setText() {
    this.innerText = 'Nowy text';
}

//heading.onclick = changeColor;
//heading.onclick = setText;


/* // alternatywnie - funkcja anonimowa:
heading.onclick = function()    {
    this.style.backgroundColor = 'yellow';
} */

heading.addEventListener('click', changeColor);
heading.addEventListener('click', setText);

document.querySelector('p').addEventListener('click', function(){
    this.style.backgroundColor = 'green';
    heading.removeEventListener('click', setText);
});

console.dir(heading);


/* Obsługa zdarzeń */

document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    this.style.backgroundColor = 'pink';
});

document.body.addEventListener('click', function(){
    this.style.backgroundColor = 'orange';
});