
function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const username = f.username.value
    const password = f.password.value
    var credential = firebase.auth.EmailAuthProvider.credential(username, password);
    var auth = firebase.auth();
    var currentUser = auth.currentUser;
    firebase.auth().signInWithEmailAndPassword(username, password)
    load()
    setTimeout(function(){
        goToMain()
    }, 500)
}

function goToMain(){
    if(firebase.auth().currentUser.uid == null){
        alert("Incorrect credentials")
    }else{
        window.location.href = './main.html'
    }
}

function load() {
    var bar = document.getElementById("loadBar")
    var div = document.getElementById("progressDiv")
    bar.style.opacity = "1"
    div.style.opacity = "1"
    var width = 1
    var id = setInterval(frame, 5)
    function frame() {
      if (width >= 100) {
        clearInterval(id)
      } else {
        width++
        bar.style.width = width + '%'
      }
    }
  }

const signInForm = document.querySelector('#signInForm')
signInForm.addEventListener('submit', handleSubmit)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
