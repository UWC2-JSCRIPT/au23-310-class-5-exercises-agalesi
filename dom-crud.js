// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>


// Access (read) the data-color attribute of the <img>,
// log to the console


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")


//Requirement 1
//See html file

//Requirement 2
const dColor = document.querySelector('img'); 
const colorAttribute = dColor.getAttribute('data-color');
console.log(colorAttribute);

// //Requirement 3
document.querySelectorAll('li')[2].classList.add('highlight');

// //Requirement 4
document.querySelector('p').innerHTML = '';
