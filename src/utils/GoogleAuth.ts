import { googleProvider, auth } from "../config/firebase"

export default class GoogleAuth {

    public static signInWithGoogle(): void {
        auth.signInWithPopup(googleProvider)
            .then(function (result) {

                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                console.log(result.user)

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
    }

    public static signOutGoogle(): void {
        auth.signOut().then(() => {
            console.log("Sign Out")
          }).catch((error) => {
            throw error
          });
    }
}