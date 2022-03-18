
function goto(page){
	location.href='index.html?p='+page;
}

function updateFulldeck(bool){
	if(bool == 1){
		// full deck random
		setCookie('fulldeck', 'true', 3650);
		setCookie('randomness', 'true', 3650);
		document.getElementById('fullrandom').style.color = 'skyblue';
		document.getElementById('fullordered').style.color = 'lightgrey';
		document.getElementById('random').style.color = 'lightgrey';
		document.getElementById('startid').style.display = 'none';
		setCookie("startnum", '1', 3650);
	}else if(bool == 2){
		// full deck ordre
		setCookie('fulldeck', 'true', 3650);
		setCookie('randomness', 'false', 3650);
		setCookie("startnum", '1', 3650);
		document.getElementById('fullrandom').style.color = 'lightgrey';
		document.getElementById('fullordered').style.color = 'skyblue';
		document.getElementById('random').style.color = 'lightgrey';
		document.getElementById('inputid').placeholder = getCookie('startnum');
		document.getElementById('startid').style.display = 'inline';
	}else{
		// 15 random
		setCookie('fulldeck', 'false', 3650);
		setCookie('randomness', 'true', 3650);
		setCookie("startnum", '1', 3650);
		document.getElementById('fullrandom').style.color = 'lightgrey';
		document.getElementById('fullordered').style.color = 'lightgrey';
		document.getElementById('random').style.color = 'skyblue';
		document.getElementById('startid').style.display = 'none';
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

	if(getCookie('randomness') == 'false'){
		answers = ans;
		questions = quest;
		numberofquestions = max;
		nQuestion = parseInt(getCookie('startnum'))-1;
	}else{
		for(i = 0; i < numberofquestions; ++i){
			var n = values.splice(Math.random()*values.length,1)[0];
			questions.push(quest[n]);
			answers.push(ans[n]);
			if(getCookie('randomness') == 'false'){
				nQuestion = parseInt(getCookie('startnum'))-1;
			}else{
				nQuestion = 1;
			}
		}
	}
	newQuestion();
}

function newQuestion(){
	if(questions[nQuestion] != undefined){
		document.getElementById('question').innerHTML = questions[nQuestion];
		document.getElementById('cid').innerHTML = nQuestion+1;
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
		return
	}

	if(user == '/j'){
		window.open('https://jisho.org/search/'+questions[nQuestion-1], '_blank');
		return
	}

	if(user == '/w'){
		window.open('https://www.weblio.jp/content/'+questions[nQuestion-1], '_blank');
		return
	}

	if(user == '/r'){
		window.open('https://budouen.github.io/reibun/?w='+questions[nQuestion-1], '_blank');
		return
	}

	if(user == '」' || user == '$'){
		for(x = 0 ; memo.length >= x ; x++){
			var prememo = questions[nQuestion-1]+"　"+answers[nQuestion-1];
			if(prememo == "　"){
				return
			}
			if(memo[x] != prememo){
				memo.push(prememo);
				return
			}else{
				return
			}
		}
	}

	if(user == '￥' || user == '*'){
		var show = '';
		for(x = 0 ; memo.length > x ; x++){
			show += memo[x]+'\n';
		}
		alert(show);
		return
	}
	
	var comp = answers[nQuestion].split(',');
	for(i=0; i < comp.length ;i++){
		if(user.toUpperCase() == comp[i].replace(/’/g, "'").toUpperCase()){
			correct = true;
		}
	}
	if(correct == true){
		totalseen++;
		totalcorrect++;
		setCookie('cardsToday', parseInt(getCookie('cardsToday'))+1, 3650);
		document.getElementById('cards').innerHTML = getCookie('cardsToday');
		document.getElementById('goodAnswer').style.color = 'lawngreen';
		document.getElementById('correct').play();
	}else{
		totalseen++;
		document.getElementById('goodAnswer').style.color = 'skyblue';
		document.getElementById('wrong').play();
		var forLaterQ = questions[nQuestion];
		var forLaterA = answers[nQuestion];
		wrongQ.push(forLaterQ);
		wrongA.push(forLaterA);
	}
	var ratio = Math.round(totalcorrect/totalseen*100);
	document.getElementById('perc').innerHTML = ratio+'%';
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
		document.getElementById('deckLink').value = '';
		document.getElementById('deckLink').placeholder = url;
	}
}

function updateJLPT(n){
	setCookie('cookieDeck', false, 3650);
	setCookie('deck', 'deck/'+n+'.js', 3650);
	document.getElementById('deckLink').placeholder = "deck/"+n+".js";
}

function upcolor(){
	this.style.color = 'purple';
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
	if(num == 1){
		document.getElementById('kotoba').style.color = 'skyblue';
		document.getElementById('anki').style.color = 'lightgrey';
	}else{
		document.getElementById('anki').style.color = 'skyblue';
		document.getElementById('kotoba').style.color = 'lightgrey';
	}
}

function setDico(dico){
	if(dico == "jisho"){
		setCookie('dico', "jisho", 3650);
		document.getElementById('dicojisho').style.color = 'skyblue';
		document.getElementById('dicochinese').style.color = 'lightgrey';
	}else{
		setCookie('dico', "writtenchinese", 3650);
		document.getElementById('dicojisho').style.color = 'lightgrey';
		document.getElementById('dicochinese').style.color = 'skyblue';
	}
}

function checkrandomness(){
	if(getCookie('randomness') == 'false'){
		document.getElementById('cardId').style.display = 'block';
	}
}

function checkrandomnessmenu(){
	if(getCookie('randomness') == 'false'){
		document.getElementById('startid').style.display = 'inline';
	}
}

function choosestart(){
	var number = document.getElementById('inputid').value;
	setCookie("startnum", number, 3650);
	document.getElementById('inputid').placeholder = getCookie('startnum');
	document.getElementById('inputid').value = '';
}

function checkcolors(){
	if(getCookie('jeu') == '1'){
		document.getElementById('kotoba').style.color = 'skyblue';
		document.getElementById('anki').style.color = 'lightgrey';	
	}else{
		document.getElementById('kotoba').style.color = 'lightgrey';
		document.getElementById('anki').style.color = 'skyblue';
	}

	if(getCookie('dico') == 'jisho'){
		document.getElementById('dicojisho').style.color = 'skyblue';
		document.getElementById('dicochinese').style.color = 'lightgrey';
	}else{
		document.getElementById('dicojisho').style.color = 'lightgrey';
		document.getElementById('dicochinese').style.color = 'skyblue';
	}

	if(getCookie('fulldeck') == 'true'){
		if(getCookie('randomness') == 'true'){
			document.getElementById('fullrandom').style.color = 'skyblue';
			document.getElementById('fullordered').style.color = 'lightgrey';
			document.getElementById('random').style.color = 'lightgrey';
		}else{
			document.getElementById('fullrandom').style.color = 'lightgrey';
			document.getElementById('fullordered').style.color = 'skyblue';
			document.getElementById('random').style.color = 'lightgrey';
		}
	}else{
		document.getElementById('fullrandom').style.color = 'lightgrey';
		document.getElementById('fullordered').style.color = 'lightgrey';
		document.getElementById('random').style.color = 'skyblue';
	}
}