import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcgdyoDKtXMhhip-SkHxRAY-1H02i1joQ",
  authDomain: "next-blog-app-ed387.firebaseapp.com",
  projectId: "next-blog-app-ed387",
  storageBucket: "next-blog-app-ed387.appspot.com",
  messagingSenderId: "945176907981",
  appId: "1:945176907981:web:4faecef970d87651fbd984"
};
// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;
export default fire;
