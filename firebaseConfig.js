import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAeB7ayApDoxMHVFIdAiMzHgtl795vFoXg",
  authDomain: "mobileproject-9ee4a.firebaseapp.com",
  projectId: "mobileproject-9ee4a",
  storageBucket: "mobileproject-9ee4a.appspot.com",
  messagingSenderId: "776060697989",
  appId: "1:776060697989:web:37e427b25336f8800458ec"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export { db };