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
    user_name=localStorage.getItem("username");
    room_name=localStorage.getItem("Room_name");
function send(){
msg=document.getElementById("Msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("Msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ Name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;       
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
    {
      console.log("clicked on like button - " + message_id);
          button_id = message_id;
          likes = document.getElementById(button_id).value;
          updated_likes = Number(likes) + 1;
          console.log(updated_likes);
    
          firebase.database().ref(room_name).child(message_id).update({
                like : updated_likes  
           });
    
    }

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}