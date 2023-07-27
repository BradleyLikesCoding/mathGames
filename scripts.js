const nuggetSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwewWCH5-Kq9Y43y2w3pEThkITSlkRgEagwIkt3yt3QMQjXRBbm94OHkNPGwGlR1Y2_SU:https://upload.wikimedia.org/wikipedia/commons/d/d0/McDonalds-Chicken-McNuggets.jpg&usqp=CAU";
const stitchSrc = "stitch.jpeg";
const yurtleSrc = "yurtle.jpg";
var word = "";
var facts = 0;
var cps = 0;
var interval;
const colors = ["rgb(255, 0, 0)", "rgb(246, 255, 0)", "rgb(43, 255, 0)", "rgb(0, 204, 255)", "rgb(255, 0, 251)"];
function newFact() {
    var num1 = Math.round(Math.random() * 10);
    var num2 = Math.round(Math.random() * 10);
    if(prompt("What is " + num1.toString() + " X " + num2.toString()) == num1 * num2) {
        facts++;
        document.getElementById("factsOut").innerHTML = facts;
    }
}
function oneMoreNugget() {
    if(price(1)) {
        document.getElementById("out").innerHTML += '<img src="' + nuggetSrc + '"><br>';
    }
}

function fiveMoreNugget() {
    if(price(4)) {
        for(var i = 0; i < 5; i++) {
        document.getElementById("out").innerHTML += '<img src="' + nuggetSrc + '"><br>';
        }
    }
}

function visualPain() {
    if(price(5)) {
        interval = setInterval(changeColor, 30);
        setTimeout(endColorChange, 3000);
    }
}

function oneStitch() {
    if(price(10)) {
        document.getElementById("out").innerHTML += '<img src="' + stitchSrc + '"><br>';
    }
}

function oneCps() {
    if(price(20)) {
        cps++;
    }
}

function fiveStitch() {
    if(price(40)) {
        for(var i = 0; i < 5; i++) {
        document.getElementById("out").innerHTML += '<img src="' + stitchSrc + '"><br>';
        }
    }
}

function crashPage() {
    if(price(100)) {
        while(true) {

        }
    }
}

function infiniteText() {
    if(price(150)) {
			word = prompt("What text would you like to display?") + "<br>";
    }
}

function oneYurtle() {
    if(price(200)) {
        document.getElementById("out").innerHTML += '<img src="' + yurtleSrc + '"><br>';
    }
}

function fiveYurtles() {
    if(price(800)) {
        for(var i = 0; i < 5; i++) {
        document.getElementById("out").innerHTML += '<img src="' + yurtleSrc + '"><br>';
        }
    }
}
function price(ammount) {
    var enoughFacts = ammount - 1 < facts;
    if(enoughFacts) {
       facts -= ammount;
    	document.getElementById("factsOut").innerHTML = facts;
    }
    return(enoughFacts);
}

function addWord() {
	if(word != "") {
    document.body.innerHTML += word;
  }
}
setInterval(addWord, 1);

function increaseCps() {
    facts += cps;
    document.getElementById("factsOut").innerHTML = facts;
}
setInterval(increaseCps, 1000);

function changeColor() {
    document.body.style.backgroundColor = colors[Math.round(Math.random() * (colors.length) - 1)];
}
function endColorChange() {
    clearInterval(interval);
    document.body.style.backgroundColor = "white";
}
function crashComputer() {
    if(price(1200)) {
      alert("LAG ACTIVATED >:)")
      for(var i = 0; i < 200; i++) {
        lagger();
      }
    }
}

async function lagger() {
    while(true) {
        document.title = Math.random();
    }
}