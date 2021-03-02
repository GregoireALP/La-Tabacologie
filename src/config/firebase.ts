import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyBeWpizOQqPCEVm5C9S1XChs2_t1n2FnUc",
    authDomain: "la-tabacologie.firebaseapp.com",
    projectId: "la-tabacologie",
    storageBucket: "la-tabacologie.appspot.com",
    messagingSenderId: "725025435172",
    appId: "1:725025435172:web:14718c5b4eebf09d07b2b1"
})

export const auth = firebase.auth()
export const firestore = firebase.firestore()

/**
 * Paths
 */
export const USER_TABACO_DATA_PATH = "user_tabaco_data"
export const TABACO_DATA_STATS = "tabaco_data_stats"