import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBWO19_jNtsGbhXZ48s-6VjUjrUEbyrQos",
    authDomain: "raltech-hackathon.firebaseapp.com",
    projectId: "raltech-hackathon",
    storageBucket: "raltech-hackathon.appspot.com",
    messagingSenderId: "134064873531",
    appId: "1:134064873531:web:d0fcb6252680a2ebdfbc1e"
};


const fire = firebase.initializeApp(firebaseConfig);

export default fire;