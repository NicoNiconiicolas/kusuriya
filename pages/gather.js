document.getElementsByTagName('body')[0].innerHTML +=""+
"<meta http-equiv='Cache-control' content='no-cache'>"+
"<audio id='correct' src='sfx/correct.mp3'></audio>"+
"<audio id='wrong' src='sfx/wrong.mp3'></audio>"+
"<div id='progressBar'><div id='progress'></div></div>"+
"<center><label id='dd' for='file-input'><br><br><br><br>déposez votre deck ici<input type='file' id='file-input'></label></center>"+
"<div id='com'><h1 id='comtitle'>コメント</h1><button onclick='closecom()'>X</button><br><span id='compar'></span><br><br></div>"+
"<div id='memo'><h1>メモ</h1><button onclick='closememo()'>X</button><br><br><br><span id='memocont'></span></div>"+
"<div id='cardId'>#<span id='cid'>1</span></div>"+
"<div id='question'>n/a</div>"+
"<div id='answerbox'><input id='answer' autofocus></input></div>"+
"<br class='ansbu'><div class='ansbu' id='ansbu1' onclick='jeu2check(1)'>correct</div><div class='ansbu' id='ansbu2' onclick='jeu2check(2)'>incorrect</div>"+
"<div id='goodAnswer'>n/a</div>"+
"<div id='combo'><span onclick='addmemo()' class='minmenu'>「ajouter au memo」</span><span onclick='showmemo()' class='minmenu'>「voir memo」</span><span class='minmenu' onclick='opencom()'>「commentaires」</span></div>";
document.getElementById('answerbox').style.display = 'block';
document.getElementById('goodAnswer').style.display = 'inline-block';
var totalseen = 0;
var totalcorrect = 0;
var final = [];
var quest = [];
var questions = [];
var ans = [];
var answers = [];
var comment = [];
var recomment = [];
setTimeout(function(){document.getElementById('file-input').addEventListener('change', readSingleFile, false)}, 100);

document.getElementsByTagName('label')[0].style.display = 'block';
let nQuestion = 0;
let lastQ = "";
let lastA = "";
let lastC = "";
let lastA2 = "";
let lastQ2 = "";
let lastC2 = "";
let wrongA = [];
let wrongQ = [];
let wrongC = [];
let wasWrong = false;
let memo = [];
var progression = 0;

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter"){
  	checkAnswer();
  	document.getElementById('answer').value = "";
  }
});

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
     return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    eval(contents);
  };
  reader.readAsText(file);
  null;
  document.getElementsByTagName('label')[0].style.display = 'none';
  document.getElementById('progressBar').style.display = 'block';
}