// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
/*
var users = {
    "pepe": {
        "name": "pepe",
        "lastName": "gonzalez",
        "email": "pepe@gmail.com",
        "password": "pepe123"
    },
    "lola": {
        "name": "lola",
        "lastName": "gonzalez",
        "email": "lola@gmail.com",
        "password": "lola123"
    }
};
*/

localStorage.setItem("pepe", JSON.stringify({
    "pepe": {
        "name": "pepe",
        "lastName": "gonzalez",
        "email": "pepe@gmail.com",
        "password": "pepe123"
    }
}));
localStorage.setItem("lola", JSON.stringify({
    "lola": {
        "name": "lola",
        "lastName": "gonzalez",
        "email": "lola@gmail.com",
        "password": "lola123"
    }
}));

function check_login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;

    user = JSON.parse(localStorage.getItem(user))
    console.log(user)
    if (user["password"] == pass) {
        alert("Bravo u r in");
    } else {
        alert("wrong!!");
    }
}

function change_view() {
    location.href = "register.html";
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    var login_button = document.getElementById("loginButton").onclick = check_login;
    var register_button = document.getElementById("registerButton").onclick = change_view;
}