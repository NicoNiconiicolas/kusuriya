document.getElementsByTagName('body')[0].innerHTML +=""+
"<div id='top' onclick='goto(\"settings\")'><div id='settings' class='menu-el'>↩</div></div>"+
"<meta http-equiv='Cache-control' content='no-cache'>"+
"<audio id='correct' src='sfx/correct.mp3'></audio>"+
"<audio id='wrong' src='sfx/wrong.mp3'></audio>"+
"<audio id='click' src='sfx/click.mp3'></audio>"+
"<div id='progressBar'><div id='progress'></div></div>"+
"<center><label id='dd' for='file-input'><br><br><br><br>deposit your deck here<input type='file' id='file-input'></label></center>"+
"<div id='com'><div class='titleAndButton'><h1 id='comtitle'>Comments</h1><div class='closebutton' onclick='closecom()'>X</div></div><br><span id='compar'></span><br><br></div>"+
"<div id='memo'><div class='titleAndButton'><h1><span id='percRetained'>0</span>% Memorized</h1><div class='closebutton' onclick='closememo()'>X</div></div><br><span id='memocont'></span></div>"+
"<div id='cardId'>#<span id='cid'>1</span></div>"+
"<div id='qa-div'>"+
"<div id='question' onclick='altgame()'>question</div><hr>"+
"<div id='goodAnswer'></div>"+
"</div>"+
"<div id='answerbox'><input id='answer' autofocus></input></div>"+
"<br class='ansbox'><div class='ansbox' id='showans'>？？？</div>"+
"<br class='ansbox'><div id='answerbox2' onclick='jeu2()'>show answer</div>"+
"<br class='ansbu'><div class='ansbu' id='ansbu1' onclick='jeu2check(1)'>correct</div><div class='ansbu' id='ansbu2' onclick='jeu2check(2)'>wrong</div>"+
"<div id='combo'><span onclick='addmemo()' class='minmenu'>「add to memo」</span><span onclick='showmemo()' class='minmenu'>「show memo」</span><span class='minmenu' onclick='opencom()'>「comments」</span></div>";

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
   deck.src = "deck/"+$_GET("deck")+".js";
   if(getCookie('fulldeck') == 'true'){
      document.getElementById('progressBar').style.display = 'block';
    }
}else{
  document.getElementsByTagName('label')[0].style.display = 'block';
  document.getElementById('qa-div').style.display = 'none';
  document.getElementById('showans').style.display = 'none';
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

  if(e.key == 'F1'){
    e.preventDefault();
    addmemo();
    click.play();
    return
  }

  if(e.key == 'F2'){
    e.preventDefault();
    answer.blur();
    showmemo();
    return
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
    document.getElementById('qa-div').style.display = 'inline-block';
    if(getCookie('jeu') == "0"){
      document.getElementById('showans').style.display = 'inline-block';
    }
  }