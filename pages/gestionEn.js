document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='sfx' src='sfx/kaching.mp3'></audio>"+
"<div id='box'>"+
"<h1>Gestion</h1>"+
"<h3>Bank account : <span id='balance'></span> $</h3>"+
"<h3>Total bills : <span id='toPay'></span> $</h3>"+
"<p>deadline for payment : saturday 23:59</p>"+
"<h3 id='status'>Status : </h3><span id='paid'></span>"+
"<div class='okButton' id='payer' onclick='pay()'>pay</div>"+
"<h2>Custom deck's Url :</h2>"+
"<input id='deckLink' placeholder='"+getCookie('deck')+"'></input>"+
"<br><br><div class='okButton' onclick='updateDeck()'>load</div><br>"+
"<br><div class='okButton' onclick='updateJLPT(\"N5\")'>N5</div> <div class='okButton' onclick='updateJLPT(\"N4\")'>N4</div> <div class='okButton' onclick='updateJLPT(\"N3\")'>N3</div> <div class='okButton' onclick='updateJLPT(\"N2\")'>N2</div> <div class='okButton' onclick='updateJLPT(\"N1\")'>N1</div>"+
"<br><br><div class='okButton' onclick='window.open(\"convert.html\")'>Deck converter</div>"+
"</div>";

showLoan();