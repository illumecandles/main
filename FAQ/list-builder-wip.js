//https://www.thepolyglotdeveloper.com/2018/02/create-email-subscription-popup-jquery//
//Taken from this site//

$(document).ready(function() {

    var delay = 300; // milliseconds
    var cookie_expire = 0; // days

    var cookie = localStorage.getItem("list-builder");
    if(cookie == undefined || cookie == null) {
        cookie = 0;
    }

    if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
        $("#list-builder").delay(delay).fadeIn("fast", () => {
            $("#popup-box").fadeIn("fast", () => {});
        });

        $("button[name=subscribe]").click(() => {
      	$("#popup-box-content").html("<p style='text-align: center'>Thank you for joining our mailing list!</p>");
        });
		
		$("#popup-close").click(() => {
		$("#popup-content").hide();
		$("#popup-box-content1").html("<p style='text-align: center'>Sorry you're not interested</p>");
		$("#popup-content1").show();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });
		
	    $("#popup-close-sorry").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });
       
    }

});
  // $("#popup-close").click(() => {
    //    $("#popup-box-content").html("<p style='text-align: center'>Sorry you're not interested</p>");
      //      localStorage.setItem("list-builder", (new Date()).getTime());
        //});
		

//$("#popup-close").click(() => {
        //    $("#list-builder,#popup-box").hide();
        //    localStorage.setItem("list-builder", (new Date()).getTime());
       // });
	   
	    //$("#popup-close").click(() => {
          //  $("#list-builder, #popup-box").hide();
            //localStorage.setItem("list-builder", (new Date()).getTime());
        //});