var myName="Raquel Ferrari"
console.log("ex02-strings-A", myName.toUpperCase())

var myProfession="Ingeniera Industrial"
var degree= myProfession.substring(0,5)
console.log("ex02-strings-B", degree)

var myHobby="Listening to music"
var y= myHobby.substring(15,18)
console.log("ex02-strings-C", y)

var myPurpose= "to be happy"
var z= myPurpose.substring(0,1)
var z1=myPurpose.substring(1,11)
console.log("ex02-strings-D", z.toUpperCase()+z1.toLowerCase())

var myDog= "My dog's name is Meryl"
var myDog1= myDog.indexOf (" ")
console.log("ex02-strings-E", myDog1)

var serie1="howtogetaway withmurder"
var serie2= serie1.substring(0,1).toUpperCase() + serie1.substring(1,12).toLowerCase() + 
serie1.substring((serie1.indexOf(" ")),13) + serie1.substring(13,14).toUpperCase() + 
serie1.substring(14,23).toLowerCase()
console.log("ex02-strings-F",serie2)