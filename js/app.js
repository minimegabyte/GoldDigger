'use strict';

var board = document.getElementById('board');
var ctx = board.getContext('2d');
var gold = new Image();
gold.src = '../img/gold.png';

function CurrentPicturePosition(x, y) {
  this.x = x;
  this.y = y;
}

//image needs to load before it can be drawn
gold.onload = function() {
  var x = coordinates.x;
  var y = coordinates.y;
  ctx.drawImage(gold,x, y, 100, 100);
  console.log(x + ' ' + y);
};

/*
Clears the canvas and re draws the gold at a
random spot at every x interval
*/
var timer = setTimeout(function countdown() {
  ctx.clearRect(0, 0, 900, 500);
  var x = coordinates.x;
  var y = coordinates.y;
  console.log(x + ' ' + y);
  ctx.drawImage(gold, x, y, 100, 100);
  timer = setTimeout(countdown, 30000);
}, 30000);

/*
Generate random x and y coordinates
The x and y coordinates positions the image
Returns 2 coordinates of the image position
*/
function generateXY () {
  var x = parseInt(Math.ceil(Math.random() * (900 - 200)));
  var y = parseInt(Math.ceil(Math.random() * (500 - 200)));

  return [x, y];
}

/*TO DO
-compare the x and y with currentPicturePosition within the range
-


*/




/*
Instantiate object for XY coordinates
*/
var test = generateXY();
var coordinates = new CurrentPicturePosition(test[0], test[1]);
var canvasEl = document.getElementById('board');
canvasEl.addEventListener('click', handleClickOnImage);

function handleClickOnImage(event) {
  var rect = canvasEl.getBoundingClientRect();
  var scaleX = 900 / rect.width;
  var scaleY = 500 / rect.height;
  var clickedX = (event.clientX - rect.left) * scaleX;
  var clickedY = (event.clientY - rect.top) * scaleY;
  var x = coordinates.x; //To target the right area of the picture
  var y = coordinates.y; // To target the right area of the picture

  console.log('clicked x is ' + clickedX);
  console.log('clicked y is ' + clickedY);
  if (clickedX >= x && clickedX <= x + 100 &&
      clickedY >= y && clickedY <= y + 100) {
    console.log('Cliked on the right spot');
  } else {
    console.log('Sth wrong');
  }
}

