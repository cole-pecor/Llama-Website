var color;

function validateInput(){
	//retreiving values for variables
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var refer = document.getElementById("refer").value;
	var valid = false;
	
	if(document.getElementById("red").checked){
		var color = "Red";
	} else if (document.getElementById("blue").checked){
		var color = "Blue";
	} else if (document.getElementById("green").checked){
		var color = "Green";
	} else if (document.getElementById("chartreuse").checked){
		var color = "Chartreuse";
	} else { color = null; }
	
	if (isNaN(name) && isNaN(email) && isNaN(address) && refer != null && color != null){
		valid = true;
	} else {
		alert("Invalid Input");
	}
	
	sessionStorage.setItem("color", color);
	
	if (valid == true){
		window.location.href = 'submit.html';
	}
}

function llamaColor(){ //pass color from form into this page to change color of llama
	var color = sessionStorage.getItem("color");
	document.getElementById("llamaColor").textContent = color.toLowerCase();
}