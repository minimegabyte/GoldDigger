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
<<<<<<< HEAD
  
  var rect = canvasEl.getBoundingClientRect();
  var scaleX = 900 / rect.width;
  var scaleY = 500 / rect.height;
  var clickedX = (event.clientX - rect.left) * scaleX;
  var clickedY = (event.clientY - rect.top) * scaleY;
=======
  rect = canvasEl.getBoundingClientRect();
  scaleX = 900 / rect.width;
  scaleY = 500 / rect.height;
  clickedX = (event.clientX - rect.left) * scaleX;
  clickedY = (event.clientY - rect.top) * scaleY;
>>>>>>> 30452995f2e850e15520f827928a7bd08396811d
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
<<<<<<< HEAD
    console.log('Sth wron');
=======
    alert('You lose');
    updateCurrentPlayerScore();
    updateTop5();
    location.replace('../html/HighScoreBoard.html');
  }
}

function updateCurrentPlayerScore() {  
  var currentUserArray = JSON.parse(localStorage.getItem('CurrentPlayer'));
  var finalObj = {
    name:currentUserArray.name,
    score:score
  };
  localStorage.setItem('CurrentPlayer', JSON.stringify(finalObj));
}


function updateTop5() {
  var arrayOfTop5 = JSON.parse(localStorage.getItem('Top5'));
  var currentUserArray = JSON.parse(localStorage.getItem('CurrentPlayer'));
  var tempName = currentUserArray.name;
  var tempScore = currentUserArray.score;

  for (var i = 0; i < arrayOfTop5.length; i++) {
    //Modify the arrayOfTop5 if the current user has the higher score
    //Must beat the existing top score to get in top Five
    if (currentUserArray.score >= arrayOfTop5[i].score) {
      //Store temporary score and name from the top5
      tempName = arrayOfTop5[i].name;
      tempScore = arrayOfTop5[i].score;

      //Update Top5 current index
      arrayOfTop5[i].name = currentUserArray.name;
      arrayOfTop5[i].score = currentUserArray.score;

      //new score to get compared with the rest
      currentUserArray.name = tempName;
      currentUserArray.score = tempScore;
    }
>>>>>>> 30452995f2e850e15520f827928a7bd08396811d
  }
  localStorage.setItem('Top5', JSON.stringify(arrayOfTop5));
}

<<<<<<< HEAD
console.log('working');=

=======
>>>>>>> 30452995f2e850e15520f827928a7bd08396811d

