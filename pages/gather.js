document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='correct' src='sfx/correct.mp3'></audio>"+
"<audio id='wrong' src='sfx/wrong.mp3'></audio>"+
"<audio id='prize' src='sfx/prize.mp3'></audio>"+
"<div id='progressBar'><div id='progress'></div></div>"+
"<div id='hoho'><span id='wonText'>Sac de Baies</span><div id='won'></div></div>"+
"<div id='question'>n/a</div>"+
"<div id='answerbox'><input id='answer' autofocus></input></div>"+
"<div id='goodAnswer'>n/a</div>"+
"<div id='combo'>carte(s) vue(s) : <span id='cards'>"+getCookie('cardsToday')+"</span><br>combo(s) : <span id='ncombo'>0</span><br>multiplicateur : x<span id='multiple'>1</span></div>";

let final = [];
let quest = [];
let questions = [];
let ans = [];
let answers = [];
if(getCookie('cookieDeck') == "false"){
  var deck = document.createElement('script');
  deck.src = getCookie('deck');
}else{
  loadDeck(parseInt(getCookie('deck')));
}
var bgn = Math.floor(Math.random()*5+1);
document.getElementById('bg').style.backgroundImage = 'url("img/bg'+bgn+'.png")';
let combo = 0;
let multiplicateur = 1;
let progression = 0;
let nQuestion = 0;
let lastQ = "";
let lastA = "";
let lastA2 = "";
let lastQ2 = "";
let wrongA = [];
let wrongQ = [];
let wasWrong = false;
checkCards();

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
  	checkAnswer();
  	document.getElementById('answer').value = "";
  }
});
if(getCookie('cookieDeck') == "false"){
  document.getElementsByTagName('body')[0].appendChild(deck);
}