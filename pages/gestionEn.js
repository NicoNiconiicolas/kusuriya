document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='sfx' src='sfx/kaching.mp3'></audio>"+
"<div id='box2'>"+
"<h1>Orders of the day</h1>"+
"<div id='catalog'>"+
"<div class='bar'><span id='name1'>ingredient</span><br><hr>payment : <span id='mon1'>0</span> §<br>quantity : x<span id='value1'>0</span><br><br><img id='img1' src='img/ingredients/bagberry.png' width='50px'><br><br><button id='b1' onclick='endCommand(1)'>complete</button><br><br></div>"+
"<div class='bar'><span id='name2'>ingredient</span><br><hr>payment : <span id='mon2'>0</span> §<br>quantity : x<span id='value2'>0</span><br><br><img id='img2' src='img/ingredients/bagberry.png' width='50px'><br><br><button id='b2' onclick='endCommand(2)'>complete</button><br><br></div>"+
"<div class='bar'><span id='name3'>ingredient</span><br><hr>payment : <span id='mon3'>0</span> §<br>quantity : x<span id='value3'>0</span><br><br><img id='img3' src='img/ingredients/bagberry.png' width='50px'><br><br><button id='b3' onclick='endCommand(3)'>complete</button><br><br></div>"+
"</div>"+
"<h1>Week <span id='week'>"+getCookie('week')+"</span></h1>"+
"<h3>Bank account : <span id='balance'></span> §</h3>"+
"<h3>Total bills : <span id='toPay'></span> §</h3>"+
"<p>deadline for payment : sunday 23:59</p>"+
"<h3 id='status'>Status : </h3><span id='paid'></span>"+
"<div class='okButton' id='payer' onclick='pay()'>pay</div>"+
"<h1>Decks management</h1><br>"+
"<input id='deckLink' placeholder='"+getCookie('deck')+"'></input>"+
"　<div class='okButton' onclick='updateDeck()'>load</div><br>"+
"<br><div class='okButton' onclick='updateJLPT(\"N5\")'>N5</div> <div class='okButton' onclick='updateJLPT(\"N4\")'>N4</div> <div class='okButton' onclick='updateJLPT(\"N3\")'>N3</div> <div class='okButton' onclick='updateJLPT(\"N2\")'>N2</div> <div class='okButton' onclick='updateJLPT(\"N1\")'>N1</div><br><br>"+
"<div class='okButton' onclick='updateJLPT(\"hiragana\")'>hiragana</div> <div class='okButton' onclick='updateJLPT(\"katakana\")'>katakana</div> <div class='okButton' onclick='updateJLPT(\"kana\")'>kana</div>"+
"<br><br><div class='okButton' id='deck1' onclick='chooseCookieDeck(1)'>deck 1</div> <div class='okButton' id='deck2' onclick='chooseCookieDeck(2)'>deck 2</div> <div class='okButton' id='deck3' onclick='chooseCookieDeck(3)'>deck 3</div>"+
"<br><br><div class='okButton' onclick='window.location=\"convert.html\"'>New Deck</div>"+
"<br><br><h1>Options</h1>"+
"<h3>Revision style :</h3>"+
"<div class='okButton' onclick='chooseGame(1)'>Kotoba</div> <div class='okButton' onclick='chooseGame(2)'>Anki</div>"+
"<h3>Game difficulty :</h3>"+
"<div class='okButton' onclick='setDifficulty(0)'>Easy</div> <div class='okButton' onclick='setDifficulty(1)'>Challenge</div><br><br>"+
"</div>";

showLoan();
showCommand();