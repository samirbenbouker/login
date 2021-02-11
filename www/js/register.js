// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
// document.addEventListener('deviceready', onDeviceReady, false);

function check_register() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var passConfirm = document.getElementById("passConfirm").value;

    if (username.length == 0 || name.length == 0 || lastName.length == 0 || email.length == 0 ||
        pass.length == 0 || passConfirm.length == 0) {
        //someone input text its null
        alert("Someone input its null");

    } else if (!(pass == passConfirm)) {
        // pass and pass confirm its not equals
        alert("Password and Confirm Password its not equal");

    } else {
        // add user values
        /*
        users[username] = {
            "name": name,
            "lastName": lastName,
            "email": email,
            "password": pass
        };
        */
        alert("User " + username + " register successful");

        location.href = "index.html";
    }
}


//console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
var registerButton = document.getElementById("registerButton").onclick = check_register;