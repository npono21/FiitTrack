// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYEfIrmUp_kauhz2J4v4F8N7K0Pk-kJvs",
  authDomain: "fiittrack-df3a1.firebaseapp.com",
  projectId: "fiittrack-df3a1",
  storageBucket: "fiittrack-df3a1.appspot.com",
  messagingSenderId: "698145240160",
  appId: "1:698145240160:web:58aec48da5cc0261edbf05",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
