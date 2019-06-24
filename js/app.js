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
  ctx.drawImage(gold,x, y);
  console.log(x + ' ' + y);
};

/*

*/
var timer = setTimeout(function countdown() {
  ctx.clearRect(0, 0, 900,500);
  var x = coordinates.x;
  var y = coordinates.y;
  console.log(x + ' ' + y);
  ctx.drawImage(gold,x, y);
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
  var clickedX = event.clientX;
  var clickedY = event.clientY;
  var x = coordinates.x + 200;  //To target the right area of the picture
  var y = coordinates.y + 200;  // To target the right area of the picture

  if (clickedX <= x && clickedY <= y) {
    console.log('Cliked on the right spot');
  } else {
    console.log('Sth wrong');
  }

}

