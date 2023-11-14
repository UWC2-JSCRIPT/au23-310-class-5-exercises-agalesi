// If an li element is clicked, toggle the class "done" on the <li>


let list = document.querySelectorAll('li'); //in case other list elements are added
let itemsList = list.length;
for (let i = 0; i < itemsList; i++) {
  list[i].addEventListener('click', (e) => {
    toggleDone(e);
  });
}

function toggleDone(e) {
  e.currentTarget.className = 'done';
}

// If a delete link is clicked, delete the li element / remove from the DOM

const deleteLink = document.getElementsByClassName('delete');

for (const link of deleteLink) {
link.addEventListener('click', function onClick() { 

  link.parentElement.remove();
 
}); }


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0]; // get current input by user
  const text = input.value; // use this text to create a new <li>
  //const uList = document.getElementsByClassName('today-list');   
  const listElement = document.createElement('li'); //create a new list element and the node
  const node = document.createTextNode(text);  
  listElement.appendChild(node);
  uList.appendChild(listElement);}

 
 const uList = document.getElementsByClassName('today-list')[0];  
 uList.addEventListener('click', (e) => {if (e.target.closest('add-item')) {addListItem(e)}});

