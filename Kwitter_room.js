var firebaseConfig = {
    apiKey: "AIzaSyAFXMsnaA8cTP42VGiLJjSOBiJwRt3QP5Y",
    authDomain: "lets-chat-web-app-36fec.firebaseapp.com",
    projectId: "lets-chat-web-app-36fec",
    storageBucket: "lets-chat-web-app-36fec.appspot.com",
    messagingSenderId: "1049816419403",
    appId: "1:1049816419403:web:98fb0972bcb5f78e1951ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout(){
    window.location="index.html"; 
  }