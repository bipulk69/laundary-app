import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmrc_QOjjbEBifTs9tblSg2pYOrnw6lJo",
  authDomain: "laundry-application-c48ba.firebaseapp.com",
  projectId: "laundry-application-c48ba",
  storageBucket: "laundry-application-c48ba.appspot.com",
  messagingSenderId: "192976409890",
  appId: "1:192976409890:web:c96862789d3fa3a73b817b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
