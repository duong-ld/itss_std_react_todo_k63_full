import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNaSfnkm0SuvxVkFc5UPTjGT-HAKzgdtc",
  authDomain: "todo-app-39f64.firebaseapp.com",
  projectId: "todo-app-39f64",
  storageBucket: "todo-app-39f64.appspot.com",
  messagingSenderId: "684872447685",
  appId: "1:684872447685:web:3d2329f6915703cf4ba2ac",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const auth = firebase.auth();

export const getFirebaseItems = async () => {
  try {
    const docs = await firestore.collection("todos").get().docs;
    const items = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const addFirebaseItem = async (item) => {
  try {
    const todos = firestore.collection("todos");
    await todos.add(item);
  } catch (err) {
    console.log(err);
  }
};

export const updateFirebaseItem = async (item, id) => {
  try {
    const todos = firestore.collection("todos").doc(id);
    await todos.update(item);
  } catch (err) {
    console.log(err);
  }
};

export const clearFirebaseItem = async (item) => {
  const todos = firestore.collection("todos").doc(item.id);
  await todos
    .delete()
    .then(function () {})
    .catch(function (err) {
      console.log(err);
    });
};

export default firebase;
