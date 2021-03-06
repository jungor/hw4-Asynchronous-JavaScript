// Created by Lushen Liao
// Connect with me by 1219810894@qq.com


// Tool function ----> 将HTMLCollection/NodeList/伪数组转换成数组(copy form internet)
var makeArray = function(obj){
    return Array.prototype.slice.call(obj,0);
}

window.onload = function() {
	var xhr = new XMLHttpRequest();
	var allBtns = makeArray(document.getElementById('control-ring').getElementsByTagName('li'));
	var disableBtns = makeArray(document.getElementById('control-ring').getElementsByClassName('disable'));

	for (var i = 0; i < allBtns.length; i++) {
		allBtns[i].addEventListener('click', getNum);
	}
	document.getElementById("info-bar").addEventListener('click', getSum);
	document.getElementById("at-plus-container").addEventListener('mouseout', reset);
	document.getElementById('apd').addEventListener('click', robotOne);

	function getNum(event) {
		var target = event.target;
		while (target.localName != "li") target = target.parentNode; // the target maybe the "p", we need "li";
		if (target.classList.contains("enable")) {
			disable(allBtns);
			target.getElementsByClassName('unread')[0].style.display = "inline";
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					target.getElementsByClassName('unread')[0].innerHTML = xhr.responseText;
					disableBtns.push(target);
					enable(allBtns);
		        	disable(disableBtns);
		        	if (disableBtns.length == 5) {
		        		enable(document.getElementById("info-bar"));
		        	}
				} else {
					target.getElementsByClassName('unread')[0].innerHTML = ".."
				}
			}
			xhr.open("get", "/", true);
			xhr.send(null);
		}
	}

	function getSum(event) {
		var target = event.target;
		while (target.id != "info-bar") target = target.parentNode;
		if (target.classList.contains("enable")) {
			var sum = 0;
			for (var i = 0; i < disableBtns.length; i++) {
				sum += Number(disableBtns[i].getElementsByClassName('unread')[0].innerHTML);
			}
			target.getElementsByTagName('p')[0].innerHTML = sum;
			disable(target);
		}
	}

	function reset(event) {
		var target = event.relatedTarget ? event.relatedTarget : event.toElement;
		while (target && target != this) {target = target.parentNode;}
		if (target != this) {
			clear();
		}
	}

	function robotOne() {
		clear();
		function robotBegin(num) {
			var index = num;
			disable(allBtns);
			allBtns[index].getElementsByClassName('unread')[0].style.display = "inline";
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					allBtns[index].getElementsByClassName('unread')[0].innerHTML = xhr.responseText;
					disableBtns.push(allBtns[index]);
		        	if (index < allBtns.length-1) {
		        		robotBegin(++index);
		        	} else {
		        		var sum = 0;
		        		for (var i = 0; i < allBtns.length; i++) {
							sum += Number(allBtns[i].getElementsByClassName('unread')[0].innerHTML);
						}
						document.getElementById("info-bar").getElementsByTagName('p')[0].innerHTML = sum;
		        	}
				} else {
					allBtns[index].getElementsByClassName('unread')[0].innerHTML = ".."
				}
			}
			xhr.open("get", "/", true);
			xhr.send(null);
		};
		robotBegin(0);
	}

	function clear() {
		xhr.abort();
		enable(allBtns);
		disable(document.getElementById("info-bar"));
		disableBtns.splice(0,disableBtns.length); //clear array;
		var redBtns = document.getElementsByClassName('unread');
		for (var i = 0; i < redBtns.length; i++) {
			redBtns[i].style.display = 'none';
		}
		document.getElementById("info-bar").getElementsByTagName('p')[0].innerHTML = "";
	}

	function enable() {
		for (var i = 0; i < arguments.length; i++) {
			if (arguments[i].length) {
				for (var j = 0; j < arguments[i].length; j++) {
					arguments[i][j].classList.remove("disable");
					arguments[i][j].classList.add("enable");
				}
			} else {
				arguments[i].classList.remove("disable");
				arguments[i].classList.add("enable");
			}
		}
	}

	function disable() {
		for (var i = 0; i < arguments.length; i++) {
			if (arguments[i].length) {  // judge weather it's an array;
				for (var j = 0; j < arguments[i].length; j++) {
					arguments[i][j].classList.remove("enable");
					arguments[i][j].classList.add("disable");
				}
			} else {
				arguments[i].classList.remove("enable");
				arguments[i].classList.add("disable");
			}
		}
	}
}
