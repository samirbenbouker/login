document.addEventListener('deviceready', onDeviceReady, false);

var log_button = document.getElementById('loginButton');

function check_log(){
	var user = document.getElementById("username").value;
	var pass = document.getElementById("pass").value;
	var users = JSON.parse(localStorage.getItem(user));

	if(users == null){
		alert("Usuari no registrat");
	}
	else if(users["password"] != pass){
		alert("Contraseña erronia");
	}
	else{
		alert("Heeeey!");
	}
}

function check_reg() {
	window.location.replace("index.html");
}

function onDeviceReady() {
	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

	document.getElementById("registerButton").onclick = check_reg;
	document.getElementById("pass").onclick = check_log;
}