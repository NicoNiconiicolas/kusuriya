document.getElementsByTagName('body')[0].innerHTML +=""+
"<div id='box2'>"+
"<h1>Decks management</h1><br>"+
"<input id='deckLink' title='you can load a deck from outside this website via url' placeholder='"+getCookie('deck')+"'></input>"+
"　<div class='okButton' onclick='updateDeck()'>load</div><br>"+
"<br><div class='okButton' title='Kotoba N5' onclick='updateJLPT(\"N5\")'>N5</div> <div class='okButton' title='Kotoba N4' onclick='updateJLPT(\"N4\")'>N4</div> <div class='okButton' title='Kotoba N3' onclick='updateJLPT(\"N3\")'>N3</div> <div class='okButton' title='Kotoba N2' onclick='updateJLPT(\"N2\")'>N2</div> <div class='okButton' title='Kotoba N1' onclick='updateJLPT(\"N1\")'>N1</div><br><br>"+
"<div class='okButton' onclick='updateJLPT(\"hiragana\")'>hiragana</div> <div class='okButton' onclick='updateJLPT(\"katakana\")'>katakana</div> <div class='okButton' title='hiragana + katakana' onclick='updateJLPT(\"kana\")'>kana</div>"+
"<br><br><div class='okButton' title='drag and drop your deck made with Cartory' onclick='goto(\"gather&dd=y\")'>drag&drop</div><br>"+
"<br><br><div class='okButton' title='convert a deck on Cartory/Cardogus format' onclick='window.location=`convert.html`'>convert</div>"+
"<br><br><div class='okButton' title='deck creation & management app' onclick='window.open(`cartory/index.html`,`_blank`)'>Cartory</div><br>"+
"<br><br><h1>Options</h1>"+
"<h3>Revision style :</h3>"+
"<div id='kotoba' class='okButton' onclick='chooseGame(1)'>Kotoba</div> <div id='anki' class='okButton' onclick='chooseGame(2)'>Anki</div>"+
"<h3>Questions selection :</h3>"+
"<div id='fullrandom' class='okButton' onclick='updateFulldeck(1)'>Full Deck Random</div> <div class='okButton' id='fullordered' onclick='updateFulldeck(2)'>Full Deck Ordered</div><br><br><div id='random' class='okButton' onclick='updateFulldeck(3)'>15 Random</div>"+
"<div id='startid'><br><br><h2>Starting card</h2><input id='inputid' placeholder='"+getCookie('startnum')+"' type='text'></input> <button onclick='choosestart()'>ok</button></div><br>"+
"<h3>Used dictionnary :</h3>"+
"<div id='dicojisho' class='okButton' onclick='setDico(\"jisho\")'>Jisho</div> <div id='dicochinese' class='okButton' onclick='setDico(\"writtenchinese\")'>Writtenchinese</div><br><br>"+
"</div>";

checkrandomnessmenu();
checkcolors();