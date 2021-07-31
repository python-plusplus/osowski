import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
apiKey: "AIzaSyCWzkJMpoGcYcgee4ZtzE7XlDNcaUxqDC4",
authDomain: "osowski-d2857.firebaseapp.com",
projectId: "osowski-d2857",
storageBucket: "osowski-d2857.appspot.com",
messagingSenderId: "1050257844298",
appId: "1:1050257844298:web:4b276b134201f8fc661eb3",
measurementId: "G-8S7WJZMG32"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();