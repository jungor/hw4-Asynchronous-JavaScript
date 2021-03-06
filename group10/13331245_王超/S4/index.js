window.onload = function() {
	CreatClickBubbles();
	document.getElementById('info-bar').onclick = null;
	document.getElementById('info-bar').style.background = "gray";
	document.getElementById('at-plus-container').onmouseleave = function() {
		clearAll();
	};
	flag1 = false;
	document.getElementsByClassName('apb')[0].onclick = function() {
		RobotHandle();
	}
}

function clearAll() {
	location.reload();
}

function CreatClickBubbles() {
	var bubbles = document.getElementsByClassName('bubble');
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].lastChild.style.display = 'none';
		bubbles[i].onclick = function() {
			BubbleClickHandler(this);
		};
	}
}

function BubbleClickHandler(Ibubble) {
	Ibubble.lastChild.style.display = 'block';
	Ibubble.lastChild.innerHTML = '...';
	Ibubble.onclick = null;
	DisableOtherBubbles();
	AjaxGet(Ibubble);
}

function AjaxGet(Ibubble) {
	var xmlHttp;
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState==4 && xmlHttp.status==200) {
			Ibubble.lastChild.innerHTML = xmlHttp.responseText;
			Ibubble.style.background = 'gray';
			EnableOtherBubbles();
		}
	}
	xmlHttp.open("GET","/",true);
	xmlHttp.send(null);
}

function DisableOtherBubbles() {
	var bubbles = document.getElementsByClassName('bubble');
	for (var i = 0; i < bubbles.length; i++) {
		if (bubbles[i].lastChild.style.display == 'none') {
			bubbles[i].onclick = null;
			bubbles[i].style.background = 'gray';
		}
	}
}

function EnableOtherBubbles() {
	var flag = true;
	var bubbles = document.getElementsByClassName('bubble');
	for (var i = 0; i < bubbles.length; i++) {
		if (bubbles[i].lastChild.style.display == 'none') {
			flag = false;
			bubbles[i].style.background = 'rgba(48,63,159,1)';
			bubbles[i].onclick = function() {
				BubbleClickHandler(this);
			}
		}
	}
	if (flag) {
		document.getElementById('info-bar').style.background = 'rgba(48,63,159,1)';
		document.getElementById('info-bar').onclick = function() {
			SumHandle(this);
		}
	}
	if (flag1) {
		index++;
		if (index !== 5) {
			bubbles[randomArray[index]].click();
		} else {
			document.getElementById('info-bar').click();
		}
	}
}

function SumHandle(BigBubble) {
	var bubbles = document.getElementsByClassName('bubble');
	var sum = 0;
	for (var i = 0; i < bubbles.length; i++) {
		 sum += Number(bubbles[i].lastChild.innerHTML);
	}
	document.getElementById('Sum').innerHTML = String(sum);
	BigBubble.style.background = 'gray';
	BigBubble.onclick = null;
}

function Shuffle(array) {
	var l = array.length, i = l, random, temp;
	while (i--) {
		if (i !== (random = Math.floor(Math.random()*l))) {
			temp = array[i];
			array[i] = array[random];
			array[random] = temp;
		}
	}
	return array;
}

function RobotHandle() {
	randomArray = [0, 1, 2, 3, 4];
	randomStr = ['A', 'B', 'C', 'D', 'E'];
	randomArray = Shuffle(randomArray);
	var str = '';
	for (var i = 0; i < randomArray.length; i++) {
		str += randomStr[randomArray[i]];
	}
	var randomDiv = document.createElement("div");
	var node=document.createTextNode(str);
	randomDiv.appendChild(node);
	randomDiv.className = "random";
	document.getElementById('button').insertBefore(randomDiv, document.getElementById('info-bar'));
	var bubbles = document.getElementsByClassName('bubble');
	flag1 = true;
	index = 0;
	bubbles[randomArray[index]].click();
}