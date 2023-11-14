// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
console.log(body.childNodes[1]);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const parent1 = ul.parentNode;
console.log(parent1.parentNode);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const sibling1 = p.previousSibling; //get text element h1
console.log(sibling1);
const listElement = sibling1.previousSibling; //get next sibling which is ul
console.log(listElement);
const lastListElement = listElement.lastElementChild; //get last child of that ul which is 3rd li element
console.log(lastListElement);
