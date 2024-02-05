function showPassword(){
    var inputPass = document.getElementById('password')
    var buttonShowPass = document.getElementById('button-password')

    if(inputPass.type === "password"){
        inputPass.setAttribute('type', 'text')
        buttonShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    }else{
        inputPass.setAttribute('type', 'password')
        buttonShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }
}


var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signin')
var formSignin = document.querySelector('#signin')