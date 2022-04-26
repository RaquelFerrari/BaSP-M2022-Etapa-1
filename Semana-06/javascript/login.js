var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");
var emailError = document.getElementById("error-email");
var requiredEmail = document.getElementById("email-required");
var passwordError = document.getElementById("error-password");
var requiredPassword = document.getElementById("password-required");
var login = document.getElementById("input-login");
var loginComplete = document.getElementById("login-complete");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(validateEmail(email) && validatePassword(password)){
        loginComplete.classList.add("loginComplete");
        loginComplete.innerHTML = "Login Complete"+ "<p></p>" + "Email: "+email.value+"<p></p>"+
        "Password: "+password.value+"</p>";
    }
    else if (!validateEmail() || !validatePassword()){
        loginComplete.classList.add("loginComplete");
        loginComplete.innerHTML = "Email incorrect or password incorrect"+"<p></p>" + "Email: "+email.value+"<p></p>"+
        + "Password: "+password.value+"</p>";

    }
})

email.addEventListener( "blur", validateEmail)
function validateEmail(e){
    var emailval = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if(email.value === ""){
        requiredEmail.style.display = "flex";
        requiredEmail.style.justifyContent = "center";
        email.style.border = "solid 2px red";
        return false
    }
    else{
        if(!emailval.test(email.value)){
            emailError.style.display = "flex";
            emailError.style.justifyContent = "center";
            email.style.border = "solid 2px red";
            return false
        }
        else{
            return true
        }
    }
}

email.addEventListener("focus", writtenEmail)
function writtenEmail(e){
    requiredEmail.style.display = "none";
    emailError.style.display ="none";
    email.style.border = "solid 2px black";
}

password.addEventListener("blur",validatePassword)
function validatePassword(e){
    var passwordLetters = ["a", "b", "C", "d", "e",
    "f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","U",
    "V","W","X","Y","Z"]
    var passwordNumbers = ["0","1","2","3","4","5","6","7","8","9"]
    var numbers = 0;
    var characters = 0;
    var simbols = 0;
    for(i=0;i<password.value.length;i++) {
        if (!passwordLetters.includes(password.value[i]) && !passwordNumbers.includes(password.value[i])){
            simbols++
        }
        if(passwordNumbers.includes(password.value[i])){
            numbers++;
        }
        if(passwordLetters.includes(password.value[i])){
            characters++;
        }
    }
    if(password.value === ""){
        requiredPassword.style.display = "flex";
        requiredPassword.style.justifyContent = "center";
        password.style.border = "solid 2px red";
        return false;
    }
    else if(password.value.length<8 || simbols>0 || numbers<1 || characters<1){
        passwordError.style.display = "flex";
        passwordError.style.justifyContent = "center";
        password.style.border = "solid 2px red";
        return false;
    }
    else{
        return true;
    }
}

password.addEventListener("focus", writtenPassword)
function writtenPassword(e){
    requiredPassword.style.display = "none";
    passwordError.style.display ="none";
    password.style.border = "solid 2px black"
}
