document.getElementsByTagName('body')[0].innerHTML +=""+
"<meta http-equiv='Cache-control' content='no-cache'>"+
"<audio id='correct' src='sfx/correct.mp3'></audio>"+
"<audio id='wrong' src='sfx/wrong.mp3'></audio>"+
"<center><label id='dd' for='file-input'>drag your file here...<input type='file' id='file-input'></label></center>"+
"<textarea id='text' placeholder='export your deck in plain text from Anki(PC) or KotobaWeb then select/drag that file'></textarea>"+
"<div id='cardId'>#<span id='cid'>1</span></div>"+
"<div id='question'>n/a</div>"+
"<div id='answerbox'><input id='answer' autofocus></input></div>"+
"<br class='ansbox'><div class='ansbox' id='showans'>? ? ?</div>"+
"<br class='ansbox'><div id='answerbox2' onclick='jeu2()'>voir la réponse</div>"+
"<br class='ansbu'><div class='ansbu' id='ansbu1' onclick='jeu2check(1)'>correcte</div><div class='ansbu' id='ansbu2' onclick='jeu2check(2)'>incorrecte</div>"+
"<div id='goodAnswer'>n/a</div>"+
"<div id='combo'>correct answer(s) : <span id='cards'>"+getCookie('cardsToday')+"</span><br>correct ratio : <span id='perc'>100%</span><br>multiplier : x<span id='multiple'>1</span></div>";
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

if($_GET('dd') != 'y'){
  var deck = document.createElement('script');
  deck.src = getCookie('deck');
}else{
  var space = 1;
  var title = "";
  var final = [];
  var mode = 0;
  var type = "";
  var str = [];
  var group = 0;
  var string = "";
  var part = [];
  var part1 = '';
  var part2 = '';
  var i = 0;
  var array = [];
  var question = [];
  var answer = [];
  var product = "";
  document.getElementsByTagName('label')[0].style.display = 'block';
  document.getElementById('file-input').addEventListener('change', readSingleFile, false);
}
document.getElementById('bg').style.backgroundImage = 'url("img/bg1.jpg")';
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

//converter functions
function go(text){
    array = text.split('\n');
    for(i=0;i<array.length-1;i++){
      var index = array[i].indexOf(',');
      question.push("\""+array[i].slice(0, index)+"\"");
      var str = array[i].slice(index+1);
      answer.push(str.replace(/%/g, ','));
    }
    if(question[0] == "\"Question\""){
      answer.shift();
      question.shift();
    }
    product = "ans=["+answer+"];\n"+"quest=["+question+"];\ninitQuestion();";
    eval(product);
    document.getElementsByTagName('label')[0].style.display = 'none';
  }

  function convert(){
    mode = 0
    var text = document.getElementById('text');
      var source = text.value.search('Type the reading of the below word in Hiragana');
      if(source  == -1){
      source = text.value.search(",,Type the reading!,Image");
      }
    str = text.value.replace(/,Type the reading of the below word in Hiragana!/g , '');
    str = str.replace(/,,Type the reading!,Image/g , '');
    str = str.replace(/Question,Answers,Comment,Instructions,Render as\n/ , '');
    str = str.replace(/Question,Answers,Comment,Instructions\n/ , '');
      str = str.replace(/, /g, '/');
      str = str.replace(/,/g, '%');
      var send = "";
      if(text.value != ""){
      str = str.split('\n');
      if(str[str.length-1] == ""){
          var longueur = str.length-1;
        }else{
          var longueur = str.length;
        }
      for(let a = 0; a < longueur; a++ ){
        if(source !=-1){
          part[0] = str[a].split(/,(.+)/)[0];
            part[0] = str[a].split(/%(.+)/)[0];
            part[1] = str[a].split(/%(.+)/)[1];
            part[1] = part[1].split(/%(.+)/)[0];
            str[a] = part[0]+" "+part[1];
        }
          part[0] = str[a].split(/\s(.+)/)[0];  //everything before the first space
          part[1] = str[a].split(/\s(.+)/)[1];  //everything after the first space
            if(part[0] && part[1] !=''){
          part[0] = part[0].replace(/,/ , ' ');
          part[1] = part[1].replace(/"/g, '');
            part[0] = part[0].replace(/"/g , "\'");
            send += part[0]+',"';
            part[1] = part[1].replace(/"/g , "\'");
            part[1] = part[1].replace(/・/g , ",");
            part[1] = part[1].replace(/, /g , ",");
            part[1] = part[1].replace(/\//g, ',');
            part[1] = part[1].replace(/、/g, ',');
            part[1] = part[1].replace(/;/g, ',');
            part[1] = part[1].replace(/\|/g, ',');
            part[1] = part[1].replace(/\\/g, ',');
            if(space == 1){
        part[1] = part[1].replace(/\s/g, ' ');
            }else{
        part[1] = part[1].replace(/\s/g, ',');
            }
            send += part[1]+'"\n';
            }
        };
          text.value = "";
          go(send, mode);
      }else{
        alert("Empty field !");
      }
  }

function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      document.getElementById('text').value = "";
      document.getElementById('text').value = contents;
    };
    reader.readAsText(file);
    null;
    setTimeout(convert, 100);
  }