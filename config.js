import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAFrAtHMDh3LtWIUD_Igk3Mujgf3RK1_eQ",
  authDomain: "e-ride-7320e.firebaseapp.com",
  projectId: "e-ride-7320e",
  storageBucket: "e-ride-7320e.appspot.com",
  messagingSenderId: "804014016330",
  appId: "1:804014016330:web:6917ebf8e58097456c23b3"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
