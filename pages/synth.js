document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='prize' src='sfx/prize.mp3'></audio>"+
"<audio id='sfx' src='sfx/bip.mp3'></audio>"+
"<audio id='kaching' src='sfx/kaching.mp3'></audio>"+
"<div id='super'><span id='potionName'>Nom de potion</span><div id='youMade'></div><br><p id='price'><span id='nprice'>0</span> §</p></div>"+
"<div id='box2'>"+
"<h1>Catalogue</h1>"+
"<div id='catalog'>"+
	"<div class='bar'><p>Sac de<br>baies</p><p><em>requis:</em> <br>exploration<br><br></p><p>possédé: <span id='baie1'></span></p><img src='img/ingredients/bagberry.png' width='50px'><br><br><button onclick='goto(\"gather\")'>récolter</button><br><br><button onclick='sellStock(\"baie1\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Baies<br>délicieuses</p><p><em>requis:</em> <br>2x sac<br>de baies</p><p>possédé: <span id='baie2'></span></p><img src='img/ingredients/bagberry2.png' width='50px'><br><br><button onclick='synth(\"baie2\")'>synthétiser</button><br><br><button onclick='sellStock(\"baie2\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Baies<br>parfaites</p><p><em>requis:</em> <br>2x baies<br>délicieuses</p><p>possédé: <span id='baie3'></span></p><img src='img/ingredients/berry.png' width='50px'><br><br><button onclick='synth(\"baie3\")'>synthétiser</button><br><br><button onclick='sellStock(\"baie3\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Limonade<br>fruitée</p><p><em>requis:</em> <br>2x sac<br>de baies</p><p><em>valeur:</em><br>25 § ~ 50 §</p><p>cote: <span id='t13'>0%</span></p><img src='img/goods/red3.png' width='50px'><br><br><button onclick='synth(\"red3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Sirop pour<br>la toux</p><p><em>requis:</em> <br>2x baies<br>délicieuses</p><p><em>valeur:</em><br>100 § ~ 150 §</p><p>cote: <span id='t12'>0%</span></p><img src='img/goods/red2.png' width='50px'><br><br><button onclick='synth(\"red2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Mayonnaise<br><br></p><p><em>requis:</em> <br>2x baies<br>parfaites</p><p><em>valeur:</em><br>150 § ~ 225 §</p><p>cote: <span id='t11'>0%</span></p><img src='img/goods/red1.png' width='50px'><br><br><button onclick='synth(\"red1\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Sac de<br>myrtilles</p><p><em>requis:</em> <br><br>exploration</p><p>possédé: <span id='blueberry1'></span></p><img src='img/ingredients/bagblueberry.png' width='50px'><br><br><button onclick='goto(\"gather\")'>récolter</button><br><br><button onclick='sellStock(\"blueberry1\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Myrtilles<br>envoûtantes</p><p><em>requis:</em> <br>2x sac de<br>myrtilles</p><p>possédé: <span id='blueberry2'></span></p><img src='img/ingredients/bagblueberry2.png' width='50px'><br><br><button onclick='synth(\"blueberry2\")'>synthétiser</button><br><br><button onclick='sellStock(\"blueberry2\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Myrtilles<br>parfaites</p><p><em>requis:</em> <br>2x myrtilles<br>envoûtantes</p><p>possédé: <span id='blueberry3'></span></p><img src='img/ingredients/blueberry.png' width='50px'><br><br><button onclick='synth(\"blueberry3\")'>synthétiser</button><br><br><button onclick='sellStock(\"blueberry3\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Lessive<br>liquide</p><p><em>requis:</em> <br>2x sac de<br>myrtilles</p><p><em>valeur:</em><br>100 § ~ 150 §</p><p>cote: <span id='t23'>0%</span></p><img src='img/goods/blue3.png' width='50px'><br><br><button onclick='synth(\"blue3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Liquide de<br>refroidissement</p><p><em>requis:</em> <br>2x myrtilles<br>envoûtantes</p><p><em>valeur:</em><br>225 § ~ 325 §</p><p>cote: <span id='t22'>0%</span></p><img src='img/goods/blue2.png' width='50px'><br><br><button onclick='synth(\"blue2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Eau<br>bénite</p><p><em>requis:</em> <br>2x myrtilles<br>parfaites</p><p><em>valeur:</em><br>325 § ~ 525 §</p><p>cote: <span id='t21'>0%</span></p><img src='img/goods/blue1.png' width='50px'><br><br><button onclick='synth(\"blue1\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Sac de<br>raisins</p><p><em>requis:</em> <br>exploration<br><br></p><p>possédé: <span id='raisin1'></span></p><img src='img/ingredients/bagraisin.png' width='50px'><br><br><button onclick='goto(\"gather\")'>récolter</button><br><br><button onclick='sellStock(\"raisin1\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Raisins<br>savoureux</p><p><em>requis:</em> <br>2x sac<br>de raisins</p><p>possédé: <span id='raisin2'></span></p><img src='img/ingredients/bagraisin2.png' width='50px'><br><br><button onclick='synth(\"raisin2\")'>synthétiser</button><br><br><button onclick='sellStock(\"raisin2\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Raisins<br>parfaits</p><p><em>requis:</em> <br>2x raisins<br>savoureux</p><p>possédé: <span id='raisin3'></span></p><img src='img/ingredients/raisin.png' width='50px'><br><br><button onclick='synth(\"raisin3\")'>synthétiser</button><br><br><button onclick='sellStock(\"raisin3\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Anti-poison<br><br></p><p><em>requis:</em> <br>2x <br>de raisins</p><p><em>valeur:</em><br>400 § ~ 800 §</p><p>cote: <span id='t33'>0%</span></p><img src='img/goods/purple3.png' width='50px'><br><br><button onclick='synth(\"purple3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Parfum<br>lavande</p><p><em>requis:</em> <br>2x raisins<br>savoureux</p><p><em>valeur:</em><br>800 § ~ 1 600 §</p><p>cote: <span id='t32'>0%</span></p><img src='img/goods/purple2.png' width='50px'><br><br><button onclick='synth(\"purple2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Liqueur<br>bonbon</p><p><em>requis:</em> <br>2x raisins<br>parfaits</p><p><em>valeur:</em><br>1 600 § ~ 3 500 §</p><p>cote: <span id='t31'>0%</span></p><img src='img/goods/purple1.png' width='50px'><br><br><button onclick='synth(\"purple1\")'>synthétiser</button></div>"+
"</div>"+
	"<h1>Objets spéciaux</h1>"+
	"<div id='catalog'>"+
		"<div class='bar'><p>Oeuf<br>loterie</p><p><em>coût:</em> <br>3500 §<br></p><p><em>effet:</em><br>tenter sa chance<br>à la loterie</p><p>gains jusqu'à<br>7 777 §</p><img src='img/ingredients/oeuf.png' width='50px'><br><br><button onclick='oeuf()'>acheter</button></div>"+
		"<div class='bar'><p>Pot-de-vin<br><br></p><p><em>coût:</em> <br>500 §</p><p><em>effet:</em><br>Prix du marché<br>sont à nouveau<br>jetés au sort</p><br><img src='img/ingredients/potdevin.png' width='50px'><br><br><button onclick='reTax()'>soudoyer</button></div>"+
		"<div class='bar'><p>Secrets de<br>marchands</p><p><em>coût:</em> <br>500 §</p><p><em>effet:</em><br>Commandes du jour<br>sont renouvelées</p><br><br><img src='img/ingredients/book.png' width='50px'><br><br><button onclick='reCommand()'>acheter</button></div>"+
	"</div>"+
"</div>";
showPossess();
showTax();