// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

let change = document.getElementById('more-info');

change.addEventListener('click', function(e) {
 if (e.target.id === change.id) {
   e.preventDefault();
  alert('Here\'s some info');
}});

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

let change2 = document.getElementById('dog');

change2.addEventListener('click', function(e) {
 if (e.target.id === change2.id) {
   e.preventDefault();
  alert('Bow wow');
  e.stopPropagation();
}});
