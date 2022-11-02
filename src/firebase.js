import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-XnDwwrXZJ9ybJY6U23z4tB12JRVMCwg",
  authDomain: "linkedin-clone-cf6cf.firebaseapp.com",
  projectId: "linkedin-clone-cf6cf",
  storageBucket: "linkedin-clone-cf6cf.appspot.com",
  messagingSenderId: "549602592548",
  appId: "1:549602592548:web:3413337dbcfc76a32695b1"
};


  initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
export { db, auth };