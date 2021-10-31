document.getElementsByTagName('body')[0].innerHTML +=""+
"<div id='box'>"+
"<h1>Gestion</h1>"+
"<h2>Url du deck utilisé :</h2>"+
"<input id='deckLink' placeholder='"+getCookie('deck')+"'></input>"+
"<br><br><div id='okButton' onclick='updateDeck()'>charger</div>"+
"</div>";