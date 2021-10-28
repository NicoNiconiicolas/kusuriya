function goto(page){
	location.href='index.html?p='+page;
}

function showInv(){

	for(i=1 ; i <= 9; i++){
		if(slot[i] != "empty"){
			document.getElementById("obj"+i).style.background = "url(img/goods/"+slot[i]+".png) 50% 50% no-repeat";
		}else{
			document.getElementById("obj"+i).style.background = "";
		}
	}
}

function empty(nslot){
	setCookie("slot"+nslot, 'empty', 365);
	slot[nslot] = 'empty';
}

function add(nslot, item){
	setCookie("slot"+nslot, item, 365)
	slot[nslot] = item;
}

function today(){
var d = new Date();
let day = d.getDay();
return day;
}