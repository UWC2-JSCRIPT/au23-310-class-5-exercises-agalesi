// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

// Change the styling of every element with class "sun" to set the color to "orange"

// Change the class of the second <li> from to "sun" to "cloudy"

//Requirement 1

document.getElementById('weather-head').innerText = 'February 10 Weather Forecast, Seattle';

//requirement 2

const addStyle = document.querySelectorAll('.sun');
addStyle.forEach(box => {
  box.style.color = 'orange'; 
});

//Requirement 3

document.querySelectorAll('li')[1].classList.replace('sun', 'cloudy');

