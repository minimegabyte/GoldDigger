'use strict';

var scoreList = document.getElementById('hightScore');
var arrayOfTop5 = JSON.parse(localStorage.getItem('Top5'));

for(var i = 0; i < arrayOfTop5.length; i++){
  var listEl = document.createElement('li');
  listEl.textContent = arrayOfTop5[i].name + ' : ' + arrayOfTop5[i].score;
  scoreList.appendChild(listEl);
}
