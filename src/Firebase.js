import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCV5S-mz6W0-y8foR_gOQ62lCwyHt5GACQ",
  authDomain: "disney-clone-91559.firebaseapp.com",
  databaseURL: "https://disney-clone-91559-default-rtdb.firebaseio.com",
  projectId: "disney-clone-91559",
  storageBucket: "disney-clone-91559.appspot.com",
  messagingSenderId: "669717254351",
  appId: "1:669717254351:web:e2ebc5c031d88ce6bce7ba",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
