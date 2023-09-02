const firebaseConfig = {
    apiKey: "AIzaSyD29IoBEIkX3U5eM3wWhUROcKXkmdMuD9k",
    authDomain: "learncave-1dd2b.firebaseapp.com",
    projectId: "learncave-1dd2b",
    storageBucket: "learncave-1dd2b.appspot.com",
    messagingSenderId: "117954623929",
    appId: "1:117954623929:web:85becf7d3f19db19269e68",
    measurementId: "G-3VNLV8J6SV"
  };

  firebase.initializeApp(firebaseConfig); 
  const auth = firebase.auth(); 
  const database = firebase.database(); 
  var database_ref = database.ref(); 
function register()
{
	var usrname = document.getElementById('name').value
	var email = document.getElementById('email').value
	var password = document.getElementById('pass').value
	var conpass = document.getElementById('cpass').value

	auth.createUserWithEmailAndPassword(email,password).then(() =>{
		var user = auth.currentUser;
		var uid = user.uid; 
		console.log(uid);
	}).catch((error) =>{
		alert("Error: "+error.message);
	})
}
function login()
{
	var usr_name = document.getElementById('usrname').value
	var pass =  document.getElementById('password').value
	auth.signInWithEmailAndPassword(usr_name,pass).then(()=>{
		var user = auth.currentUser;
		var uid = user.uid;
		console.log(uid);
		window.location.replace("../index.html");
	}).catch((error)=>  
	{
		alert("Error: "+error.message);
	})
}  