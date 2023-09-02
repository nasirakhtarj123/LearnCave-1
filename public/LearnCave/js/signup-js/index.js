let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)


const firebaseConfig = {
	//Your keys. Refer video...!!!
	  };


firebase.initializeApp(firebaseConfig); 
const auth = firebase.auth(); 
const database = firebase.database(); 
var database_ref = database.ref(); 
     

function register(){
	var name = document.getElementById("name").value
	var email = document.getElementById("email").value
	var pass = document.getElementById("pass").value
	var cpass = document.getElementById("cpass").value

	auth.createUserWithEmailAndPassword(email, password).then(() =>{
        var user=auth.currentUser;
        var uid=user.uid;

        var user_data = {
        
			name: name,
			email: email,
			
		  }
		  database_ref.child('user/' + uid).set(user_data)
	


    })
    .catch((error)=>{
        alert(error.message);

    })

	
}