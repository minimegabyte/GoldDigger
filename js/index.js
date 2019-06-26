'use strict';

function Player(name) {
  this.name = name;
  this.score = 0;
}

function createUser(name) {
  return new Player(name);
}

function addCurrentPlayerToLocalStorage(newPlayer) {
  localStorage.setItem('CurrentPlayer', JSON.stringify(newPlayer));
}


//Creates default local storage for empty local storage 
function createDefaultLocalStorage() {
  if(!localStorage.getItem('Top5')) {
    var allPlayers = [];
    //Create 5 dummy players
    for (var i = 0; i < 5; i++) {
      allPlayers.push(new Player('dummyPlayer'));
    }
    localStorage.setItem('Top5', JSON.stringify(allPlayers));
  }
  //Create Dummy Current player
  localStorage.setItem('CurrentPlayer', JSON.stringify('CurrentPlayer'));
}

var handleSubmit = function (event) {
  event.preventDefault();
  console.log('submit button');
  var nameEl = event.target.playerName.value;
  console.log(nameEl);
  var newPlayer = createUser(nameEl);
  createDefaultLocalStorage();
  addCurrentPlayerToLocalStorage(newPlayer);
  window.location.replace('./html/GameBoard.html');
};

var submitEl = document.getElementById('userInfo');
submitEl.addEventListener('submit', handleSubmit);

