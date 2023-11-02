// Initialize Firebase (configure with your own Firebase project details)
const firebaseConfig = {
    apiKey: "AIzaSyCXWvgkYYznEKPnwHnQVNKjMy-cJFj-tzQ",
    authDomain: "sustainasense.firebaseapp.com",
    databaseURL: "https://sustainasense-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sustainasense",
    storageBucket: "sustainasense.appspot.com",
    messagingSenderId: "32384686196",
    appId: "1:32384686196:web:bc6a9f7c8f4e5183c69921"
};

firebase.initializeApp(firebaseConfig);

const toggleSwitch = document.getElementById("toggleSwitch");

// Listen for changes in the toggle switch and update the Firebase database
toggleSwitch.addEventListener("change", function() {
    const databaseRef = firebase.database().ref("toggleSwitchState");
    databaseRef.set(this.checked);
});