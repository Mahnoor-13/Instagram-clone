import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHbevYPN1Prh0qhrXfEvW_x5b0OjPWlhI",
  authDomain: "instagram-7d1de.firebaseapp.com",
  projectId: "instagram-7d1de",
  storageBucket: "instagram-7d1de.appspot.com",
  messagingSenderId: "1073918518837",
  appId: "1:1073918518837:web:89bcb498a807138677f37c",
  measurementId: "G-2J0K0QBC4R",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage;

export { db, auth, storage };
