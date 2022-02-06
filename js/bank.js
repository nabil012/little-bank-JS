document.getElementById('login-btn').addEventListener('click',function(){


// get use email
const userMailArea = document.getElementById('mail-area')
const userEmail = userMailArea.value


// get user password 

const userPassArea = document.getElementById('pass-area')
const userPass = userPassArea.value
console.log(userPass)

if (userEmail == 'user@gmail.com' && userPass =='user'){
window.location.href ='banking.html'
}
})