<<<<<<< HEAD
'use strict';

function User (name){
  this.name = name;
  this.score = 0;
}
function createUser(name){
  new User(name);
}

function checkLocalStorage(){
 if(localStorage.player) {
   var playerScore = localStorage.getItem('player');
   var score = JSON.parse(playerScore);

 }
}


function createLocalStorage(name, score){
  localStorage.setItem('player', JSON.stringify(score));

}

var handleSubmit = function(event){
  event.preventDefault();
  // console.log('submit button');
  var nameEl = event.target.playerName.value;
  // console.log(nameEl);
  var

}

var submitEl = document.getElementById('userInfo');
submitEl.addEventListener('submit',handleSubmit );


=======
// 'use strict';

// Display top5 here...
>>>>>>> 30452995f2e850e15520f827928a7bd08396811d
