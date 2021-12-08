document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='prize' src='sfx/prize.mp3'></audio>"+
"<audio id='sfx' src='sfx/bip.mp3'></audio>"+
"<audio id='kaching' src='sfx/kaching.mp3'></audio>"+
"<div id='super'><span id='potionName'>Potion's name</span><div id='youMade'></div><br><p id='price'><span id='nprice'>0</span> §</p></div>"+
"<div id='box2'>"+
"<h1>Catalog</h1>"+
"<div id='catalog'>"+
	"<div class='bar'><p>Bag of<br>berries</p><p><em>required:</em> <br>exploration<br><br></p><p>owned: <span id='baie1'></span></p><img src='img/ingredients/bagberry.png' width='50px'><br><br><button onclick='goto(\"gather\")'>recolt</button><br><br><button onclick='sellStock(\"baie1\")'>sell stock</button></div>"+
	"<div class='bar'><p>Delicious<br>berries</p><p><em>required:</em> <br>2x bag<br>of berries</p><p>owned: <span id='baie2'></span></p><img src='img/ingredients/bagberry2.png' width='50px'><br><br><button onclick='synth(\"baie2\")'>synthetise</button><br><br><button onclick='sellStock(\"baie2\")'>sell stock</button></div>"+
	"<div class='bar'><p>Perfect<br>berries</p><p><em>required:</em> <br>2x delicious<br>berries</p><p>owned: <span id='baie3'></span></p><img src='img/ingredients/berry.png' width='50px'><br><br><button onclick='synth(\"baie3\")'>synthetise</button><br><br><button onclick='sellStock(\"baie3\")'>sell stock</button></div>"+
	"<div class='bar'><p>Fruity<br>soda</p><p><em>required:</em> <br>2x bag<br>of berries</p><p><em>value:</em><br>10§ ~ 25§</p><p>stocks: <span id='t13'>0%</span></p><img src='img/goods/red3.png' width='50px'><br><br><button onclick='synth(\"red3\")'>synthetise</button></div>"+
	"<div class='bar'><p>Cough<br>syrup</p><p><em>required:</em> <br>2x delicious<br>berries</p><p><em>value:</em><br>50§ ~ 75§</p><p>stocks: <span id='t12'>0%</span></p><img src='img/goods/red2.png' width='50px'><br><br><button onclick='synth(\"red2\")'>synthetise</button></div>"+
	"<div class='bar'><p>Mayonnaise<br><br></p><p><em>required:</em> <br>2x perfect<br>berries</p><p><em>value:</em><br>115§ ~ 225§</p><p>stocks: <span id='t11'>0%</span></p><img src='img/goods/red1.png' width='50px'><br><br><button onclick='synth(\"red1\")'>synthetise</button></div>"+
	"<div class='bar'><p>Bag of<br>blueberries</p><p><em>required:</em> <br>exploration<br><br></p><p>owned: <span id='blueberry1'></span></p><img src='img/ingredients/bagblueberry.png' width='50px'><br><br><button onclick='goto(\"gather\")'>recolt</button><br><br><button onclick='sellStock(\"blueberry1\")'>sell stock</button></div>"+
	"<div class='bar'><p>Enchanting<br>blueberries</p><p><em>required:</em> <br>2x bag<br>of blueberries</p><p>owned: <span id='blueberry2'></span></p><img src='img/ingredients/bagblueberry2.png' width='50px'><br><br><button onclick='synth(\"blueberry2\")'>synthetise</button><br><br><button onclick='sellStock(\"blueberry2\")'>sell stock</button></div>"+
	"<div class='bar'><p>Perfect<br>blueberries</p><p><em>required:</em> <br>2x enchanting<br>blueberries</p><p>owned: <span id='blueberry3'></span></p><img src='img/ingredients/blueberry.png' width='50px'><br><br><button onclick='synth(\"blueberry3\")'>synthetise</button><br><br><button onclick='sellStock(\"blueberry3\")'>sell stock</button></div>"+
	"<div class='bar'><p>Liquid<br>laundry</p><p><em>required:</em> <br>2x bag<br>of blueberries</p><p><em>value:</em><br>33§ ~ 99§</p><p>stocks: <span id='t23'>0%</span></p><img src='img/goods/blue3.png' width='50px'><br><br><button onclick='synth(\"blue3\")'>synthetise</button></div>"+
	"<div class='bar'><p>Cooling<br>liquid</p><p><em>required:</em> <br>2x enchanting<br>blueberries</p><p><em>value:</em><br>150§ ~ 300§</p><p>stocks: <span id='t22'>0%</span></p><img src='img/goods/blue2.png' width='50px'><br><br><button onclick='synth(\"blue2\")'>synthetise</button></div>"+
	"<div class='bar'><p>Holy<br>water</p><p><em>required:</em> <br>2x perfect<br>blueberries</p><p><em>value:</em><br>500§ ~ 700§</p><p>stocks: <span id='t21'>0%</span></p><img src='img/goods/blue1.png' width='50px'><br><br><button onclick='synth(\"blue1\")'>synthetise</button></div>"+
	"<div class='bar'><p>Bag of<br>grapes</p><p><em>required:</em> <br>exploration<br><br></p><p>owned: <span id='raisin1'></span></p><img src='img/ingredients/bagraisin.png' width='50px'><br><br><button onclick='goto(\"gather\")'>recolt</button><br><br><button onclick='sellStock(\"raisin1\")'>sell stock</button></div>"+
	"<div class='bar'><p>Succulent<br>grapes</p><p><em>required:</em> <br>2x bag of<br>grapes</p><p>owned: <span id='raisin2'></span></p><img src='img/ingredients/bagraisin2.png' width='50px'><br><br><button onclick='synth(\"raisin2\")'>synthetise</button><br><br><button onclick='sellStock(\"raisin2\")'>sell stock</button></div>"+
	"<div class='bar'><p>Perfect<br>grapes</p><p><em>required:</em> <br>2x succulent<br>grapes</p><p>owned: <span id='raisin3'></span></p><img src='img/ingredients/raisin.png' width='50px'><br><br><button onclick='synth(\"raisin3\")'>synthetise</button><br><br><button onclick='sellStock(\"raisin3\")'>sell stock</button></div>"+
	"<div class='bar'><p>Anti-poison<br><br></p><p><em>required:</em> <br>2x bag of<br>grapes</p><p><em>value:</em><br>125§ ~ 325§</p><p>stocks: <span id='t33'>0%</span></p><img src='img/goods/purple3.png' width='50px'><br><br><button onclick='synth(\"purple3\")'>synthetise</button></div>"+
	"<div class='bar'><p>Lavender<br>perfume</p><p><em>required:</em> <br>2x succulent<br>grapes</p><p><em>value:</em><br>333§ ~ 600§</p><p>stocks: <span id='t32'>0%</span></p><img src='img/goods/purple2.png' width='50px'><br><br><button onclick='synth(\"purple2\")'>synthetise</button></div>"+
	"<div class='bar'><p>Candy<br>liquor</p><p><em>required:</em> <br>2x perfect<br>grapes</p><p><em>value:</em><br>1 250§ ~ 2 500§</p><p>stocks: <span id='t31'>0%</span></p><img src='img/goods/purple1.png' width='50px'><br><br><button onclick='synth(\"purple1\")'>synthetise</button></div>"+
	"</div>"+
	"<h1>Special items</h1>"+
	"<div id='catalog'>"+
		"<div class='bar'><p>Lottery<br>egg</p><p><em>price:</em> <br>3500 §<br></p><p><em>effect:</em><br>Try your luck<br>at the lottery</p><p>gains up to<br>7 777 §</p><img src='img/ingredients/oeuf.png' width='50px'><br><br><button onclick='oeuf()'>buy</button></div>"+
		"<div class='bar'><p>Bribe<br><br></p><p><em>price:</em> <br>500 §</p><p><em>effect:</em><br>Prices of<br>the market<br>randomized</p><br><img src='img/ingredients/potdevin.png' width='50px'><br><br><button onclick='reTax()'>bribe</button></div>"+
		"<div class='bar'><p>Mercantile's<br>secrets</p><p><em>price:</em> <br>500 §</p><p><em>effect:</em><br>Orders of the<br>day are renewed<br><br></p><br><img src='img/ingredients/book.png' width='50px'><br><br><button onclick='reCommand()'>buy</button></div>"+
	"</div>"+
"</div>"+
"</div>";
showPossess();
showTax();