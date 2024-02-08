AOS.init();

function showPasswordSignup(){
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

function showPasswordLogin() {
    var inputPass = document.getElementById('loginPassword');
    var buttonShowPass = document.getElementById('button-password');

    if (inputPass.type === "password") {
        inputPass.setAttribute('type', 'text');
        buttonShowPass.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        inputPass.setAttribute('type', 'password');
        buttonShowPass.classList.replace('bi-eye-slash', 'bi-eye');
    }
}


var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signin')
var formSignin = document.querySelector('#signin')

function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const token = generateToken();

    localStorage.setItem('token', token);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Cadastro realizado com sucesso!');
    
    window.location.href = "./index.html";
}

function generateToken() {
    return Math.random().toString(36).substr(2);
}


// ========================LOGIN========================



function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('name');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login bem-sucedido!');
        
    } else {
        alert('Falha no login!');
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
});
