'use strict';

var rect;
var scaleX;
var scaleY;
var clickedX;
var clickedY;
var score = 0;
var coordinates;
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
  createNewCoordinate();
  var x = coordinates.x;
  var y = coordinates.y;
  console.log(x + ' ' + y);
  ctx.drawImage(gold, x, y, 100, 100);
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
function createNewCoordinate() {
  var randCoordArr = generateXY();
  coordinates = new CurrentPicturePosition(randCoordArr[0], randCoordArr[1]);
}

createNewCoordinate();
var canvasEl = document.getElementById('board');
canvasEl.addEventListener('click', handleClickOnImage);


function handleClickOnImage(event) {
  rect = canvasEl.getBoundingClientRect();
  scaleX = 900 / rect.width;
  scaleY = 500 / rect.height;
  clickedX = (event.clientX - rect.left) * scaleX;
  clickedY = (event.clientY - rect.top) * scaleY;
  var x = coordinates.x; //To target the right area of the picture
  var y = coordinates.y; // To target the right area of the picture

  console.log('clicked x is ' + clickedX);
  console.log('clicked y is ' + clickedY);
  if (clickedX >= x && clickedX <= x + 100 &&
      clickedY >= y && clickedY <= y + 100) {
    console.log('Cliked on the right spot');
    score++;
    console.log('score: ' + score);
    window.clearTimeout(timer);
    ctx.clearRect(0, 0, 900, 500);
    createNewCoordinate();
    x = coordinates.x;
    y = coordinates.y;
    ctx.drawImage(gold, x, y, 100, 100);
    timer = setTimeout(function countdown() {
      ctx.clearRect(0, 0, 900, 500);
      createNewCoordinate();
      var x = coordinates.x;
      var y = coordinates.y;
      console.log(x + ' ' + y);
      ctx.drawImage(gold, x, y, 100, 100);
      timer = setTimeout(countdown, 3000);
    }, 3000);
  } else {
    alert('You lose');
    addPlayerScore();
    location.replace('../html/HighScoreBoard.html');
  }
}

function addPlayerScore() {
  //check local storage
  var playersArr = JSON.parse(localStorage.getItem('players'));
  // console.log('before ' + playersArr[playersArr.length-1].score);
  playersArr[playersArr.length-1].score = score;
  // localStorage.setItem('setProducts', JSON.stringify(Product.allProducts));
  localStorage.setItem('players', JSON.stringify(playersArr));

  // score = 10;
  // console.log('after ' + playersArr[playersArr.length-1].score);
  //if it's between null and 5, add the user's score
  var scoreArray = JSON.parse(localStorage.getItem('score'));
  // if(!scoreArray || scoreArray.length < 5) {
  //   //add score
  // } else {
    
  // }
  //if it's greater than 5, add logic to check if the user is in the top 5

}

