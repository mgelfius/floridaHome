const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
firebase.auth().signOut()

function handleSubmit(ev){
    ev.preventDefault();
    const f = ev.target
    const email = f.email.value
    const pass = f.pass.value
    const firstName = f.firstName.value
    const lastName = f.lastName.value
    const phone = f.cell.value
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    setTimeout(function(){
        checkLoggedIn(firstName, lastName, email, phone)
    }, 750)
}

function checkLoggedIn(firstName, lastName, email, phone){
    if(firebase.auth().currentUser.uid == null){
        alert('Oops, something went wrong')
    }
    else{
        writeUserData(firstName, lastName, email, phone)
    }
}

function writeUserData(firstName, lastName, email, phone){
    var db = firebase.firestore()
    db.collection("users").doc(firebase.auth().currentUser.uid).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        startDate: " ",
        endDate: " "
    });
    setTimeout(function(){
        window.location.href = './signIn.html'
    }, 750)
 
}

const registerForm = document.querySelector('#registerForm')
registerForm.addEventListener('submit', handleSubmit)
