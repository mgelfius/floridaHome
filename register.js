function handleSubmit(ev){
    ev.preventDefault();
    const f = ev.target
    const email = f.email.value
    const pass = f.pass.value
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    checkLoggedIn()
}

function checkLoggedIn(){
    if(firebase.auth().currentUser.uid == null){
        alert('Oops, something went wrong')
    }
    else{
        window.location.href = './signIn.html'
    }
}

const registerForm = document.querySelector('#registerForm')
registerForm.addEventListener('submit', handleSubmit)
