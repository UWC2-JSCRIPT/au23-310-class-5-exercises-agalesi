// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click


const clickedCell = document.querySelectorAll('td');


clickedCell.forEach (clicked => clicked.addEventListener('click', e => {

  let pos = {
    top: e.offsetY,
    left: e.offsetX
  };

  console.log(pos);
}));
