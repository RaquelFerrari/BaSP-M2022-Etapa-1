var form = document.getElementById("form");
var fName = document.getElementById("f-name");
var lName = document.getElementById("l-name");
var dni = document.getElementById("DNI");
var bday = document.getElementById("bday");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var city = document.getElementById("city");
var postalCode = document.getElementById("postal-code");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repPassword = document.getElementById("repeat-password");
var fnameRequired = document.getElementById("reqName");
var fnameIncorrect = document.getElementById("incorrect-fname");
var lnameRequired = document.getElementById("lname-required");
var lnameIncorrect = document.getElementById("incorrect-lname");
var dniRequired = document.getElementById("DNI-required");
var dniIncorrect = document.getElementById("DNI-incorrect");
var bdayRequired = document.getElementById("bday-required");
var bdayIncorrect = document.getElementById("incorrect-bday");
var phoneRequired = document.getElementById("phone-required");
var phoneIncorrect = document.getElementById("incorrect-phone");
var addressRequired = document.getElementById("address-required");
var addressIncorrect = document.getElementById("incorrect-address");
var cityRequired = document.getElementById("city-required");
var cityIncorrect = document.getElementById("incorrect-city");
var pcRequired = document.getElementById("PC-required");
var pcIncorrect = document.getElementById("incorrect-PC");
var requiredEmail = document.getElementById("email-required");
var emailError = document.getElementById("error-email");
var requiredPassword = document.getElementById("password-required");
var passwordError = document.getElementById("error-password");
var passwordTwoRequired = document.getElementById("password-required2");
var unMatchedPwd = document.getElementById("unmatched-password")
var signUp = document.getElementById("input-signup");
var reset = document.getElementById("input-reset");
var signUpComplete = document.getElementById("sign-up Complete");

function saveData(){
    localStorage.setItem("First Name:", fName.value);
    localStorage.setItem("Last Name:", lName.value);
    localStorage.setItem("DNI:", dni.value);
    localStorage.setItem("Birth Date:", bday.value);
    localStorage.setItem("Phone:", phone.value);
    localStorage.setItem("Address:",address.value);
    localStorage.setItem("City:",city.value);
    localStorage.setItem("Postal Code:",postalCode.value);
    localStorage.setItem("Email:",email.value);
    localStorage.setItem("Password:",password.value);
}

window.onload=storage
function storage(){
    fName.value = localStorage.getItem("First Name:");
    lName.value = localStorage.getItem("Last Name:");
    dni.value = localStorage.getItem("DNI:");
    bday.value = localStorage.getItem("Birth Date:");
    phone.value = localStorage.getItem("Phone:");
    address.value = localStorage.getItem ("Adress:");
    city.value = localStorage.getItem ("City:");
    postalCode.value = localStorage.getItem("Post Code:");
    email.value = localStorage.getItem("Email:");
    password.value = localStorage.getItem("Password:")
}        

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(validateFName() && validateLName() && validateDni() && validateDate && validatePhone &&
    validateAddress() && validateCity() && validatePostalCode() && validateEmail && validatePassword &&
    repeatPassword()){
       signUpComplete.classList.add("signUpComplete");
       signUpComplete.innerHTML = "Sign-Up Complete"+"<p></p>"
       +"First Name: "+fName.value+"<p></p>"
       +"Last Name: "+lName.value+"<p></p>"
       +"DNI: "+dni.value+"<p></p>"
       +"Birth date: "+bday.value+"<p></p>"
       +"Phone: "+phone.value+"<p></p>"
       +"Address: "+address.value+"<p></p>"
       +"City: "+city.value+"<p></p>"
       +"Postal-Code: "+postalCode.value+"<p></p>"
       +"Email: "+email.value+"<p></p>"
       +"Password: "+password.value+"<p></p>"
       +"Repeat Password: "+repPassword.value+"</p>"
    }
    else if(!validateFName() || !validateLName() || !validateDni() || !validateDate || !validatePhone ||
    !validateAddress() || !validateCity() || !validatePostalCode() || !validateEmail || !validatePassword ||
    !repeatPassword()){
       signUpComplete.classList.add("signUpComplete");
       signUpComplete.innerHTML = "Sign-Up Error"+"<p></p>"
       +"First Name: "+fName.value+"<p></p>"
       +"Last Name: "+lName.value+"<p></p>"
       +"DNI: "+dni.value+"<p></p>"
       +"Birth date: "+bday.value+"<p></p>"
       +"Phone: "+phone.value+"<p></p>"
       +"Adress: "+address.value+"<p></p>"
       +"City: "+city.value+"<p></p>"
       +"Post-Code: "+postalCode.value+"<p></p>"
       +"Email: "+email.value+"<p></p>"
       +"Password: "+password.value+"<p></p>"
    }
})

fName.addEventListener("blur", validateFName)
function validateFName(e){
    var Letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z", " "];
    var FNCh = 0;
    var FNSm = 0;
    for(i=0;i<fName.length;i++){
        if(!Letters.includes(fName.value[i])){
            FNSm++
        }
        if(Letters.includes(fName.value[i])){
            FNCh++
        }
    }
    if (fName.value ===""){
        fnameRequired.style.display = "block";
        fName.style.border ="solid 2px red";
        return false;
    }
    else if (fName.value.length<3 || FNCh<1 || FNSm>0){
        fnameIncorrect.style.display = "block";
        fName.style.border ="solid 2px red";
        return false;
    }
    else{
        fName.style.border = "solid 2px green"
        return true;
    }   
}
fName.addEventListener("focus", writtingFName)
function writtingFName(e){
    fnameIncorrect.style.display = "none";
    fnameRequired.style.display = "none";
    fName.style.border = "solid 2px black";
}

lName.addEventListener("blur", validateLName)
function validateLName(e){
    var Letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z"," "];
    var LNCh = 0;
    var LNSm = 0;
    for(i=0;i<lName.value.length;i++){
        if(!Letters.includes(lName.value[i])){
            LNSm++
        }
        if(Letters.includes(lName.value[i])){
            LNCh++
        }
    }
    if (lName.value ===""){
        lnameRequired.style.display = "block";
        lName.style.border ="solid 2px red";
        return false;
    }
    else if (lName.value.length<3 || LNCh<1 || LNSm>0){
        lnameIncorrect.style.display = "block";
        lName.style.border ="solid 2px red";
        return false;
    }
    else{
        lName.style.border = "solid 2px green"
        return true;
    }
}
lName.addEventListener("focus", writtingLName)
function writtingLName(e){
    lnameRequired.style.display = "none";
    lnameIncorrect.style.display = "none";
    lName.style.border = "solid 2px black";
}

dni.addEventListener("blur", validateDni)
function validateDni(e){
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var DNINum = 0;
    var DNISm = 0;
    for(i=0;i<dni.value.length;i++){
        if(!Numbers.includes(dni.value[i])){
            DNISm++
        }
        if(Numbers.includes(dni.value[i])){
            DNINum++
        }
    }
    if(dni.value === ""){
        dniRequired.style.display = "flex";
        dniRequired.style.justifyContent = "center";
        dni.style.border = "solid 2px red";
        return false;
    }
    else if(dni.value.length<7 || DNINum<1 || DNISm>0){
        dniIncorrect.style.display = "flex";
        dniIncorrect.style.justifyContent = "center";
        dni.style.border = "solid 2px red";
        return false;
    }
    else{
        dni.style.border = "solid 2px green";
        return true;
    }
}
dni.addEventListener("focus", writtingDni)

function writtingDni(e){
    dniRequired.style.display = "none";
    dniIncorrect.style.display = "none";
    dni.style.border = "solid 2px black";
}

function getAge(date){
    var today = new Date();
    var BirthDt = new Date(date);
    var age = today.getFullYear() - BirthDt.getFullYear();
    return age;
}
bday.addEventListener("blur", validateDate)
function validateDate(e){
    age = e.target.value
    if(bday.value === ""){
        bdayRequired.style.display = "block";
        bday.style.border = "solid 2px red";
        return false;
    }
    else if(getAge(age) <18){
        bdayIncorrect.style.display = "block";
        bday.style.border = "solid 2px red";
        return false;
    }
    else{
        bday.style.border = "solid 2px green";
        return true;
    }
}
bday.addEventListener("focus",selectDate)
function selectDate(e){
    bdayRequired.style.display = "none";
    bdayIncorrect.style.display = "none";
    bday.style.border = "solid 2px black"
}

phone.addEventListener("blur", validatePhone)
function validatePhone(e){
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var PhNum = 0;
    var PhSm = 0;
    for(i=0;i<phone.value.length;i++){
        if(!Numbers.includes(phone.value[i])){
            PhSm++
        }
        if(Numbers.includes(phone.value[i])){
            PhNum++
        }
    }
    if (phone.value === ""){
        phoneRequired.style.display = "flex";
        phoneRequired.style.justifyContent = "center";
        phone.style.border = "solid 2px red";
        return false;
    }
    else if (phone.value.length<10 || PhNum<1 || PhSm> 0){
        phoneIncorrect.style.display = "flex";
        phoneIncorrect.style.justifyContent = "center";
        phone.style.border = "solid 2px red";
        return false;
    }
    else{
        phone.style.border = "solid 2px green"
        return true;
    }
}
phone.addEventListener("focus", writingPhone)
function writingPhone(e){
    phoneRequired.style.display = "none";
    phoneIncorrect.style.display = "none";
    phone.style.border = "solid 2px black"
}

address.addEventListener("blur", validateAddress)
function validateAddress(e){
    var Letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z", " "];
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
    var AdCh = 0;
    var AdNum = 0;
    var AdSm = 0;
    for(i=0;i<address.value.length;i++){
        if(!Letters.includes(address.value[i]) && !Numbers.includes(address.value[i])){
            AdSm++
        }
        if(Letters.includes(address.value[i])){
            AdCh++
        }
        if(Numbers.includes(address.value[i])){
            AdNum++
        }
    }
    if(address.value ===""){
        addressRequired.style.display = "flex";
        addressRequired.style.justifyContent = "center";
        address.style.border = "solid 2px red";
        return false;
    }
    else if(address.value.length<5 || AdCh<1 || AdNum<1 || AdSm>1){
        addressIncorrect.style.display = "flex";
        addressIncorrect.style.justifyContent = "center";
        address.style.border = "solid 2px red";
        return false;
    }
    else{
        address.style.border = "solid 2px green"
        return true;
    }   
}
address.addEventListener("focus", writtingAddress)
function writtingAddress(e){
    addressRequired.style.display = "none";
    addressIncorrect.style.display = "none";
    address.style.border = "solid 2px black";
}

city.addEventListener("blur", validateCity)
function validateCity(e){
    var LetNum = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var CityCh =0;
    var CitySm =0;
    for(i=0; i<city.value.length;i++){
        if(!LetNum.includes(city.value[i])){
            CitySm++
        }
        if(LetNum.includes(city.value[i])){
            CityCh++
        }
    }
    if(city.value === ""){
        cityRequired.style.display = "block";
        city.style.border = "solid 2px red";
        return false;
    }
    else if(city.value.length<3 || CityCh<1 || CitySm>0){
        cityIncorrect.style.display = "block";
        city.style.border = "solid 2px red";
        return false;
    }
    else{
        city.style.border = "solid 2px green";
        return true;
    }
}

postalCode.addEventListener("blur", validatePostalCode)
function validatePostalCode(e){
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var ZipNum = 0;
    var ZipSm = 0;
    for (i=0;i<postalCode.value.lenght;i++){
        if(!Numbers.includes(postalCode.value[i])){
            ZipSm++
        }
        if(Numbers.includes(postalCode.value[i])){
            ZipNum++
        }
    }
    if(postalCode.value === ""){
        pcRequired.style.display="flex";
        pcRequired.style.justifyContent = "center";
        postalCode.style.border = "solid 2px red";
        return false;
    }
    else if(postalCode.value.lenght<4 || ZipNum<1 || ZipSm>0){
        pcIncorrect.style.display = "flex";
        pcIncorrect.style.justifyContent ="center";
        postalCode.style.border = "solid 2px red";
        return false;
    }
    else{
        postalCode.style.border = "solid 2px green"
        return true;
    }
}
postalCode.addEventListener("focus", writtingPostalCode)

function writtingPostalCode(e){
    pcRequired.style.display = "none";
    pcIncorrect.style.display = "none";
    postalCode.style.border = "solid 2px black";
}

email.addEventListener( "blur", validateEmail)
function validateEmail(e){
    var emailreg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if(email.value === ""){
        requiredEmail.style.display = "block";
        email.style.border = "solid 2px red";
    }
    else{
        if(!emailreg.test(email.value)){
            emailError.style.display = "block";
            email.style.border = "solid 2px red";
            return false
        }
        else{
            email.style.border = "solid 2px green";
            return true
        }
    }
}

password.addEventListener("blur", validatePassword)
function validatePassword(e){
    var Letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z", " "];
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var PwdLet = 0;
    var PwdNum = 0;
    var PwdSm= 0;
    for(i=0;i<password.value.length;i++){
        if(!Letters.includes(password.value[i]) && !Numbers.includes(password.value[i])){
            PwdSm++
        }
        if(Letters.includes(password.value[i])){
            PwdLet++
        }
        if(Numbers.includes(password.value[i])){
            PwdNum++
        }
    }
    if (password.value === ""){
        requiredPassword.style.display="flex";
        requiredPassword.style.justifyContent = "center";
        password.style.border = "solid 2px red";
        return false
    }
    else if(password.value.length<8 || PwdLet<1 || PwdNum<1 || PwdSm>0){
        passwordError.style.display = "flex";
        passwordError.style.justifyContent ="center";
        password.style.border = "solid 2px red";
        return false;
    }
    else{
        password.style.border = "solid 2px green";
        return true;
    }

password.addEventListener("focus", writtingPassword)
function writtingPassword(e){
    requiredPassword.style.display = "none";
    passwordError.style.display = "none";
    password.style.border = "solid 2px black";
}
}

repPassword.addEventListener("blur", repeatPassword)
function repeatPassword(e){
    if(repPassword.value === ""){
        passwordTwoRequired.style.display = "flex";
        passwordTwoRequired.style.justifyContent = "center";
        repPassword.style.border = "solid 2px red";
        return false;
    }
    else if (repPassword.value !== password.value){
        unMatchedPwd.style.display = "flex";
        unMatchedPwd.style.justifyContent = "center";
        repPassword.style.border = "solid 2px red";
        return false;
    }
    else{
        repPassword.style.border = "solid 2px green";
        return true;
    }
}
repPassword.addEventListener("focus", repeatingPassword)
function repeatingPassword(e){
    passwordTwoRequired.style.display = "none";
    unMatchedPwd.style.display = "none";
    repPassword.style.border = "solid 2px black"
}