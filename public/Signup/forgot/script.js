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


function reset(){
let email = document.getElementById("email3").value
console.log(email)
  
    auth.sendPasswordResetEmail(email)
      .then(() => {
        console.log("Reset password link sent");
        alert("Reset instructions sent to your mail!")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

}