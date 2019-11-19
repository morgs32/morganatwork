import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCN32GPL186t_YmQgUZOPbLQKFB5BJv6Yk",
  authDomain: "morganatwork-32ce3.firebaseapp.com",
  databaseURL: "https://morganatwork-32ce3.firebaseio.com",
  projectId: "morganatwork-32ce3",
  storageBucket: "morganatwork-32ce3.appspot.com",
  messagingSenderId: "58649912827",
  appId: "1:58649912827:web:4b128bd492d3aad069975e",
  measurementId: "G-HBQETZEBLQ"
};
// Initialize Firebase
const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const firestoreDb = firebaseApp.firestore();
if (window.location.hostname === "localhost") {
  // Note that the Firebase Web SDK must connect to the WebChannel port
  firestoreDb.settings({
    host: "localhost:3001",
    ssl: false
  });
}

export {
  firestoreDb
};
