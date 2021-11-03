
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
	var i = 1;
	var price = 0;
	var pName = "";
	switch(item){
		case 'red3':
		price = Math.floor(Math.random()*15)+10;
		if(lang == 0){
			pName = "Fruity soda";
		}else{
			pName = "Limonade fruitée";
		}
		break

		case 'red2':
		price = Math.floor(Math.random()*25)+50;
		if(lang == 0){
			pName = "Cough syrup";
		}else{
			pName = "Sirop pour la toux";
		}
		break

		case 'red1':
		price = Math.floor(Math.random()*110)+115;
		pName = "Mayonnaise";
		break

		case 'blue3':
		price = Math.floor(Math.random()*66)+33;
		if(lang == 0){
			pName = "Liquid laundry";
		}else{
			pName = "Lessive liquide";
		}
		break

		case 'blue2':
		price = Math.floor(Math.random()*150)+150;
		if(lang == 0){
			pName = "Cooling liquid";
		}else{
			pName = "Liquide de refroidissement";
		}
		break

		case 'blue1':
		price = Math.floor(Math.random()*500)+500;
		if(lang == 0){
			pName = "Acid solution";
		}else{
			pName = "Solution acide";
		}
		break

		case 'purple3':
		price = Math.floor(Math.random()*200)+125;
		pName = "Anti-poison";
		break

		case 'purple2':
		price = Math.floor(Math.random()*267)+333;
		if(lang == 0){
			pName = "Lavender perfume";
		}else{
			pName = "Parfum Lavande";
		}
		break

		case 'purple1':
		price = Math.floor(Math.random()*1250)+1250;
		if(lang == 0){
			pName = "Candy liquor";
		}else{
			pName = "Liqueur bonbon";
		}
		break

		case 'wine':
		price = Math.floor(Math.random()*5000)+5000;
		if(lang == 0){
			pName = "Universal remedy";
		}else{
			pName = "Remède universel";
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
						pName = "Acid solution";
					}else{
						pName = "Solution acide";
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

					case 'wine':
					if(lang == 0){
						pName = "Universal remedy";
					}else{
						pName = "Remède universel";
					}
					break
				}
				document.getElementById('potionName').innerHTML = pName;
				document.getElementById('price').style.color = 'green';
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
	setCookie('balance', currentMoney+parseInt(getCookie('slot'+nslot+"_value")), 3650);
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
		if(need >= 2){
			setCookie("baie1", parseInt(getCookie('baie1'))-2, 3650);
			setCookie("baie2", parseInt(getCookie('baie2'))+1, 3650);
			document.getElementById('baie1').innerHTML = getCookie("baie1");
			document.getElementById('baie2').innerHTML = getCookie("baie2");
			sfx.play();
		}else{
			var missing = 2 - need;
			if(lang == 0){
				alert('missing ingredient(s) : x'+missing+' bag of berries')
			}else{
				alert('il vous manque les ingrédients suivants : x'+missing+' sace de baies')
			}
		}
		break

		case 'baie3':
		var need = parseInt(getCookie('baie2'));
		if(need >= 2){
			setCookie("baie2", parseInt(getCookie('baie2'))-2, 3650);
			setCookie("baie3", parseInt(getCookie('baie3'))+1, 3650);
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
		if(need >= 2){
			setCookie("blueberry1", parseInt(getCookie('blueberry1'))-2, 3650);
			setCookie("blueberry2", parseInt(getCookie('blueberry2'))+1, 3650);
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
		if(need >= 2){
			setCookie("blueberry2", parseInt(getCookie('blueberry2'))-2, 3650);
			setCookie("blueberry3", parseInt(getCookie('blueberry3'))+1, 3650);
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
		if(need >= 2){
			setCookie("raisin1", parseInt(getCookie('raisin1'))-2, 3650);
			setCookie("raisin2", parseInt(getCookie('raisin2'))+1, 3650);
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
		if(need >= 2){
			setCookie("raisin2", parseInt(getCookie('raisin2'))-2, 3650);
			setCookie("raisin3", parseInt(getCookie('raisin3'))+1, 3650);
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
				setCookie("baie1", parseInt(getCookie('baie1'))-2, 3650);
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
				setCookie("baie2", parseInt(getCookie('baie2'))-2, 3650);
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
				setCookie("baie3", parseInt(getCookie('baie3'))-2, 3650);
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
				setCookie("blueberry3", parseInt(getCookie('blueberry3'))-2, 3650);
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
				setCookie("blueberry2", parseInt(getCookie('blueberry2'))-2, 3650);
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
				setCookie("blueberry1", parseInt(getCookie('blueberry1'))-2, 3650);
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
				setCookie("raisin3", parseInt(getCookie('raisin3'))-2, 3650);
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
				setCookie("raisin2", parseInt(getCookie('raisin2'))-2, 3650);
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
				setCookie("raisin1", parseInt(getCookie('raisin1'))-2, 3650);
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
		
		case 'wine':
		var full = isInvFull();
		if(full == true){
			var need1 = parseInt(getCookie('baie3'));
			var need2 = parseInt(getCookie('blueberry3'));
			var need3 = parseInt(getCookie('raisin3'));
			if(need1 >= 2 && need2 >= 2 && need3 >= 2){
				setCookie("baie3", parseInt(getCookie('baie3'))-2, 3650);
				document.getElementById('baie3').innerHTML = getCookie('baie3');
				setCookie("blueberry3", parseInt(getCookie('blueberry3'))-2, 3650);
				document.getElementById('blueberry3').innerHTML = getCookie('blueberry3');
				setCookie("raisin3", parseInt(getCookie('raisin3'))-2, 3650);
				document.getElementById('raisin3').innerHTML = getCookie('raisin3');
				add('wine');
				document.getElementById('prize').play();
				setCookie('lastTime', getTime(), 3650);
			}else{
				var msg = "missing ingredient(s) : ";
				if(need1 < 2){
					var missing = 2 - need1;
					msg += '\nx'+missing+' perfect berries';
				}
				if(need2 < 2){
					var missing = 2 - need2;
					msg += '\nx'+missing+' perfect blueberries';
				}
				if(need3 < 2){
					var missing = 2 - need3;
					msg += '\nx'+missing+' perfect grapes';
				}
				alert(msg);
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
		document.getElementById('goodAnswer').style.display = 'none';
		document.getElementById('prize').play();
		setTimeout(function(){progression = 0;document.getElementById('hoho').style.display = 'none';document.getElementById('question').style.display = 'inline-block';document.getElementById('goodAnswer').style.display = 'inline-block';document.getElementById('answerbox').style.display = 'block';document.getElementById('progress').style.width = "0%";}, 3000);
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
	var comp = answers[nQuestion].split(',');
	for(i=0; i < comp.length ;i++){
		if(user == comp[i]){
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
			bar(100);
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
	document.getElementById('goodAnswer').onclick = function(){window.open('https://jisho.org/search/'+questions[nQuestion-1], '_blank');};
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
	var d = new Date();
	var today = d.getDay();
	var nextloan = 6 - today + 1;
	var totalLoan = nextloan * 500;
	setCookie("toPay", totalLoan, 3650);
	setCookie("isPaid", false, 3650);
	var now = Math.floor(new Date().getTime()/1000/60/60/24/7);
	setCookie("nextLoan", now, 3650);
}

function checkLoan(){
	var lang = getCookie('lang');
	var now = Math.floor(new Date().getTime()/1000/60/60/24/7);
	if(now > parseInt(getCookie('nextLoan'))){
		if(getCookie('isPaid') == 'false'){
			if(lang == 0){
				alert('/!\\ Game over /!\\\nReason: Unpaid bills\nNew game will start');
			}else{
				alert('/!\\ Game over /!\\\nRaison: Factures impayées\nDébut d\'une nouvelle partie');
			}
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
			setCookie('nextloan', now, 3650);
			setCookie('isPaid', false, 3650);
			setCookie("toPay", 7000, 3650);
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
	if(getCookie('balance') < getCookie('toPay')){
		if(lang == 0){
			alert('insufficient funds');
		}else{
			alert('fonds insufisants');
		}
	}else{
		document.getElementById('sfx').play();
		setCookie('balance', parseInt(getCookie('balance'))-parseInt(getCookie('toPay')), 3650)
		setCookie('isPaid', true, 3650);
		setCookie("toPay", 0, 3650);
		showLoan();
	}
}

function showLoan(){
	var lang = getCookie('lang');
	if(parseInt(getCookie('toPay')) == 0){
		document.getElementById('payer').style.display = 'none';
	}
	var $paid = document.getElementById('paid');
	if(getCookie('isPaid') == 'true'){
		if(lang == 0){
			$paid.innerHTML = "　paid";
		}else{
			$paid.innerHTML = "　payé";
		}
		$paid.style.color = 'green';
	}else{
		if(lang == 0){
			$paid.innerHTML = "　unpaid";
		}else{
			$paid.innerHTML = "　impayé";
		}
		$paid.style.color = 'red';
	}
	document.getElementById('toPay').innerHTML = getCookie('toPay');
	document.getElementById('balance').innerHTML = getCookie('balance');
}

function checkCards(){
	if(parseInt(getCookie('day')) < today()){
		setCookie('day', today(), 3650);
		setCookie('cardsToday', 0, 3650);
	}
}

function today(){
	return Math.round(new Date().getTime()/1000/60/60/24);
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