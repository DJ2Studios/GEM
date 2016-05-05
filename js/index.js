window.fbAsyncInit = function() {
    FB.init({
        appId: '774051832697011',
        xfbml: true,
        status: true,
        cookie: true,
        version: 'v2.5'
    });
    checkLoginState();
};

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
        console.log("logging in");
        document.getElementById('login').innerHTML = '<a href="#developers">Profile</a>'
        // window.location.href = "/home";
    } else if (response.status === 'not_authorized') {
        console.log("fail");
    } else {
        console.log("not logged in");
        document.getElementById('login').innerHTML = '<div class="fb-login-button" data-max-rows="1" data-size="large" data-auto-logout-link="true" onlogin="checkLoginState();">Login/Sign Up with Facebook</div>'
    }
}
function login() {
    FB.login(function(response) {

        statusChangeCallback(response);
    })
}
function checkLoginState() {
  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
  });
}

function sendUserInfo() {
    FB.api('/me', function(response) {

        //console.log("my object: %o", response);
        var map = new OTMap();

        //map.put("username!", response.username);
        map.put("gender!", response.gender);

        OTLogService.sendEvent("user logged in", map);
    });
}
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//   FB.api('/me', function(response)) {
//       console.log(JSON.stringify(response))
//   }
