const firebaseConfig = {
    apiKey: "AIzaSyDOgrgzNkFaZKmMncpsLa51uzPcNDyiHj0",
    authDomain: "kuitter-cdffc.firebaseapp.com",
    databaseURL: "https://kuitter-cdffc-default-rtdb.firebaseio.com",
    projectId: "kuitter-cdffc",
    storageBucket: "kuitter-cdffc.appspot.com",
    messagingSenderId: "662041204202",
    appId: "1:662041204202:web:75cb0c41a6e06de0424e93"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function adduser(){
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location = "kwitter_room.html";
}