/**
 * Created by Kira on 3/28/15.
 */

window.onload = function() {
    var list = document.getElementById("control-ring").getElementsByTagName("li");

    list[0].innerHTML = "<span>A</span>";
    list[1].innerHTML = "<span>B</span>";
    list[2].innerHTML = "<span>C</span>";
    list[3].innerHTML = "<span>D</span>";
    list[4].innerHTML = "<span>E</span>";


    var getNumber = function() {}

    for (var i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = "blue";
        list[i].onclick = getNumber();
    }

    for (var i = 0; i < list.length; i++) {
        list[i].onclick = getNumber();
    }

    var check = function() {
        var config = false;
        for (var i = 0 ; i < list.length; i++) {
            if (list[i].onclick != null) {
                list[i].style.backgroundColor = "blue";
                config = true;
            }
        }
    }

    var aHandler = function(Sum) {
        var current = aHandler;
        var that = list[0];
        var currentSum;
        if (arguments.callee.length != arguments.length) {
            document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = arguments.callee[0];
            currentSum = arguments.callee[1];
        } else {
            currentSum = Sum;
        }
        for (var i = 0; i < list.length; i++) {
            if (list[i] == this) continue;
            else {
                list[i].style.backgroundColor = "rgba(0,0,10,.4)";
            }
        }
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    currentSum += parseInt(xmlhttp.responseText);
                    var ih = "<span class='unread'>" + xmlhttp.responseText + "</span>";
                    that.innerHTML = that.innerHTML + ih;
                    document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = "这是个天大的秘密";
                    that.style.backgroundColor = "rgba(0,0,10,.4)";
                    that.onclick = null;
                    check();
                    current.next(currentSum);
                }
                else {
                        var message = "这不是个天大的秘密";
                        aHandler.caller(message, currentSum);
                }
            }
        }
        xmlhttp.open("GET", "/", true);
        xmlhttp.send();
    }

    var bHandler = function(Sum) {
        var current = bHandler;
        var that = list[1];
        var currentSum;
        if (arguments.callee.length != arguments.length) {
            document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = arguments.callee[0];
            currentSum = arguments.callee[1];
        } else {
            currentSum = Sum;
        }
        for (var i = 0; i < list.length; i++) {
            if (list[i] == this) continue;
            else {
                list[i].style.backgroundColor = "rgba(0,0,10,.4)";
            }
        }
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    currentSum += parseInt(xmlhttp.responseText);
                    var ih = "<span class='unread'>" + xmlhttp.responseText + "</span>";
                    that.innerHTML = that.innerHTML + ih;
                    document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = "我不知道";
                    that.style.backgroundColor = "rgba(0,0,10,.4)";
                    that.onclick = null;
                    check();
                    current.next(currentSum);
                }
                else {
                        var message = "我知道";
                        bHandler.caller(message, currentSum);
                }
            }
        }
        xmlhttp.open("GET", "/", true);
        xmlhttp.send();
    }
    var cHandler = function(Sum) {
        var current = cHandler;
        var that = list[2];
        var currentSum;
        if (arguments.callee.length != arguments.length) {
            document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = arguments.callee[0];
            currentSum = arguments.callee[1];
        } else {
            currentSum = Sum;
        }
        for (var i = 0; i < list.length; i++) {
            if (list[i] == this) continue;
            else {
                list[i].style.backgroundColor = "rgba(0,0,10,.4)";
            }
        }
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    currentSum += parseInt(xmlhttp.responseText);
                    var ih = "<span class='unread'>" + xmlhttp.responseText + "</span>";
                    that.innerHTML = that.innerHTML + ih;
                    document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = "你不知道";
                    that.style.backgroundColor = "rgba(0,0,10,.4)";
                    that.onclick = null;
                    check();
                    current.next(currentSum);
                }
                else {

                        var message = "你知道";
                        cHandler.caller(message, currentSum);
                }
            }
        }
        xmlhttp.open("GET", "/", true);
        xmlhttp.send();
    }
    var dHandler = function(Sum) {
        var current = dHandler;
        var that = list[3];
        var currentSum;
        if (arguments.callee.length != arguments.length) {
            document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = arguments.callee[0];
            currentSum = arguments.callee[1];
        } else {
            currentSum = Sum;
        }
        for (var i = 0; i < list.length; i++) {
            if (list[i] == this) continue;
            else {
                list[i].style.backgroundColor = "rgba(0,0,10,.4)";
            }
        }
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    currentSum += parseInt(xmlhttp.responseText);
                    var ih = "<span class='unread'>" + xmlhttp.responseText + "</span>";
                    that.innerHTML = that.innerHTML + ih;
                    document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = "他不知道";
                    that.style.backgroundColor = "rgba(0,0,10,.4)";
                    that.onclick = null;
                    check();
                    current.next(currentSum);
                }
                else {

                        var message = "他知道";
                        dHandler.caller(message, currentSum);
                }
            }
        }
        xmlhttp.open("GET", "/", true);
        xmlhttp.send();
    }
    var eHandler = function(Sum) {
        var current = eHandler;
        var that = list[4];
        var currentSum;
        if (arguments.callee.length != arguments.length) {
            document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = arguments.callee[0];
            currentSum = arguments.callee[1];
        } else {
            currentSum = Sum;
        }
        for (var i = 0; i < list.length; i++) {
            if (list[i] == this) continue;
            else {
                list[i].style.backgroundColor = "rgba(0,0,10,.4)";
            }
        }
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    currentSum += parseInt(xmlhttp.responseText);
                    var ih = "<span class='unread'>" + xmlhttp.responseText + "</span>";
                    that.innerHTML = that.innerHTML + ih;
                    document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = "才怪";
                    that.style.backgroundColor = "rgba(0,0,10,.4)";
                    that.onclick = null;
                    check();
                    current.next(currentSum);
                }
                else {
                        var message = "才不怪";
                        eHandler.caller(message, currentSum);
                }
            }
        }
        xmlhttp.open("GET", "/", true);
        xmlhttp.send();
    }

    var bubbleHandler = function(currentSum) {
        document.getElementById("info-bar").style.backgroundColor = "blue";
        document.getElementById("info-bar").getElementsByTagName("span")[1].innerHTML = "楼主异步调用战斗力感人，目测不超过" + currentSum;
        document.getElementById("info-bar").style.backgroundColor = "rgba(0,0,10,.4)";
    }

    document.getElementById("at-plus-container").onmouseleave = function() {

        list[0].innerHTML = "<span>A</span>";
        list[1].innerHTML = "<span>B</span>";
        list[2].innerHTML = "<span>C</span>";
        list[3].innerHTML = "<span>D</span>";
        list[4].innerHTML = "<span>E</span>";

        for (var i = 0; i < list.length; i++) {
            list[i].style.backgroundColor = "blue";
            list[i].onclick = getNumber();
        }

        document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = "";
        document.getElementById("info-bar").getElementsByTagName("span")[1].innerHTML = "";
        document.getElementById("info-bar").style.backgroundColor = "rgba(0,0,10,.4)";

    }

    function randArray(data){
        //获取数组长度
        var arrlen = data.length;
        //创建数组 存放下标数
        var try1 = new Array();
        for(var i = 0;i < arrlen; i++){
            try1[i] = i;
        }
        //创建数组 生成随机下标数
        var try2 = new Array();
        for(var i = 0;i < arrlen; i++){
            try2[i] = try1.splice(Math.floor(Math.random() * try1.length),1);
        }
        //创建数组，生成对应随机下标数的数组
        var try3 = new Array();
        for(var i = 0; i < arrlen; i++){
            try3[i] = data[try2[i]];
        }
        return try3;
    }

    document.getElementsByClassName("apb")[0].onclick = function() {
        var arr = [0, 1, 2, 3, 4];
        arr = randArray(arr);
        var str = new Array();

        var now, first;

        for (var j = 0; j < arr.length; j++) {
            if (arr[j] == 0) {
                str.push("A");
                if (j == 0) {
                    now = aHandler;
                    first = aHandler;
                } else {
                    now.next = aHandler;
                    now = aHandler;
                }

                continue;
            }
            if (arr[j] == 1) {
                str.push("B");
                if (j == 0) {
                    now = bHandler;
                    first = bHandler;
                } else {
                    now.next = bHandler;
                    now = bHandler;
                }

                continue;
            }
            if (arr[j] == 2) {
                str.push("C");
                if (j == 0) {
                    now = cHandler;
                    first = cHandler;
                } else {
                    now.next = cHandler;
                    now = cHandler;
                }

                continue;
            }
            if (arr[j] == 3) {
                str.push("D");
                if (j == 0) {
                    now = dHandler;
                    first = dHandler;
                } else {
                    now.next = dHandler;
                    now = dHandler;
                }

                continue;
            }
            if (arr[j] == 4) {
                str.push("E");
                if (j == 0) {
                    now = eHandler;
                    first = eHandler;
                } else {
                    now.next = eHandler;
                    now = eHandler;
                }

                continue;
            }
        }

        now.next = bubbleHandler;


        first(0);

        document.getElementById("info-bar").getElementsByTagName("span")[0].innerHTML = str;



    }

}