function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const username = f.username.value
    const password = f.password.value
    var credential = firebase.auth.EmailAuthProvider.credential(username, password);
    var auth = firebase.auth();
    var currentUser = auth.currentUser;
    firebase.auth().signInWithEmailAndPassword(username, password)
    goToMain()
}

function goToMain(){
    if(firebase.auth().currentUser.uid == null){
        alert("Incorrect credentials")
    }else{
        window.location.href = './main.html'
    }
}

const signInForm = document.querySelector('#signInForm')
signInForm.addEventListener('submit', handleSubmit)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
