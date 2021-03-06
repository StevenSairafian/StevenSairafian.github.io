var slideTime = 250.0;

var currentlyOpen = [false, false, false, false, false];
var tabs =["educationDetails", "profExpDetails", "persProjectsDetails", "relCourseDetails", "associationsDetails"];

function activate(index){
	var height = $(document.getElementById(tabs[index])).height();
	if(currentlyOpen[index]){
		close(index);
	}
	else{
		document.getElementById(tabs[index]).style.display = "block";
		//must recalculate height
		height = $(document.getElementById(tabs[index])).height();
		open(index);
	}
}
function open(index){
	var current = document.getElementById(tabs[index]);
	var currentHeight = 0;
	function frame(){
		currentHeight++;
		current.style.fontSize = currentHeight + "\%";
		if(currentHeight >=60){
			clearInterval(id);
			document.getElementById("img" + index).src = "images/Minus.png";
			currentlyOpen[index] = true;
		}
	}
	var id = setInterval(frame, 5);
}
function close(index){
	var current = document.getElementById(tabs[index]);
	var currentHeight = 60;
	function frame(){
		currentHeight--;
		current.style.fontSize = currentHeight + "\%";
		if(currentHeight <=0){
			current.style.fontSize = 0 + "\%";
			clearInterval(id);
			document.getElementById("img" + index).src = "images/Plus.png";
			currentlyOpen[index] = false;
			document.getElementById(tabs[index]).style.display = "none";
		}
	}
	var id = setInterval(frame, 5);
}