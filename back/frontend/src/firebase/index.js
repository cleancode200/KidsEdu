import firebase from "firebase/app";
import "firebase/storage";

// // <!-- The core Firebase JS SDK is always required and must be listed first -->
// {
{
  /* <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js" />; */
}
// }

// <!-- TODO: Add SDKs for Firebase products that you want to use
//firebase.google.com/docs/web/setup#config-web-app -->

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAdcHZ3_KrEig9-M04jsMt4nPAyOkM6JAM",
  authDomain: "kidsedu-ffade.firebaseapp.com",
  databaseURL: "https://kidsedu-ffade.firebaseio.com",
  projectId: "kidsedu-ffade",
  storageBucket: "kidsedu-ffade.appspot.com",
  messagingSenderId: "1059778075261",
  appId: "1:1059778075261:web:0d8a004f7c42af7a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
