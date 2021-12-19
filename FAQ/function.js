// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//This will alert the user that the signup is successful//
// used https://www.w3resource.com/javascript/form/email-validation.php for help here//
//I've used the split funtion to get the first name of the user to use the in the alert	//
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
	var user
	var user=document.getElementById("name").value;
	var email=document.getElementById("emailadr").value;
	var firstName = user.split(' ').slice(0, -1).join(' ');
alert(firstName+ " your email is valid");
return true;
	
}
else
{
alert("You have entered an invalid email address!");
emailadr.focus();
return false;
}
}