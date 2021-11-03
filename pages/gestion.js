document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='sfx' src='sfx/kaching.mp3'></audio>"+
"<div id='box2'>"+
"<h1>Gestion</h1>"+
"<h3>Compte en banque : <span id='balance'></span> $</h3>"+
"<h3>Total factures : <span id='toPay'></span> $</h3>"+
"<p>date limite de paiement : samedi 23:59</p>"+
"<h3 id='status'>Status : </h3><span id='paid'></span>"+
"<div class='okButton' id='payer' onclick='pay()'>payer</div>"+
"<h2>Importer deck converti via url :</h2>"+
"<input id='deckLink' placeholder='"+getCookie('deck')+"'></input>"+
"　<div class='okButton' onclick='updateDeck()'>charger</div><br>"+
"<br><div class='okButton' onclick='updateJLPT(\"N5\")'>N5</div> <div class='okButton' onclick='updateJLPT(\"N4\")'>N4</div> <div class='okButton' onclick='updateJLPT(\"N3\")'>N3</div> <div class='okButton' onclick='updateJLPT(\"N2\")'>N2</div> <div class='okButton' onclick='updateJLPT(\"N1\")'>N1</div>"+
"<br><br><div class='okButton' id='deck1' onclick='chooseCookieDeck(1)'>"+getCookie('deck1_name')+"</div> <div class='okButton' id='deck2' onclick='chooseCookieDeck(2)'>"+getCookie('deck2_name')+"</div> <div class='okButton' id='deck3' onclick='chooseCookieDeck(3)'>"+getCookie('deck3_name')+"</div>"+
"<br><br><div class='okButton' onclick='window.location=\"convert.html\"'>Nouveau Deck</div>"+
"</div>";

showLoan();