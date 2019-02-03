var svg_uri = 'http://www.w3.org/2000/svg';

var outString = "Out: ";
var outSVG = "";

var gridW = 7;
//var gridH = 9;

/*
var gridIn =[0,1,1,0,
			 1,1,0,1,
			 0,0,1,0,
			 1,1,0,0];
*/
var gridIn = new Array(60);
var deckSize = gridIn.length;
var landCards = 20;

var gridOut = new Array(16) ;

function startDraw(){
	
	gridIn.fill(0);
	gridIn.forEach(cardDraw);
	
	outSVG = document.getElementById("imageOut");
	
	for (i = 0; i < gridIn.length; i++) {
		var rect = document.createElementNS(svg_uri, "rect");
		drawRectangle(rect, "rect"+i, i2x(i)*34 + 2, i2y(i)*44 + 2, 30, 40);
		if (gridIn[i]) {
			rect.setAttribute("class", "fill");
		}
		outSVG.appendChild(rect);
	}
	
	function cardDraw(item, index, arr) {
		//arr[index] = Math.floor(Math.random()*2);
		d = Math.floor(Math.random() * deckSize);
		if (d < landCards) {
			arr[index] = 1;
			landCards--;
		} else {
			arr[index] = 0;
		}
		deckSize--;
	}

/*
	for (i = 0; i < gridOut.length; i++) {
		var rect = document.createElementNS(svg_uri, "rect");
		drawRectangle(rect, "rect"+i, i2x(i)*34 + 2 + 150, i2y(i)*44 + 2, 30, 40);
		if (gridOut[i]) {
			rect.setAttribute("class", "fill");
		}
		outSVG.appendChild(rect);
	}
*/

	document.getElementById("output").innerHTML += outString;
}

// storing x, y coordinates
function coords(x, y) { 
	this.x = x;
	this.y = y;
}

//set attributes for a square
function drawRectangle (sqr, id, cx, cy, cw, ch) {
	sqr.setAttribute("id", id);
	sqr.setAttribute("x", cx);
	sqr.setAttribute("y", cy);
	sqr.setAttribute("width", cw);
	sqr.setAttribute("height", ch);
}

//set attributes for a circle
function drawCircle (circ, id, cx, cy, radius){
	circ.setAttribute("id", id);
	circ.setAttribute("cx", cx);
	circ.setAttribute("cy", cy);
	circ.setAttribute("r", radius);
}

function i2y(i){
	return Math.floor(i/gridW); 
}

function i2x(i){
	return i%gridW;
}