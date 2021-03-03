import {firestore} from "../config/firebase"

export default class FirebaseQuerry {

    public static sendDataToFirebase(path: string, object: Object): void {
        firestore.collection(path).add(object)
        .then(function(data) {
            //TODO
        })
        .catch(function(err) {
            if(err) throw err
        })
    }

    public static fetchDataFromFirebase(path: string, next: Function, callback: Function) {
        firestore.collection(path).get()
        .then(function(data) {
            data.docs.map(function(doc) {
                next(doc)
            })

            callback()
        })
    }
}