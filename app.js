// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAF6hzh5NZNO4JWs77WYsNmQBVGsGuZfzc",
    authDomain: "track-my-period.firebaseapp.com",
    projectId: "track-my-period",
    storageBucket: "track-my-period.appspot.com",
    messagingSenderId: "963629924186",
    appId: "1:963629924186:web:de3d1cfc765180b76e3d63",
    measurementId: "G-S99Z27G8WF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('google-login-btn');

    loginBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                // User signed in successfully
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    });
});
