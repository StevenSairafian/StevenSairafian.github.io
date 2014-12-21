var slideTime = 250.0;

var currentlyOpen = [false, false, false, false, false];
var tabs =["educationDetails", "profExpDetails", "persProjectsDetails", "relCourseDetails", "associationsDetails"];

function activate(index){
	var height = $(document.getElementById(tabs[index])).height();
	if(currentlyOpen[index]){
		close(index, height);
	}
	else{
		document.getElementById(tabs[index]).style.display = "block";
		//must recalculate height
		height = $(document.getElementById(tabs[index])).height();
		open(index, height);
	}
}
function open(index, height){
	var current = document.getElementById(tabs[index]);
	var currentHeight = 0;
	console.log(height);
	function frame(){
		currentHeight+=3;
		console.log(currentHeight);
		current.style.height = currentHeight + "px";
		if(currentHeight >=height){
			clearInterval(id);
			document.getElementById("img" + index).src = "images/Minus.png";
			currentlyOpen[index] = true;
		}
	}
	var id = setInterval(frame, 5);
}
function close(index, height){
	var current = document.getElementById(tabs[index]);
	var currentHeight = height;
	console.log(height);
	function frame(){
		currentHeight-=3;
		console.log(currentHeight);
		current.style.height = currentHeight + "px";
		if(currentHeight <=3){
			current.style.height = 0 + "px";
			clearInterval(id);
			document.getElementById("img" + index).src = "images/Plus.png";
			currentlyOpen[index] = false;
			document.getElementById(tabs[index]).style.display = "none";
		}
	}
	var id = setInterval(frame, 5);
}