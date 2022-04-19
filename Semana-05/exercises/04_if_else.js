var nroaleatorio = Math.random();
if (nroaleatorio >= 0.5){
    console.log("ex04-if_else-A", nroaleatorio," is greater than 0,5" );
    }
    else {
        console.log("ex04-if_else-A", nroaleatorio, " is lower than 0,5")
}

var Age= Math.floor(Math.random()*100);
if (Age < 2){
    console.log("ex04-if_else-B", Age, " es Bebe");
} else if(Age >= 2 && Age <=12){
    console.log("ex04-if_else-B", Age, " es Ninio");
} else if (Age >= 13 && Age <= 19){
    console.log("ex04-if_else-B", Age, " es Adolescente");
}else if (Age >= 20 && Age <= 30){
    console.log("ex04-if_else-B", Age, " es Joven");
}else if (Age >= 31 && Age <= 60){
    console.log("ex04-if_else-B", Age, " es Adulto");
}else if (Age > 61 && Age <= 75){
    console.log("ex04-if_else-B", Age, " es Adulto Mayor");  
}else console.log("ex04-if_else-B", Age, " es Anciano")