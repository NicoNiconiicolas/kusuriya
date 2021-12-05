
function goto(page){
	location.href='index.html?p='+page;
}

function showInv(){
	document.getElementById('balance').innerHTML = getCookie('balance');
	for(i=1 ; i <= 9; i++){
		if(slot[i] != "empty"){
			document.getElementById("obj"+i).style.background = "url(img/goods/"+slot[i]+".png) 50% 50% no-repeat";
			document.getElementById("obj"+i).title = getCookie('slot'+i+'_value')+"$";
		}else{
			document.getElementById("obj"+i).style.background = "";
		}
	}
}

function empty(nslot){
	setCookie("slot"+nslot, 'empty', 3650);
	setCookie("slot"+nslot+"_value", 0, 3650);
	slot[nslot] = 'empty';
}

function isInvFull(){
	var i = 1;
	while(loop = true){
		if(i != 10){
			if(slot[i] == 'empty'){
				return true
				break;
			}else{
				i++
			}
		}else{
			return false
			break
		}
	}
}

function add(item){
	var lang = getCookie('lang');
	var loop = true;
	var tax = parseInt(getCookie('taxval'));
	var i = 1;
	var price = 0;
	var pName = "";
	switch(item){
		case 'red3':
		price = Math.floor(Math.random()*15)+10;
		if(getCookie('tax1') == '3'){
			var minus =Math.floor(price/100*tax);
			price = price-minus;
		}
		if(getCookie('tax1p') == '3'){
			var plus =Math.floor(price/100*tax);
			price = price+plus;
		}
		if(lang == 0){
			pName = "Fruity soda";
		}else{
			pName = "Limonade fruitée";
		}
		break

		case 'red2':
		price = Math.floor(Math.random()*25)+50;
		if(getCookie('tax1') == '2'){
			var minus =Math.floor(price/100*tax);
			price = price-minus;
		}
		if(getCookie('tax1p') == '2'){
			var plus =Math.floor(price/100*tax);
			price = price+plus;
		}
		if(lang == 0){
			pName = "Cough syrup";
		}else{
			pName = "Sirop pour la toux";
		}
		break

		case 'red1':
		price = Math.floor(Math.random()*110)+115;
		if(getCookie('tax1') == '1'){
			var minus =Math.floor(price/100*tax);
			price = price-minus;
		}
		if(getCookie('tax1p') == '1'){
			var plus =Math.floor(price/100*tax);
			price = price+plus;
		}
		pName = "Mayonnaise";
		break

		case 'blue3':
		price = Math.floor(Math.random()*66)+33;
		if(getCookie('tax2') == '3'){
			var minus =Math.floor(price/100*tax);
			price = price-minus;
		}
		if(getCookie('tax2p') == '3'){
			var plus =Math.floor(price/100*tax);
			price = price+plus;
		}
		if(lang == 0){
			pName = "Liquid laundry";
		}else{
			pName = "Lessive liquide";
		}
		break

		case 'blue2':
		price = Math.floor(Math.random()*150)+150;
		if(getCookie('tax2') == '2'){
			var minus =Math.floor(price/100*tax);
			price = price-minus;
		}
		if(getCookie('tax2p') == '2'){
			var plus =Math.floor(price/100*tax);
			price = price+plus;
		}
		if(lang == 0){
			pName = "Cooling liquid";
		}else{
			pName = "Liquide de refroidissement";
		}
		break

		case 'blue1':
		price = Math.floor(Math.random()*200)+500;
		if(getCookie('tax2') == '1'){
			var minus =Math.floor(price/100*tax);
			price = price-minus;
		}
		if(getCookie('tax2p') == '1'){
			var plus =Math.floor(price/100*tax);
			price = price+plus;
		}
		if(lang == 0){
			pName = "Holy water";
		}else{
			pName = "Eau bénite";
		}
		break

		case 'purple3':
		price = Math.floor(Math.random()*200)+125;
		if(getCookie('tax3') == '3'){
			var minus =Math.floor(price/100*tax);
			price = price-minus;
		}
		if(getCookie('tax3p') == '3'){
			var plus =Math.floor(price/100*tax);
			price = price+plus;
		}
		pName = "Anti-poison";
		break

		case 'purple2':
		price = Math.floor(Math.random()*267)+333;
		if(getCookie('tax3') == '2'){
			var minus =Math.floor(price/100*tax);
			price = price-minus;
		}
		if(getCookie('tax3p') == '2'){
			var plus =Math.floor(price/100*tax);
			price = price+plus;
		}
		if(lang == 0){
			pName = "Lavender perfume";
		}else{
			pName = "Parfum Lavande";
		}
		break

		case 'purple1':
		price = Math.floor(Math.random()*1250)+1250;
		if(getCookie('tax3') == '1'){
			var minus =Math.floor(price/100*tax);
			price = price-minus;
		}
		if(getCookie('tax3p') == '1'){
			var plus =Math.floor(price/100*tax);
			price = price+plus;
		}
		if(lang == 0){
			pName = "Candy liquor";
		}else{
			pName = "Liqueur bonbon";
		}
		break

	}
	while(loop = true){
		if(i != 10){
			if(slot[i] == 'empty'){
				setCookie("slot"+i, item, 3650)
				setCookie("slot"+i+"_value", price, 3650)
				document.getElementById('potionName').innerHTML = pName;
				document.getElementById('nprice').innerHTML = price;
				document.getElementById('super').style.display = 'block'
				document.getElementById('youMade').style.backgroundImage = "url('img/goods/"+item+".png')";
				setTimeout(function(){document.getElementById('super').style.display = 'none';}, 3750)
				slot[i] = item;
				break
			}else{
				i++
			}
		}
	}
}

function getTime(){
	return Math.round(new Date().getTime()/1000/60);
}

function trySell(focus){
	var sellList = [];
	for(i=1 ; i <= 9 ; i++){
		if(slot[i] != 'empty'){
			sellList.push(i);
		}
	}
	var soldCount = 0;
	var gains = 0;
	var random = 0;
	var lastTime = getCookie('lastTime');
	if(lastTime != ''){
		var presentTime = getTime();
		var diff = presentTime - lastTime;
		//try to sell after fixed amount of time since last connexion
		var tentative = Math.floor(diff/1);
		while(tentative != 0){
			// chance to sell for each tentative
			random = Math.floor(Math.random()*9);
			if(random == 1){
				if(sellList.length != 0){
					var whichSell = Math.floor(Math.random()*sellList.length);
					soldCount ++;
					gains += parseInt(getCookie('slot'+sellList[whichSell]+'_value'));
					item = getCookie('slot'+sellList[whichSell]);
					sell(sellList[whichSell]);
					sellList.splice(whichSell,1);
				}else{
					break;
				}
			}
			tentative --;
		}
		if(gains != 0){
			if(focus == false){
				alert(soldCount+" article(s) vendu(s) pour "+gains+"$");
			}else{
				var lang = getCookie('lang');
				switch(item){
					case 'red3':
					if(lang == 0){
						pName = "Fruity soda";
					}else{
						pName = "Limonade fruitée";
					}
					break

					case 'red2':
					if(lang == 0){
						pName = "Cough syrup";
					}else{
						pName = "Sirop pour la toux";
					}
					break

					case 'red1':
					pName = "Mayonnaise";
					break

					case 'blue3':
					if(lang == 0){
						pName = "Liquid laundry";
					}else{
						pName = "Lessive liquide";
					}
					break

					case 'blue2':
					if(lang == 0){
						pName = "Cooling liquid";
					}else{
						pName = "Liquide de refroidissement";
					}
					break

					case 'blue1':
					if(lang == 0){
						pName = "Holy water";
					}else{
						pName = "Eau bénite";
					}
					break

					case 'purple3':
					pName = "Anti-poison";
					break

					case 'purple2':
					if(lang == 0){
						pName = "Lavender perfume";
					}else{
						pName = "Parfum Lavande";
					}
					break

					case 'purple1':
					if(lang == 0){
						pName = "Candy liquor";
					}else{
						pName = "Liqueur bonbon";
					}
					break

				}
				document.getElementById('potionName').innerHTML = pName;
				document.getElementById('price').style.color = 'royalblue';
				document.getElementById('nprice').innerHTML = "+ "+gains;
				document.getElementById('super').style.display = 'block';
				document.getElementById('youMade').style.backgroundImage = "url('img/goods/"+item+".png')";
				setTimeout(function(){document.getElementById('super').style.display = 'none';}, 3750)
			}
		}
	}
	setCookie('lastTime', getTime(), 3650);}

function sell(nslot){
	var currentMoney = parseInt(getCookie('balance'));
	var newbal = currentMoney+parseInt(getCookie('slot'+nslot+"_value"));
	setCookie('balance', newbal, 3650);
	document.getElementById('obj'+nslot).title = "";
	setCookie('slot'+nslot+"_value", 0, 3650);
	setCookie('slot'+nslot, 'empty', 3650);
	empty(nslot);
	document.getElementById('sfx').play();
	showInv();
}

function synth(obj){
	var lang = getCookie('lang');
	var sfx = document.getElementById('sfx');
	switch(obj){
		case 'baie1':
		setCookie("baie1", parseInt(getCookie('baie1'))+1, 3650);
		break

		case 'baie2':
		var need = parseInt(getCookie('baie1'));
		var b2 = parseInt(getCookie('baie2'));
		if(need >= 2){
			setCookie("baie1", need-2, 3650);
			setCookie("baie2", b2+1, 3650);
			document.getElementById('baie1').innerHTML = getCookie("baie1");
			document.getElementById('baie2').innerHTML = getCookie("baie2");
			sfx.play();
		}else{
			var missing = 2 - need;
			if(lang == 0){
				alert('missing ingredient(s) : x'+missing+' bag of berries')
			}else{
				alert('il vous manque les ingrédients suivants : x'+missing+' sac de baies')
			}
		}
		break

		case 'baie3':
		var need = parseInt(getCookie('baie2'));
		var b3 = parseInt(getCookie('baie3'));
		if(need >= 2){
			setCookie("baie2", need-2, 3650);
			setCookie("baie3", b3+1, 3650);
			document.getElementById('baie2').innerHTML = getCookie("baie2");
			document.getElementById('baie3').innerHTML = getCookie("baie3");
			sfx.play();
		}else{
			var missing = 2 - need;
			if(lang == 0){
				alert('missing ingredient(s) : x'+missing+' delicious berries')
			}else{
				alert('il vous manque les ingrédients suivants : x'+missing+' baie(s) délicieuse(s)')
			}
		}
		break

		case 'blueberry1':
		setCookie("blueberry1", parseInt(getCookie('blueberry1'))+1, 3650);
		break

		case 'blueberry2':
		var need = parseInt(getCookie('blueberry1'));
		var bb2 = parseInt(getCookie('blueberry2'));
		if(need >= 2){
			setCookie("blueberry1", need-2, 3650);
			setCookie("blueberry2", bb2+1, 3650);
			document.getElementById('blueberry1').innerHTML = getCookie("blueberry1");
			document.getElementById('blueberry2').innerHTML = getCookie("blueberry2");
			sfx.play();
		}else{
			var missing = 2 - need;
			if(lang == 0){
				alert('missing ingredient(s) : x'+missing+' bag of blueberries')
			}else{
				alert('il vous manque les ingrédients suivants : '+missing+' sac de myrtilles')
			}
		}
		break

		case 'blueberry3':
		var need = parseInt(getCookie('blueberry2'));
		var bb3 = parseInt(getCookie('blueberry3'));
		if(need >= 2){
			setCookie("blueberry2", need-2, 3650);
			setCookie("blueberry3", bb3+1, 3650);
			document.getElementById('blueberry2').innerHTML = getCookie("blueberry2");
			document.getElementById('blueberry3').innerHTML = getCookie("blueberry3");
			sfx.play();
		}else{
			var missing = 2 - need;
			if(lang == 0){
				alert('missing ingredient(s) : x'+missing+' enchanting blueberries')
			}else{
				alert('il vous manque les ingrédients suivants : '+missing+' myrtille(s) envoûtante(s)')
			}
		}
		break

		case 'raisin1':
		setCookie("raisin1", parseInt(getCookie('raisin1'))+1, 3650);
		break

		case 'raisin2':
		var need = parseInt(getCookie('raisin1'));
		var r2 = parseInt(getCookie('raisin2'));
		if(need >= 2){
			setCookie("raisin1", need-2, 3650);
			setCookie("raisin2", r2+1, 3650);
			document.getElementById('raisin1').innerHTML = getCookie("raisin1");
			document.getElementById('raisin2').innerHTML = getCookie("raisin2");
			sfx.play();
		}else{
			var missing = 2 - need;
			if(lang == 0){
				alert('missing ingredient(s) : x'+missing+' bag of grapes')
			}else{
				alert('il vous manque les ingrédients suivants : '+missing+' sac de raisins')
			}
		}
		break

		case 'raisin3':
		var need = parseInt(getCookie('raisin2'));
		var r3 = parseInt(getCookie('raisin3'));
		if(need >= 2){
			setCookie("raisin2", need-2, 3650);
			setCookie("raisin3", r3+1, 3650);
			document.getElementById('raisin2').innerHTML = getCookie("raisin2");
			document.getElementById('raisin3').innerHTML = getCookie("raisin3");
			sfx.play();
		}else{
			var missing = 2 - need;
			if(lang == 0){
				alert('missing ingredient(s) : x'+missing+' succulent grapes')
			}else{
				alert('il vous manque les ingrédients suivants : '+missing+' raisin(s) savoureu(x)')
			}
		}
		break

		//potions

		case 'red3':
		var full = isInvFull();
		if(full == true){
			var need = parseInt(getCookie('baie1'));
			if(need >= 2){
				setCookie("baie1", need-2, 3650);
				document.getElementById('baie1').innerHTML = getCookie('baie1');
				add('red3');
				document.getElementById('prize').play();
				setCookie('lastTime', getTime(), 3650);
			}else{
				var missing = 2 - need;
				if(lang == 0){
					alert('missing ingredient(s) : x'+missing+' bag of berries')
				}else{
					alert('il vous manque les ingrédients suivants : x'+missing+' sac de baies')
				}
			}
		}else{
			if(lang == 0){
				alert('no avaible slot');
			}else{
				alert('Aucun emplacement libre');
			}
		}
		break

		case 'red2':
		var full = isInvFull();
		if(full == true){
			var need = parseInt(getCookie('baie2'));
			if(need >= 2){
				setCookie("baie2", need-2, 3650);
				document.getElementById('baie2').innerHTML = getCookie('baie2');
				add('red2');
				document.getElementById('prize').play();
				setCookie('lastTime', getTime(), 3650);
			}else{
				var missing = 2 - need;
				if(lang == 0){
					alert('missing ingredient(s) : x'+missing+' delicious berries')
				}else{
					alert('il vous manque les ingrédients suivants : x'+missing+' baie(s) délicieuse(s)')
				}
			}
		}else{
			if(lang == 0){
				alert('no avaible slot');
			}else{
				alert('Aucun emplacement libre');
			}
		}
		break 

		case 'red1':
		var full = isInvFull();
		if(full == true){
			var need = parseInt(getCookie('baie3'));
			if(need >= 2){
				setCookie("baie3", need-2, 3650);
				document.getElementById('baie3').innerHTML = getCookie('baie3');
				add('red1');
				document.getElementById('prize').play();
				setCookie('lastTime', getTime(), 3650);
			}else{
				var missing = 2 - need;
				if(lang == 0){
					alert('missing ingredient(s) : x'+missing+' perfect berries')
				}else{
					alert('il vous manque les ingrédients suivants : x'+missing+' baies parfaites')
				}
			}
		}else{
			if(lang == 0){
				alert('no avaible slot');
			}else{
				alert('Aucun emplacement libre');
			}
		}
		break 

		case 'blue1':
		var full = isInvFull();
		if(full == true){
			var need = parseInt(getCookie('blueberry3'));
			if(need >= 2){
				setCookie("blueberry3", need-2, 3650);
				document.getElementById('blueberry3').innerHTML = getCookie('blueberry3');
				add('blue1');
				document.getElementById('prize').play();
				setCookie('lastTime', getTime(), 3650);
			}else{
				var missing = 2 - need;
				if(lang == 0){
					alert('missing ingredient(s) : x'+missing+' perfect blueberries')
				}else{
					alert('il vous manque les ingrédients suivants : x'+missing+' myrtilles parfaites')
				}
			}
		}else{
			if(lang == 0){
				alert('no avaible slot');
			}else{
				alert('Aucun emplacement libre');
			}
		}
		break

		case 'blue2':
		var full = isInvFull();
		if(full == true){
			var need = parseInt(getCookie('blueberry2'));
			if(need >= 2){
				setCookie("blueberry2", need-2, 3650);
				document.getElementById('blueberry2').innerHTML = getCookie('blueberry2');
				add('blue2');
				document.getElementById('prize').play();
				setCookie('lastTime', getTime(), 3650);
			}else{
				var missing = 2 - need;
				if(lang == 0){
					alert('missing ingredient(s) : x'+missing+' enchanting blueberries')
				}else{
					alert('il vous manque les ingrédients suivants : x'+missing+' myrtille(s) envoûtante(s)')
				}
			}
		}else{
			if(lang == 0){
				alert('no avaible slot');
			}else{
				alert('Aucun emplacement libre');
			}
		}
		break

		case 'blue3':
		var full = isInvFull();
		if(full == true){
			var need = parseInt(getCookie('blueberry1'));
			if(need >= 2){
				setCookie("blueberry1", need-2, 3650);
				document.getElementById('blueberry1').innerHTML = getCookie('blueberry1');
				add('blue3');
				document.getElementById('prize').play();
				setCookie('lastTime', getTime(), 3650);
			}else{
				var missing = 2 - need;
				if(lang == 0){
					alert('missing ingredient(s) : x'+missing+' bag of blueberries')
				}else{
					alert('il vous manque les ingrédients suivants : x'+missing+' sac de myrtilles')
				}
			}
		}else{
			if(lang == 0){
				alert('no avaible slot');
			}else{
				alert('Aucun emplacement libre');
			}
		}
		break
		
		case 'purple1':
		var full = isInvFull();
		if(full == true){
			var need = parseInt(getCookie('raisin3'));
			if(need >= 2){
				setCookie("raisin3", need-2, 3650);
				document.getElementById('raisin3').innerHTML = getCookie('raisin3');
				add('purple1');
				document.getElementById('prize').play();
				setCookie('lastTime', getTime(), 3650);
			}else{
				var missing = 2 - need;
				if(lang == 0){
					alert('missing ingredient(s) : x'+missing+' perfect grapes')
				}else{
					alert('il vous manque les ingrédients suivants : x'+missing+' raisins parfaits')
				}
			}
		}else{
			if(lang == 0){
				alert('no avaible slot');
			}else{
				alert('Aucun emplacement libre');
			}
		}
		break

		case 'purple2':
		var full = isInvFull();
		if(full == true){
			var need = parseInt(getCookie('raisin2'));
			if(need >= 2){
				setCookie("raisin2", need-2, 3650);
				document.getElementById('raisin2').innerHTML = getCookie('raisin2');
				add('purple2');
				document.getElementById('prize').play();
				setCookie('lastTime', getTime(), 3650);
			}else{
				var missing = 2 - need;
				if(lang == 0){
					alert('missing ingredient(s) : x'+missing+' succulent grapes')
				}else{
					alert('il vous manque les ingrédients suivants : x'+missing+' raisin(s) savoureu(x)')
				}
			}
		}else{
			if(lang == 0){
				alert('no avaible slot');
			}else{
				alert('Aucun emplacement libre');
			}
		}
		break 

		case 'purple3':
		var full = isInvFull();
		if(full == true){
			var need = parseInt(getCookie('raisin1'));
			if(need >= 2){
				setCookie("raisin1", need-2, 3650);
				document.getElementById('raisin1').innerHTML = getCookie('raisin1');
				add('purple3');
				document.getElementById('prize').play();
				setCookie('lastTime', getTime(), 3650);
			}else{
				var missing = 2 - need;
				if(lang == 0){
					alert('missing ingredient(s) : x'+missing+' bag of grapes')
				}else{
					alert('il vous manque les ingrédients suivants : x'+missing+' sac de raisins')
				}
			}
		}else{
			if(lang == 0){
				alert('no avaible slot');
			}else{
				alert('Aucun emplacement libre');
			}
		}
		break
		
	}
}

function showPossess(){
	document.getElementById('baie1').innerHTML = getCookie('baie1');
	document.getElementById('baie2').innerHTML = getCookie('baie2');
	document.getElementById('baie3').innerHTML = getCookie('baie3');
	document.getElementById('blueberry1').innerHTML = getCookie('blueberry1');
	document.getElementById('blueberry2').innerHTML = getCookie('blueberry2');
	document.getElementById('blueberry3').innerHTML = getCookie('blueberry3');
	document.getElementById('raisin1').innerHTML = getCookie('raisin1');
	document.getElementById('raisin2').innerHTML = getCookie('raisin2');
	document.getElementById('raisin3').innerHTML = getCookie('raisin3');
}

function gacha(){
	var lang = getCookie('lang');
	if(progression >= 100){
		var random = Math.floor(Math.random()*100)+1;
		if(random <= 50){
			document.getElementById('won').style.backgroundImage = "url('img/ingredients/bagberry.png')";
			if(lang == 0){
				document.getElementById('wonText').innerHTML = 'Bag of Berries';
			}else{
				document.getElementById('wonText').innerHTML = 'Sac de Baies';
			}
			synth('baie1');
		}else if(random > 50 && random <= 85){
			document.getElementById('won').style.backgroundImage = "url('img/ingredients/bagblueberry.png')";
			if(lang == 0){
				document.getElementById('wonText').innerHTML = 'Bag of Blueberries';
			}else{
				document.getElementById('wonText').innerHTML = 'Sac de myrtilles';
			}
			synth('blueberry1');
		}else{
			document.getElementById('won').style.backgroundImage = "url('img/ingredients/bagraisin.png')";
			if(lang == 0){
				document.getElementById('wonText').innerHTML = 'Bag of Grapes';
			}else{
				document.getElementById('wonText').innerHTML = 'Sac de Raisins';
			}
			synth('raisin1');
		}
		document.getElementById('hoho').style.display = 'block';
		document.getElementById('question').style.display = 'none';
		document.getElementById('answerbox').style.display = 'none';
		document.getElementById('answerbox2').style.display = 'none';
		document.getElementsByClassName('ansbox')[0].style.display = 'none';
		document.getElementsByClassName('ansbox')[1].style.display = 'none';
		document.getElementsByClassName('ansbox')[2].style.display = 'none';
		document.getElementById('goodAnswer').style.display = 'none';
		document.getElementById('prize').play();
		if(getCookie('jeu') == 1){
			setTimeout(function(){progression = 0;document.getElementById('hoho').style.display = 'none';document.getElementById('question').style.display = 'inline-block';document.getElementById('goodAnswer').style.display = 'inline-block';document.getElementById('answerbox').style.display = 'block';document.getElementById('progress').style.width = "0%";}, 3000);
		}else{
			setTimeout(function(){progression = 0;document.getElementById('hoho').style.display = 'none';document.getElementById('question').style.display = 'inline-block';document.getElementsByClassName('ansbox')[0].style.display = 'block';document.getElementsByClassName('ansbox')[1].style.display = 'inline-block';document.getElementsByClassName('ansbox')[2].style.display = 'inline-block';document.getElementById('answerbox2').style.display = 'inline-block';document.getElementById('progress').style.width = "0%";}, 3000);
		}
		document.getElementById('answer').focus();
	}
}

function bar(perc){
	document.getElementById('progress').style.width = perc+"%";
	gacha();
}

function initQuestion(fail){
	console.log('15 new questions');
	if(fail == false){
		lastQ2 = questions[questions.length-1]
		lastA2 = answers[answers.length-1]
	}
	questions = [];
	answers = [];
	if(fail == true){
		questions.push(lastQ2);
		answers.push(lastA2);
	}else{
		questions.push(lastQ2);
		answers.push(lastA2);
	}
	max = quest.length;
	var values = [];
	for (i = 0; i < max; ++i){
    	values.push(i);
	}
	for(i = 0; i < 15; ++i){
		var n = values.splice(Math.random()*values.length,1)[0];
		questions.push(quest[n]);
		answers.push(ans[n]);
	}
		nQuestion = 1;
	newQuestion();
}

function newQuestion(){
	if(questions[nQuestion] != undefined){
		document.getElementById('question').innerHTML = questions[nQuestion];
	}else{
		failedInit();
	}
}

function checkAnswer(){
	var correct = false;
	var user = document.getElementById('answer').value;
	if(user == 'givememoney'){
		var val = prompt('Quel somme désirez-vous posséder ?');
		setCookie('balance', val, 3650);
	}
	if(user == 'switchlanguage'){
		if(getCookie('lang') == '0'){
			setCookie('lang', 1, 3650);
		}else{
			setCookie('lang', 0, 3650);
		}
	}
	if(user == 'resetgame'){
		setCookie("week", 1, 3650);
			setCookie("slot1", "empty", 3650);
			setCookie("slot2", "empty", 3650);
			setCookie("slot3", "empty", 3650);
			setCookie("slot4", "empty", 3650);
			setCookie("slot5", "empty", 3650);
			setCookie("slot6", "empty", 3650);
			setCookie("slot7", "empty", 3650);
			setCookie("slot8", "empty", 3650);
			setCookie("slot9", "empty", 3650);
			setCookie("slot1_value", 0, 3650);
			setCookie("slot2_value", 0, 3650);
			setCookie("slot3_value", 0, 3650);
			setCookie("slot4_value", 0, 3650);
			setCookie("slot5_value", 0, 3650);
			setCookie("slot6_value", 0, 3650);
			setCookie("slot7_value", 0, 3650);
			setCookie("slot8_value", 0, 3650);
			setCookie("slot9_value", 0, 3650);
			setCookie("balance", 0, 3650);
			setCookie("baie1", 0, 3650);
			setCookie("baie2", 0, 3650);
			setCookie("baie3", 0, 3650);
			setCookie("blueberry1", 0, 3650);
			setCookie("blueberry2", 0, 3650);
			setCookie("blueberry3", 0, 3650);
			setCookie("raisin1", 0, 3650);
			setCookie("raisin2", 0, 3650);
			setCookie("raisin3", 0, 3650);
			firstLoan();
			var slot = [];
			slot[1] = getCookie('slot1');
			slot[2] = getCookie('slot2');
			slot[3] = getCookie('slot3');
			slot[4] = getCookie('slot4');
			slot[5] = getCookie('slot5');
			slot[6] = getCookie('slot6');
			slot[7] = getCookie('slot7');
			slot[8] = getCookie('slot8');
			slot[9] = getCookie('slot9');
	}
	var comp = answers[nQuestion].split(',');
	for(i=0; i < comp.length ;i++){
		if(user.toUpperCase() == comp[i].replace(/’/g, "'").toUpperCase()){
			correct = true;
		}
	}
	if(correct == true){
		combo ++;
		switch(combo){
			case 3:
			multiplicateur = 1.5;
			break

			case 6:
			multiplicateur = 2;
			break

			case 10:
			multiplicateur = 3;
			break
		}
		setCookie('cardsToday', parseInt(getCookie('cardsToday'))+1, 3650);
		document.getElementById('cards').innerHTML = getCookie('cardsToday');
		document.getElementById('ncombo').innerHTML = combo;
		progression = progression + 10*multiplicateur;
		if(progression > 100){
			bar(98.9);
		}else{
			bar(progression);
		}
		document.getElementById('goodAnswer').style.color = '#9CF';
		document.getElementById('correct').play();
	}else{
		multiplicateur = 1;
		combo = 0;
		document.getElementById('ncombo').innerHTML = combo;
		document.getElementById('goodAnswer').style.color = '#F99';
		document.getElementById('wrong').play();
		var forLaterQ = questions[nQuestion];
		var forLaterA = answers[nQuestion];
		wrongQ.push(forLaterQ);
		wrongA.push(forLaterA);
	}
	document.getElementById('multiple').innerHTML = multiplicateur;
	document.getElementById('goodAnswer').innerHTML = questions[nQuestion]+" --> "+answers[nQuestion];
	if(getCookie('dico') == "jisho"){
		document.getElementById('goodAnswer').onclick = function(){window.open('https://jisho.org/search/'+questions[nQuestion-1], '_blank');};
	}else{
		document.getElementById('goodAnswer').onclick = function(){window.open('https://dictionary.writtenchinese.com/#sk='+questions[nQuestion-1]+'&svt=pinyin', '_blank');};
	}
	nQuestion ++;
	newQuestion();
}

function failedInit(){
	max = wrongA.length;
	console.log(max+' failed');
	if(max != 0){
		lastQ = questions[questions.length-1];
		lastA = answers[questions.length-1];
		console.log("last question was : "+lastQ)
		questions = [];
		answers = [];
		questions.push(lastQ);
		answers.push(lastA);
		var values = [];
		for (i = 0; i < max; ++i){
		   	values.push(i);
		}
		for(i = 0; i < max; ++i){
			var n = values.splice(Math.random()*values.length,1)[0];
			questions.push(wrongQ[n]);
			answers.push(wrongA[n]);
		}
		nQuestion = 1;
		lastQ2 = wrongQ[max-1];
		lastA2 = wrongA[max-1];
		wrongA = [];
		wrongQ = [];
		wasWrong = true
		console.log('start review of : '+questions);
		newQuestion();
	}else{
		if(wasWrong == true){
			initQuestion(true);
			wasWrong = false;	
		}else{
			initQuestion(false);	
		}
	}
}

function updateDeck(){
	var lang = getCookie('lang');
	var url = document.getElementById('deckLink').value;
	if(url == ''){
		if(lang == 0){
			alert('empty field');
		}else{
			alert('champ vide');
		}
	}else{
		setCookie('cookieDeck', false, 3650);
		setCookie('deck', url, 3650);
		if(lang == 0){
			alert('Deck loaded ! \n\n(if your link is valid)');
		}else{
			alert('Deck chargé ! \n\n(pour peu que votre lien soit valide)');
		}
	}
}

function updateJLPT(n){
	var lang = getCookie('lang');
	setCookie('cookieDeck', false, 3650);
	setCookie('deck', 'deck/'+n+'.js', 3650);
	if(lang == 0){
		alert('Deck loaded !');
	}else{
		alert('Deck chargé !');
	}
}

function firstLoan(){
	if(getCookie('difficulty') == '1'){
		setTax();
	}
	var d = new Date();
	var today = d.getDay();
	var nextloan = 6 - today + 1;
	var totalLoan = nextloan * 500;
	setCookie("toPay", totalLoan, 3650);
	setCookie("isPaid", false, 3650);
	var now = Math.floor(new Date().getTime()/1000/60/60/24+3)/7;
	now = Math.floor(now);
	setCookie("nextLoan", now, 3650);
}

function checkLoan(){
	var lang = getCookie('lang');
	var now = Math.floor(new Date().getTime()/1000/60/60/24+3)/7;
	now = Math.floor(now);
	if(now > parseInt(getCookie('nextLoan'))){
		if(getCookie('isPaid') == 'false'){
			if(lang == 0){
				alert('/!\\ Game over /!\\\nReason: Unpaid bills\nNew game will start');
			}else{
				alert('/!\\ Game over /!\\\nRaison: Factures impayées\nDébut d\'une nouvelle partie');
			}
			setCookie("week", 1, 3650);
			setCookie("slot1", "empty", 3650);
			setCookie("slot2", "empty", 3650);
			setCookie("slot3", "empty", 3650);
			setCookie("slot4", "empty", 3650);
			setCookie("slot5", "empty", 3650);
			setCookie("slot6", "empty", 3650);
			setCookie("slot7", "empty", 3650);
			setCookie("slot8", "empty", 3650);
			setCookie("slot9", "empty", 3650);
			setCookie("slot1_value", 0, 3650);
			setCookie("slot2_value", 0, 3650);
			setCookie("slot3_value", 0, 3650);
			setCookie("slot4_value", 0, 3650);
			setCookie("slot5_value", 0, 3650);
			setCookie("slot6_value", 0, 3650);
			setCookie("slot7_value", 0, 3650);
			setCookie("slot8_value", 0, 3650);
			setCookie("slot9_value", 0, 3650);
			setCookie("balance", 0, 3650);
			setCookie("baie1", 0, 3650);
			setCookie("baie2", 0, 3650);
			setCookie("baie3", 0, 3650);
			setCookie("blueberry1", 0, 3650);
			setCookie("blueberry2", 0, 3650);
			setCookie("blueberry3", 0, 3650);
			setCookie("raisin1", 0, 3650);
			setCookie("raisin2", 0, 3650);
			setCookie("raisin3", 0, 3650);
			firstLoan();
			var slot = [];
			slot[1] = getCookie('slot1');
			slot[2] = getCookie('slot2');
			slot[3] = getCookie('slot3');
			slot[4] = getCookie('slot4');
			slot[5] = getCookie('slot5');
			slot[6] = getCookie('slot6');
			slot[7] = getCookie('slot7');
			slot[8] = getCookie('slot8');
			slot[9] = getCookie('slot9');
		}else{
			var actualBill = parseInt(getCookie('toPay'));
			if(actualBill < 3500){
				actualBill = 3500;
			}
			setCookie("week", parseInt(getCookie('week'))+1, 3650);
			var newBill = actualBill*2;
			setCookie('nextLoan', now, 3650);
			setCookie('isPaid', false, 3650);
			if(getCookie('difficulty') == '1'){
				setCookie("toPay", newBill, 3650);
			}else{
				setCookie("toPay", 3500, 3650);
			}
			if(lang == 0){
				alert('Payment of your bills has been received for this week !');
			}else{
				alert('Le paiement de vos factures ont bien été reçues pour cette semaine !');
			}
		}
	}
}

function pay(){
	var lang = getCookie('lang');
	var bal = parseInt(getCookie('balance'));
	var pay = parseInt(getCookie('toPay'));
	if(bal < pay){
		if(lang == 0){
			alert('insufficient funds');
		}else{
			alert('fonds insufisants');
		}
	}else{
		bal = bal-pay;
		document.getElementById('sfx').play();
		setCookie('balance', bal, 3650);
		setCookie('isPaid', true, 3650);
		showLoan();
	}
}

function showLoan(){
	var lang = getCookie('lang');
	if(getCookie('isPaid') == "true"){
		document.getElementById('payer').style.display = 'none';
	}
	var $paid = document.getElementById('paid');
	if(getCookie('isPaid') == 'true'){
		if(lang == 0){
			$paid.innerHTML = "　paid";
		}else{
			$paid.innerHTML = "　payé";
		}
		$paid.style.color = 'royalblue';
	}else{
		if(lang == 0){
			$paid.innerHTML = "　unpaid";
		}else{
			$paid.innerHTML = "　impayé";
		}
		$paid.style.color = 'darkred';
	}
	document.getElementById('toPay').innerHTML = getCookie('toPay');
	document.getElementById('balance').innerHTML = getCookie('balance');
}

function checkCards(){
	if(parseInt(getCookie('day')) < today()){
		setCookie('day', today(), 3650);
		setCookie('cardsToday', 0, 3650);
		if(parseInt(getCookie('difficulty')) == 1){
			setCookie('baie1', 0, 3650);
			setCookie('baie2', 0, 3650);
			setCookie('baie3', 0, 3650);
			setCookie('blueberry1', 0, 3650);
			setCookie('blueberry2', 0, 3650);
			setCookie('blueberry3', 0, 3650);
			setCookie('raisin1', 0, 3650);
			setCookie('raisin2', 0, 3650);
			setCookie('raisin3', 0, 3650);
			setTax();
			newCommand();
			setCookie('lotto', 0, 3650);
			if(getCookie('lang') == 0){
				alert('A new day is starting !\n・All your ingredients have suddenly rotten ...\n・New taxes has changed')
			}else{
				alert('Un nouveau jour commence !\n・Tous vos ingrédients ont soudainement pourris...\n・Les taxes ont changées')
			}
		}
	}
}

function today(){
	return Math.floor(new Date().getTime()/1000/60/60/24);
}

function setLang(lang){
	setCookie('lang' , lang, 3650);
	window.location = 'index.html';
}

function loadDeck(n){
	var str = "";
	var loop = true;
	var i = 1;
	while(loop){
		if(getCookie('deck'+n+'_'+i) != ""){
			i++;
		}else{
			var total = i-1;
			loop = false;
		}
	}
	i=0
	loop = true;
	while(loop){
		i++;
		str += getCookie('deck'+n+'_'+i);
		if(i == total){
			loop = false;
		}
	}
	str = str.replace(/\$/g, ';');
	final = str.split(';', 3);
	finalCookieDeck();
}

function chooseCookieDeck(n){
	var lang = getCookie('lang');
	if(getCookie('deck'+n+'_1') != ""){
		setCookie('cookieDeck', true, 3650);
		setCookie('deck', n, 3650);
		if(lang == 0){
			alert("Deck loaded !");
		}else{
			alert("Deck chargé !");
		}
	}else{
		if(lang == 0){
			alert("This deck slot is empty !\nClick on 'New Deck' button to create one");
		}else{
			alert("Cet emplacement de Deck est vide !\n Cliquer sur le bouton 'Nouveau Deck' pour en créer un");
		}
	}
}

function finalCookieDeck(){
	eval(final[0]);
	eval(final[1]);
	setTimeout(function(){initQuestion();},0);
}

function jeu2(){
	document.getElementById('showans').innerHTML = answers[nQuestion];
	if(getCookie('dico') == "jisho"){
		document.getElementById('showans').onclick = function(){window.open('https://jisho.org/search/'+questions[nQuestion], '_blank');};
	}else{
		document.getElementById('showans').onclick = function(){window.open('https://dictionary.writtenchinese.com/#sk='+questions[nQuestion]+'&svt=pinyin', '_blank');};
	}
	document.getElementById('showans').style.cursor = 'pointer';
	document.getElementById('showans').onmouseover = function(){document.getElementById('showans').style.background = '#EEE'};
	document.getElementById('showans').onmouseout = function(){document.getElementById('showans').style.background = 'white'};
	document.getElementById('answerbox2').style.display = "none";
	document.getElementsByClassName('ansbu')[0].style.display = "block";
	document.getElementsByClassName('ansbu')[1].style.display = "inline-block";
	document.getElementsByClassName('ansbu')[2].style.display = "inline-block";
}

function jeu2check(num){
	if(num == 1){
		document.getElementById('answer').value = answers[nQuestion].split(',')[0];
	}else{
		document.getElementById('answer').innerHTML = "";
	}	
		document.getElementById('showans').style.background = 'white';
		document.getElementById('showans').onmouseover = '';
		document.getElementById('showans').onmouseout = '';
		document.getElementById('showans').style.cursor = 'default';
		document.getElementById('showans').onclick = "";
		document.getElementById('showans').innerHTML = "? ? ?";
		document.getElementById('answerbox2').style.display = "inline-block";
		document.getElementsByClassName('ansbu')[0].style.display = "none";
		document.getElementsByClassName('ansbu')[1].style.display = "none";
		document.getElementsByClassName('ansbu')[2].style.display = "none";
		checkAnswer();
}

function chooseGame(num){
	setCookie('jeu', num, 3650);
	if(getCookie('lang') == 0){
		alert('game mode updated !');
	}else{
		alert('mode de jeu mis à jour !');
	}
}

function setDifficulty(n){
	setCookie('difficulty', n, 3650);
	if(n == 1){
		setTax();
		if(getCookie('lang') == 0){
			alert("Game's difficulty updated !\nPrepare to suffer...");
		}else{
			alert("Difficulté du jeu mis à jour !\nPrépare-toi à souffrir...");
		}
	}else{
		setCookie('tax1', 0, 3650);
		setCookie('tax1p', 0, 3650);
		setCookie('tax2', 0, 3650);
		setCookie('tax2p', 0, 3650);
		setCookie('tax3', 0, 3650);
		setCookie('tax3p', 0, 3650);
		var d = new Date();
		var today = d.getDay();
		var nextloan = 6 - today + 1;
		var totalLoan = nextloan * 500;
		setCookie("toPay", totalLoan, 3650);
		document.getElementById('toPay').innerHTML = getCookie('toPay');
		if(getCookie('lang') == 0){
			alert("Game's difficulty updated !\nWell, well, looks like a certain person changed his mind and wants to come back to cry baby difficulty...");
		}else{
			alert("Difficulté du jeu mis à jour !\nTiens, tiens, regardez qui revient en rampant...");
		}
	}
	setCookie('week', 1, 3650);
	document.getElementById('week').innerHTML = "1";
}

function setTax(){
	setCookie('taxval', Math.floor(Math.random()*50+25), 3650);
	
	var val = [1, 2, 3];
	var tax1 = val.splice(Math.random()*val.length,1)[0];
	setCookie('tax1', tax1, 3650);
	var tax1p = val.splice(Math.random()*val.length,1)[0];
	setCookie('tax1p', tax1p, 3650);

	val = [1, 2, 3];
	var tax2 = val.splice(Math.random()*val.length,1)[0];
	setCookie('tax2', tax2, 3650);
	var tax2p = val.splice(Math.random()*val.length,1)[0];
	setCookie('tax2p', tax2p, 3650);
	
	val = [1, 2, 3];
	var tax3 = val.splice(Math.random()*val.length,1)[0];
	setCookie('tax3', tax3, 3650);
	var tax3p = val.splice(Math.random()*val.length,1)[0];
	setCookie('tax3p', tax3p, 3650);
}

function showTax(){
	var tax1 = getCookie('tax1');
	var tax2 = getCookie('tax2');
	var tax3 = getCookie('tax3');
	var tax1p = getCookie('tax1p');
	var tax2p = getCookie('tax2p');
	var tax3p = getCookie('tax3p');
	var tax = getCookie('taxval');
	var t11 = document.getElementById('t11');
	t11.innerHTML = '0%';
	t11.style.color = 'black';
	var t12 = document.getElementById('t12');
	t12.innerHTML = '0%';
	t12.style.color = 'black';
	var t13 = document.getElementById('t13');
	t13.innerHTML = '0%';
	t13.style.color = 'black';
	var t21 = document.getElementById('t21');
	t21.innerHTML = '0%';
	t21.style.color = 'black';
	var t22 = document.getElementById('t22');
	t22.innerHTML = '0%';
	t22.style.color = 'black';
	var t23 = document.getElementById('t23');
	t23.innerHTML = '0%';
	t23.style.color = 'black';
	var t31 = document.getElementById('t31');
	t31.innerHTML = '0%';
	t31.style.color = 'black';
	var t32 = document.getElementById('t32');
	t32.innerHTML = '0%';
	t32.style.color = 'black';
	var t33 = document.getElementById('t33');
	t33.innerHTML = '0%';
	t33.style.color = 'black';
	switch(tax1){
		case '1':
		var doc = document.getElementById('t11');
		doc.innerHTML = '- '+tax+'%';
		doc.style.color = 'darkred';
		break

		case '2':
		var doc = document.getElementById('t12');
		doc.innerHTML = '- '+tax+'%';
		doc.style.color = 'darkred';
		break

		case '3':
		var doc = document.getElementById('t13');
		doc.innerHTML = '- '+tax+'%';
		doc.style.color = 'darkred';
		break
	}

	switch(tax2){
		case '1':
		var doc = document.getElementById('t21');
		doc.innerHTML = '- '+tax+'%';
		doc.style.color = 'darkred';
		break

		case '2':
		var doc = document.getElementById('t22');
		doc.innerHTML = '- '+tax+'%';
		doc.style.color = 'darkred';
		break

		case '3':
		var doc = document.getElementById('t23');
		doc.innerHTML = '- '+tax+'%';
		doc.style.color = 'darkred';
		break
	}

	switch(tax3){
		case '1':
		var doc = document.getElementById('t31');
		doc.innerHTML = '- '+tax+'%';
		doc.style.color = 'darkred';
		break

		case '2':
		var doc = document.getElementById('t32');
		doc.innerHTML = '- '+tax+'%';
		doc.style.color = 'darkred';
		break

		case '3':
		var doc = document.getElementById('t33');
		doc.innerHTML = '- '+tax+'%';
		doc.style.color = 'darkred';
		break
	}

	switch(tax1p){
		case '1':
		var doc = document.getElementById('t11');
		doc.innerHTML = '+ '+tax+'%';
		doc.style.color = 'royalblue';
		break

		case '2':
		var doc = document.getElementById('t12');
		doc.innerHTML = '+ '+tax+'%';
		doc.style.color = 'royalblue';
		break

		case '3':
		var doc = document.getElementById('t13');
		doc.innerHTML = '+ '+tax+'%';
		doc.style.color = 'royalblue';
		break
	}

	switch(tax2p){
		case '1':
		var doc = document.getElementById('t21');
		doc.innerHTML = '+ '+tax+'%';
		doc.style.color = 'royalblue';
		break

		case '2':
		var doc = document.getElementById('t22');
		doc.innerHTML = '+ '+tax+'%';
		doc.style.color = 'royalblue';
		break

		case '3':
		var doc = document.getElementById('t23');
		doc.innerHTML = '+ '+tax+'%';
		doc.style.color = 'royalblue';
		break
	}

	switch(tax3p){
		case '1':
		var doc = document.getElementById('t31');
		doc.innerHTML = '+ '+tax+'%';
		doc.style.color = 'royalblue';
		break

		case '2':
		var doc = document.getElementById('t32');
		doc.innerHTML = '+ '+tax+'%';
		doc.style.color = 'royalblue';
		break

		case '3':
		var doc = document.getElementById('t33');
		doc.innerHTML = '+ '+tax+'%';
		doc.style.color = 'royalblue';
		break
	}
}

function sellStock(name){
	var total = parseInt(document.getElementById(name).innerHTML);
	var val = 0;
	var bal = parseInt(getCookie('balance'));
	var iName = "";
	var iImg = "";
	switch(name){
		case 'baie1':
		val = 5;
		iName = "Sac de Baies";
		iImg = "bagberry";
		break

		case 'baie2':
		val = 25;
		iName = "Baies délicieuses";
		iImg = "bagberry2";
		break

		case 'baie3':
		val = 57;
		iName = "Baies délicieuses";
		iImg = "berry";
		break

		case 'blueberry1':
		val = 16;
		iName = "Sac de Myrtilles";
		iImg = "bagblueberry";
		break

		case 'blueberry2':
		val = 75;
		iName = "Myrtilles Envoûtantes";
		iImg = "bagblueberry";
		break

		case 'blueberry3':
		val = 250;
		iName = "Myrtilles Parfaites";
		iImg = "blueberry";
		break

		case 'raisin1':
		val = 62;
		iName = "Sac de Raisins";
		iImg = "bagraisin";
		break

		case 'raisin2':
		val = 166;
		iName = "Raisins Savoureux";
		iImg = "bagraisin2";
		break

		case 'raisin3':
		val = 625;
		iName = "Raisins Parfaits";
		iImg = "raisin";
		break
	}
		bal = bal+val*total;
		setCookie('balance', bal, 3650);
		setCookie(name, 0, 3650);
		document.getElementById('kaching').play();
		document.getElementById('potionName').innerHTML = iName;
		document.getElementById('nprice').innerHTML = "+ "+val*total;
		document.getElementById('super').style.display = 'block';
		document.getElementById('price').style.color = 'royalblue';
		document.getElementById('youMade').style.backgroundImage = "url('img/ingredients/"+iImg+".png')";
		setTimeout(function(){document.getElementById('super').style.display = 'none';}, 2000)
		showPossess();
}

function endCommand(n){
	var total = getCookie('c'+n+'n');
	var name = document.getElementById('name'+n).innerHTML;
	var val = 0;
	var bal = parseInt(getCookie('balance'));
	var money = 0;
	var res = "";
	switch(name){
		case "Sac de baies":
		val = 13;
		res = 'baie1';
		break

		case "Sac de raisins":
		val = 163;
		res = 'raisin1';
		break

		case "Sac de myrtilles":
		val = 50;
		res = 'blueberry1';
		break

		case "Baies délicieuses":
		val = 38;
		res = 'baie2';
		break

		case "Myrtilles envoûtantes":
		val = 150;
		res = 'blueberry2';
		break

		case "Raisins savoureux":
		val = 300;
		res = 'raisin2';
		break

		case "Baies parfaites":
		val = 113;
		res = 'baie3';
		break

		case "Myrtilles parfaites":
		val = 350;
		res = 'blueberry3';
		break

		case "Raisins parfaits":
		val = 1250;
		res = 'raisin3';
		break
	}
	if(parseInt(getCookie(res)) >= total){
			money = val * total * 2;
			setCookie(res, parseInt(getCookie(res)) - total, 3650);
			setCookie('balance', bal + money, 3650);
			document.getElementById('sfx').play();
			setCookie('c'+n+'done', true, 3650);
			document.getElementById('balance').innerHTML = getCookie('balance');
		}else{
			if(getCookie('lang') == '0'){
				alert('insufficient ingredients !');
			}else{
				alert('ingrédients insuffisants !');
			}
		}
	showCommand();
	setCookie('comComp', parseInt(getCookie('comComp'))+1, 3650);
	if(getCookie('comComp') == 3){
		setCookie('balance', parseInt(getCookie('balance'))+500, 3650);	
		setCookie('comComp', 0, 3650);
		if(getCookie('lang') == '0'){
			document.getElementById('potionName').innerHTML = 'Bonus Commandes Complètes';
		}else{
			document.getElementById('potionName').innerHTML = 'All Complete Bonus';
		}
		document.getElementById('prize').play();
		document.getElementById('nprice').innerHTML = "+ 500";
		document.getElementById('price').style.color = 'royalblue';
		document.getElementById('super').style.display = "block";
		setTimeout(function(){document.getElementById('super').style.display = 'none';}, 2000)
		document.getElementById('balance').innerHTML = getCookie('balance');
	}
}

function showCommand(){
	//var money1 = val1 * total;
	var name1 = getCookie('c1w');
	var name2 = getCookie('c2w');
	var name3 = getCookie('c3w');
	var num1 = getCookie('c1n');
	var num2 = getCookie('c2n');
	var num3 = getCookie('c3n');
	var val1 = 0;
	var val2 = 0;
	var val3 = 0;
	var iImg1 = "";
	var iImg2 = "";
	var iImg3 = "";
	document.getElementById('value1').innerHTML = num1;
	document.getElementById('value2').innerHTML = num2;
	document.getElementById('value3').innerHTML = num3;

	switch(name1){
		case '1':
		if(getCookie('lang') == "0"){
			name1 = "Bag of berries";
		}else{
			name1 = "Sac de baies";
		}
		iImg1 = "bagberry";
		val1 = 13;
		break

		case '2':
		if(getCookie('lang') == "0"){
			name1 = "Delicious berries";
		}else{
			name1 = "Baies délicieuses";
		}
		iImg1 = "bagberry2";
		val1 = 38;
		break

		case '3':
		if(getCookie('lang') == "0"){
			name1 = "Perfect berries";
		}else{
			name1 = "Baies parfaites";
		}
		iImg1 = "berry";
		val1 = 113;
		break
	}
	switch(name2){
		case '1':
		if(getCookie('lang') == "0"){
			name2 = "Bag of blueberries";
		}else{
			name2 = "Sac de myrtilles";
		}
		iImg2 = "bagblueberry";
		val2 = 50;
		break

		case '2':
		if(getCookie('lang') == "0"){
			name2 = "Enchanting blueberries";
		}else{
			name2 = "Myrtilles envoûtantes";
		}
		iImg2 = "bagblueberry2";
		val2 = 150;
		break

		case '3':
		if(getCookie('lang') == "0"){
			name2 = "Perfect blueberries";
		}else{
			name2 = "Myrtilles parfaites";
		}
		iImg2 = "blueberry";
		val2 = 350;
		break
	}
	switch(name3){
		case '1':
		if(getCookie('lang') == "0"){
			name3 = "Bag of grapes";
		}else{
			name3 = "Sac de raisins";
		}
		iImg3 = "bagraisin";
		val3 = 163;
		break

		case '2':
		if(getCookie('lang') == "0"){
			name3 = "Succulent grapes";
		}else{
			name3 = "Raisins savoureux";
		}
		iImg3 = "bagraisin2";
		val3 = 300;
		break

		case '3':
		if(getCookie('lang') == "0"){
			name3 = "Perfect grapes";
		}else{
			name3 = "Raisins parfaits";
		}
		iImg3 = "raisin";
		val3 = 1250;
		break
	}
	var money1 = val1 * num1 * 2;
	var money2 = val2 * num2 * 2;
	var money3 = val3 * num3 * 2;
	document.getElementById('mon1').innerHTML = money1;
	document.getElementById('mon2').innerHTML = money2;
	document.getElementById('mon3').innerHTML = money3;
	document.getElementById('name1').innerHTML = name1;
	document.getElementById('name2').innerHTML = name2;
	document.getElementById('name3').innerHTML = name3;
	document.getElementById('img1').src = 'img/ingredients/'+iImg1+'.png';
	document.getElementById('img2').src = 'img/ingredients/'+iImg2+'.png';
	document.getElementById('img3').src = 'img/ingredients/'+iImg3+'.png';

	if(getCookie('c1done') == 'true'){
		document.getElementById('b1').removeAttribute('onclick');
		if(getCookie('lang') == '0'){
			document.getElementById('b1').innerHTML = "completed";
		}else{
			document.getElementById('b1').innerHTML = "validé";
		}
		document.getElementById('b1').style.background = "white";
		document.getElementById('b1').style.color = "black";
		document.getElementById('b1').style.cursor = "default";
	}

	if(getCookie('c2done') == 'true'){
		document.getElementById('b2').removeAttribute('onclick');
		if(getCookie('lang') == '0'){
			document.getElementById('b2').innerHTML = "completed";
		}else{
			document.getElementById('b2').innerHTML = "validé";
		}
		document.getElementById('b2').style.background = "white";
		document.getElementById('b2').style.color = "black";
		document.getElementById('b2').style.cursor = "default";
	}

	if(getCookie('c3done') == 'true'){
		document.getElementById('b3').removeAttribute('onclick');
		if(getCookie('lang') == '0'){
			document.getElementById('b3').innerHTML = "completed";
		}else{
			document.getElementById('b3').innerHTML = "validé";
		}
		document.getElementById('b3').style.background = "white";
		document.getElementById('b3').style.color = "black";
		document.getElementById('b3').style.cursor = "default";
	}
}

function newCommand(){
	var n1 = Math.floor(Math.random()*5+3);
	var n2 = Math.floor(Math.random()*5+2);
	var n3 = Math.floor(Math.random()*3+1);
	setCookie('c1w', Math.floor(Math.random()*3+1), 3650);
	setCookie('c2w', Math.floor(Math.random()*3+1), 3650);
	setCookie('c3w', Math.floor(Math.random()*3+1), 3650);
	setCookie('c1n', n1, 3650);
	setCookie('c2n', n2, 3650);
	setCookie('c3n', n3, 3650);
	setCookie('c1done', false, 3650);
	setCookie('c2done', false, 3650);
	setCookie('c3done', false, 3650);
}

function oeuf(){
	var money = parseInt(getCookie('balance'));
	var gain = Math.floor(Math.random()*7776)+1;
	var tentative = getCookie('lotto');
	var lotto = getCookie('lotto');
	if(lotto == ""){
		setCookie('lotto', 0, 3650);
		var lotto = getCookie('lotto');
	}
	if(parseInt(lotto) < 5){
		if(money >= 3500){
		setCookie('lotto', parseInt(lotto)+1, 3650);
		money = money-3500+gain;
		setCookie('balance', money, 3650);
		document.getElementById('prize').play();
		document.getElementById('potionName').innerHTML = 'Oeuf loterie';
		if(getCookie('lang') == '0'){
			document.getElementById('potionName').innerHTML = 'Lottery egg';
		}
		document.getElementById('nprice').innerHTML = "+ "+gain;
		document.getElementById('super').style.display = 'block'
		document.getElementById('youMade').style.backgroundColor = '#FBF';
		document.getElementById('price').style.color = 'royalblue';
		document.getElementById('youMade').style.backgroundImage = "url('img/ingredients/oeuf.png')";
		setTimeout(function(){document.getElementById('super').style.display = 'none';document.getElementById('youMade').style.backgroundColor = 'white';}, 3750);
		}else{
			if(getCookie('lang') == "0"){
				alert('insufficient funds !');
			}else{
				alert('fonds insufisants !');
			}
		}
	}else{
		if(getCookie('lang') == '0'){
			alert('Reached your daily limit of 5 each day !')
		}else{
			alert('Atteinte de votre limite quotidienne de 5 par jour !')
		}
	}
}

function reTax(){
	var money = parseInt(getCookie('balance'));
	if(money >= 500){
		money = money - 500;
		setCookie('balance', money, 3650);
		document.getElementById('prize').play();
		document.getElementById('potionName').innerHTML = 'Pot-de-vin';
		if(getCookie('lang') == '0'){
			document.getElementById('potionName').innerHTML = 'Bribe';
		}
		document.getElementById('nprice').innerHTML = "- "+500;
		document.getElementById('super').style.display = 'block';
		document.getElementById('price').style.color = 'darkred';
		document.getElementById('youMade').style.backgroundColor = '#FBF';
		document.getElementById('youMade').style.backgroundImage = "url('img/ingredients/potdevin.png')";
		setTax();
		showTax();
		setTimeout(function(){document.getElementById('super').style.display = 'none';document.getElementById('youMade').style.backgroundColor = 'white';}, 3750);
		
	}else{
		if(getCookie('lang') == "0"){
			alert('insufficient funds !');
		}else{
			alert('fonds insufisants !');
		}
	}
}

function reCommand(){
	var money = parseInt(getCookie('balance'));
	if(money >= 500){
		setCookie('balance', money-500, 3650);
		document.getElementById('prize').play();
		document.getElementById('potionName').innerHTML = 'Secrets de marchands';
		if(getCookie('lang') == '0'){
			document.getElementById('potionName').innerHTML = 'Bribe';
		}
		document.getElementById('nprice').innerHTML = "- "+500;
		document.getElementById('super').style.display = 'block'
		document.getElementById('price').style.color = 'darkred';
		document.getElementById('youMade').style.backgroundColor = '#FBF';
		document.getElementById('youMade').style.backgroundImage = "url('img/ingredients/book.png')";
		newCommand();
		setTimeout(function(){document.getElementById('super').style.display = 'none';document.getElementById('youMade').style.backgroundColor = 'white';}, 3750)
	}else{
		if(getCookie('lang') == "0"){
			alert('insufficient funds !');
		}else{
			alert('fonds insufisants !');
		}
	}	
}

function setDico(dico){
	if(dico == "jisho"){
		setCookie('dico', "jisho", 3650);
	}else{
		setCookie('dico', "writtenchinese", 3650);
	}
	if(getCookie('lang') == "0"){
		alert("Updated !");
	}else{
		alert("Mis à jour !");
	}
}