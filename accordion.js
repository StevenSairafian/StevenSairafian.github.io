var contentHeight = 0;
			var slideTime = 250.0;

			var currentlyOpen = [false, false, false, false];
			var tabs =["educationDetails", "profExpDetails", "persProjectsDetails", "relCourseDetails"];

			function activate(index){
				if(currentlyOpen[index]){
					close(index);
				}
				else{
					open(index, 0);
				}
			}

			function open(index, count){
				var current = document.getElementById(tabs[index]);
				if(count < 101){
				console.log(count);
				current.style.height = count + "%";
				setTimeout(open(index, (count + 1)), 10000);
				}
				else{
				current.style.display = "block";
				currentlyOpen[index] = true;
				document.getElementById("img" + index).src = "images/Minus.png";
				return;
				}
			}
			function close(index, count){
				var current = document.getElementById(tabs[index]);
				if(count > 0){
				console.log(count);
				current.style.height = count + "%";
				setTimeout(open(index, (count - 1)), 10000);
				}
				else{
				current.style.display = "none";
				currentlyOpen[index] = false;
					document.getElementById("img" + index).src = "images/Plus.png";
				return;
				}
			}