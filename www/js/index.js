// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var registerButton = document.getElementById("registerButton").onclick = check_register;

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


function check_login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;

    user = JSON.parse(localStorage.getItem(user))
    if (user["password"] == pass) {
        alert("Bravo u r in");
    } else {
        alert("wrong!!");
    }
}

function check_register() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var passConfirm = document.getElementById("passConfirm").value;

    var nameid = username;

    if (username.length == 0 || name.length == 0 || lastName.length == 0 || email.length == 0 ||
        pass.length == 0 || passConfirm.length == 0) {
        //someone input text its null
        alert("Someone input its null");

    } else if(username = users[username]){
        alert("Usuari existeix")

    } else if (!(pass == passConfirm)) {
        // pass and pass confirm its not equals
        alert("Password and Confirm Password its not equal");

    } else {
        nameid = {
            "name":name,
            "lastName":lastName,
            "email": email,
            "password":pass

        }

        localStorage.setItem(username, JSON.stringify(nameid));
        alert("User " + username + " register successful");
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