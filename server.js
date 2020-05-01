
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    console.log("RESPONSE ==================== ",response)
});


function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }