// Peter Moldenhauer
// 2-6-17
// CS 290: Web Development
// Assignment: DOM and Events 

// Get the reference for the body
var body = document.getElementsByTagName("body")[0];

// Create a <table> element
var tbl = document.createElement("table");

// Create a <thead> element
var tblHead = document.createElement("thead");

// Create a <tbody> element
var tblBody = document.createElement("tbody");

// Create the header cells
var hRow = document.createElement("tr");
for(var i = 0; i < 4; i++){
	// create a <th> element and a text node, make the text node 
	// the contents of the <th> and put the <th> at the end of the header row
	var hCell = document.createElement("th");
	var hCellText = document.createTextNode("Header " + (i+1));
	hCell.appendChild(hCellText);
	hRow.appendChild(hCell);
}

// Add the header row to the <thead>
tblHead.appendChild(hRow);

// Create the body cells
for(var j = 0; j < 3; j++){
	var bRow = document.createElement("tr");
	for(var k = 0; k < 4; k++){
		var bCell = document.createElement("td");
		var bCellText = document.createTextNode((j+1) + ", " + (k+1));
		bCell.appendChild(bCellText);
		bRow.appendChild(bCell);
	}
	
	// Add the row to the end of the table body
	tblBody.appendChild(bRow);
}

// Put the <thead> in the <table>
tbl.appendChild(tblHead);

// Put the <tbody> in the <table>
tbl.appendChild(tblBody);

// Append the <table> into <body>
body.appendChild(tbl);

// Set the border attribute of tbl to 2
tbl.setAttribute("border", "2"); 

//Creates the buttons for navigating the table.  Buttons are up down left right and mark cell.
function buildButtons() {
    buttons = ["up", "down", "left", "right", "Mark Cell"];
	
	buttons.forEach(function (direction){ // for every button in buttons array create a new button
		var newButton = document.createElement ("button");
		newButton.id = direction;
		newButton.textContent = direction;
		//adds button to page
		body.appendChild(newButton);
		//adds an event listener for the botton to click
		//The event fuction takes the direction passed and calls a movement function accordingly.
		document.getElementById(direction).addEventListener("click", function(){
			
			if(direction == "Mark Cell"){
				mark();
			}
			else{
				if(direction == "up"){
					var u = "up";
					moveMe(u);
				}
				else if(direction == "down"){
					var d = "down";
					moveMe(d);
				}
				else if(direction == "left"){
					var l = "left";
					moveMe(l);
				}
				else if(direction == "right"){
					var r = "right";
					moveMe(r);
				}
				
			}
		});
	});
}

// Dsiplay buttons 
buildButtons();

// Modify button appearance 
var changeButtons = document.getElementsByTagName("button");
for(var i = 0; i < changeButtons.length; i++){
	changeButtons[i].style.borderRadius = "10px";
	changeButtons[i].style.margin = "5px";
}

// Set up "current" cell to start at the first <td> cell
var current = document.getElementsByTagName("td")[0];
current.id = "selected";
current.style.borderWidth = "4px";

//Function changes the selected cell background to yellow
function mark(){
	var x = document.getElementById("selected");
	x.style.background = "yellow";
}

// Main moveMe() function that is called when each of the directional buttons are clicked
function moveMe(direction){
	var cur = document.getElementById("selected");
	
	if(direction == "up"){
		if(cur.parentNode.rowIndex <= 1){
			return; // top of the table, dont do anything
		}
		// save the current cell index of "selected"
		var temp = cur.cellIndex;
		// change the current "selected" cell back to normal
		cur.removeAttribute("id");
		cur.style.borderWidth = "1px";
		// navigate to the new "selected" cell as a result of button click 
		cur = cur.parentNode;
		cur = cur.previousElementSibling;
		cur = cur.firstElementChild;
		for(var i = 0; i < temp; i++){
			cur = cur.nextElementSibling;
		}
		// update the syle and id for the new "selected" cell
		cur.style.borderWidth = "4px";
		cur.id = "selected";
	}
	
	else if(direction == "down"){
		if(cur.parentNode.rowIndex >= 3){
			return; // bottom of the table, dont do anything
		}
		// save the current cell index of "selected"
		var temp = cur.cellIndex;
		// change the current "selected" cell back to normal
		cur.removeAttribute("id");
		cur.style.borderWidth = "1px";
		// navigate to the new "selected" cell as a result of button click 
		cur = cur.parentNode;
		cur = cur.nextElementSibling;
		cur = cur.firstElementChild;
		for(var i = 0; i < temp; i++){
			cur = cur.nextElementSibling;
		}
		// update the syle and id for the new "selected" cell
		cur.style.borderWidth = "4px";
		cur.id = "selected";
	}
	
	else if(direction == "left"){
		if(cur.cellIndex == 0){
			return; // left of the table, dont do anything
		}
		// save the current cell index of "selected"
		var temp = cur.cellIndex;
		// change the current "selected" cell back to normal
		cur.removeAttribute("id");
		cur.style.borderWidth = "1px";
		// navigate to the new "selected" cell as a result of button click 
		cur = cur.previousElementSibling;
		// update the syle and id for the new "selected" cell
		cur.style.borderWidth = "4px";
		cur.id = "selected";
	}
	
	else if(direction == "right"){
		if(cur.cellIndex == 3){
			return; // right of the table, dont do anything
		}
		// save the current cell index of "selected"
		var temp = cur.cellIndex;
		// change the current "selected" cell back to normal
		cur.removeAttribute("id");
		cur.style.borderWidth = "1px";
		// navigate to the new "selected" cell as a result of button click 
		cur = cur.nextElementSibling;
		// update the syle and id for the new "selected" cell
		cur.style.borderWidth = "4px";
		cur.id = "selected";
	}
}





































