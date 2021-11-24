// requiring Firebase SDK
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDLnskZWoby4tNpCcZ2QB814x8ZU7FH4Qg",
    authDomain: "firstwebapp-6032d.firebaseapp.com",
    projectId: "firstwebapp-6032d",
    storageBucket: "firstwebapp-6032d.appspot.com",
    messagingSenderId: "51541819873",
    appId: "1:51541819873:web:39d06793b2c3f4218892a0",
    measurementId: "G-H3PB9XYQJ8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //signup to firebase
  function signUp(){
      //pick user input
      var email = document.getElementById("createEmail").value;
      var pass = document.getElementById("createPass").value;
      //create acc on firebase(createUserWithEmailAndPassword)
      firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(
            function(response){
            console.log(response);
            alert("Account created");
            sendVerificationEmail();
        })
        .catch(
            function(error){
                alert("Something is wrong" + error);
                console.log(error);
                location.reload;
            }
        )
  };

  //sending a verification email using firebase
  function sendVerificationEmail(){
      //sendEmailVerification
      firebase.auth().currentUser.sendEmailVerification()
      .then(function(response){
          console.log(response);
          alert("Verification sent");
      })
      .catch(function(error){
          alert("Error in sending email verification" + error);
          console.log(error);
      })
  };

  //login
  function logIn(){
      //pick user input
      var loginEmail = document.getElementById("loginEmail").value;
      var loginPass = document.getElementById("loginEmail").value;
        //signInWithEmailAndPassword
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPass)
        .then(function(response){
            console.log(response);
            alert("Account verified");
            window.location.replace("index.html");
        })
        .catch(function(error){
            var errorCode = error.code;
            if(errorCode == "auth/wrong-password"){
                alert ("Wrong Password entry");
                location.reload;
            }else{
                alert(error);
            }
            location.reload;
        })
  };

  //reset pass
  function reset(){
    var loginEmail = document.getElementById("loginEmail").value;
    //sendPasswordResetEmail
    firebase.auth().sendPasswordResetEmail(loginEmail)
    .then(function(response){
        console.log(response);
        alert("Check email for reset link");
    })
    .catch(
        function(error){
            console.log(error);
            alert("Reset link is not sent" + error);
        }
    )
  };

  function logOut(){
      firebase.auth().signOut().then(
          function(response){
              console.log(response);
              alert("Logged out");
              window.location.replace("index.html");
          }
      ).catch(function(error){
          console.log(error);
          alert("sign out failed" + error);
      })
  };