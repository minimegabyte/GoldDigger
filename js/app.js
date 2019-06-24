'use strict';

var board = document.getElementById('board');
var ctx = board.getContext('2d');
var gold = new Image();
gold.src = './img/gold.png';

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
  timer = setTimeout(countdown, 3000);
}, 3000);

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

/*
Instantiate object for XY coordinates
*/
var test = generateXY();
var coordinates = new CurrentPicturePosition(test[0], test[1]);
var canvasEl = document.getElementById('board');
canvasEl.addEventListener('click', handleClickOnImage);

function handleClickOnImage(event) {
  
}
