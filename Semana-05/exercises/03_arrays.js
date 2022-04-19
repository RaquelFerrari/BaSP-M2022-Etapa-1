var array1= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("ex03-arrays-A", array1[4],array1[10])

var array2= array1.sort()
console.log("ex03-arrays-B", array2)

array1.unshift("Meses:")
array1.push("Fin")
console.log("ex03-arrays-C", array1)

array1.shift()
array1.pop()
console.log("ex03-arrays-D", array1)

array1.reverse()
console.log("ex03-arrays-E", array1)

var array3= array1.join("-")
console.log("ex03-arrays-F", array3)

array4=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("ex03-arrays-G", array4.slice(4,11))