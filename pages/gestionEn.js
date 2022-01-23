document.getElementsByTagName('body')[0].innerHTML +=""+
"<div id='box2'>"+
"<h1>Decks management</h1><br>"+
"<input id='deckLink' placeholder='"+getCookie('deck')+"'></input>"+
"　<div class='okButton' onclick='updateDeck()'>load</div><br>"+
"<br><div class='okButton' onclick='updateJLPT(\"N5\")'>N5</div> <div class='okButton' onclick='updateJLPT(\"N4\")'>N4</div> <div class='okButton' onclick='updateJLPT(\"N3\")'>N3</div> <div class='okButton' onclick='updateJLPT(\"N2\")'>N2</div> <div class='okButton' onclick='updateJLPT(\"N1\")'>N1</div><br><br>"+
"<div class='okButton' onclick='updateJLPT(\"hiragana\")'>hiragana</div> <div class='okButton' onclick='updateJLPT(\"katakana\")'>katakana</div> <div class='okButton' onclick='updateJLPT(\"kana\")'>kana</div>"+
"<br><br><br><div class='okButton' id='deck1' onclick='chooseCookieDeck(1)'>deck 1</div> <div class='okButton' id='deck2' onclick='chooseCookieDeck(2)'>deck 2</div> <div class='okButton' id='deck3' onclick='chooseCookieDeck(3)'>deck 3</div>"+
"<br><br><div class='okButton' onclick='window.location=\"convert.html\"'>New Deck</div>"+
"<br><br><h1>Options</h1>"+
"<h3>Revision style :</h3>"+
"<div class='okButton' onclick='chooseGame(1)'>Kotoba</div> <div class='okButton' onclick='chooseGame(2)'>Anki</div>"+
"<h3>Questions selection :</h3>"+
"<div class='okButton' onclick='updateFulldeck(true)'>Whole Deck</div> <div class='okButton' onclick='updateFulldeck(false)'>15 Random</div><br><br>"+
"</div>";
"<h3>Used dictionnary :</h3>"+
"<div class='okButton' onclick='setDico(\"jisho\")'>Jisho</div> <div class='okButton' onclick='setDico(\"writtenchinese\")'>Writtenchinese</div><br><br>"+
"</div>";

showLoan();
showCommand();