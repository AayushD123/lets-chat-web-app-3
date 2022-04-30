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

    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room names - " + Room_names);
      

      //End code
      });});}
getData();

function addRoom()
{
 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
       purpose: "processing and done adding room name"
 });
 localStorage.setItem("room_name", room_name);
 window.location = "kwitter_page.html";
}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";

}