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


console.dir(heading);
