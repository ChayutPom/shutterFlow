import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBD8mWbzigZcfOAjeh_qrvWkcs93TZNFgU",
    authDomain: "photo-992f6.firebaseapp.com",
    databaseURL: "https://photo-992f6.firebaseio.com",
    projectId: "photo-992f6",
    storageBucket: "photo-992f6.appspot.com",
    messagingSenderId: "1089724817618",
    appId: "1:1089724817618:web:d647937d634eac20dacd0b",
    measurementId: "G-LYYVP3KK84"
}
firebase.initializeApp(config)
export default ! firebase.apps.length ? firebase.initializeApp(config) : firebase.app()