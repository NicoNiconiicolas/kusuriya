document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='sfx' src='sfx/kaching.mp3'></audio>"+
"<div id='box'>"+
"<h1>Gestion</h1>"+
"<h3>Compte en banque : <span id='balance'></span> $</h3>"+
"<h3>Total factures : <span id='toPay'></span> $</h3>"+
"<p>à payer avant : dimanche 23:59</p>"+
"<h3 id='status'>Status : </h3><span id='paid'></span>"+
"<div class='okButton' id='payer' onclick='pay()'>payer</div>"+
"<h2>Url du deck utilisé :</h2>"+
"<input id='deckLink' placeholder='"+getCookie('deck')+"'></input>"+
"<br><br><div class='okButton' onclick='updateDeck()'>charger</div>"+
"<br><br><div class='okButton' onclick='window.open(\"convert.html\")'>Convertisseur de Deck</div>"+
"</div>";

showLoan();