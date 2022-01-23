
function goto(page){
	location.href='index.html?p='+page;
}

function updateFulldeck(bool){
	var lang = getCookie('lang');
	if(bool == true){
		setCookie('fulldeck', 'true', 3650);
	}else{
		setCookie('fulldeck', 'false', 3650);
	}
	if(lang == '0'){
		alert('updated !');
	}else{
		alert('mis à jour !');
	}
}

function getTime(){
	return Math.round(new Date().getTime()/1000/60);
}

function initQuestion(fail){
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
	if(getCookie('fulldeck') == 'false'){
		var numberofquestions = 15;
	}else{
		var numberofquestions = max;
	}
	for(i = 0; i < numberofquestions; ++i){
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
	if(user == 'switchlanguage'){
		if(getCookie('lang') == '0'){
			setCookie('lang', 1, 3650);
		}else{
			setCookie('lang', 0, 3650);
		}
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
		totalseen++;
		totalcorrect++;
		setCookie('cardsToday', parseInt(getCookie('cardsToday'))+1, 3650);
		document.getElementById('cards').innerHTML = getCookie('cardsToday');
		document.getElementById('ncombo').innerHTML = combo;
		document.getElementById('goodAnswer').style.color = '#9CF';
		document.getElementById('correct').play();
	}else{
		totalseen++;
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
	var ratio = Math.round(totalcorrect/totalseen*100);
	document.getElementById('perc').innerHTML = ratio+'%';
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

function checkCards(){
	if(parseInt(getCookie('day')) < today()){
		setCookie('day', today(), 3650);
		setCookie('cardsToday', 0, 3650);
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
		alert('updated !');
	}else{
		alert('mis à jour !');
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