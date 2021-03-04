import { auth, USER_DATA_PATH } from "../config/firebase"
import FirebaseQuerry from "./FirebaseQuerry"

export default class EmailAuth {

    private FirebaseQuerry = new FirebaseQuerry()

    public static registerWithEmailAndPassword(firstName: string, lastName: string, birthday: Date, phone: string = "null", email: string, password: string, password2: string): void {

        /**
         * Check password
         */
        if (password != password2) {
            // Catch error
            console.error('Mot de passe non meme')
            return;
        }
        /**
         * Firebase Register
         */
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                console.log("Firebase Registered")

                var user = userCredential.user;
                console.log(user)

                /**
                * Firestore Register
                */

                FirebaseQuerry.sendDataToFirebase(USER_DATA_PATH, {
                    firstName: firstName,
                    lastName: lastName,
                    birthday: birthday,
                    email: email,
                    phone: phone,
                    password: password
                })

                console.log("Firestore Registered")

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.error(errorCode, errorMessage)
            });

    }

    public static signInWithEmailAndPassword(email: string, password: string): void {

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {

                var user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.error(errorCode, errorMessage)
            });
    }

    public static logOutWithEmailAndPassword(): void {

        auth.signOut().then(() => {
            console.log("Log Out")
        }).catch((error) => {
            throw error
        });
    }
}