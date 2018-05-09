firebase.auth().onAuthStateChanged(function(user){
    if(user){
        
    }
    else{
        window.location.href = './index.html'
    }
})

document.querySelector('#signOut').addEventListener('click', function(e){
    e.preventDefault()
    firebase.auth().signOut()
})
