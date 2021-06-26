var firebaseConfig = {
    apiKey: "AIzaSyBL5NZ20XAPe6Dkd7qGCXJCWh_p8DCO2Po",
    authDomain: "kwitter-project-80977.firebaseapp.com",
    databaseURL: "https://kwitter-project-80977-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-80977",
    storageBucket: "kwitter-project-80977.appspot.com",
    messagingSenderId: "826026727769",
    appId: "1:826026727769:web:6553662e17fdb66e759448"
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
            localStorage.setItem("room_name",room_name);
            window.location = "kwitter_page.html";
      }