var firebaseConfig = {
      apiKey: "AIzaSyDBO6csCyHh7Pmp8smVHknnzN2OIJKenqw",
      authDomain: "kwitterproject-d775c.firebaseapp.com",
      databaseURL: "https://kwitterproject-d775c-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-d775c",
      storageBucket: "kwitterproject-d775c.appspot.com",
      messagingSenderId: "575648040739",
      appId: "1:575648040739:web:23fcd3e2a21db756e3ee96"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);

Name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
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
console.log("click on the like button " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
udpdated_like = Number(like) + 1;
console.log(udpdated_like);
firebase.database().ref(room_name).child(message_id).update(
      { like : udpdated_like });

}

function send()
{
   msg = document.getElementById("msg").value;
   
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0

   });
}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";

}
