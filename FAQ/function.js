
//This will alert the user that the signup is successful//
//I've used the split funtion to get the first name of the user to use the in the alert
function signup(){
	//var user
	var user=document.getElementById("name").value;
	var email=document.getElementById("emailadr").value;
	var valid;
	if (user == "")
		{
        alert("You need to enter your name.");
        //user.focus();
        valid=false;
		document.getElementById("test").innerHTML = 'invalid';
		}
	else if(user != ""){
	var firstName = user.split(' ').slice(0, -1).join(' ');
	alert(firstName+ ", Sign up was successful \nKeep an eye on  " + email+" for all the latest offers!");
		}
	
}