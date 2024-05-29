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
