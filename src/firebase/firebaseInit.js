import firebase from 'firebase/app'
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAFIRO1QKAnrHNJBalwrjGFETCQa2eDVOw",
    authDomain: "fireblogsyt-e3c7d.firebaseapp.com",
    projectId: "fireblogsyt-e3c7d",
    storageBucket: "fireblogsyt-e3c7d.appspot.com",
    messagingSenderId: "466633653226",
    appId: "1:466633653226:web:be74d2f17c0771bc761093"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FielValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();