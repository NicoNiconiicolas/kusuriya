document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='prize' src='sfx/prize.mp3'></audio>"+
"<audio id='sfx' src='sfx/bip.mp3'></audio>"+
"<audio id='kaching' src='sfx/kaching.mp3'></audio>"+
"<div id='super'><span id='potionName'>Nom de potion</span><div id='youMade'></div><br><p id='price'><span id='nprice'>0</span> $</p></div>"+
"<div id='box2'>"+
"<h1>Catalogue</h1>"+
"<div id='catalog'>"+
	"<div class='bar'><p>Sac de baies</p><p>requis : <br>exploration</p><p>possédé : <span id='baie1'></span></p><img src='img/ingredients/bagberry.png' width='50px'><br><br><button onclick='goto(\"gather\")'>récolter</button><br><br><button onclick='sellStock(\"baie1\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Baies délicieuses</p><p>requis : <br>2x sac de baies</p><p>possédé : <span id='baie2'></span></p><img src='img/ingredients/bagberry2.png' width='50px'><br><br><button onclick='synth(\"baie2\")'>synthétiser</button><br><br><button onclick='sellStock(\"baie2\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Baies parfaites</p><p>requis : <br>2x baie délicieuses</p><p>possédé : <span id='baie3'></span></p><img src='img/ingredients/berry.png' width='50px'><br><br><button onclick='synth(\"baie3\")'>synthétiser</button><br><br><button onclick='sellStock(\"baie3\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Limonade fruitée</p><p>requis : <br>2x sac de baies</p><p>valeur : 10$ ~ 25$</p><p>taxe: <span id='t13'>0</span> %</p><img src='img/goods/red3.png' width='50px'><br><br><button onclick='synth(\"red3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Sirop pour la toux</p><p>requis : <br>2x baies délicieuses</p><p>valeur : 50$ ~ 75$</p><p>taxe: <span id='t12'>0</span> %</p><img src='img/goods/red2.png' width='50px'><br><br><button onclick='synth(\"red2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Mayonnaise</p><p>requis : <br>2x baies parfaites</p><p>valeur : 115$ ~ 225$</p><p>taxe: <span id='t11'>0</span> %</p><img src='img/goods/red1.png' width='50px'><br><br><button onclick='synth(\"red1\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Sac de myrtilles</p><p>requis : <br>exploration</p><p>possédé : <span id='blueberry1'></span></p><img src='img/ingredients/bagblueberry.png' width='50px'><br><br><button onclick='goto(\"gather\")'>récolter</button><br><br><button onclick='sellStock(\"blueberry1\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Myrtilles envoûtantes</p><p>requis : <br>2x sac de myrtilles</p><p>possédé : <span id='blueberry2'></span></p><img src='img/ingredients/bagblueberry2.png' width='50px'><br><br><button onclick='synth(\"blueberry2\")'>synthétiser</button><br><br><button onclick='sellStock(\"blueberry2\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Myrtilles parfaites</p><p>requis : <br>2x myrtilles envoûtantes</p><p>possédé : <span id='blueberry3'></span></p><img src='img/ingredients/blueberry.png' width='50px'><br><br><button onclick='synth(\"blueberry3\")'>synthétiser</button><br><br><button onclick='sellStock(\"blueberry3\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Lessive liquide</p><p>requis : <br>2x sac de myrtilles</p><p>valeur : 33$ ~ 99$</p><p>taxe: <span id='t23'>0</span> %</p><img src='img/goods/blue3.png' width='50px'><br><br><button onclick='synth(\"blue3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Liquide de refroidissement</p><p>requis : <br>2x myrtilles envoûtantes</p><p>valeur : 150$ ~ 300$</p><p>taxe: <span id='t22'>0</span> %</p><img src='img/goods/blue2.png' width='50px'><br><br><button onclick='synth(\"blue2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Eau bénite</p><p>requis : <br>2x myrtilles parfaites</p><p>valeur : 500$ ~ 700$</p><p>taxe: <span id='t21'>0</span> %</p><img src='img/goods/blue1.png' width='50px'><br><br><button onclick='synth(\"blue1\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Sac de raisins</p><p>requis : <br>exploration</p><p>possédé : <span id='raisin1'></span></p><img src='img/ingredients/bagraisin.png' width='50px'><br><br><button onclick='goto(\"gather\")'>récolter</button><br><br><button onclick='sellStock(\"raisin1\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Raisins savoureux</p><p>requis : <br>2x sac deraisins</p><p>possédé : <span id='raisin2'></span></p><img src='img/ingredients/bagraisin2.png' width='50px'><br><br><button onclick='synth(\"raisin2\")'>synthétiser</button><br><br><button onclick='sellStock(\"raisin2\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Raisins parfaits</p><p>requis : <br>2x raisins savoureux</p><p>possédé : <span id='raisin3'></span></p><img src='img/ingredients/raisin.png' width='50px'><br><br><button onclick='synth(\"raisin3\")'>synthétiser</button><br><br><button onclick='sellStock(\"raisin3\")'>vendre stock</button></div>"+
	"<div class='bar'><p>Anti-poison</p><p>requis : <br>2x sac deraisins</p><p>valeur : 125$ ~ 325$</p><p>taxe: <span id='t33'>0</span> %</p><img src='img/goods/purple3.png' width='50px'><br><br><button onclick='synth(\"purple3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Parfum lavande</p><p>requis : <br>2x raisins savoureux</p><p>valeur : 333$ ~ 600$</p><p>taxe: <span id='t32'>0</span> %</p><img src='img/goods/purple2.png' width='50px'><br><br><button onclick='synth(\"purple2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Liqueur bonbon</p><p>requis : <br>2x raisins parfaits</p><p>valeur : 1 250$ ~ 2 500$</p><p>taxe: <span id='t31'>0</span> %</p><img src='img/goods/purple1.png' width='50px'><br><br><button onclick='synth(\"purple1\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Remède universel</p><p>requis : <br>2x baies parfaites<br>2x myrtilles parfaites<br>2x raisins parfaits</p><p>valeur : 5 000$ ~ 10 000$</p><img src='img/goods/wine.png' width='50px'><br><br><button onclick='synth(\"wine\")'>synthétiser</button></div>"+
"</div>"+
"</div>";
showPossess();
showTax();