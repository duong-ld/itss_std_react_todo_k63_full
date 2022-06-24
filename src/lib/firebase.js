import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNaSfnkm0SuvxVkFc5UPTjGT-HAKzgdtc",
  authDomain: "todo-app-39f64.firebaseapp.com",
  projectId: "todo-app-39f64",
  storageBucket: "todo-app-39f64.appspot.com",
  messagingSenderId: "684872447685",
  appId: "1:684872447685:web:3d2329f6915703cf4ba2ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);