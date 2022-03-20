document.getElementsByTagName('body')[0].innerHTML +=""+
"<div id='box2'>"+
"<h1>Gestion des decks</h1><br>"+
"<input id='deckLink' title='vous pouvez charger un deck extérieur à ce site via url' placeholder='"+getCookie('deck')+"'></input>"+
"　<button onclick='updateDeck()'>charger</button><br>"+
"<br><div class='okButton' title='Kotoba N5' onclick='updateJLPT(\"N5\")'>N5</div> <div class='okButton' title='Kotoba N4' onclick='updateJLPT(\"N4\")'>N4</div> <div class='okButton' title='Kotoba N3' onclick='updateJLPT(\"N3\")'>N3</div> <div class='okButton' title='Kotoba N2' onclick='updateJLPT(\"N2\")'>N2</div> <div class='okButton' title='Kotoba N1' onclick='updateJLPT(\"N1\")'>N1</div><br><br>"+
"<div class='okButton' onclick='updateJLPT(\"hiragana\")'>hiragana</div> <div class='okButton' onclick='updateJLPT(\"katakana\")'>katakana</div> <div class='okButton' title='hiragana + katakana' onclick='updateJLPT(\"kana\")'>kana</div>"+
"<br><br><div class='okButton' title='glisser-déposer un deck créé avec Cartory' onclick='goto(\"gather&dd=y\")'>glisser-déposer</div><br>"+
"<br><br><div class='okButton' title='convertir un deck au format Cartory/Cardogus' onclick='window.location=`convert.html`'>convetisseur</div>"+
"<br><br><div class='okButton' title='app pour création & gestion de decks' onclick='window.open(`cartory/index.html`,`_blank`)'>Cartory</div><br>"+
"<br><br><h1>Options</h1>"+
"<h3>Style de révision :</h3>"+
"<div id='kotoba' class='okButton' onclick='chooseGame(1)'>Kotoba</div> <div id='anki' class='okButton' onclick='chooseGame(2)'>Anki</div>"+
"<h3>Sélection des questions :</h3>"+
"<div id='fullrandom' class='okButton' onclick='updateFulldeck(1)'>Deck Entier Hasard</div> <div id='fullordered' class='okButton' onclick='updateFulldeck(2)'>Deck Entier Ordonné</div><br><br><div id='random' class='okButton' onclick='updateFulldeck(3)'>15 Aléatoires</div>"+
"<div id='startid'><br><br><h2>Carte de départ</h2><input id='inputid' placeholder='"+getCookie('startnum')+"' type='text'></input> <button onclick='choosestart()'>ok</button></div><br>"+
"<h3>Dictionnaire utilisé :</h3>"+
"<div id='dicojisho' class='okButton' onclick='setDico(\"jisho\")'>Jisho</div> <div id='dicochinese' class='okButton' onclick='setDico(\"writtenchinese\")'>Writtenchinese</div><br><br>"+
"</div>";

checkrandomnessmenu();
checkcolors();