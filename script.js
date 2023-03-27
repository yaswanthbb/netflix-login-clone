$(document).ready(function() {
    // Hide the recaptcha-terms container by default
    $("#recaptcha-terms").hide();
  
    // Show the recaptcha-terms container when the Learn More button is clicked
    $("#learn-more-btn").click(function() {
      $("#recaptcha-terms").show();
    });
});  