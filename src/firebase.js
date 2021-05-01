import firebase from 'firebase/app'
import 'firebase/firestore'

//Conexión con la base de datos
const firebaseConfig = {
    apiKey: "AIzaSyAY-k-yFUGYFrHFmEntjmn6f4XJwEKiZzI",
    authDomain: "crud-rect.firebaseapp.com",
    projectId: "crud-rect",
    storageBucket: "crud-rect.appspot.com",
    messagingSenderId: "919846409152",
    appId: "1:919846409152:web:2163f6221fcd3969786e25"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)