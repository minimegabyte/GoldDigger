'use strict';

Player.allPlayers = [];

function Player(name) {
  this.name = name;
  this.score = 0;
  Player.allPlayers.push(this);
}

function createUser(name) {
  return new Player(name);
}

function createLocalStorage() {
  localStorage.setItem('players', JSON.stringify(Player.allPlayers));
}

var handleSubmit = function (event) {
  event.preventDefault();
  console.log('submit button');
  var nameEl = event.target.playerName.value;
  console.log(nameEl);
  var newPlayer = createUser(nameEl);
  createLocalStorage();
  location.replace('../html/GameBoard.html');
};

var submitEl = document.getElementById('userInfo');
submitEl.addEventListener('submit', handleSubmit);
