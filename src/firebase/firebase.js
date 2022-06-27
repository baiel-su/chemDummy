import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCME85Q6GJIMMblfUFlrtFJhW2wjmUFBHI",
  authDomain: "chemolympics-85277.firebaseapp.com",
  databaseURL:
    "https://chemolympics-85277-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chemolympics-85277",
  storageBucket: "chemolympics-85277.appspot.com",
  messagingSenderId: "949667407332",
  appId: "1:949667407332:web:312d6b7227b87dd92e93f1",
  measurementId: "G-LSSX4C12WD",
};

firebase.initializeApp(firebaseConfig);

export default firebase