var btn = document.querySelector('button')
console.log(btn)


function displayOrHideErrorMsg(errorDiv,errorMsg){
    if(errorMsg){
        errorDiv.innerText = errorMsg
        errorDiv.classList.remove('hidden')
    } else {
        errorDiv.innerText = ""
        errorDiv.classList.add('hidden') 
    }
}

function validateEmail(){
    var emailInput = document.querySelector('#email')
    var email = emailInput.value

    // email
    var emailError = null;
    if(email.indexOf("@") === -1){
        emailError = "Please enter a valid email"
    }

    var emailErrorPara = emailInput.nextElementSibling
    if(emailError){
        emailErrorPara.innerText = emailError
        emailErrorPara.classList.remove('hidden')
    } else {
        emailErrorPara.innerText = ""
        emailErrorPara.classList.add('hidden') 
    }
}

function validatePassword(){
    var passwordInput = document.querySelector('#password')
    var password = passwordInput.value
    var passwordError = null;

    if(typeof password === 'string'){
        password = password.trim()

        if(password.indexOf(' ') !== -1){
            passwordError = 'No spaces allowed'
        } else if(password.length < 3){
            passwordError = "Must be at least 3 chars long"
        } else if(password.length > 32){
            passwordError = "No more than 32 characters"
        }

        var passwordErrorPara = passwordInput.nextElementSibling

        // if error found, dispay on page
        displayOrHideErrorMsg(passwordErrorPara,passwordError)
        
    }
}

function validateLogIn() {
    var emailInput = document.querySelector('#email')
    var email = emailInput.value
    var passwordInput = document.querySelector('#password')
    var password = passwordInput.value
    var loginError = null

    if (email === 'admin@admin.com' && password === 'topsecret') {
        window.location.href = 'home.html';
    } else {
        var loginErrorPara = passwordInput.nextElementSibling;
        loginErrorPara.innerText = 'Invalid email or password';
        loginErrorPara.classList.remove('hidden');
    }

}


function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}


btn.addEventListener('click',function(e){
    e.preventDefault()

    validateEmail()
    validatePassword()
    validateLogIn()
})