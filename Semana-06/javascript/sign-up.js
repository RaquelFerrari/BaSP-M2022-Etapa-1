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
var fnameRequired = document.getElementById("fname-required");
var fnameIncorrect = document.getElementById("invalid-fname");
var lnameRequired = document.getElementById("lname-required");
var lnameIncorrect = document.getElementById("incorrect-lname");
var dniRequired = document.getElementById("DNI-required");
var dniIncorrect = document.getElementById("DNI-invalid");
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
var password2Required = document.getElementById("password-required");
var unMatchedPwd = document.getElementById("unmatched-password")
var signUp = document.getElementById("input-signup");
var reset = document.getElementById("input-reset");
var signUpComplete = document.getElementById("sign-up Complete");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(validateFName() && validateLName() && validateDNI() && validateDate && validatePhone &&
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
    else if(!validateFName() || !validateLName() || !validateDNI() || !validateDate || !validatePhone ||
    !validateAdress() || !validateCity() || !validatePostCode() || !validateEmail || !validatePassword ||
    !repeatPassword()){
       signUpComplete.classList.add("signUpComplete");
       signUpComplete.innerHTML = "Sign-Up Error"+"<p></p>"
       +"First Name: "+fName.value+"<p></p>"
       +"Last Name: "+lName.value+"<p></p>"
       +"DNI: "+DNI.value+"<p></p>"
       +"Birth date: "+birthDate.value+"<p></p>"
       +"Phone: "+phone.value+"<p></p>"
       +"Adress: "+adress.value+"<p></p>"
       +"City: "+city.value+"<p></p>"
       +"Post-Code: "+postCode.value+"<p></p>"
       +"Email: "+email.value+"<p></p>"
       +"Password: "+password.value+"<p></p>"
       +"Repeat Password: "+repPassword.value+"</p>"
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
    for(i=0;i<fName.value.length;i++){
        if(!Letters.includes(fName.value[i])){
            FNSm++
        }
        if(Letters.includes(fName.value[i])){
            FNCh++
        }
    }
    if (firstName.value ===""){
        fNameRequired.style.display = "block";
        fName.style.border = "solid 2px red";
        return false;
    }
    else if(fName.value.length<3 || FNCh<1 || FNSm>0){
        fNameInvalid.style.display ="block";
        fName.style.border = "solid 2px red";
        return false;
    }
    else{
        fName.style.border = "solid 2px green"
        return true;
    }   
}
fName.addEventListener("focus", writtingName)
function writtingName(e){
    fNameIncorrect.style.display = "none";
    fNameRequired.style.display = "none";
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
        dniRequired.style.display = "block";
        dni.style.border = "solid 2px red";
        return false;
    }
    else if(dni.value.length<7 || DNINum<1 || DNISm>0){
        dniIncorrect.style.display = "block";
        dni.style.border = "solid 2px red";
        return false;
    }
    else{
        dni.style.border = "solid 2px green";
        return true;
    }
}
dni.addEventListener("focus", writtingDNI)
function writtingDNI(e){
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
        phoneRequired.style.display = "block";
        phone.style.border = "solid 2px red";
        return false;
    }
    else if (phone.value.length<10 || PhNum<1 || PhSm> 0){
        phoneIncorrect.style.display = "block";
        phone.style.border = "solid 2px red";
        return false;
    }
    else{
        phone.style.border = "solid 2px green"
        return true;
    }
}
phone.addEventListener("focus", writtingPhone)
function writtingPhone(e){
    phoneRequired.style.display = "none";
    phoneInvalid.style.display = "none";
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
        adressRequired.style.display = "block";
        address.style.border = "solid 2px red";
        return false;
    }
    else if(address.value.length<5 || AdCh<1 || AdNum<1 || AdSm>1){
        addressInvalid.style.display = "block";
        address.style.border = "solid 2px red";
        return false;
    }
    else{
        address.style.border = "solid 2px green"
        return true;
    }   
}
address.addEventListener("focus", writtingAdress)
function writtingAdress(e){
    adressRequired.style.display = "none";
    adressInvalid.style.display = "none";
    adress.style.border = "solid 2px black";
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
city.addEventListener("focus", writtingCity)
function writtingCity(e){
    cityRequired.style.display = "none";
    cityIncorrect.style.display = "none";
    city.style.border = "solid 2px black";
}
postalCode.addEventListener("blur", validatePostalCode)
function validatePostalCode(e){
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var PCNum =0;
    var PCSm =0;
    for(i=0;i<postalCode.value.length;i++){
        if(!Numbers.includes(postalCode.value[i])){
            PCSm++
        }
        if(Numbers.includes(postalCode.value[i])){
            PCNum++
        }
    }
    if (postalCode.value === ""){
        pcRequired.style.display = "block";
        postalCode.style.border = "solid 2px red";
        return false;
    }
    else if (postalCode.value.length<4 || postalCode.value.length>5 || PCNum<1 || PCSm>0){
        pcIncorrect.style.display = "block";
        postalCode.style.border = "solid 2px red";
        return false;
    }
    else{
        postalCode.style.border = "solid 2px green";
        return true;
    }
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
email.addEventListener("focus", writingEmail)
function writingEmail(e){
    requiredEmail.style.display = "none";
    emailError.style.display ="none";
    email.style.border = "solid 2px black";
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
        requiredPassword.style.display = "block";
        password.style.border = "solid 2px red";
        return false
    }
    else if(password.value.length<8 || PwdLet<1 || PwdNum<1 || PwdSm>0){
        passwordError.style.display = "block";
        password.style.border = "solid 2px red";
        return false;
    }
    else{
        password.style.border = "solid 2px green";
        return true;
    }
}