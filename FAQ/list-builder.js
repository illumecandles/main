//https://www.thepolyglotdeveloper.com/2018/02/create-email-subscription-popup-jquery//
//Taken from this site//
// i've removed some redundant code for my example//

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

        $("#popup-f").submit(() => {//I've changed this line to pick up the fact that its a submit button on my form//
      	$("#popup-box-content").html("<p style='text-align: center'>Thank you for joining our mailing list!</p>");
        });

        $("#popup-close").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });
    }

});