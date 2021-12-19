//Carousel settings altered code found on Stack overflow and W3 schools (https://www.w3schools.com/howto/howto_js_slideshow.asp)
var slideIndex = 1;
showSlides(slideIndex);

// Carousel continued -  Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Carousel continued - Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Carousel continued - display images
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*JQuery Slide message on Home page*/
 $(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
}); 


//Contact Us Page - Contact form 
function formChecker(){
	event.preventDefault();
	document.getElementById("myForm").style.display="none";
	var name=document.getElementById("formName").value;
	var email=document.getElementById("formEmail").value;
	var phone=document.getElementById("formPhone").value;
	var description=document.getElementById("formDescription").value;
	alert(name+ ",  thank you for your contact details. Illume Candles will be in touch via "  +email+ ", as soon as possible.");
		
	}
	
function validateemail()  {  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  
function changemessage() {
  document.getElementById("submsg").innerHTML = "One of our team will be in touch soon!";
}	