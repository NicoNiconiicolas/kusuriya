let failed = 'nope';
let achieved = false;

function goto(page){
	window.open('cartory/index.html', '_blank');
}

function bar(perc){
	document.getElementById('progress').style.width = perc+"%";
}

function initQuestion(fail){
	diviseur = 100/quest.length;
	if(fail == false){
		lastQ2 = questions[questions.length-1]
		lastA2 = answers[answers.length-1]
		lastC2 = recomment[recomment.length-1]
	}
	questions = [];
	answers = [];
	recomment = [];
	questions.push(lastQ2);
	answers.push(lastA2);
	recomment.push(lastC2);
	max = quest.length;
	var values = [];
	for (i = 0; i < max; ++i){
    	values.push(i);
	}
	
	var numberofquestions = max;
		for(i = 0; i < numberofquestions; ++i){
		var n = values.splice(Math.random()*values.length,1)[0];
		questions.push(quest[n]);
		answers.push(ans[n]);
		recomment.push(comment[n]);
		nQuestion = 1;
	}
	newQuestion();
}

function newQuestion(){
	if(failed == 'failed'){
		document.getElementById('cid').style.display = 'none';
	}else{
		document.getElementById('cid').style.display = 'inline-block';
	}
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

	if(user == '/miss'){
		failedInit();
		return
	}

	if(user == '」' || user == '$'){
		addmemo();
		return
	}

	if(user == '￥' || user == '*'){
		showmemo();
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
		document.getElementById('goodAnswer').style.color = 'deepskyblue';
		document.getElementById('correct').play();
		progression = progression+diviseur;
		bar(progression);
	}else{
		totalseen++;
		document.getElementById('goodAnswer').style.color = 'red';
		document.getElementById('wrong').play();
		var forLaterQ = questions[nQuestion];
		var forLaterA = answers[nQuestion];
		var forLaterC = recomment[nQuestion];
		wrongQ.push(forLaterQ);
		wrongA.push(forLaterA);
		wrongC.push(forLaterC);
	}
	document.getElementById('goodAnswer').innerHTML = questions[nQuestion]+" => "+answers[nQuestion];
	document.getElementById('comtitle').innerHTML = questions[nQuestion]+" => "+answers[nQuestion];
	if(recomment[nQuestion] != undefined){
		document.getElementById('compar').innerHTML = recomment[nQuestion].replace(/\n/g, '<br>');
	}
	document.getElementById('goodAnswer').onclick = function(){window.open('https://jisho.org/search/'+questions[nQuestion-1], '_blank');};
	nQuestion ++;
	newQuestion();
}

function showmemo(){
	var show = '';
	for(x = 0 ; memo.length > x ; x++){
		show += memo[x]+'<br>';
	}
	document.getElementById('memocont').innerHTML = show;
	openmemo();
}

function addmemo(){
	var exist = false;
		for(x = 0 ; x <= memo.length ; x++){
			var prememo = questions[nQuestion-1];
			if(prememo == ""){
				return
			}

			if(memo[x] == prememo){
				exist = true;
			}
		}
		if(exist != true){
		memo.push(prememo);				
	}
}

function closememo(){
	document.getElementById('memo').style.display = 'none';
	document.getElementById('combo').style.display = 'block';
}

function openmemo(){
	document.getElementById('memo').style.display = 'block';
	document.getElementById('combo').style.display = 'none';
}

function failedInit(){
	max = wrongA.length;
	console.log(max+' failed');
	if(max != 0){
		lastQ = questions[questions.length-1];
		lastA = answers[answers.length-1];
		lastC = recomment[recomment.length-1];
		console.log("last question was : "+lastQ)
		questions = [];
		answers = [];
		recomment = [];
		questions.push(lastQ);
		answers.push(lastA);
		recomment.push(lastC);
		var values = [];
		for (i = 0; i < max; ++i){
		   	values.push(i);
		}
		for(i = 0; i < max; ++i){
			var n = values.splice(Math.random()*values.length,1)[0];
			questions.push(wrongQ[n]);
			answers.push(wrongA[n]);
			recomment.push(wrongC[n]);
		}
		nQuestion = 1;
		lastQ2 = wrongQ[max-1];
		lastA2 = wrongA[max-1];
		lastC2 = wrongC[max-1];
		wrongA = [];
		wrongQ = [];
		wrongC = [];
		wasWrong = true
		console.log('start review of : '+questions);
		failed = 'failed';
		newQuestion();
	}else{
		alert('Deck is restarting...');
		progression = 0;
		bar(progression);
		achieved = true;
		failed = 'nope';
		if(wasWrong == true){
			initQuestion(true);
			wasWrong = false;	
		}else{	
			initQuestion(false);
		}
	}
}

function upcolor(){
	this.style.color = 'purple';
}

function closecom(){
	document.getElementById('com').style.display = 'none';
	document.getElementById('combo').style.display = 'block';
}

function opencom(){
	document.getElementById('com').style.display = 'block';
	document.getElementById('combo').style.display = 'none';
}