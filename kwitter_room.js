
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAkTmGRG-kGXPPBwjAKMNsRnw1ch66XO4A",
      authDomain: "kwitter-d3f39.firebaseapp.com",
      databaseURL: "https://kwitter-d3f39-default-rtdb.firebaseio.com",
      projectId: "kwitter-d3f39",
      storageBucket: "kwitter-d3f39.appspot.com",
      messagingSenderId: "481908931535",
      appId: "1:481908931535:web:bf4bf1e78c0ab03ed530ba"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "<div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.seItem("room_name", name);
      window.location = "kwitter_page.html";
}

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }