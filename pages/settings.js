document.getElementsByTagName('body')[0].innerHTML +=""+
"<div id='box2'>"+
"<h1>Decks</h1>"+
"<div id='bigrid'><div class='okButton jlptbt' title='Kotoba N5' onclick='updateJLPT(\"N5\")'>N5</div><div class='okButton allkana' onclick='updateJLPT(\"hiragana\")'>hiragana</div><div class='okButton jlptbt' title='Kotoba N4' onclick='updateJLPT(\"N4\")'>N4</div><div class='okButton allkana' onclick='updateJLPT(\"katakana\")'>katakana</div><div class='okButton jlptbt' title='Kotoba N3' onclick='updateJLPT(\"N3\")'>N3</div><div class='okButton allkana' id='kana' title='hiragana + katakana' onclick='updateJLPT(\"kana\")'>kana</div><div class='okButton jlptbt' title='Kotoba N2' onclick='updateJLPT(\"N2\")'>N2</div> <div class='okButton jlptbt' id='N1' title='Kotoba N1' onclick='updateJLPT(\"N1\")'>N1</div>"+
"<div class='okButton' id='custom' title='glisser-déposer un deck créé avec Cardogus' onclick='goto(\"quizz&dd=y\")'>custom deck</div></div>"+
"</div><div id='box2'>"+
"<h1>Options</h1>"+
"<br><br>"+
"<div class='okButton okButton2' onclick='window.location = `pages/japanese.html`'>Handwriting</div> <div class='okButton okButton2' title='app pour création & gestion de decks' onclick='window.open(`cartory/index.html`,`_blank`)'>Manage decks</div><br>"+
"<h3>Questions selection :</h3>"+
"<div id='fullrandom' class='okButton okButton2' onclick='updateFulldeck(1)'>Full Deck Random</div> <div id='fullordered' class='okButton okButton2' onclick='updateFulldeck(2)'>Full Deck Ordered</div><br><br><div id='random' class='okButton okButton2' onclick='updateFulldeck(3)'>Cycle of Random Cards</div>"+
"<div id='totalcycle'><br><br><h2>Cards by cycle</h2><input id='inputidcycle' placeholder='"+getCookie('cyclelength')+"' type='text'></input> <button onclick='choosecycle()'>ok</button></div><br>"+
"<div id='startid'><br><h2>Starting card</h2><input id='inputid' placeholder='"+getCookie('startnum')+"' type='text'></input> <button onclick='choosestart()'>ok</button></div>"+
"<h3>Dictionary:</h3>"+
"<div id='dicojisho' class='okButton okButton2' onclick='setDico(\"jisho\")'>Jisho</div> <div id='dicojpdb' class='okButton okButton2' onclick='setDico(\"jpdb\")'>Jpdb</div> <div id='dicochinese' class='okButton okButton2' onclick='setDico(\"writtenchinese\")'>Writtenchinese</div><br><br>"+
"</div></div>"+
`<br><br><img onclick="location.href='https://discord.gg/xYTT3TQUvM'" id="discord" src="art/discord.png">`;
checkrandomnessmenu();
checkcolors();