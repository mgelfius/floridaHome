import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDXqe2GtaRKk5Ss2MhkCWgcIIyFY27ow7A",
    authDomain: "floridahome-1296d.firebaseapp.com",
    databaseURL: "https://floridahome-1296d.firebaseio.com",
    projectId: "floridahome-1296d",
    storageBucket: "floridahome-1296d.appspot.com",
    messagingSenderId: "626378549785"
})

const db = database(app)

export const auth = app.auth()

Rebase.createClass(db)

export default Rebase.createClass(db)