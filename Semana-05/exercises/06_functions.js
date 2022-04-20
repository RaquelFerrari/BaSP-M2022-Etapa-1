var a=2
var b=4.8
function sumab(a,b){
    return a+b;
}
console.log("ex06-functions-A", sumab(a,b))

function sumab(a,b){
    if (isNaN(a) || isNaN(b)){
        alert("An input is not a number");
        return NaN
    } else {
        return a+b
    }
}
console.log("ex06-functions-B", sumab(a,b))

var c=2.8
function validateInteger(c){
    return Number.isInteger (c)
}
console.log("ex06-functions-C", validateInteger(c))

function validate(a,b){
    if (isNaN(a) || isNaN(b)){
        alert("An input is not a number");
        return NaN
    } else {
        if (typeof(a) == "number" && typeof (b) == "number") {
            if (Number.isInteger(a) && Number.isInteger(b)) {
            return a+b
            } 
            else {
                if(!Number.isInteger(a) && !Number.isInteger(b)){
                return Math.round(a) + Math.round(b);
                }
                if(!Number.isInteger(a)){
                    return Math.round(a) + b
                }
                if(!Number.isInteger(b)){
                    return Math.round(b) + a
                }
            }
        }
    }           
}
console.log("ex06-functions-D", validate(a,b))

function sumaE(a,b){
    return validate(a,b);
}
console.log("ex06-functions-E",sumaE(a,b))