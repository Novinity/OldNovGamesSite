import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6Z7UrcyB0YC5dIztqktaHLw99LVsMN6o",
  authDomain: "robux-giveaway-5d4fd.firebaseapp.com",
  projectId: "robux-giveaway-5d4fd",
  storageBucket: "robux-giveaway-5d4fd.appspot.com",
  messagingSenderId: "472295023434",
  appId: "1:472295023434:web:3518699a787efb522257b3",
  measurementId: "G-6QWNCKN638"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();

const docRef = await addDoc(collection(db, "yes"), {
    visited: true
});
console.log(docRef);

window.location.href = "./video/nggyu.mp4";