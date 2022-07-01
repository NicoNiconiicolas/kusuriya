document.getElementsByTagName('body')[0].innerHTML +=""+
"<meta http-equiv='Cache-control' content='no-cache'>"+
"<audio id='correct' src='sfx/correct.mp3'></audio>"+
"<audio id='wrong' src='sfx/wrong.mp3'></audio>"+
"<div id='progressBar'><div id='progress'></div></div>"+
"<center><label id='dd' for='file-input'><br><br><br><br>déposez votre deck ici<input type='file' id='file-input'></label></center>"+
"<div id='com'><h1 id='comtitle'>コメント</h1><button onclick='closecom()'>X</button><br><span id='compar'></span><br><br></div>"+
"<div id='memo'><h1>メモ</h1><button onclick='closememo()'>X</button><br><br><br><span id='memocont'></span></div>"+
"<div id='cardId'>#<span id='cid'>1</span></div>"+
"<div id='question' onclick='altgame()'>n/a</div>"+
"<div id='answerbox'><input id='answer' autofocus></input></div>"+
"<br class='ansbox'><div class='ansbox' id='showans'>? ? ?</div>"+
"<br class='ansbox'><div id='answerbox2' onclick='jeu2()'>show answer</div>"+
"<br class='ansbu'><div class='ansbu' id='ansbu1' onclick='jeu2check(1)'>correct</div><div class='ansbu' id='ansbu2' onclick='jeu2check(2)'>incorrect</div>"+
"<div id='goodAnswer'>n/a</div>"+
"<div id='combo'><span onclick='addmemo()' class='minmenu'>「ajouter au memo」</span><span onclick='showmemo()' class='minmenu'>「voir memo」</span><span class='minmenu' onclick='opencom()'>「commentaires」</span></div>";
if(getCookie('jeu') == '1'){
  document.getElementById('answerbox').style.display = 'block';
  document.getElementById('goodAnswer').style.display = 'inline-block';
}else{
  document.getElementsByClassName('ansbox')[0].style.display = 'block';
  document.getElementsByClassName('ansbox')[1].style.display = 'inline-block';
  document.getElementsByClassName('ansbox')[2].style.display = 'block';
  document.getElementById('answerbox2').style.display = 'inline-block';
}

var totalseen = 0;
var totalcorrect = 0;
var final = [];
var quest = [];
var questions = [];
var ans = [];
var answers = [];
var comment = [];
var recomment = [];
var progression = 0;

if($_GET('dd') != 'y'){
   var deck = document.createElement('script');
   deck.src = getCookie('deck');
   if(getCookie('fulldeck') == 'true'){
      document.getElementById('progressBar').style.display = 'block';
    }
}else{
  document.getElementsByTagName('label')[0].style.display = 'block';
  setTimeout(function(){document.getElementById('file-input').addEventListener('change', readSingleFile, false)}, 100);
}
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
checkrandomness();

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter"){
  	checkAnswer();
  	document.getElementById('answer').value = "";
  }
});
if($_GET('dd') != 'y'){
  document.getElementsByTagName('body')[0].appendChild(deck);
}

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
    if(getCookie('fulldeck') == 'true'){
      document.getElementById('progressBar').style.display = 'block';
    }
  }