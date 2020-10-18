import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABShkM8be1sxC05KGRGy19Ic7KnE5ASxg",
  authDomain: "twitter-demo-44968.firebaseapp.com",
  databaseURL: "https://twitter-demo-44968.firebaseio.com",
  projectId: "twitter-demo-44968",
  storageBucket: "twitter-demo-44968.appspot.com",
  messagingSenderId: "312284509123",
  appId: "1:312284509123:web:13152027e89548af20c376",
  measurementId: "G-MGYFM8MPTL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
