// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var users = {
    "pepe": "pepe123",
    "lola": "lola123",
};

function check_login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;

    if (users[user] == pass) {
        alert("Bravo u r in")
    } else {
        alert("wrong!!");
    }
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    var login_button = document.getElementById("loginButton").onclick = check_login;

}