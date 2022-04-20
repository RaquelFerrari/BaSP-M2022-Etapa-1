// ex05-for-A
var cantantes=["miley Cyrus", "Taylor Swift", "Ed Sheeran", "Adele", "Bruno Mars"]
for (var i=0; i < cantantes.length; i++ ){
    alert(cantantes[i]);
}

// ex05-for-B
for (var i=0; i < cantantes.length; i++ ){
    cantantes[i]= cantantes[i].charAt(0).toUpperCase() + cantantes[i].substring(1,50)
    alert("These words have changed: " + cantantes[i]);
}

// ex05-for-C
var sentence= "";
for (var i=0; i < cantantes.length; i++){
    sentence = sentence + cantantes[i] + " ";
}
alert("My top5 pop singers are: " + sentence)

//ex05-for-D
var billboard=[];
for (i=0; i<=9; i++){
    billboard [i] = i
}
console.log("ex05-for-D: ", billboard)