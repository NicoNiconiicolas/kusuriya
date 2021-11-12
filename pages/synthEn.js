document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='prize' src='sfx/prize.mp3'></audio>"+
"<audio id='sfx' src='sfx/bip.mp3'></audio>"+
"<audio id='kaching' src='sfx/kaching.mp3'></audio>"+
"<div id='super'><span id='potionName'>Potion's name</span><div id='youMade'></div><br><p id='price'><span id='nprice'>0</span> $</p></div>"+
"<div id='box2'>"+
"<h1>Catalog</h1>"+
"<div id='catalog'>"+
	"<div class='bar'><p>Bag of berries</p><p>required : <br>exploration</p><p>owned : <span id='baie1'></span></p><img src='img/ingredients/bagberry.png' width='50px'><br><br><button onclick='goto(\"gather\")'>recolt</button><br><br><button onclick='sellStock(\"baie1\")'>sell stock</button></div>"+
	"<div class='bar'><p>Delicious berries</p><p>required : <br>2x bag of berries</p><p>owned : <span id='baie2'></span></p><img src='img/ingredients/bagberry2.png' width='50px'><br><br><button onclick='synth(\"baie2\")'>synthetise</button><br><br><button onclick='sellStock(\"baie2\")'>sell stock</button></div>"+
	"<div class='bar'><p>Perfect berries</p><p>required : <br>2x baie délicieuses</p><p>owned : <span id='baie3'></span></p><img src='img/ingredients/berry.png' width='50px'><br><br><button onclick='synth(\"baie3\")'>synthetise</button><br><br><button onclick='sellStock(\"baie3\")'>sell stock</button></div>"+
	"<div class='bar'><p>Fruity soda</p><p>required : <br>2x bag of berries</p><p>value : 10$ ~ 25$</p><img src='img/goods/red3.png' width='50px'><br><br><button onclick='synth(\"red3\")'>synthetise</button></div>"+
	"<div class='bar'><p>Cough syrup</p><p>required : <br>2x delicious berries</p><p>value : 50$ ~ 75$</p><img src='img/goods/red2.png' width='50px'><br><br><button onclick='synth(\"red2\")'>synthetise</button></div>"+
	"<div class='bar'><p>Mayonnaise</p><p>required : <br>2x perfect berries</p><p>value : 115$ ~ 225$</p><img src='img/goods/red1.png' width='50px'><br><br><button onclick='synth(\"red1\")'>synthetise</button></div>"+
	"<div class='bar'><p>Bag of blueberries</p><p>required : <br>exploration</p><p>owned : <span id='blueberry1'></span></p><img src='img/ingredients/bagblueberry.png' width='50px'><br><br><button onclick='goto(\"gather\")'>recolt</button><br><br><button onclick='sellStock(\"blueberry1\")'>sell stock</button></div>"+
	"<div class='bar'><p>Enchanting blueberries</p><p>required : <br>2x bag of blueberries</p><p>owned : <span id='blueberry2'></span></p><img src='img/ingredients/bagblueberry2.png' width='50px'><br><br><button onclick='synth(\"blueberry2\")'>synthetise</button><br><br><button onclick='sellStock(\"blueberry2\")'>sell stock</button></div>"+
	"<div class='bar'><p>Perfect blueberries</p><p>required : <br>2x enchanting blueberries</p><p>owned : <span id='blueberry3'></span></p><img src='img/ingredients/blueberry.png' width='50px'><br><br><button onclick='synth(\"blueberry3\")'>synthetise</button><br><br><button onclick='sellStock(\"blueberry3\")'>sell stock</button></div>"+
	"<div class='bar'><p>Liquid laundry</p><p>required : <br>2x bag of blueberries</p><p>value : 33$ ~ 99$</p><img src='img/goods/blue3.png' width='50px'><br><br><button onclick='synth(\"blue3\")'>synthetise</button></div>"+
	"<div class='bar'><p>Cooling liquid</p><p>required : <br>2x enchanting blueberries</p><p>value : 150$ ~ 300$</p><img src='img/goods/blue2.png' width='50px'><br><br><button onclick='synth(\"blue2\")'>synthetise</button></div>"+
	"<div class='bar'><p>Holy water</p><p>required : <br>2x perfect blueberries</p><p>value : 500$ ~ 700$</p><img src='img/goods/blue1.png' width='50px'><br><br><button onclick='synth(\"blue1\")'>synthetise</button></div>"+
	"<div class='bar'><p>Bag of grapes</p><p>required : <br>exploration</p><p>owned : <span id='raisin1'></span></p><img src='img/ingredients/bagraisin.png' width='50px'><br><br><button onclick='goto(\"gather\")'>recolt</button><br><br><button onclick='sellStock(\"raisin1\")'>sell stock</button></div>"+
	"<div class='bar'><p>Succulent grapes</p><p>required : <br>2x bag of grapes</p><p>owned : <span id='raisin2'></span></p><img src='img/ingredients/bagraisin2.png' width='50px'><br><br><button onclick='synth(\"raisin2\")'>synthetise</button><br><br><button onclick='sellStock(\"raisin2\")'>sell stock</button></div>"+
	"<div class='bar'><p>Perfect grapes</p><p>required : <br>2x succulent grapes</p><p>owned : <span id='raisin3'></span></p><img src='img/ingredients/raisin.png' width='50px'><br><br><button onclick='synth(\"raisin3\")'>synthetise</button><br><br><button onclick='sellStock(\"raisin3\")'>sell stock</button></div>"+
	"<div class='bar'><p>Anti-poison</p><p>required : <br>2x bag of grapes</p><p>value : 125$ ~ 325$</p><img src='img/goods/purple3.png' width='50px'><br><br><button onclick='synth(\"purple3\")'>synthetise</button></div>"+
	"<div class='bar'><p>Lavender perfume</p><p>required : <br>2x succulent grapes</p><p>value : 333$ ~ 600$</p><img src='img/goods/purple2.png' width='50px'><br><br><button onclick='synth(\"purple2\")'>synthetise</button></div>"+
	"<div class='bar'><p>Candy liquor</p><p>required : <br>2x perfect grapes</p><p>value : 1 250$ ~ 2 500$</p><img src='img/goods/purple1.png' width='50px'><br><br><button onclick='synth(\"purple1\")'>synthetise</button></div>"+
	"</div>"+
	"<h1>Special items</h1>"+
	"<div id='catalog'>"+
		"<div class='bar'><p>Lottery egg</p><p>price : <br>3500 §<br></p><p>effect : try your luck<br>at the lottery</p><p>gains up to 7 777 §</p><img src='img/ingredients/oeuf.png' width='50px'><br><br><button onclick='oeuf()'>buy</button></div>"+
		"<div class='bar'><p>Bribe</p><p>price : <br>1 000 §</p><p>effect : Taxes of the day are<br>be randomly changed</p><br><img src='img/ingredients/potdevin.png' width='50px'><br><br><button onclick='reTax()'>bribe</button></div>"+
		"<div class='bar'><p>Mercantile's secrets</p><p>price : <br>1 000 §</p><p>effect : Orders of the day<br>are renewed</p><br><img src='img/ingredients/book.png' width='50px'><br><br><button onclick='reCommand()'>buy</button></div>"+
	"</div>"+
"</div>"+
"</div>";
showPossess();