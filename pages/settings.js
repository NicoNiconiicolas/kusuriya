document.getElementsByTagName('body')[0].innerHTML +=""+
"<div id='box2'>"+
"<h1>Decks</h1>"+
"<div id='bigrid'><div class='okButton jlptbt' title='Kotoba N5' onclick='updateJLPT(\"N5\")'>N5</div><div class='okButton allkana' onclick='updateJLPT(\"hiragana\")'>hiragana</div><div class='okButton jlptbt' title='Kotoba N4' onclick='updateJLPT(\"N4\")'>N4</div><div class='okButton allkana' onclick='updateJLPT(\"katakana\")'>katakana</div><div class='okButton jlptbt' title='Kotoba N3' onclick='updateJLPT(\"N3\")'>N3</div><div class='okButton allkana' id='kana' title='hiragana + katakana' onclick='updateJLPT(\"kana\")'>kana</div><div class='okButton jlptbt' title='Kotoba N2' onclick='updateJLPT(\"N2\")'>N2</div> <div class='okButton jlptbt' id='N1' title='Kotoba N1' onclick='updateJLPT(\"N1\")'>N1</div>"+
"<div class='okButton' id='custom' title='glisser-déposer un deck créé avec Cardogus' onclick='goto(\"quizz&dd=y\")'>personnal deck</div></div>"+
"</div><div id='box2'>"+
"<h1>Options</h1>"+
"<br><br><div class='okButton okButton2' title='convert an anki deck to Cardogus format' onclick='window.location=`convert.html`'>Convert</div>　"+
"<div class='okButton okButton2' title='app pour création & gestion de decks' onclick='window.open(`cartory/index.html`,`_blank`)'>Manage decks</div><br>"+
"<h3>Revision style :</h3>"+
"<div id='kotoba' class='okButton okButton2' onclick='chooseGame(1)'>Kotoba</div> <div id='anki' class='okButton okButton2' onclick='chooseGame(2)'>Anki</div>"+
"<h3>Questions selection :</h3>"+
"<div id='fullrandom' class='okButton okButton2' onclick='updateFulldeck(1)'>Full Deck + Random</div> <div id='fullordered' class='okButton okButton2' onclick='updateFulldeck(2)'>Full Deck Ordered</div><br><br><div id='random' class='okButton okButton2' onclick='updateFulldeck(3)'>Cycle of 15 Random Cards</div>"+
"<div id='startid'><br><br><h2>Card to start from</h2><input id='inputid' placeholder='"+getCookie('startnum')+"' type='text'></input> <button onclick='choosestart()'>ok</button></div><br>"+
"<h3>Used dictionary :</h3>"+
"<div id='dicojisho' class='okButton okButton2' onclick='setDico(\"jisho\")'>Jisho</div> <div id='dicojpdb' class='okButton okButton2' onclick='setDico(\"jpdb\")'>Jpdb</div> <div id='dicochinese' class='okButton okButton2' onclick='setDico(\"writtenchinese\")'>Writtenchinese</div><br><br>"+
"</div></div>";
checkrandomnessmenu();
checkcolors();