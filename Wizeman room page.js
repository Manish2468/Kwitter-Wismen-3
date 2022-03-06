var firebaseConfig = {
    apiKey: "AIzaSyB_R0QRSVsrnHE2nQycXpSLp1qucBE4-Rw",
    authDomain: "kwitter-4c975.firebaseapp.com",
    databaseURL: "https://kwitter-4c975-default-rtdb.firebaseio.com",
    projectId: "kwitter-4c975",
    storageBucket: "kwitter-4c975.appspot.com",
    messagingSenderId: "1006491691390",
    appId: "1:1006491691390:web:dd8f8e7899384246e3ab2f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function log_out() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

  }