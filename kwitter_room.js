const firebaseConfig = {
      apiKey: "AIzaSyBzU9kdt0oiTtYdCa6UWHl8wk2b13JzTgc",
      authDomain: "practice-94-c7ae3.firebaseapp.com",
      databaseURL: "https://practice-94-c7ae3-default-rtdb.firebaseio.com",
      projectId: "practice-94-c7ae3",
      storageBucket: "practice-94-c7ae3.appspot.com",
      messagingSenderId: "476278801404",
      appId: "1:476278801404:web:6f6430cc95fe6774a06879"
    };
      
   
     firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addroom(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"});
            localStorage.setItem("room_name", room_name);
            window.location="kwitter_page.html";
      }
      

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
   console.log("room name-" + Room_names);
   row = "<div class='room_name' id="+ Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
