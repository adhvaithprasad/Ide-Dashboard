var config = {
  apiKey: "AIzaSyC-3XDB0vSiQlbGL-Sa9rOiteFYitYfstw",
  authDomain: "firescrypt-web.firebaseapp.com",
  databaseURL: "https://firescrypt-web-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firescrypt-web",
  storageBucket: "firescrypt-web.appspot.com",
  messagingSenderId: "276701233302",
  appId: "1:276701233302:web:5e513b1d8c681e830082b7",
  measurementId: "G-T12DZ6GPNN"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    // document.getElementById("login_div").style.display = "none";
  const user = firebase.auth().currentUser;
if (user !== null) {
  user.providerData.forEach((profile) => {

    document.getElementById("user-img").src=profile.photoURL;
    document.getElementById("user-name").innerHTML=profile.displayName;	


  const fetchChat = firebase.database().ref();
  fetchChat.child("user").child(profile.displayName).on("child_added", function (snapshot) {
	const messages = snapshot.val();
	const msg = "<div class='project'><a href='https://ide.adhvaithprasad.repl.co/#"+messages.project+"'><b>" + messages.project + "</b></a> </div>";
	document.querySelector('.chat-content').innerHTML += msg;
	
  });


  

})}




}
 else {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  }

  }) ;

function logout(){
  firebase.auth().signOut();
}