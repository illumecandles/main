/*/when user scrolls down to the Seasonal category and hover over the category name, it changes to current season (Christmas)*/

function changeTitle(){
document.getElementById("seasonal").innerHTML = "It's Christmas time! "}

/*/Validating and confirming the input when user wants to request a customized candle/*/

 function checkCustForm(){
 	event.preventDefault();
 	var color=document.getElementById("cust-color").value;
 	var size=document.getElementById("cust-size").value;
 	var scent=document.getElementById("cust-scent").value;
 	var name=document.getElementById("cust-name").value;
 	var email=document.getElementById("cust-email").value;
 	alert("Thank you for your interest in Ilume Candles " +name+ "! We will let you know when your candle is ready");

 	}


//validating email address, Information sourced from: https://www.javatpoint.com/javascript-form-validation
function validateemail() {
var x=document.CustForm.email.value;
var atposition=x.indexOf("@");
var dotposition=x.lastIndexOf(".");
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
return false;
}
}

