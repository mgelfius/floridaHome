const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
var db = firebase.firestore();

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

document.querySelector('#dateSubmit').addEventListener('click', function(e){
    e.preventDefault()
    refresh()
    if(endDate.value >= "2019-01-01"){
        alert("We're currently not accepting reservations after 2018")
    }else
    if(endDate.value <= startDate.value){
        alert("Please enter a valid date range")
    }else 
    if(endDate.value > endDate.max){
        alert("Please move end date back to fit in a valid date range")
    }else{
        alert("Success!")
        var uid = firebase.auth().currentUser.uid
        db.collection("users").doc(uid).update({
            startDate: startDate.value,
            endDate: endDate.value
        })
    }
})

function refresh(){
    var day = parseInt(startDate.value.split('-')[2]) + 3
    var month = startDate.value.split('-')[1]
    var year = startDate.value.split('-')[0]
    var fullDate = year + '-' + month + '-' + day
    endDate.setAttribute('max', fullDate)
}

document.getElementById('endDate').addEventListener('click', function(e){
    e.preventDefault()
    var day = parseInt(startDate.value.split('-')[2]) + 3
    var month = startDate.value.split('-')[1]
    var year = startDate.value.split('-')[0]
    var fullDate = year + '-' + month + '-' + day
    endDate.setAttribute('max', fullDate)
})

var today = new Date().toISOString().split('T')[0]
var startDate = document.getElementById("startDate")
var endDate = document.getElementById("endDate")
startDate.setAttribute('min', today);
startDate.setAttribute('value', today)
