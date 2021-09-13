// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDo1iVcKHBYBvmuj3gK962PPxfvV8npa7w",
      authDomain: "twitter-f8736.firebaseapp.com",
      databaseURL: "https://twitter-f8736-default-rtdb.firebaseio.com",
      projectId: "twitter-f8736",
      storageBucket: "twitter-f8736.appspot.com",
      messagingSenderId: "971050680900",
      appId: "1:971050680900:web:2aab9d1f9cbd836b967211"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome"+user_name+"!";
function addroom(){
      room_names=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_names).update({
            Purpose:"adding room name"
      });
      localStorage.setItem("Room_name",room_names);
window.location= "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room_name",name);
      window.location="kwitter_page.html";
      
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}