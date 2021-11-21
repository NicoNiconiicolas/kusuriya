document.getElementsByTagName('body')[0].innerHTML +=""+
"<div id='super'><span id='potionName'>Potion's name</span><div id='youMade'></div><br><p id='price'><span id='nprice'>0</span> §</p></div>"+
"<audio id='sfx' src='sfx/kaching.mp3'></audio>"+
"<div id='box'>"+
	"<div id='grid'><h1>Boutique</h1><div id='money'>compte : <span id='balance'></span> §</div></div>"+
		"<div id='stall'>"+
			"<div class='case'><div id='obj1' class='obj'></div></div>"+
			"<div class='case'><div id='obj2' class='obj'></div></div>"+
			"<div class='case'><div id='obj3' class='obj'></div></div>"+
			"<div class='case'><div id='obj4' class='obj'></div></div>"+
			"<div class='case'><div id='obj5' class='obj'></div></div>"+
			"<div class='case'><div id='obj6' class='obj'></div></div>"+
			"<div class='case'><div id='obj7' class='obj'></div></div>"+
			"<div class='case'><div id='obj8' class='obj'></div></div>"+
			"<div class='case'><div id='obj9' class='obj'></div></div>"+
	"</div>"+
"</div>";
document.getElementById('sfx').volume = 0.5;
trySell(false);
showInv();
setInterval(function(){trySell(true); showInv();}, 60000);