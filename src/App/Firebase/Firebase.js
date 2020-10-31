import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyA8Z1GUDLSUcN-l5-YqrZHLaciCCPB8pEU",
    authDomain: "telegram1-clone.firebaseapp.com",
    databaseURL: "https://telegram1-clone.firebaseio.com",
    projectId: "telegram1-clone",
    storageBucket: "telegram1-clone.appspot.com",
    messagingSenderId: "996835820069",
    appId: "1:996835820069:web:cbf0bacf455fd9a90c35cc",
    measurementId: "G-Q9LWYJW3DQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;