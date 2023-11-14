// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

let counter = 0;

const goUp = document.getElementById('plus');

goUp.addEventListener('click', () => {

  counter++;
  document.getElementById('count').innerHTML = counter;
  console.log(`count is ${counter}`);

})

const goDown = document.getElementById('minus');

goDown.addEventListener('click', () => {

  counter--;
  document.getElementById('count').innerHTML = counter;
  console.log(`count is ${counter}`);

})

